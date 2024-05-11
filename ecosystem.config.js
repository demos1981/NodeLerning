module.exports = {
  apps: [
    {
      name: "node_postgresql",
      script: "node_modules/.bin/ts-node",
      args: "src/app.ts",
      instances: "max",
      autorestart: false,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
