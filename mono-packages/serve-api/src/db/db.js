const { Sequelize } = require('sequelize');
const { DB_NAME, DB_USER, DB_PWD, DB_HOST, DB_PORT } = require('~src/config/config');

const DB = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  define: {
    charset: 'utf8',
    timestamps: true,
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  timezone: '+08:00',
  pool: {
    //数据库连接池
    max: 20, //最大连接对象的个数
    min: 5, //最小连接对象的个数
    idle: 10 * 1000, // idle 这个属性控制连接池中空闲的连接的最大空闲时间，单位为毫秒，只有当连接池中连接数量大于最小连接数量时会生效acquire: 30000,
    acquire: 20 * 1000, // 连接池在抛出错误之前尝试获取连接的最长时间（以毫秒为单位）
  },
});

DB.authenticate()
  .then(() => {
    console.log('数据库连接成功');
  })
  .catch((err) => {
    console.log('数据库连接失败:', err);
  });

module.exports = { DB };
