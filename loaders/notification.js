import webPush from "web-push";
const vapidKeys = {
  publicKey: process.env.WEB_PUSH_PUBLIC_KEY,
  privateKey: process.env.WEB_PUSH_PRIVATE_KEY,
};
export default () => {
  webPush.setVapidDetails(
    "mailto:iskipperlla.437@gmail.com",
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );
};
