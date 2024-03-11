const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BFOFMOpA_RYDB-GbDN27kK8ZsNZNy50cHUm-sJWEm4sqWNiiQqQeliHm1-O5m7o8BdwnBaHpzueSzXyd_y1tFMA',
  privateKey: '4i_xrffEMu9B2Cp9X1q9n1_DgdoXrPuK90UkkktaCek'
};
webpush.gen
webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription ={
  "endpoint": "https://fcm.googleapis.com/fcm/send/cZhbbirysas:APA91bFeGDiCBKTBF6M-OI9-GjBGjuZoH8x_atO_8uVnjJkXse3q8xMSrTJpZmatV1g1bbhzroyjM2yFxJT4mS6qXKb-08JaTLZyziiBXRjefzGq1BFi6AFlFLTlrV7l3EdJ4qMX6G_X",
  "expirationTime": null,
  "keys": {
    "p256dh": "BMYCa7Ksa085kVXguHiOtrG4GIoUCqcCc6A_2-I047QMlK4Yjgz3KBOhBj6q67PF2bmhAah6OEtBWHR5AfpsmfE",
    "auth": "vFEoPmmsUtI6CK29KukulA"
  }
}



const payload = JSON.stringify({
  title: 'Hi  Allan',
  message: 'Your Push Notification Message',
  customData: {
    key1: 'value1',
    key2: 'value2'
  }
});
webpush.sendNotification(pushSubscription, payload);
