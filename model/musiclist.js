const mongoose= require('mongoose');

const MusicSchema=mongoose.Schema({
    song_name:{
        type: String,
        required: true
    },
    artist_name:{
        type: String,
        required: true

    },
    duration:{
        type: String,
        required: true
    },
    bitrate:{
        type: String,
        required: true
    },
    song_title:{
        type: String,
        required: true
    },
    album_art:{
        type: String,
        required: true
    },
    path:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    }
});
const Music= module.exports=mongoose.model('Music',MusicSchema);