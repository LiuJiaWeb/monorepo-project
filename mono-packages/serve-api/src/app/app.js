const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const { initRoutes } = require('@mono/serve-utils');

//初始化路由
// function initRoutes(dir, topPrefix = '') {
//   let list = [];
//
//   const findFunc = (findDir = '') => {
//     fs.readdirSync(findDir).forEach((file) => {
//       const fullPath = path.join(findDir, file);
//       if (fs.statSync(fullPath).isDirectory()) {
//         // 如果当前是目录，继续递归读取
//         findFunc(fullPath);
//       } else {
//         list.push(fullPath);
//       }
//     });
//   };
//
//   findFunc(dir);
//   if (+list?.length <= 0) return;
//   for (let i = 0; i < list.length; i++) {
//     const routerItem = require(list[i]);
//     const finalPrefix = `${topPrefix || ''}${routerItem?._prefix || ''}`;
//     console.log(finalPrefix);
//     app.use(finalPrefix, routerItem);
//   }
// }

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

initRoutes({
  dir: `${process.cwd()}/src/routes/admin-api`,
  topPrefix: '/api/admin-api',
  app: app,
});

app.on('error', () => {
  console.log('app server error');
});

module.exports = app;
