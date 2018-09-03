const speakers = [
    {
        id: 'adrien-pessu',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/adrien-pessu.jpg",
        name: "Adrien Pessu",
        bio: "Adrien est passionné de développement, en particulier Java et Web. Il a évolué pendant plusieurs années en société de services chez un éditeur logiciel, il s’est lancé dans l’aventure freelance. Vous pourrez aussi le croiser dans certains meetups tech"
    },
    {
        id: 'alexandre-delegue',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/alexandre-delegue.png",
        name: "Alexandre Delègue",
        bio: "Alexandre Delègue est lead developpeur pour la MAIF. Développeur touche à tout il apprécie tout particulièrement la programmation fonctionnelle et les framework réactifs."
    },
    {
        id: 'amelie-benoit',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/amelie-benoit.jpg",
        name: "Amélie Benoit",
        bio: "Je suis une développeuse passionnée par les nouvelles technologies, et plus particulièrement celles orientées web. Diplômée d’un IUT et d’une école d’ingénieur, je travaille depuis 3 ans dans ce domaine. Je reste toujours très curieuse sur tout ce qui tourne autour des nouvelles technologies, mais aussi sur tous les procédés qui permettent d’apporter un peu de fun et de dynamisme dans un quotidien plein de cérémonies et de réunions."
    },
    {
        id: 'aurelien-hebert',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/avatar.png",
        name: "Aurélien Hébert",
        bio: "Aurélien Hébert is a software engineer since 2015 and loves to work with data. He started in the Alten R&D team on a Big data project. This project was about discovering pattern in mobility data. After this first experience he wanted to work on a technical project including more sensors data. He joined a Startup (Cityzen Data) building an open source Geo-Time-Series database (Warp 10) and its associated language to manipulate it. Here he got data, a lot of them. He also like to share his experience in local conference such as FinistDev or meetups."
    },
    {
        id: 'benoit-giraudou',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/benoit-giraudou.jpg",
        name: "Benoît Giraudou",
        bio: "Développeur chez Zenika Bordeaux je m'intéresse aussi bien au développement backend que frontend. Fervent défenseur des bonnes pratiques j'ai très vite cherché rendre plus robuste le langage JavaScript."
    },
    {
        id: 'benoit-simard',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/benoit-simard.JPG",
        name: "Benoît Simard",
        bio: "Benoît est un développeur, spécialisé en logiciel libre, Java & data. En dehors de son goût pour le café et la data (et en particulier l'open), Benoît est consultant chez Neo4j, le spécialiste de la bases de données orientées graphes."
    },
    {
        id: 'bruno-bonnin',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/bruno-bonnin.png",
        name: "Bruno Bonnin",
        bio: "Vieux développeur ayant un fort penchant pour les langages de vieux (Java), de jeunes vieux (JavaScript) et de jamais jeunes (Python), pour le NoSQL (MongoDB, Elasticsearch) et le Big Data (Hadoop)."
    },
    {
        id: 'bruno-sabot',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/bruno-sabot.jpg",
        name: "Bruno Sabot",
        bio: "Développeur Front-end passionné, défenseur de l'importance de l'UX et de la performance, je m'intéresse de près à tous les sujets du web. Consultant et formateur chez Zenika Bordeaux, Bruno aime partager ses connaissances avec autrui. Passionné par le web, je suis à l'affut des dernières nouveautés de mon domaine... et de l'IoT à mes heures perdues."
    },
    {
        id: 'david-brassely',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/david-brassely.jpg",
        name: "David Brassely",
        bio: "David est CTO chez GraviteeSource et core committer Gravitee.io API Platform. A ce titre, il intervient régulièrement sur des missions de consulting, d'expertise technique et d'architecture afin de faciliter l'exposition des APIs, favoriser une démarche OpenAPI, le tout en respectant les préceptes fondamentaux en terme de sécurité."
    },
    {
        id: 'david-gageot.',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/david-gageot.jpeg",
        name: "David Gageot",
        bio: "David est Developer Advocate chez Google Cloud. Il travaille sur les Containers Tools. Auparavant, il a participé à l'ouverture du bureau de R&D de Docker, à Paris."
    },
    {
        id: 'david-pilato.',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/david-pilato.jpeg",
        name: "David Pilato",
        bio: "Depuis 2013, David Pilato est développeur et évangéliste chez elastic.co, après avoir passé les deux années précédentes à promouvoir le projet open-source Elasticsearch. Il en anime la communauté française et organise des [BBLs](http://brownbaglunch.fr) au sein des entreprises."
    },
    {
        id: 'emmanuel-feller',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/avatar.png",
        name: "Emmanuel Feller",
        bio: "Père de 3 garçons et gardien de nombreux microcontrolleurs, Emmanuel est un développeur passionné depuis bientôt 20 ans. Il a évolué dans de nombreux contextes de banque et assurance en France et en Suisse. KISS est son moto, le sourire des utilisateurs son but, Java/scala et l'iot sont ses armes ... Emmanuel aime partager son savoir et est impliqué dans plusieurs initiatives telles que Devoxx4kids, Scala.io, Devoxx France."
    },
    {
        id: 'fedy-salah.',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/fedy-salah.jpeg",
        name: "Fedy Salah",
        bio: "Ingénieur en Informatique, développeur fullstack expérimenté en JAVA et Web, je fais beaucoup de Javascript et je suis passionné par du Scala et la programmation fonctionnelle en général. Je suis aussi un grand fan de Metal, et je suis aussi un Spartan racer."
    },
    {
        id: 'freddy-mallet.',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/freddy-mallet.jpeg",
        name: "Freddy Mallet",
        bio: "Freddy est l'un des co-fondateurs de la société SonarSource. Il est particulièrement impliqué dans le développement produit mais est également un acteur majeur de la mise en oeuvre d'une organisation à plat chez SonarSource. Par conséquent Freddy n'a lui même plus aucun titre professionnel chez SonarSource. Il est enfin libre !"
    },
    {
        id: 'gautier-de-Saint-martin-lacaze',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/avatar.png",
        name: "Gautier de Saint Martin Lacaze",
        bio: "Développeur freelance passionné, Gautier travaille principalement sur les technologies Java et JavaScript. Afin de rester au fait des nouveautés, il participe régulièrement à des conférences nantaises ou nationales. Il coorganise également le Nantes JUG depuis juin 2014. Ayant appris à dompter l'IDE Eclipse lors de ses premières années de travail, il contribue aujourd'hui à l'amélioration de son outil de travail via des patchs et la formation de ses clients."
    },
    {
        id: 'guillaume-membre',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/guillaume-membre.jpg",
        name: "Guillaume Membré",
        bio: "Geek à toute heure, Guillaume travaille principalement autour des technologies Java/JavaEE mais aussi sur des problématiques de déploiement continu, de qualimétrie. Désormais, il partage son expérience pour faciliter la mise en place de démarche devops chez différents acteurs. Il adore bidouiller des RaspberryPi ou Arduino pour créer des choses inutiles donc indispensable. Vous pouvez le suivre sur twitter : @GuillaumeMembre"
    },
    {
        id: 'guillaume-soldera',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/guillaume-soldera.jpg",
        name: "Guillaume Soldera",
        bio: "Développeur depuis 10 ans à Serli, je m’intéresse à différents langages, frameworks ou encore aux technologies Web… ReactNative, ReactJS, Elastic, Scala font partie de mes occupations du moment."
    },
    {
        id: 'horacio-gonzalez',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/horacio-gonzalez.jpg",
        name: "Horacio Gonzalez",
        bio: "Malgré ce que son accent espagnol bien prononcé peut suggérer, Horacio est arrivé en France il y a plus d'une quinzaine d'années. Passionné d'informatique, dans laquelle il est tombé depuis tout petit, il a découvert le développement web en 1997 et depuis il n'a pas arrêté de bosser autour. Après quelques années comme tech leader de la partie frontend de @warp10io chez Cityzen Data, Horacio a rejoint OVH en janvier 2018 en tant que Developer Advocate. Il est cofondateur du FinistDevs et du GDG Finistère, les JUG et GDG francophones le plus proche de la Silicon Valley. Passionné par le développement web et tout ce qui gravite autour des composants web, Horacio est Google Developer Expert (GDE) en Web Technologies et Polymer."
    },
    {
        id: 'jeanbaptiste-joffre',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/jeanbaptiste-joffre.jpg",
        name: "Jean-Baptiste Joffre",
        bio: "Après avoir été dans le développement mobile il y a 9 ans, Jean-baptiste c'est orienté vers les technologies du web telles qu'Angular et React. Et plus récemment des frameworks comme Play/Play 2 et Spring Boot, pour finalement revenir vers son amour de jeunesse, le développement d'application mobile. Plus précisément le développement Swift pour iOS."
    },
    {
        id: 'jerome-benois',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/jerome-benois.png",
        name: "Jérôme Benois",
        bio: "Jérôme Benois, actuellement CEO de mes 3 enfants, après quelques années passées en tant qu'Architecte et CTO chez divers éditeurs logiciels. Passionné par le dév, l'archi, la tech et le vin."
    },
    {
        id: 'julien-landure',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/julien-landure.png",
        name: "Julien Landuré",
        bio: "CTO de Zenika Nantes, Julien est aussi Google Developer Expert Cloud. Il a co-fondé en Janvier 2011 le GDG Nantes, une communauté de développeurs des technologies Google et organise chaque année le DevFest Nantes."
    },
    {
        id: 'lionnel-dupouy',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/lionnel-dupouy.jpg",
        name: "Lionnel Dupouy",
        bio: "Ancien policier reconvertit dans le développement logiciel, je suis passionné par mon métier. Développeur fullStack avant tout chez Lectra, je ne m'impose aucune limite pour m'améliorer au quotidien. De nature créative et autodidacte, j'utilise les projets persos pour me forger de nouvelles compétences FrontEnd, BackEnd, infra en passant même par le web design. Je suis heureux d'apprendre et de partager avec mes semblables. @LionnelDupouy sur twitter."
    },
    {
        id: 'ludovic-gouyou',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/avatar.png",
        name: "Ludovic Gouyou",
        bio: "Développeur chez Zenika Bordeaux, je suis passionné par les langages fonctionnels et Microsoft, c'est donc tout naturellement que je me suis intéressé à TypeScript !"
    },
    {
        id: 'mathieu-ancelin',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/mathieu-ancelin.jpg",
        name: "Mathieu Ancelin",
        bio: "Mathieu ANCELIN est développeur chez SERLI, spécialisé dans la programmation web avec Scala, Java, JavaScript, des streams, de la data et cloud. Et s'il y du React, c'est encore mieux ;-) Mathieu est le lead développeur de quelques projets open-source comme ReactiveCouchbase ou Otoroshi, un reverse-proxy moderne avec de l'api managment léger. Vous pouvez régulièrement le croiser au Poitou-Charentes JUG."
    },
    {
        id: 'nicolas-lepage',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/nicolas-lepage.jpg",
        name: "Nicolas Lepage",
        bio: "Développeur depuis plus de 10 ans, Nicolas est actuellement consultant et formateur chez Zenika Nantes. Après de trop longues années de développement Java, il prend le contrepied et s'intéresse maintenant à tout ! Sa quête de nouveauté l'amène à explorer les mondes du front avec ReactJS, du NoSQL avec MongoDB, et des langages modernes tels que Go(lang) ou encore Kotlin. Son goût du partage le pousse à devenir formateur, notamment sur Go(lang), et à se lancer dans l'open source en créant [immutad●t](https://github.com/Zenika/immutadot), une bibliothèque JavaScript pour manipuler les structures immuables imbriquées."
    },
    {
        id: 'philippe-charriere',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/philippe-charriere.jpg",
        name: "Philippe Charriere",
        bio: "Je suis un ex bébé SSII élevé à Visual Basic et MS Access, MS Project, ... pendant des années pour finalement basculer vers Java, JavaScript, Scala ... Aujourd'hui j'ai 3 métiers: Je fabrique des chatbots pour Bots.Garden 🤖🌼(ma toute jeune boîte), je suis technical account manager pour GitLab (avec une passion incontrôlée 😜 pour les runners GitLab) et enfin responsable commercial chez Clever Cloud (avec une addiction au blue green deployment, btw mes Chat Bots et mes runners tournent chez Clever Cloud 😍)"
    },
    {
        id: 'pierre-zemb',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/pierre-zemb.png",
        name: "Pierre Zemb",
        bio: "Pierre Zemb is a software engineer at OVH. He’s working with the Metrics Data Platform team to build reliable distributed systems and analytics solution. He's also giving a hand to differents local events, such as the local Startup Weekend, Devoxx4Kids and FinistDevs."
    },
    {
        id: 'romain-durand-saint-omer',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/romain-durand-saint-omer.jpg",
        name: "Romain Durand Saint Omer",
        bio: "Lego addict et tombé dans la marmite des frameworks front quand j’étais petit, je développe depuis 4 ans avec React. Tech-lead depuis plus d’un an et demi, je cherche à améliorer et à diffuser les bonnes pratiques au sein des équipes web de Lectra"
    },
    {
        id: 'tugdual-grall',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/avatar.png",
        name: "Tugdual Grall",
        bio: "Tugdual Grall, est Chief Technical Evangelist EMEA chez MapR. Il travaille avec les clients et communautés de développeurs européennes, pour faciliter l'adoption de MapR, Hadoop et NoSQL. Avant de travailler chez MapR, \"Tug\", était Technical Evangelist chez MongoDB et Couchbase. Tug a également travaillé comme CTO chez eXo Platform, et comme Product Manager et Développeur sur la platform Java/JavaEE d'Oracle. Tugdual est également co-fondateur du Nantes JUG (Java Users Group) qui réunit tous les mois depuis 2008 les développeurs et architectes de la région nantaise. Blog: http://tgrall.github.io/"
    },
    {
        id: 'youen-chene',
        picture: "https://serli-fr.s3.amazonaws.com/JugSummerCamp/Speakers2018/youen-chene.jpg",
        name: "Youen Chené",
        bio: "CTO chez [Saagie](http://www.saagie.com). Passionné d'informatique et de programmation depuis le CE2 (génération MO5/TO7), je suis un des activistes au sein du Normandy JUG, Devoxx4Kids et de [Codeurs en Seine](http://www.codeursenseine.com)."
    },
]

module.exports = speakers;