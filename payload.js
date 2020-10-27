var webPush = require('D:\laragon\bin\nodejs\node-v12.17.0-win-x64\node_modules\web-push');

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
    "endpoint": "https://fcm.googleapis.com/fcm/send/dkBfozZ17bg:APA91bEKwL0JzwqE81knDGegNDgeM92yaGTvAVlv6_jzxK4JuJ9UuV32vtlZON5LGlxvknf5-gFmlBs6GP_RsmJXBgMFvRZdrq-kT5WtfZ2JWGREeKVPJYXk_YBBZKvF41KaLqhlIDDX",
    "keys": {
        "p256dh": "BP2l0qacnIrZoKZGKCX8wEeTgT6XtGGclOM7qC2DiIenZxcyk0r8LlVBKn7QfTS6f6izOOhB5gHpLjbYl5WjwC0=",
        "auth": "XX3Gon7+VxzIypb747V3wQ=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '1088860100645',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);