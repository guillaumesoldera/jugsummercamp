export default function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
        registerSW(swUrl);
    });
  }
}

function registerSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in your web app.
              console.log('New content is available; please refresh.');
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');
            }
          }
        };
      };
      registerForNotifications(registration);
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function registerForNotifications(registration){
  console.log("Registering Push...");
  registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array("BFwbGBPX9ggNKmMPMtn8a_eYfMaU28iGv8-fy8PwxoMPwZZQQKaq96RMTCBkdUvVDjgJPZ6wtBeZ2p2i09ZMihY")
  }).then(function (subscription) {
      console.log("Push Registered...");
      console.log("Sending Push...");
      fetch("/subscribe", {
          method: "POST",
          body: JSON.stringify(subscription),
          headers: {
              "content-type": "application/json"
          }
      }).then(function (response) {
          console.log("Push Sent...");
      });
  }).catch(function (error) {
      console.error('Error during pushManager subscription:', error);
  });
}