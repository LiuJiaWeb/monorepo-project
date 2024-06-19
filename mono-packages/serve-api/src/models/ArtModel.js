const { DataTypes } = require('sequelize');
const { DB } = require('~src/db/db');

//创建数据模型
const ArtModel = DB.define(
  'ArtModel',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: '用户id，自增，主键，唯一',
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '文章标题',
      validate: {
        notNull: {
          msg: '标题必须存在',
        },
        notEmpty: {
          msg: '标题不能为空',
        },
        len: {
          args: [1, 50],
          msg: '标题长度需要在1 ～ 50个字符之间',
        },
      },
    },
    content: {
      type: DataTypes.TEXT,
      comment: '文章内容',
      defaultValue: '',
    },
  },
  {
    tableName: 't_art',
  }
);

ArtModel.sync({ force: false }).then(() => {
  console.log('t_art 表同步成功');
});

module.exports = ArtModel;
