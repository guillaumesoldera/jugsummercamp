import Dexie from 'dexie';

const db = new Dexie("FavoritesDatabase");
db.version(1).stores({
    favorites: "talkId"
});

export const starr=(talkId) => {
    if (!window.__SUBSCRIPTION__) {
        db.favorites.add(talkId)
    } else {
        db.favorites.add(talkId)
            .then(() => requestSync());
    }
}

export const unStarr=(talkId) => {
    if (!window.__SUBSCRIPTION__) {
        db.favorites.delete(talkId)
    } else {
        db.favorites.delete(talkId)
            .then(() => requestSync());
    }
}

const requestSync =()=> {
    navigator.serviceWorker.ready.then(swRegistration => swRegistration.sync.register('favorites_updated'));
}
