var controller = require('./controller');
var router = require('express').Router();

router.post('/signin', controller.auth.signin);

router.post('/signup', controller.auth.signup);

router.get('/users', controller.users.get);

//router.get('/events/:username', controller.events.get);

router.post('/events', controller.events.post);

router.put('/events', controller.events.put);

router.get('/friends', controller.friends.get);

router.post('/friends', controller.friends.post);

module.exports = router;