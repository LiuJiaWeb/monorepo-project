const { DataTypes } = require('sequelize');
const { DB } = require('~src/db/db');

//创建数据模型
const SystemConfigModel = DB.define(
  'SystemConfigModel',
  {
    app_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'app名称',
      defaultValue: 'App',
    },
    logo: {
      type: DataTypes.STRING,
      comment: 'logo图片地址',
      defaultValue: '',
    },
    icp: {
      type: DataTypes.STRING,
      comment: 'ICP备案号',
      defaultValue: 'ICP备案号',
    },
  },
  {
    tableName: 't_system_config',
    timestamps: true,
    // indexes: [
    //   {
    //     unique: true,
    //     fields: ['id'],
    //   },
    // ],
  }
);

SystemConfigModel.sync({ force: false }).then(() => {
  console.log('t_system_config 表同步成功');
});

module.exports = SystemConfigModel;
