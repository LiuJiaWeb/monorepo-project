const { DataTypes } = require('sequelize');
const { DB } = require('~src/db/db');
const bcrypt = require('bcryptjs');

//创建数据模型
const UserModel = DB.define(
  'UserModel',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: '用户id，自增，主键，唯一',
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
      comment: '用户名',
      validate: {
        notNull: { msg: '用户名必须填写' },
        notEmpty: { msg: '用户名不能为空' },
        isAlphanumeric: { msg: '用户名只能包含字母或数字' },
        len: { args: [2, 20], msg: '用户名长度必须在2-20之间' },
        async isUnique(value) {
          const user = await UserModel.findOne({ where: { username: value } });
          if (user) {
            throw new Error('用户名已存在');
          }
        },
      },
    },
    nickname: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'user_xyz',
      comment: '用户昵称',
      validate: {
        notNull: { msg: '用户昵称必须填写' },
        notEmpty: { msg: '用户昵称不能为空' },
        len: { args: [2, 20], msg: '用户昵称长度必须在2-20之间' },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '密码',
      validate: {
        notNull: { msg: '密码必须填写' },
        notEmpty: { msg: '密码不能为空' },
      },
      set(value) {
        if (value.length >= 6 && value.length <= 20) {
          this.setDataValue('password', bcrypt.hashSync(value, 10));
        } else {
          throw new Error('密码长度必须在6-20位之间');
        }
      },
    },
    // phone: {
    //   type: DataTypes.STRING(20),
    //   allowNull: true,
    //   unique: true,
    //   defaultValue: '',
    //   comment: '手机号码',
    // },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      comment: '用户头像',
      validate: {
        isUrl: { msg: '头像必须是一个有效的URL' },
      },
    },
    role: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1, //普通用户为1，管理员为100
      comment: '角色',
      validate: {
        notNull: { msg: '用户角色必须填写' },
        notEmpty: { msg: '用户角色不能为空' },
        isIn: { args: [[1, 100]], msg: '用户角色值不在范围内' },
      },
    },
  },
  {
    tableName: 't_user',
    indexes: [
      {
        unique: true,
        fields: ['username'],
      },
    ],
  }
);

UserModel.sync({ force: false }).then(() => {
  console.log('t_user 表同步成功');
});

module.exports = UserModel;
