const UserModel = require('../models/user');

const usersCtrl = {};

usersCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new UserModel({ username });
    await newUser.save();
    res.json({ message: 'The user has been saved successfully' });
};

usersCtrl.getUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
};

usersCtrl.getUsers = async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
};

usersCtrl.updateUser = async (req, res) => {
    const { username } = req.body;
    await UserModel.findOneAndUpdate(req.params.id, { username });
    res.json({ message: 'The user has been updated successfully' });
};

usersCtrl.deleteUser = async (req, res) => {
    await UserModel.findOneAndDelete({ _id: { $gte: req.params.id } });
    res.json({ message: 'The user has been deleted successfully' });
};

module.exports = usersCtrl;
