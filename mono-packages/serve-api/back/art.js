const express = require('express');
const router = express.Router();
const ArtModel = require('~src/models/ArtModel');

router._prefix = '/art';

const middlewareFunction = (req, res, next) => {
  // 在这里编写中间件逻辑，例如验证、日志记录等
  console.log('Middleware function executed');
  next(); // 转移控制权，继续后续处理
};

const getArtListController = async (req, res) => {
  console.log(req.method);
  res.json({
    status: true,
    message: 'get-art-list api is okkk',
    data: '123',
  });
};

router.get('/get-art-list', middlewareFunction, getArtListController);

// try {
//   // const result = await ArtModel.findAll();
//   // console.log(result);
//   res.json({
//     status: true,
//     message: 'get-art-list api is okkk',
//   });
// } catch (err) {
//   console.log(err);
// }

module.exports = router;

//
// const express = require('express');
// const router = express.Router();
// const { Article } = require('~root/models');
// const { NotFoundError, success, fail } = require('@mono/serve-utils');
//
// const getArt = async (req) => {
//   try {
//     const { id: query_id } = req?.query || {};
//     const { id: body_id } = req?.body || {};
//     const pk_id = +query_id || +body_id || null;
//     const result = await Article.findByPk(pk_id);
//     if (!result) {
//       throw new NotFoundError(`id为${pk_id}的文章不存在`);
//     }
//     return result;
//   } catch (err) {
//     throw err;
//   }
// };
//
// router.get('/get-list', async (req, res) => {
//   try {
//     const page = Math.abs(+req?.query?.page) || 1;
//     const page_size = Math.abs(+req?.query?.page_size) || 10;
//     const offset = (page - 1) * page_size;
//     const condition = {
//       order: [['id', 'DESC']],
//       limit: +page_size,
//       offset: +offset,
//     };
//
//     const { count, rows } = await Article.findAndCountAll(condition);
//     const data = {
//       list: rows,
//       page: +page,
//       page_size: +page_size,
//       total: +count,
//     };
//     success({ res, message: '列表查询成功', data });
//   } catch (err) {
//     fail({ res, err });
//   }
// });
//
// router.get('/get-detail', async (req, res) => {
//   try {
//     const result = await getArt(req);
//     const data = { detail: result };
//     success({ res, message: '文章详情查询成功~', data });
//   } catch (err) {
//     fail({ res, err });
//   }
// });
//
// router.post('/add-art', async (req, res) => {
//   try {
//     const { title, content } = req?.body || {};
//     const result = await Article.create({ title, content });
//
//     const data = { detail: result };
//
//     success({ res, message: '文章添加成功', data });
//   } catch (err) {
//     fail({ res, err });
//   }
// });
//
// router.post('/del-art', async (req, res) => {
//   try {
//     const result = await getArt(req);
//     await result.destroy();
//     success({ res, message: '文章删除成功' });
//   } catch (err) {
//     fail({ res, err });
//   }
// });
//
// //编辑文章
// router.post('/edit-art', async (req, res) => {
//   try {
//     const { title, content } = req?.body || {};
//     const result = await getArt(req);
//     result.update({ title: title || '', content: content || '' });
//     const data = { detail: result };
//     success({ res, message: '文章编辑成功', data });
//   } catch (err) {
//     fail({ res, err });
//   }
// });
//
// module.exports = router;
