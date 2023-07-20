import songs from "./json/song.json" assert { type: "json" };

export const addSong = (id, title ,artists ,url, count) => {
    const newSong = {
        id, title ,artists ,url, count,
    }

    songs.push(newSong)

    return newSong
} 

export const getSongByTitle = (title) => {
    const song = songs.filter((song) => song.title.toLowerCase().includes(title));

    return song;
};

export const playSongByTitle = (title) => {
    if (!title) {
        throw Error("name is not valid");
    }

    const song =  songs.find((song) => song.title.toLowerCase().includes(title));

    songs.map((value) => {
        if(value.id === song.id) {
            value.count++
        }
    })
    return song;
};

export const getPlaylist = () => {
    const playlist = songs

    const sortedPlaylist = playlist.sort((a,b) =>  b.count -a.count)

    console.log(sortedPlaylist)

    return sortedPlaylist
}
// export const getSongByArtist = (artist) => {
//     const song = songs.filter((song) => song.artist.includes(artist));

    
//     songs.push({
//         count : +1
//     });
//     return song;
// }

