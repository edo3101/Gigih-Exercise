import { getSongByTitle, playSongByTitle } from "../../repositories/songs/songs.js";

export const getSongByTitleUsecase = (title) => {
    const song = getSongByTitle(title);
    if (!song) {
        return null;
    }

    return song;
}

// export const getSongByArtistUsecase = (artist) => {
//     const song = getSongByArtist(artist);
//     if (!song) {
//         return null;
//     }
// }
export const playSongByTitleUsecase = (title) => {
    const play = playSongByTitle(title);

    return play;
};


