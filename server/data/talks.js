const talks = [
    {
        id: 'developpeurs-etre-un-expert',
        title: "Développeurs, être un expert incompris ou un leader d’opinions ne dépend que de nous",
        author: ['freddy-mallet'],
        type: 'Keynote',
        room: 'Salle Casoar Tadorne',
        time: '09:30 - 10:00',
        description: 'Après chaque JUG Summer Camp, vous retrouvez vos collègues la tête pleine de nouvelles idées, de nouvelles technos et de nouvelles pratiques de développement. Serez-vous de ces acteurs capables de transformer cette belle énergie en changement ? Ou serez-vous l’un de ces développeurs incompris et frustrés d’être entourés par autant d’incompétents ?\n\nMots clés : agilité, psychologie, flat organization'
    },
    {
        id: 'simplifiez-vous-les-mivro-services',
        title: "Simplifiez vous les micro services avec Otoroshi",
        author: ['mathieu-ancelin'],
        type: 'Conférence',
        room: 'Salle Casoar Tadorne',
        time: '10:00-11:00',
        description: "Avec la tendance des microservices, on se retrouve rapidement avec tout un tas de problèmes classique dans ce type d'architecture et il est nécessaire de rapidement faire un choix quand à la manière de les régler. \n\n* comment localiser ses services ?\n* comment retracer les chaines d'appels entre services ?\n* comment savoir ce qui s'est passé sur son cluster de services ?\n* comment assurer la résilience des appels de manière homogène ?\n* comment controler les flux et appliquer des politiques de sécurité globales ?\n* comment tester de nouvelles fonctionnalités avec un flux de production \n* etc \n\nOtoroshi est un reverse proxy moderne avec une fine couche d'api management développé et open sourcé par la MAIF qui propose des solutions à toutes ces problématiques sans pour autant vous imposer une stack technologique, des librairies invasives ou un environnement de run particulier. De plus, son architecture centrée autour d'une API d'administration complète permet d'augmenter simplement les capacités d'Otoroshi. Au cours de cette présentation, nous verrons comment mettre en place Otoroshi et comment tirer parti de toutes les fonctionnalités mise à votre disposition pour vous simplifier la vie et celle de vos microservices."
    },
    {
        id: 'monitorer-vos-microservices-java-avec-des-logs',
        title: 'Monitorer vos microservices Java avec des logs, des métriques, des pings et des traces',
        author: ['david-pilato'],
        type: 'Conférence',
        room: 'Salle Chandardon',
        time: '10:00 - 11:00',
        description: "\"Chaque coupure de service se transforme en enquête policière.\"\n\nC'est une plainte qu'on peut souvent entendre chez les responsables de production. Mais en réalité, avec les bons outils, cela peut-être beaucoup plus simple.\n\nCette conférence donnera un aperçu sur comment monitorer efficacement ses applications Spring Boot sachant qu'elles deviennent de plus en plus populaires pour bâtir des microservices. En particulier, nous étudierons :\n\n* Métriques système : regarder à la loupe le trafic réseau et la charge système.\n* Logs applicatif : collecter et centraliser des logs structurés.\n* Disponibilité : utiliser Heartbeat pour effectivement mesurer la disponibilité et les temps de réponse de nos services.\n* Métriques applicatif : rassembler les métriques de Spring Boot et l'état de santé via REST ou JMX.\n* Performance applicative : utiliser APM par elastic pour rapidement identifier les causes des ralentissements.\n\nCerise sur le gâteau : nous ferons tout cela en live car c'est encore plus simple et plus interactif !\n\n\n\nMots clés : java, microservices, monitoring, apm",
    },
    {
        id: 'kotlin-le-back-du-futur',
        title: 'Kotlin : Le back du futur, le codelab',
        author: ['adrien-pessu', 'gautier-de-saint-martin-lacaze'],
        type: 'Hands-On Lab',
        room: "Hall de l'espace Encan (rez-de-chaussée)",
        time: '10:00 - 13:00',
        description: "Depuis l’annonce par Google du support de Kotlin sur Android, les développeurs d'applications mobiles se sont fortement intéressés à ce langage récent. Mais \"**Nom de Zeus !**\" est-ce réservé aux développeurs mobiles ? Non, Non et Non. Kotlin tourne sur la JVM alors autant en profiter dans tous nos projets.\n\nViens nous rejoindre pour découvrir toutes les facettes de ton futur prochain langage préféré. À travers plusieurs exercices, tu apprendras à transformer ton vieux Java en Kotlin puis à penser directement en Kotlin pour plus de \"**fun**\" et moins de \"**void**\".\n\nPas encore persuadé que ce codelab est fait pour toi ? Regarde ces avis de développeurs déjà convaincus :\n\n\"Java ? Là où on va, on n’a pas besoin de Java !\"\nUn développeur backend à propos de son prochain projet en Kotlin.\n\n\"Faut voir grand dans la vie, quitte à coder sur la JVM, autant choisir un language qui ait d’la gueule !\"\nUn autre développeur backend après la conférence Kotlin : Le back du futur.\n\n**Doc Gautier et Adrien Mc Fly**"
    },
    {
        id: 'gravitee-keycloak',
        title: "L'open-source à la rescousse de mes APIS: comment les sécuriser grâce à Gravitee.io et Keycloak",
        author: ['david-brassely'],
        type: 'Conférence',
        room: 'Salle Chandardon',
        time: '11:00 - 12:00',
        description: "Les concepts de CORS, OAuth, OpenID Connect, SAML, JWT rate-limiting, quota,... sont maintenant largement répandus mais pourtant mal maîtrisés et pas toujours mis en oeuvre dans les règles de l'art.\nPour faciliter la vie du développeur, nous allons voir comment mettre en place la sécurisation de vos APIs sans avoir à intervenir sur vos backends grâce aux outils open-source que sont Gravitee.io et Keycloak\n\nMots clés : Gateway, open-source, authentification, Oauth2, Java"
    },
    {
        id: 'typsecript-vs-flow',
        title: 'Typage en JavaScript : TypeScript VS Flow',
        author: ['benoit-giraudou', 'ludovic-gouyou'],
        type: 'Conférence',
        room: 'Salle Casoar Tadorne',
        time: '11:00 - 12:00',
        description: "JavaScript est désormais passé du statut de langage jouet à language professionnel, utilisé pour développer des applications complètes.\nMalgré les évolutions rapides du langage, il reste encore un point noir : le typage !\nC'est désormais en passe d'être réglé grâce à différents outils, dont le language TypeScript ou le checker Flow.\nAu travers d'un live-coding croisé, nous verrons les similitudes, les différences et les avantages du langage TypeScript et de Flow pour typer son JavaScript.\n\nMots clés : javascript, js, typescript, ts, flow, typage, type",
    },
    {
        id: 'vanilla-is-the-new-black',
        title: 'Vanilla is the new black',
        author: ['amelie-benoit'],
        type: 'Quickie',
        room: 'Salle Casoar Tadorne',
        time: '12:00 - 12:15',
        description: "Framework or not framework ? That should be the question. \n\nPourquoi se compliquer la vie avec des frameworks aussi hypes soient-ils ? Ils sont complexes, intègrent de nombreux concepts et librairies. Et puis, un site HTML / CSS avec une touche de JQuery fonctionne très bien après tout.\n\nL'écosystème front a beaucoup évolué ces dernières années. Retour sur les pratiques de développements qui ont amené à l'utilisation de ces frameworks.\n\nMots clés : Vanilla, Framework, Javascript, Web"
    },
    {
        id: 'les-phantom-types-pour-les-nuls',
        title: "Les 'Phantom Types' pour les nuls",
        author: ['jean-baptiste-joffre'],
        type: 'Quickie',
        room: 'Salle Chandardon',
        time: '12:00-12:15',
        description: "Ce quickie a pour but de faire découvrir comment les \"Phantom Types\" améliorent la lisibilité du code, tout en réduisant le nombres d'erreurs au runtime. En l'appliquant au sujet bien connu des développeurs: les files path."
    },
    {
        id: 'voyage-dans-le-temps-avec-react-suspense',
        title: 'Voyage dans le temps avec React Suspense',
        author: ['romain-durand-saint-omer'],
        type: 'Quickie',
        room: 'Salle Chandardon',
        time: '12:15 - 12:30',
        description: "Si suspendre le rendu d'un composant sous certaines conditions ou afficher un loader tant que la donnée n'est pas disponible te semble familier alors ce talk est pour toi. \nViens découvrir la dernière API super secrète de React et reprend le contrôle du temps. \n\nMots clés : react, react suspense, frontend"
    },
    {
        id: 'ux-les-formulaires',
        title: 'UX : Les formulaires',
        author: ['bruno-sabot'],
        type: 'Quickie',
        room: 'Salle Casoar Tadorne',
        time: '12:15 - 12:30',
        description: "Et si on parlait d'UX ?\n\nL'UX pour les formulaires est un gros sujet sur lequel il y a souvent beaucoup à faire alors :\n\n- Voyons ensemble quelles sont les erreurs à ne pas faire\n- Expliquons les solutions à adopter\n\nMots clés : ux, formulaires"
    },
    {
        id: 'developper-son-projet-perso-comme-un-pro',
        title: 'Développer son projet perso comme un pro en déploiement continu',
        author: ['lionnel-dupouy'],
        type: 'Quickie',
        room: 'Salle Casoar Tadorne',
        time: '13:20 - 13:35',
        description: "Vous êtes une bande de dev à vous tout seul mais vous voulez \"shiper\" du code comme chez Netflix, Spotify ou Lectra ?\nDans ce Quickie, je vous montre comment avec CircleCI et CleverCloud je déploie en continue mon projet perso et ses 300+ tests à partir d'un simple git push depuis mon laptop.\n\nL'idée de ce sujet provient à l'origine d'un article que j'ai écrit sur Medium : https://medium.com/@lionel.dupouy/d%C3%A9ploiement-continue-avec-circleci-et-clever-cloud-9c756b291d8e\n\nMots clés : Déploiement continue, side project, Cloud."
    },
    {
        id: 'stream-processing-et-sql',
        title: 'Stream processing et SQL',
        author: ['bruno-bonnin'],
        type: 'Quickie',
        room: 'Salle Chandardon',
        time: '13:20 - 13:35',
        description: "Le SQL est un standard pour accéder vos données, donc, dans un monde orienté flux, quoi de plus normal que de retrouver le SQL pour traiter vos streams. Dans ce talk, vous découvrirez les extensions apportées à SQL par Apache Calcite pour répondre à cette problématique. Allez, un petit exemple pour la route: `select stream * from events`\n\nMots clés : sql,stream processing"
    },
    {
        id: 'au-pays-des-gophers',
        title: 'Au pays des Gophers (à partir de 3 ans)',
        author: ['nicolas-lepage'],
        type: 'Quickie',
        room: 'Salle Casoar Tadorne',
        time: '13:35 - 13:50',
        description: "Au pays des Gophers, les Goroutines gambadent librement, et s’échangent des bisous et des bonbons grâce aux channels.\n\nLes méchants Locks sont tous deads (ou presque), et le Scheduler règne sur ce monde paisible qui ne connaît pas le nom des Processeurs.\n\nLa concurrence en Go expliquée à ma fille de 3 ans !\n\nMots clés : Go, Concurrence"
    },
    {
        id: 'la-cncf-et-son-ecosysteme',
        title: 'La CNCF et son écosystème',
        author: ['julien-landure'],
        type: 'Quickie',
        room: 'Salle Chandardon',
        time: '13:35 - 13:50',
        description: "On parle beaucoup de Kubernetes mais tout ce projet est supporté par la fameuse CNCF (Cloud Native Computing Foundation), une fondation fille de l’illustre “Linux Foundation”.\nMais que trouve-t-on dans cette fondation ? \nQuels acteurs soutiennent ce truc ? Quel type de projet ? \nEt “Cloud Native” ça signifie quoi en fait ?\nVenez découvrir tout ça lors d’un tour d’horizon de la CNCF.\n\n\nMots clés : #Kubernetes #Cloud #Docker"
    },
    {
        id: 'suivre-les-avions-avec-un-raspberry-pi',
        title: 'Suivre les avions avec un Raspberry Pi',
        author: ['guillaume-membre'],
        type: 'Conférence',
        room: 'Salle Chandardon',
        time: '14:00 - 15:00',
        description: "En hackant une clé USB de réception TNT, La Radio Logicielle (ou SDR) est à la portée de tous. Il est alors possible d'écouter les balises de positionnement des avions de lignes sur un rayon de plusieurs dizaines de km avec une simple antenne. Voulez vous connaitre le fonctionnement du projet comme [flightradar24](https://www.flightradar24.com) ? Nous verrons comment mettre en oeuvre un tel projet avec du matériel grand public et accessible comme un Raspberry Pi.\n\nMots clés : Raspberry Pi, RTL SDR, Avions, IOT"
    },
    {
        id: 'google-container-tools',
        title: 'Google Container Tools : développer efficacement dans un monde de conteneurs',
        author: ['david-gageot'],
        type: 'Conférence',
        room: 'Salle Casoar Tadorne',
        time: '14:00 - 15:00',
        description: "Kubernetes est devenu l'orchestrateur de choix pour déployer des applications. Mais qu'en est-il du quotidien des développeurs qui créent ces applications ? Plus on s'appuie sur la plateforme, plus il est compliqué de développer en dehors de la plateforme. Et développer à l'intérieur de conteneurs n'est pas réputé facile ni agréable.\n\nGoogle est à l'origine de plusieurs projets Open-Source qui se focalisent sur l'expérience des développeurs dans un monde de conteneurs. Kaniko permet de construire une image Docker à partir d'un Dockerfile, dans un cluster Kubernetes, de manière sécurisée. Skaffold facilite le déploiement continu d'applications pour Kubernetes. Les images Distroless offrent des images de base légères, sécurisées et de qualité. Bazel permet meme de construire des images Docker sans Docker.\n\nVenez découvrir comment ces outils se combinent pour offrir un environment de développement agréable et performant dans le monde des conteneurs.\n\nMots clés : Kubernetes, Docker, Open-Source"
    },
    {
        id: 'redecouvrir-l-univers-connu',
        title: 'Redécouvrir l’univers connu avec le dataset de la NASA',
        author: ['horacio-gonzalez', 'aurelien-hebert', 'emmanuel-feller', 'pierre-zemb'],
        type: 'Hands-On Lab',
        room: "Hall de l'espace Encan (rez-de-chaussée)",
        time: '14:00 - 17:00',
        description: "Cela fait des années que l’humanité explore le ciel, rêvant de voyages intersidérales et de nouvelles colonies planétaires. Et toi, as-tu envie de partir 3h avec nous à la découverte de l'univers ? Il se trouve que la NASA possède un formidable jeu de données publiques, notamment celui qui est utilisé pour la recherche d’exoplanètes, c’est-à-dire de planètes situées en dehors de notre système solaire. Nous vous guiderons, au cours de ce Hands-on, dans les différentes étapes permettant de redécouvrir des exoplanètes en utilisant Warp10, une plateforme open-source de traitement de séries temporelles."
    },
    {
        id: 'feature-flipping-avec-izanami',
        title: 'Feature flipping avec Izanami',
        author: ['alexandre-delegue'],
        type: 'Tools in action',
        room: 'Salle Chandardon',
        time: '15:00 - 15:30',
        description: "Dans le développement d’applications modernes, il est souvent nécessaire de pouvoir activer ou désactiver des fonctionnalités à chaud. Que ce soit pour limiter le nombre de branches de développement ou simplement pour gérer des features par user, par tenant, par partenaires ou whatever. Heureusement pour vous, il existe Izanami, une brique de feature flipping, A/B testing et de configuration partagée. Dans cette session nous verrons comment utiliser Izanami et comment intégrer le feature flipping dans une application existante en utilisant les différents clients disponibles."
    },
    {
        id: 'maroufle-ton-css',
        title: "Maroufle ton CSS avec Flexbox et CSS-grid",
        author: ['amelie-benoit'],
        type: 'Tools in Action',
        room: 'Salle Casoar Tadorne',
        time: '15:00-15:30',
        description: "Vous galérez encore à centrer vos éléments verticalement ou à avoir une version responsive de la disposition de vos éléments dans une page ?\n\n\nVous utilisez encore des libraries externes comme bootstrap pour le layout ?\n\nArrêtez tout ! Flexbox et CSS-grid sont faits pour vous. Intégrés nativement, Flexbox permet de gérer la disposition des éléments de votre page, tandis que CSS-grid permet de créer des layouts.\n\nCes deux modules vont simplifier votre HTML, votre CSS, et donc votre vie !\n\nMots clés : CSS, Flexbox, CSS-Grid, Web, Front"
    },
    {
        id: 'hexagonal-architecture',
        title: 'Hexagonal Architecture for dummies and classical Spring developer',
        author: ['youen-chene'],
        type: 'Tools in action',
        room: 'Salle Chandardon',
        time: '15:30 - 16:00',
        description: "Le monde DDD aime bien troller le framework Spring. Et moi, après 10 années en tant que développeur Spring, je suis toujours déçu par les présentations de DDD (Domain Driven Development), je trouve que le code arrive toujours trop tard.\n\nCe talk est une initiation au DDD pour des développeurs Java qui veulent contrôler la complexité au cœur du software avec leur framework favori et aller plus loin.\n\nLes exemples de code seront en kotlin.\n\nMots clés : Hexagonal, Java, Spring, Kotlin, DDD"
    },
    {
        id: 'stabilite-skaffold',
        title: "Gagner en stabilité avec Skaffold & Container Structure Test",
        author: ['julien-landure'],
        type: 'Tools in action',
        room: 'Salle Casoar Tadorne',
        time: '15:30 - 16:00',
        description: "Vous développez des images Docker ? Vous les déployez sur K8S ? Venez découvrir deux outils bien pratiques : Skaffold & Container Structure Test L’un permet de valider vos images Docker tandis que l’autre permet de recharger votre cluster Kubernetes rapidement… à chaque sauvegarde par exemple. Venez découvrir l’utilisation conjointe des ces 2 outils pour être plus productif au jour le jour."
    },
    {
        id: 'du-legacy-minitel-au-web',
        title: 'Du Legacy minitel au web',
        author: ['jerome-benois'],
        type: 'Conférence',
        room: 'Salle Chandardon',
        time: '16:15 - 17:15',
        description: "Ce talk vise à partager un retour d'expérience sur un projet de modernisation d'une application Legacy. Dans cette session, nos partagerons les challenges techniques que nous avons dû relever et comment les technologies Web (ES6+Electron) et le langage Rust nous ont permis de moderniser la base de code d'un ERP datant de 30 ans.\n\nCe sera l'occasion de présenter le langage Rust à travers quelques exemples concrets.\n\n\n\nMots clés : Rust, Electron, Legacy"
    },
    {
        id: 'les-progressive-web-app',
        title: 'Les Progressive Web App - Quoi ? Où ? Comment ? Pourquoi ?',
        author: ['fedy-salah', 'guillaume-soldera'],
        type: 'Conférence',
        room: 'Salle Casoar Tadorne',
        time: '16:15 - 17:15',
        description: "Le traffic web est depuis plus d'un an plus important sur mobile que sur desktop. Ton appli web est responsive ? C'est bien, mais est-ce une progressive web app ?\nTu as un site web et t'envisages de faire une appli mobile ? As tu envisagé une progressive web app ?\n\nUne PWA est une application web qui ressemble et se comporte comme une application mobile.\n\nAvec tout ce que permet le web aujourd'hui, faire une appli mobile avec des technos web n'est pas si inimaginable que ça.\n\nDurant notre session, nous détaillerons notamment les caractéristiques des PWA et nous expliquerons pourquoi dans la plupart des cas, les PWA sont une réelle alternative aux applications natives et sont amenées à devenir le standard du web mobile.\n\nNous montrerons surtout à travers la migration d'une appli web en PWA que donner un comportement mobile à vos applications web n'est pas si compliqué.\n\nMots clés : PWA, Javascript, ServiceWorker"
    },
    {
        id: 'graphql-neo4j',
        title: 'Libérer la puissances des graphes avec GraphQl et Neo4j',
        author: ['benoit-simard'],
        type: 'Conférence',
        room: 'Salle Chandardon',
        time: '17:15 - 18:15',
        description: "Malgré ce que son nom peut impliquer, GraphQL n'est pas un langage de requête pour les bases de données graphe. C'est une nouvelle façon de construire des API où le modéle de donnée est construit comme un graphe. GraphQL a été appelé \"REST 2.0\" car il offre de nombreux avantages par rapport à REST.\nVenez decouvrir de quoi il en retourne, et surtout de sa puissant lorsqu'il est combiné avec une base de données graphe telle que Neo4j\n\nMots clés : graphql, graphe, neo4j"
    },
    {
        id: 'redux-saga',
        title: "Redux Saga - Générateur de bonne humeur",
        author: ['romain-durand-saint-omer'],
        type: 'Tools in action',
        room: 'Salle Casoar Tadorne',
        time: '17:15 - 17:45',
        description: "Présentation de la librairie Redux Saga qui permet de gérer l’asynchrone côté client de façon élégante.\nEn guise d’introduction, retour sur le concept des générateurs ES6 sur lequel s’appuie Redux Saga, puis tour d’horizon des avantages de la librairie: \n- Simple à comprendre, facile à tester\n- La logique est réunie à un seul endroit\n- Supporte des workflows complexes\n- Une excellente documentation\n\nLe use case d’exemple est celui de l’authentification, un workflow par nature complexe que Redux Saga permet de gérer très simplement.\nPour finir, passage en revue sur l’écriture des tests d’une Saga. Bien que simple à écrire, les tests unitaires d’une saga souffre d’un fort couplage avec l’implémentation dû au fonctionnement inhérent des générateurs ES6. On verra comment on peut s’affranchir de ces contraintes grâce à la librairie `redux-saga-test-plan`."
    }
]
//https://spreadsheets.google.com/feeds/list/1umOR3dXf-v7w5aOWzVgZva4lM68Eo1YJTSpCCldRCBo/od6/public/full?alt=json


