const fakeDatas = [
    {
        id: 'freddy-mallet',
        title: "Freddy Mallet",
        bio: '',
        picture: '',
        talks: [{
            id: 'developpeurs-etre-un-expert',
            title: "Développeurs, être un expert incompris ou un leader d'opinions, cela ne dépend que de nous",
            author: 'Freddy Mallet',
            type: 'Keynote',
            room: 'CF1',
            time: '09:00-10:00'
        }]
    },
    {
        id: 'mathieu-ancelin',
        title: "Mathieu Ancelin",
        bio: '',
        picture: '',
        talks: [
            {
                id: 'simplifiez-vous-les-micro-services',
                title: "Simplifiez vous les micro services avec Otoroshi",
                author: 'Mathieu Ancelin',
                type: 'Conférence',
                room: 'CF2',
                time: '10:00-11:00'
            }
        ]
    }
]

export const retrieveSpeakers = () => {
    return new Promise((resolve) => {
        resolve(fakeDatas)
    });
}