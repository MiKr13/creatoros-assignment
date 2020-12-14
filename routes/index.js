var express = require('express');
const webpush = require('web-push');

var router = express.Router();

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails('mailto:mihirpandey.13@gmail.com', publicVapidKey, privateVapidKey);

router.post('/subscribe', (req, res, next) => {
  const subscription = req.body;

  const payload = JSON.stringify({ title: 'Hi there!' });

  console.log(subscription);

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });

  res.status(201).json({});
});

module.exports = router;
