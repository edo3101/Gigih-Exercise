import { addSong, getPlaylist, getSongByTitle, playSongByTitle } from "../../repositories/songs/songs.js";

export const addSongUsecase = (id, title ,artists ,url, count) =>{
    const add = addSong(id, title ,artists ,url, count)

    return add
}

export const getSongByTitleUsecase = (title) => {
    const song = getSongByTitle(title);
    if (!song) {
        return null;
    }

    return song;
}

export const playSongByTitleUsecase = (title) => {
    const play = playSongByTitle(title);

    return play;
};

export const getPlaylistUsecase = () => {
    const playlist = getPlaylist()

    return playlist
}

