export default {
    server: process.env.CRAFT_UTIL_DB_HOST,
    database: process.env.CRAFT_UTIL_DB_NAME,
    user: process.env.CRAFT_UTIL_DB_USER,
    password: process.env.CRAFT_UTIL_DB_PSWRD,
    options: {
        encrypt: true
    }
};