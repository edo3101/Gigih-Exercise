import express from "express";

import songRouter from "../routes/songs.js";

const startRest = () =>{
    const app = express();

    app.use(express.urlencoded({ extended: false }));

    app.use(express.json());

    app.use("/", songRouter);

    app.listen(3000, () => {
        console.log(`Server running on port 3000`);
    });
};

export {startRest} ;