const request = require('request');
const {speakerById} = require('./speakers')
const worksheetId = 'od6'
const retrieveTalks = () => new Promise((resolve, reject) => {
    var options = {
        url: `https://spreadsheets.google.com/feeds/list/1umOR3dXf-v7w5aOWzVgZva4lM68Eo1YJTSpCCldRCBo/${worksheetId}/public/full?alt=json`,
        headers: {
            'Accept': 'application/json',
        }
    };

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body)
            const allTalks = result.feed.entry.map(entry => {
                return {
                    id: entry['gsx$id']['$t'],
                    title: entry['gsx$title']['$t'],
                    author: entry['gsx$author']['$t'].split(',').map(value => value.trim()),
                    type: entry['gsx$type']['$t'],
                    room: entry['gsx$room']['$t'],
                    time: entry['gsx$time']['$t'],
                    description: entry['gsx$description']['$t'],
                }
            })

            const completedTalksPromises = allTalks.map(talk => {
                const richTalk = Object.assign({}, talk);
                const allPromises = talk.author.map((authorId, idx) => {
                    return speakerById(authorId)
                        .then((author) => {
                            richTalk.author[idx] = author
                        })
                })
                return Promise.all(allPromises)
                    .then(() => {
                        return richTalk;
                    })
            })
            Promise.all(completedTalksPromises)
                .then(completedTalks => {
                    resolve(completedTalks);
                })
                .catch(err => {
                    resolve(talks);
                })
        } else {
            resolve(talks);
        }
    });
});

