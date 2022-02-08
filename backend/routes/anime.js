const express = require('express');
const router = express.Router();
const Anime = require('../models/anime.model');


// GET
router.get('/', (req, res) => {
    Anime.find()
    .then(anime => res.json(anime))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST
router.post('/', (req, res) => {
    const title = req.body.title;
    const synopsis = req.body.synopsis;
    const start_date = req.body.start_date;
    const image_url = req.body.image_url;
    const score = req.body.score;
    Anime.findOne({title: title}, function(err, anime) {
        if(err) {
            console.log(err);
        }
        if(anime) { //not undefined 
            console.log("This is already in the database");
            res.json({success: false});
        }
        else {
            const newAnime = new Anime({
                title: title,
                synopsis: synopsis,
                image_url: image_url,
                start_date: start_date,
                score: score
            });
            newAnime.save()
            .then(anime => res.json(anime));

        }
    });

});

// DELETE
router.delete('/:id', (req, res) => {
    Anime.findById(req.params.id)
    .then(anime => anime.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;

/*router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;*/