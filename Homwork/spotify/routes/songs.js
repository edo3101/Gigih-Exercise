import express from "express";

import { addNewSong, getSong, playSong, playlist } from "../controllers/rest/songs.js";

const router = express.Router();

router.get("/song", getSong)
router.post("/song", playSong)
router.post("/addsong", addNewSong);
router.get("/playlist", playlist)

export default router;