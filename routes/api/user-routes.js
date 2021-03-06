const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriendById,
    deleteFriend
} = require('../../controllers/user-controller');

router
    .route('/')  
    .get(getAllUsers)
    .post(createUser)
    
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

router
    .route('/:userId/friends/:friendId')
    .post(addFriendById)
    .delete(deleteFriend)

module.exports = router;