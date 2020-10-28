var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BKtoemyR9_-oLdePbbvIrLRP5ariHo0FW9NUtrr5AACz7Ubq4bLuupCj9RlBJOuihQJP3kDOb7ajGJlorKQOD7c",
    "privateKey": "qo8uH7iRaIA6_aIjAfkie9ELyd-AvxrctKv18KBcN8M"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cnSxLVDYgfY:APA91bGto39vLGJu5luJdD8vvKqjnUnjB4RBiY4cDQthl_UfiwCoEbcWpxFnYjL3KOamk0N_XyVj276An9zmm7Xvm3DMewOLJ88IvUS0uwnEXTf7jlRcILwRu8WFaaCENaIHj9wFOgyG",
    "keys": {
        "p256dh": "BFdbK9b/AEgM732MLdE+tjcExQHLk7JoMcJ/N9+W3mwOhoMZG5IGIuRAMzbiffbXwaxBWNthAsMOgbfmlpwM6W0=",
        "auth": "ROWtsuiNjdSbh2xBpyv/rA=="
    }
};
var payload = 'Notication Check Ok';

var options = {
    gcmAPIKey: '1088860100645',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);