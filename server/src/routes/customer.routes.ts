import { Router } from "express";

const userRouter = Router();

// Public routes
userRouter.route('/register')
userRouter.route('/login')
userRouter.route('/refresh-token')

userRouter.route('/forgot-password')
userRouter.route('/reset-password')

// Private routes
userRouter.route('/')

export { userRouter };