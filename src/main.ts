import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// file imports
import routeHandler from '@middlewares/routeHandlers';
import adminRouter from '@routes/admin';
import adminProtected from '@middlewares/adminProtected';
import UserController from '@routes/user';
import AuthenticationController from '@routes/authentication';
import addUserDetails from '@middlewares/addUserDetails';
import path from 'path';
import VideosController from '@routes/videos';
import CategoriesController from '@routes/categories';

// initialization

const app = express();
dotenv.config()

// middlewares 

app.use(cors());
app.use(express.urlencoded({extended: true, limit: '5gb'}))
app.use(express.json({limit: '5gb'}));
app.use('/', express.static(path.join(__dirname, "./public")))

// Add custom res.deliver method

app.use(routeHandler);

// Connect with MongoDB

const MongoURI = process.env.MongoURI || '';

mongoose.connect(MongoURI).then(() => console.log('mongodb connected')).catch((error) =>  console.log(error))

// Manage User Authentication
app.use('/', AuthenticationController);

// Manage Videos
app.use('/video', VideosController)

// Manage Categories
app.use('/category', CategoriesController)


// Manage User Routes
app.use('/user', addUserDetails, UserController);

// Admin routes
app.use('/admin', adminProtected, adminRouter);

app.listen(5000, '0.0.0.0', () => {
  console.log('server running on local network with port 5000')
})
