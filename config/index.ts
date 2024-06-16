export default () => ({
  port: Number(process.env.PORT) || 3000,
  database: {
    host: String(process.env.DB_HOST),
    username: String(process.env.DB_USERNAME),
    port: Number(process.env.DB_PORT),
    name: String(process.env.DB_NAME),
  },
});
