const fs = require('node:fs');
const path = require('node:path');

/**
 * @description: 自定义错误类
 */
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
  }
}

/**
 * @description: 成功
 */
function success({ res, message = 'ok', data = {} }) {
  res.json({
    status: true,
    code: 0,
    message,
    data,
  });
}

/**
 * @description: 失败
 */
function fail({ res, err }) {
  if (err?.name === 'SequelizeValidationError') {
    res.json({
      status: false,
      code: 10000,
      message: err?.errors?.[0]?.message || 'fail',
      data: {},
    });
    return;
  }

  if (err?.name === 'NotFoundError') {
    res.json({
      status: false,
      code: 20000,
      message: err?.message || '没有找到对应的数据',
      data: {},
    });
    return;
  }

  res.status(500).json({
    status: false,
    code: 50000,
    message: '服务器错误',
    data: {},
  });
}

function initRoutes({ dir, topPrefix = '', app }) {
  const findFunc = (findDir = '') => {
    fs.readdirSync(findDir).forEach((file) => {
      const fullPath = path.join(findDir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        // 如果当前是目录，继续递归读取
        findFunc(fullPath);
      } else {
        const routerItem = require(fullPath);
        const finalPrefix = `${topPrefix || ''}${routerItem?._prefix || ''}`;
        app.use(finalPrefix, routerItem);
      }
    });
  };
  findFunc(dir);
}

module.exports = {
  NotFoundError,
  success,
  fail,
  initRoutes,
};
