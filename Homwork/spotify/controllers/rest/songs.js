import {addSongUsecase, getPlaylistUsecase, getSongByTitleUsecase, playSongByTitleUsecase } from "../../usecase/songs/usecaseSongs.js";

export const addNewSong = (req, res) => {
    try {
        const {id, title ,artists ,url, count} = req.body

        const newSong = addSongUsecase(id, title ,artists ,url, count)

        res.status(201).json({
        new_song: newSong,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
          })
    }
}

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

export const playlist = (req ,res) => {
    const playlist = getPlaylistUsecase()

    res.json({
        playlist : playlist,
    })
}