import {getSongByTitleUsecase, playSongByTitleUsecase } from "../../usecase/songs/usecaseSongs.js";

export const getSong = (req, res) => {
    const {title} = req.query;

    const song = getSongByTitleUsecase(title);

    if(song.length === 0) {
        return res.status(404).json({
            message: "Song not found!",
        });
    }

    res.json({
    song: song,
    });
};

export const playSong = (req, res) => {
    const {title} = req.body;

    const play = playSongByTitleUsecase(title);

    if(play.length === 0 ){
        return res.status(404).json({
            message: "User not found!",
        });
    }

    res.json({
        message: "music playing", play,
    });
};