const retrieveTalkById =(talkId) => new Promise((resolve, reject) => {
    var options = {
        url: `https://spreadsheets.google.com/feeds/list/1umOR3dXf-v7w5aOWzVgZva4lM68Eo1YJTSpCCldRCBo/${worksheetId}/public/full?alt=json`,
        headers: {
            'Accept': 'application/json',
        }
    };

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body)
            const allTalks = result.feed.entry.map(entry => {
                return {
                    id: entry['gsx$id']['$t'],
                    title: entry['gsx$title']['$t'],
                    author: entry['gsx$author']['$t'].split(',').map(value => value.trim()),
                    type: entry['gsx$type']['$t'],
                    room: entry['gsx$room']['$t'],
                    time: entry['gsx$time']['$t'],
                    description: entry['gsx$description']['$t'],
                }
            }).filter(talk => talk.id === talkId);
            if (allTalks.length == 1) {
                const completedTalksPromises = allTalks.map(talk => {
                    const richTalk = Object.assign({}, talk);
                    const allPromises = talk.author.map((authorId, idx) => {
                        return speakerById(authorId)
                            .then((author) => {
                                richTalk.author[idx] = author
                            })
                    })
                    return Promise.all(allPromises)
                        .then(() => {
                            return richTalk;
                        })
                })
                Promise.all(completedTalksPromises)
                    .then(completedTalks => {
                        resolve(completedTalks[0]);
                    })
            } else {
                reject('talk not found!');
            }
        } else {
            reject(error);
        }
    });
});


module.exports = {
    retrieveTalks,
    retrieveTalkById
};