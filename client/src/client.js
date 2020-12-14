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

export default async function run() {
    console.log('Registering service worker');
    const registration = await navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/worker.js`);
    console.log('Registered service worker');

    console.log('Registering push');
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
