import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import AnimeController
    from "./controllers/anime/anime-controller.js";
import CollectionsController from "./controllers/collections/collections-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import ForumAuthorsController from "./controllers/users/forum-authors/forum-authors-controller.js";
import FansController from "./controllers/users/fans/fans-controller.js";

const CONNECTION_STRING = 'mongodb://localhost:27017/final-project-5610';
mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(cors());
app.use(express.json());
AnimeController(app);
CollectionsController(app);
ReviewsController(app);
ForumAuthorsController(app);
FansController(app);
app.listen(process.env.PORT || 4000, () => console.log('app is listening...'));
