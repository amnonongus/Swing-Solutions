const router = require('express').Router();
let Posts = require('../models/posts-model');

router.route('/').get((req, res) => {
    Posts.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const user = req.body.user;
    const videoUrl = req.body.videoUrl;
    const caption = req.body.caption;
    const date = Date.parse(req.body.date);

    const newPost = new Posts({
        user,
        videoUrl,
        caption,
        date
    });

    newPost.save()
    .then(() => res.json('Post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});    



    module.exports = router;