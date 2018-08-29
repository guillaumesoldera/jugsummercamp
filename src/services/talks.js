const fakeTalks = [
    {
        id: 'developpeurs-etre-un-expert',
        title: "Développeurs, être un expert incompris ou un leader d'opinions, cela ne dépend que de nous",
        author: 'Freddy Mallet',
        type: 'Keynote',
        room: 'CF1',
        time: '09:00-10:00'
    },
    {
        id: 'simplifiez-vous-les-mivro-services',
        title: "Simplifiez vous les micro services avec Otoroshi",
        author: 'Mathieu Ancelin',
        type: 'Conférence',
        room: 'CF2',
        time: '10:00-11:00'
    },
    {
        id: 'maroufle-ton-css',
        title: "Maroufle ton CSS avec Flexbox et CSS-grid",
        author: 'Amélie Benoît',
        type: 'Tools in Action',
        room: 'CF1',
        time: '10:00-10:30'
    },
    {
        id: 'les-phantom-types-pour-les-nuls',
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