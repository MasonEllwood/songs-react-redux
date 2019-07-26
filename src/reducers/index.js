import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'steven fart1', duration: '2:00' },
        { title: 'steven fart2', duration: '2:04' },
        { title: 'steven fart3', duration: '2:03' },
        { title: 'steven fart4', duration: '2:02' },
        { title: 'steven fart5', duration: '2:01' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});