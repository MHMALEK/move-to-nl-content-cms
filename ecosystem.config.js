module.exports = {
  apps: [
    {
      name: "strapi",
      cwd: "move-to-nl-content-cms",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        DATABASE_HOST: "127.0.0.1", // database endpoint
        DATABASE_PORT: "5432",
        DATABASE_NAME: "strapi", // DB name
        DATABASE_USERNAME: "strapi", // your username for psql
        DATABASE_PASSWORD: "strapi", // your password for psql
      },
    },
  ],
};
