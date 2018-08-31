const speakers = [
    {
        id: 'adrien-pessu',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/adrien-pessu.jpg",
        name: "Adrien Pessu",
    },
    {
        id: 'alexandre-delegue',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/alexandre-delegue.png",
        name: "Alexandre Delègue",
    },
    {
        id: 'amelie-benoit',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/amelie-benoit.jpg",
        name: "Amélie Benoit",
    },
    {
        id: 'aurelien-hebert',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/avatar.png",
        name: "Aurélien Hébert",
    },
    {
        id: 'benoit-giraudou',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/benoit-giraudou.jpg",
        name: "Benoît Giraudou",
    },
    {
        id: 'benoit-simard',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/benoit-simard.JPG",
        name: "Benoît Simard",
    },
    {
        id: 'bruno-bonnin',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/bruno-bonnin.png",
        name: "Bruno Bonnin",
    },
    {
        id: 'bruno-sabot',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/bruno-sabot.jpg",
        name: "Bruno Sabot",
    },
    {
        id: 'david-brassely',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/david-brassely.jpg",
        name: "David Brassely",
    },
    {
        id: 'david-gageot.',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/david-gageot.jpeg",
        name: "David Gageot",
    },
    {
        id: 'david-pilato.',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/david-pilato.jpeg",
        name: "David Pilato",
    },
    {
        id: 'emmanuel-feller',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/avatar.png",
        name: "Emmanuel Feller",
    },
    {
        id: 'fedy-salah.',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/fedy-salah.jpeg",
        name: "Fedy Salah",
    },
    {
        id: 'freddy-mallet.',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/freddy-mallet.jpeg",
        name: "Freddy Mallet",
    },
    {
        id: 'gautier-de-Saint-martin-lacaze',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/avatar.png",
        name: "Gautier de Saint Martin Lacaze",
    },
    {
        id: 'guillaume-membre',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/guillaume-membre.jpg",
        name: "Guillaume Membré",
    },
    {
        id: 'guillaume-soldera',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/guillaume-soldera.jpg",
        name: "Guillaume Soldera",
    },
    {
        id: 'horacio-gonzalez',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/horacio-gonzalez.jpg",
        name: "Horacio Gonzalez",
    },
    {
        id: 'jeanbaptiste-joffre',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/jeanbaptiste-joffre.jpg",
        name: "Jean-Baptiste Joffre",
    },
    {
        id: 'jerome-benois',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/jerome-benois.png",
        name: "Jérôme Benois",
    },
    {
        id: 'julien-landure',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/julien-landure.png",
        name: "Julien Landuré",
    },
    {
        id: 'lionnel-dupouy',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/lionnel-dupouy.jpg",
        name: "Lionnel Dupouy",
    },
    {
        id: 'ludovic-gouyou',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/avatar.png",
        name: "Ludovic Gouyou",
    },
    {
        id: 'mathieu-ancelin',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/mathieu-ancelin.jpg",
        name: "Mathieu Ancelin",
    },
    {
        id: 'nicolas-lepage',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/nicolas-lepage.jpg",
        name: "Nicolas Lepage",
    },
    {
        id: 'philippe-charriere',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/philippe-charriere.jpg",
        name: "Philippe Charriere",
    },
    {
        id: 'pierre-zemb',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/pierre-zemb.png",
        name: "Pierre Zemb",
    },
    {
        id: 'romain-durand-saint-omer',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/romain-durand-saint-omer.jpg",
        name: "Romain Durand Saint Omer",
    },
    {
        id: 'tugdual-grall',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/avatar.png",
        name: "Tugdual Grall",
    },
    {
        id: 'youen-chene',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/youen-chene.jpg",
        name: "Youen Chené",
    },
]

module.exports = speakers;