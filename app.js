import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import AnimeController
    from "./controllers/anime/anime-controller.js";
import CollectionController from "./controllers/collections/collections-controller.js";

const CONNECTION_STRING = 'mongodb://localhost:27017/final-project-5610';
mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(cors());
app.use(express.json());
AnimeController(app);
CollectionController(app);
app.listen(process.env.PORT || 4000, () => console.log('app is listening...'));
