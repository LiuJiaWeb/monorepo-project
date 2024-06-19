const UserModel = require('~src/api/admin/user/user.model');

const addUser = async (req, res) => {
  try {
    const result = await UserModel.create(req.body);
    res.json({
      status: true,
      message: 'User added successfully',
      data: result,
    });
  } catch (err) {
    res.json({
      err: err,
    });
  }
};

module.exports = {
  addUser,
};
