const express = require('express');
const router = express.Router();

const  Musiclist=require('../model/musiclist');

//retrieving music list
router.get('/music', function (req, res, next) {
Musiclist.find(function (err,musiclist) {
    res.json(musiclist);
});

});

//Adding to music list
router.post('/music', function (req, res, next) {
 var newMusiclist= new Musiclist({
     song_name: req.body.song_name,
     artist_name: req.body.artist_name,
     song_title: req.body.song_title,
     duration : req.body.duration,
     bitrate: req.body.bitrate,
     album_art: req.body.album_art,
     genre : req.body.genre,
     path: req.body.path
 });
 newMusiclist.save(function(err,musiclist){
     if(err)
     {
         res.json({msg:'Failed to add to Musiclist'});
     }
     else
     {
         res.json({msg:'Added successfully'});
     }
 });
});

//Deleting from music list
router.post('/music/:id', function (req, res, next) {
    // res.send('Retrieving the Music list');
 Musiclist.remove({_id:req.params.id},function (err,result) {
     if(err)
     {
         res.json(err);
     }
     else
     {
         res.json(result);
     }
 });


});

module.exports = router;

