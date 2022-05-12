module.exports = {
    client: "mysql2",
    connection: {
        database: "http://127.0.0.1:3306:covid19vaccineapplication",
        user: "root",
        password: "@princess#leia1329@"
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "knex_migrations"
    }
}