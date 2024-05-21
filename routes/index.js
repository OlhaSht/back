const {Router} = require("express");
const router = Router();
const uploadImage = require('../middlewares/uploadImage.mw');
const UserController = require("../controllers/user.controller")
const TaskController = require("../controllers/task.controller")

router
  .route('/users')
  .post(uploadImage, UserController.createUser)
  // .post(upload.single('avatar'), UserController.createUserWithImage)
  // .get(UserController.getAllUsers)

  // router
  // .route('/users/:userId')
  // .put(UserController.updateUser)
  // .get(UserController.getUsers)
  // .gelete(UserController.geleteUsers)

  // router
  // .route('/users/:userId/tasks')
  // .post(checkUsr,TaskController.updateTask)
  // .get(checkUsr,TaskController.getAllTask)

  // router
  // .route('/users/:userId/tasks/:taskId')
  // .put(TaskController.updateTask)
  // .get(TaskController.getTask)
  // .gelete(TaskController.geleteTask)

module.exports = router;