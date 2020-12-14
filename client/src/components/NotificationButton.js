import run from '../client';

const notifyMe = async (ev) => {

    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        if ('serviceWorker' in navigator) {
            console.log('Registering service worker');

            await run().catch(error => console.error(error));
        }

    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                if ('serviceWorker' in navigator) {
                    console.log('Registering service worker');

                    run().catch(error => console.error(error));
                }
            }
        });
    }
}

const NotificationButton = () => {
    return (
        <button onClick={(event) => notifyMe(event)}>Notify me!</button>
    );
};


export default NotificationButton;
