const express = require("express");
const fs = require('fs');
const router = express.Router();

require('dotenv').config();
const { PORT } = process.env;


router.get("/videos", (request , response)=> {
    // Get existing contents of the video details file
    const videosJSONString = fs.readFileSync("./data/video-details.json");
    let videos = JSON.parse(videosJSONString);
    // Map out the videos from parsed video details file
    const filteredVideos= videos.map((video)=> {
        const nextVideo = {}
        {
            nextVideo.id = video.id
            nextVideo.title = video.title
            nextVideo.channel = video.channel
            nextVideo.image = video.image
            nextVideo.placeholder = video.placeholder
            
        }
        return nextVideo;
    });
    response.send(filteredVideos);
    response.status(200);

});

module.exports = router;