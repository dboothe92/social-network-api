const router = require('express').Router();

router  
    .route('/')
    .get()
    .post()

router  
    .route('/:id')
    .get()
    .put()
    .delete()

router  
    .route('/:thoughtId/reactions')
    .post()
    .delete()

module.exports = router;