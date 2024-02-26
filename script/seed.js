const { db } = require('@vercel/postgres');
const fs = require('fs');
const markdownToHtml = require('./markdownToHtml'); // Funkce pro převod Markdown na HTML

async function seedMarkdownContent(client) {
    try {
        // Create the "markdown_content" table if it doesn't exist
        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS markdown_content (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL
      );
    `;

        console.log(`Created "markdown_content" table`);

        // Read Markdown files from directory
        const markdownFiles = fs.readdirSync('./markdown_files');

        // Insert data into the "markdown_content" table
        const insertedMarkdown = await Promise.all(
            markdownFiles.map(async (filename) => {
                const markdown = fs.readFileSync(
                    `../_posts/${filename}`,
                    'utf8'
                );
                const { data, content } = require('gray-matter')(markdown);
                const title = data.title || filename.replace('.md', ''); // Use title from metadata or filename as fallback
                const date = data.date; // Use date from metadata
                const htmlContent = await markdownToHtml(content);
                return client.sql`
            INSERT INTO markdown_content (title, date, content)
            VALUES (${title}, ${date}, ${htmlContent})
            ON CONFLICT (title) DO NOTHING;
          `;
            })
        );

        console.log(`Seeded ${insertedMarkdown.length} markdown files`);

        return {
            createTable,
            markdownContent: insertedMarkdown,
        };
    } catch (error) {
        console.error('Error seeding markdown content:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedMarkdownContent(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err
    );
});
