const { db } = require('@vercel/postgres');
const fs = require('fs');
const path = require('path');
const grayMatter = require('gray-matter');

const seedMarkdownContent = async (client) => {
    try {
        // Create the "markdown_content" table if it doesn't exist
        const createTable = await client.sql`
          CREATE TABLE IF NOT EXISTS markdown_content (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            content TEXT NOT NULL
          );
        `;

        console.log(`Created "markdown_content" table`);

        const insertedMarkdown = await Promise.all([
            client.sql`
              INSERT INTO markdown_content (title, content)
              VALUES ('andy', 'petit')
            `,
        ]);
        // Read Markdown files from directory
        /*const postsDirectory = path.join(process.cwd(), '_posts');
        const markdownFiles = fs.readdirSync(postsDirectory);

        const insertedMarkdown = await Promise.all(
            markdownFiles.map(async (filename) => {
                const filePath = path.join(postsDirectory, filename);
                const markdown = fs.readFileSync(filePath, 'utf8');
                const { data, content } = grayMatter(markdown);
                console.log(data);
                return client.sql`
                INSERT INTO markdown_content (title, content)
                VALUES (${data}, ${content})
                ON CONFLICT (title) DO NOTHING;
              `;
            })
        );*/
        console.log(`Seeded ${insertedMarkdown.length} markdown files`);

        return {
            createTable,
            markdownContent: insertedMarkdown,
        };
    } catch (error) {
        console.error('Error seeding markdown content:', error);
        throw error;
    }
};

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
