const config = {
  port: process.env.PORT || 8000,
  mongoDB : process.env.MONGODB_URI || 'mongodb://localhost:27017/myApp2'
};

module.exports = config;
