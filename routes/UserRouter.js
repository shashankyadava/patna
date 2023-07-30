import express from 'express';
import  { login }  from '../controllers/userController.js';

const UserRouter = express.Router();
  UserRouter.post('/login',login);
  export default UserRouter;
  
