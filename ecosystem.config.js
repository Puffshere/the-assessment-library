module.exports = {
  apps : [{
    name: 'Website',
    script: './server/index.js',
    exec_mode : 'cluster',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    }
  }]
};
