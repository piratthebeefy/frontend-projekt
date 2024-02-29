const { db } = require('@vercel/postgres');

// skript pro smazani tabulky
const dropTable = async () => {
    const client = await db.connect();

    try {
        await client.query('DROP TABLE IF EXISTS users');
        console.log('Table "users" dropped successfully.');
    } catch (error) {
        console.error('Error dropping table:', error);
        throw error;
    } finally {
        await client.end();
    }
};

dropTable().catch((err) => {
    console.error('An error occurred while dropping the table:', err);
});
