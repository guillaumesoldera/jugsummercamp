const fakeTalks = [
    {
        title: "Développeurs, être un expert incompris ou un leader d'opinions, cela ne dépend que de nous",
        author: 'Freddy Mallet',
        type: 'Keynote',
        room: 'CF1',
        time: '09:00-10:00'
    },
    {
        title: "Simplifiez vous les micro services avec Otoroshi",
        author: 'Mathieu Ancelin',
        type: 'Conférence',
        room: 'CF2',
        time: '10:00-11:00'
    },
    {
        title: "Maroufle ton CSS avec Flexbox et CSS-grid",
        author: 'Amélie Benoît',
        type: 'Tools in Action',
        room: 'CF1',
        time: '10:00-10:30'
    },
    {
        title: "Les 'Phantom Types' pour les nuls",
        author: 'Jean Baptiste Joffre',
        type: 'Quickie',
        room: 'CF2',
        time: '12:00-12:15'
    },
]

export const retrieveTalks = () => {
    return new Promise((resolve) => {
        resolve(fakeTalks)
    });
}