import express from "express";

import { getSong, playSong } from "../controllers/rest/songs.js";

const router = express.Router();

router.get("/", getSong);
router.post("/", playSong);

export default router;