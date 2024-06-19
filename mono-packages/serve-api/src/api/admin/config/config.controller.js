const ConfigModel = require('~src/api/admin/config/config.model');

/**
 * @description: 获取系统配置
 */
const getSystemConfig = async (req, res, next) => {
  try {
    const result = await ConfigModel.findOne();
    res.json({
      status: true,
      message: '获取系统配置成功',
      data: result,
    });
    next();
  } catch (err) {}
};

module.exports = {
  getSystemConfig,
};
