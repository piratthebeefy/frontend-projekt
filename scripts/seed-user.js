const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

        console.log(`Created "users" table`);

        // udaje
        const id = '410544b2-4001-4271-9855-fec4b6a6442a';
        const userName = 'User';
        const email = 'test@nejakyemail.com';
        const password = '123456';
        const hashedPassword = await bcrypt.hash(password, 10);

        const insertedUser = await Promise.all([
            client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${id}, ${userName}, ${email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;`,
        ]);

        console.log(`Seeded ${insertedUser.length} users`);

        return {
            createTable,
            users: insertedUser,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedUsers(client);
    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err
    );
});
