const cards = [
    { theme: "Inventions", item: "Avion", year: 1903, img: "/assets/cards/avion.jpg" },
    { theme: "Inventions", item: "Téléphone", year: 1876, img: "/assets/cards/telephone.jpg" },
    { theme: "Inventions", item: "Ordinateur personnel", year: 1975, img: "/assets/cards/computer.jpg" },
    { theme: "Inventions", item: "Internet", year: 1969, img: "/assets/cards/internet.jpg" },
    { theme: "Inventions", item: "Automobile", year: 1885, img: "/assets/cards/automobile.jpg" },
    { theme: "Inventions", item: "Télévision", year: 1927, img: "/assets/cards/television.jpg" },
    { theme: "Inventions", item: "Lampe électrique", year: 1879, img: "/assets/cards/lampe-elec.jpg" },
    { theme: "Inventions", item: "Réfrigérateur", year: 1834, img: "/assets/cards/frigo.jpg" },
    { theme: "Monuments", item: "Statue de la Liberté", year: 1886, img: "/assets/cards/statue-libertee.jpg" },
    { theme: "Monuments", item: "Tour Eiffel", year: 1889, img: "/assets/cards/tour-eiffel.jpg" },
    { theme: "Monuments", item: "Colisée", year: 80, img: "/assets/cards/colisee.jpg" },
    { theme: "Monuments", item: "Machu Picchu", year: 1450, img: "/assets/cards/machu-pichu.jpg" },
    { theme: "Monuments", item: "Muraille de Chine", year: -214, img: "/assets/cards/muraille-chine.jpg" },
    { theme: "Monuments", item: "Taj Mahal", year: 1632, img: "/assets/cards/taj-mahal.jpg" },
    { theme: "Monuments", item: "Pyramides de Gizeh", year: -2570, img: "/assets/cards/pyramide.jpg" },
    { theme: "Monuments", item: "Opera House de Sydney", year: 1973, img: "/assets/cards/opera-house.jpg" },
    { theme: "Monuments", item: "Christ Rédempteur", year: 1931, img: "/assets/cards/christ-redempteur.jpg" },
    { theme: "Inventions", item: "Machine à écrire", year: 1868, img: "/assets/cards/machine-ecrire.jpg" },
    { theme: "Inventions", item: "Ampoule électrique", year: 1879, img: "/assets/cards/ampoule.jpg" },
    { theme: "Inventions", item: "Photographie", year: 1826, img: "/assets/cards/photography.jpg" },
    { theme: "Inventions", item: "Chemins de fer", year: 1830, img: "/assets/cards/chemin-fer.jpg" },
    { theme: "Inventions", item: "Télégraphe", year: 1837, img: "/assets/cards/telegraphe.jpg" },
    { theme: "Inventions", item: "Cinématographe", year: 1895, img: "/assets/cards/cinema.jpg" },
    { theme: "Inventions", item: "Radio", year: 1895, img: "/assets/cards/radio.jpg" },
    { theme: "Inventions", item: "Micro-ondes", year: 1946, img: "/assets/cards/micro-ondes.jpg" },
    { theme: "Inventions", item: "GPS", year: 1973, img: "/assets/cards/gps.jpg" },
    { theme: "Inventions", item: "Smartphone", year: 1992, img: "/assets/cards/smartphone.jpg" },
    { theme: "Inventions", item: "Clé USB", year: 1998, img: "/assets/cards/cle-usb.jpeg" },
    { theme: "Inventions", item: "Wi-Fi", year: 1997, img: "/assets/cards/wifi.jpg" },
    { theme: "Inventions", item: "Réseaux sociaux", year: 1997, img: "/assets/cards/reseaux-sociaux.jpg" },
    { theme: "Inventions", item: "Cloud computing", year: 2006, img: "/assets/cards/cloud.jpg" },
    { theme: "Inventions", item: "Blockchain", year: 2008, img: "/assets/cards/blockchain.jpg" },
    { theme: "Inventions", item: "Intelligence artificielle", year: 1956, img: "/assets/cards/intelligence-artificielle.jpg" },
    { theme: "Inventions", item: "Voiture électrique", year: 1837, img: "/assets/cards/voiture-elec.jpg" },
    { theme: "Inventions", item: "Impression 3D", year: 1983, img: "/assets/cards/imprimante-3d.jpg" },
    { theme: "Inventions", item: "Voiture autonome", year: 2010, img: "/assets/cards/voiture-autonome.jpg" },
    { theme: "Inventions", item: "Casque de réalité virtuelle", year: 1968, img: "/assets/cards/casque-vr.jpg" },
    { theme: "Inventions", item: "Cryptomonnaie", year: 2009, img: "/assets/cards/cryptomonnaie.jpg" },
    { theme: "Inventions", item: "Drones", year: 1849, img: "/assets/cards/drone.jpg" },
    { theme: "Inventions", item: "Robotique", year: 1954, img: "/assets/cards/robotique.jpg" },
    { theme: "Inventions", item: "Nanotechnologie", year: 1959, img: "/assets/cards/nanotechnologie.jpeg" },
    { theme: "Inventions", item: "Biotechnologie", year: 1973, img: "/assets/cards/biotechnologie.jpeg" },
    { theme: "Inventions", item: "Énergie solaire", year: 1954, img: "/assets/cards/solaire.jpg" },
    { theme: "Inventions", item: "Énergie éolienne", year: 1887, img: "/assets/cards/eolienne.jpg" },
    { theme: "Inventions", item: "Énergie nucléaire", year: 1896, img: "/assets/cards/nucleaire.jpg" },
    { theme: "Inventions", item: "Énergie hydroélectrique", year: 1882, img: "/assets/cards/hydroelec.jpg" },
    { theme: "Inventions", item: "SpaceX", year: 2002, img: "/assets/cards/spacex.jpg" },
    { theme: "Histoire", item: "Premiers Homo sapiens", year: -300000, img: "/assets/cards/homosapien.jpg" },
    { theme: "Histoire", item: "Exploration spatiale", year: 1957, img: "/assets/cards/space-explorer.jpg" },
    { theme: "Inventions", item: "Éclairage LED", year: 1962, img: "/assets/cards/led.jpg" },
    { theme: "Inventions", item: "Montre à quartz", year: 1969, img: "/assets/cards/montre-quartz.jpg" },
    { theme: "Inventions", item: "Souris d'ordinateur", year: 1964, img: "/assets/cards/souris-ordi.jpg" },
    { theme: "Inventions", item: "Code-barres", year: 1974, img: "/assets/cards/code-barres.jpg" },
    { theme: "Inventions", item: "Imprimante à jet d'encre", year: 1976, img: "/assets/cards/imprimante.jpg" },
    { theme: "Inventions", item: "Pile rechargeable", year: 1980, img: "/assets/cards/piles-recharge.jpg" },
    { theme: "Inventions", item: "SMS (Short Message Service)", year: 1992, img: "/assets/cards/sms.jpg" },
    { theme: "Histoire", item: "Apparition des dinosaures", year: -230000000, img: "/assets/cards/dinosaures.jpg" },
    { theme: "Histoire", item: "Chute de l'Empire romain d'Occident", year: 476, img: "/assets/cards/empire-romain.jpg" },
    { theme: "Histoire", item: "Début de la Révolution française", year: 1789, img: "/assets/cards/revolution-fr.jpg" },
    { theme: "Histoire", item: "Découverte de l'Amérique par Christophe Colomb", year: 1492, img: "/assets/cards/amerique-colomb.jpg" },
    { theme: "Histoire", item: "Début de la Renaissance", year: 1400, img: "/assets/cards/renaissance.jpg" },
    { theme: "Histoire", item: "Début de la Guerre de Cent Ans", year: 1337, img: "/assets/cards/guerre-cent-ans.jpg" },
    { theme: "Personnalités", item: "Naissance de Léonard de Vinci", year: 1452, img: "/assets/cards/de-vinci.jpg" },
    { theme: "Personnalités", item: "Naissance de Marie Curie", year: 1867, img: "/assets/cards/marie-curie.jpg" },
    { theme: "Personnalités", item: "Naissance de Gandhi", year: 1869, img: "/assets/cards/gandhi.jpg" },
    { theme: "Personnalités", item: "Naissance de Cléopâtre", year: -69, img: "/assets/cards/cleopatre.jpg" },
    { theme: "Personnalités", item: "Naissance de Albert Einstein", year: 1879, img: "/assets/cards/albert-einstein.jpg" },
    { theme: "Personnalités", item: "Naissance de Napoléon Bonaparte", year: 1769, img: "/assets/cards/bonaparte.jpg" },
    { theme: "Personnalités", item: "Naissance de Nelson Mandela", year: 1918, img: "/assets/cards/mandela.jpg" },
    { theme: "Personnalités", item: "Naissance de Cleisthenes", year: -570, img: "/assets/cards/cleisthenes.jpg" },
    { theme: "Personnalités", item: "Naissance de Jeannne d'Arc", year: 1412, img: "/assets/cards/jeanne-arc.jpg" },
    { theme: "Musique", item: "Bohemian Rhapsody - Queen", year: 1975, img: "/assets/cards/bohemian.jpg" },
    { theme: "Musique", item: "Billie Jean - Michael Jackson", year: 1982, img: "/assets/cards/billiejean.jpg" },
    { theme: "Musique", item: "Like a Rolling Stone - Bob Dylan", year: 1965, img: "/assets/cards/likearollingstone.jpg" },
    { theme: "Musique", item: "Smells Like Teen Spirit - Nirvana", year: 1991, img: "/assets/cards/smellsliketeenspirit.jpg" },
    { theme: "Musique", item: "Stairway to Heaven - Led Zeppelin", year: 1971, img: "/assets/cards/stairwaytoheaven.jpg" },
    { theme: "Musique", item: "Imagine - John Lennon", year: 1971, img: "/assets/cards/imagine.jpg" },
    { theme: "Musique", item: "Thriller - Michael Jackson", year: 1982, img: "/assets/cards/thriller.jpg" },
    { theme: "Musique", item: "Hey Jude - The Beatles", year: 1968, img: "/assets/cards/heyjude.jpg" },
    { theme: "Musique", item: "Let It Be - The Beatles", year: 1970, img: "/assets/cards/letitbe.jpg" },
    { theme: "Musique", item: "Hotel California - Eagles", year: 1977, img: "/assets/cards/hotel-california.jpg" },
    { theme: "Musique", item: "Yesterday - The Beatles", year: 1965, img: "/assets/cards/yesterday.jpg" },
    { theme: "Musique", item: "My Generation - The Who", year: 1965, img: "/assets/cards/mygeneration.jpg" },
    { theme: "Musique", item: "Let's Dance - David Bowie", year: 1983, img: "/assets/cards/letsdance.jpg" }
];

export default cards;