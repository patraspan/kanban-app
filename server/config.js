const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://kanban-user:123af456af@ds139341.mlab.com:39341/kanban-app',
  port: process.env.PORT || 8000,
};

export default config;
