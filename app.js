import express from 'express';
import cors from 'cors';
import session from 'express-session';
import mongoose from "mongoose";
import AnimeController
    from "./controllers/anime/anime-controller.js";
import CollectionsController from "./controllers/collections/collections-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import UsersController from "./controllers/users/users-controller.js";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}
const CONNECTION_STRING = 'mongodb://localhost:27017/final-project-5610';
mongoose.connect(CONNECTION_STRING, options);


const app = express();
app.use(cors({
    credential: true,
    origin: 'http://localhost:3000'
}));
app.use(session({
    secret: 'should be environment variable!',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))
app.use(express.json());
AnimeController(app);
CollectionsController(app);
ReviewsController(app);
UsersController(app);
app.listen(process.env.PORT || 4000, () => console.log('app is listening...'));
