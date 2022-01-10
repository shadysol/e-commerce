import express from 'express'
import User from '../Models/userModel.js'
const router = express.Router()
import asyncHandler from 'express-async-handler'
import {authUser,  getUserProfile, registerUser, updateUserProfile, getUsers, deleteUser, getUserById, updateUser} from '../controllers/userController.js'
import { protect, admin} from '../middleware/authMiddleware.js'


router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/').post(registerUser).get(protect, admin, getUsers)

router
.route('/:id')
.delete( protect, admin, deleteUser)
.get(protect, admin, getUserById)
.put(protect, admin, updateUser)


 

export default router