const publicVapidKey = 'BAymmfby6Cwz_ZBdpzz0Tc7ODJL5Fg-p5FUYqtRLiUPr2EqXJC4TDpuPVS6zBGyBIabxSfVUD9Y3WXDlL1flTrU';

const urlBase64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

const subscribeForPushNotification = async (registration) => {
    const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
    await fetch('http://localhost:3000/api/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'content-type': 'application/json'
        }
    });
}

export default async function run() {
    try {
        console.log('Registering service worker');
        const registration = await navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/worker.js`);
        console.log('Registered service worker');

        console.log('Registering push');

        let serviceWorker;

        if (registration.installing) {
            serviceWorker = registration.installing;
        } else if (registration.waiting) {
            serviceWorker = registration.waiting;
        } else if (registration.active) {
            serviceWorker = registration.active;
        }

        if (serviceWorker) {
            if (serviceWorker.state === "activated") {
                subscribeForPushNotification(registration);
            }
            serviceWorker.addEventListener("statechange", (e) => {
                console.log("sw statechange : ", e.target.state);
                if (e.target.state === "activated") {
                    // use pushManger for subscribing here.
                    console.log("Just now activated. now we can subscribe for push notification")
                    subscribeForPushNotification(registration);
                }
            });
        }
    } catch (error) {
        console.error(error);
    }
}
