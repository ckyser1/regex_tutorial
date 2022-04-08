const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userCont');


router.route('/').get(getUsers).post(createUser).delete(deleteUser);

router.route('/:UserId').get(getSingleUser).delete(deleteUser);

router.route("/:UserId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router