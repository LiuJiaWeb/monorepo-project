const { DataTypes } = require('sequelize');
const { DB } = require('~src/db/db');

//创建数据模型
const ConfigModel = DB.define(
  'ConfigModel',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: '配置id，自增，主键，唯一',
    },
    app_name: {
      type: DataTypes.STRING,
      comment: 'app名称',
      defaultValue: 'App',
    },
    logo: {
      type: DataTypes.STRING,
      comment: 'logo图片地址',
      defaultValue: '',
      validate: {
        isUrl: { msg: 'logo必须是一个有效的url地址' },
      },
    },
    icp: {
      type: DataTypes.STRING,
      comment: 'ICP备案号',
      defaultValue: 'ICP备案号',
    },
  },
  {
    tableName: 't_config',
  }
);

ConfigModel.sync({ force: false }).then(() => {
  console.log('t_config 表同步成功');
});

module.exports = ConfigModel;
