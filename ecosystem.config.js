module.exports = {
  apps: [
    {
      name: "move-to-nl-content-cms",
      cwd: "move-to-nl-content-cms",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
