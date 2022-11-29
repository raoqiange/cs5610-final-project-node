import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import AnimeController
    from "./controllers/anime/anime-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/final-project-5610';
mongoose.connect(CONNECTION_STRING);


// import FanController
//     from "./controllers/users/fan-controller.js";
// import AdminController
//     from "./controllers/users/admin-controller.js";
// import ForumAuthorController
//     from "./controllers/users/forum-author-controller.js";

const app = express();
app.use(cors());
app.use(express.json());
AnimeController(app);
// HelloController(app);
// UserController(app);
// TuitsController(app);
app.listen(process.env.PORT || 4000, () => console.log('app is listening...'));
