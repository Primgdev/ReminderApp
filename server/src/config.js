const config = {
  db: {
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'pritambabuwa',
      database: process.env.DB_DATABASE || 'reminder-app',
    },
  },
};
console.log("db", process.env.DB_USER);
export default config;