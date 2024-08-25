const projects = [
  {
    id: 0,
    theme: "Infrastructure Réseau",
    image: "/customer/VW/VW-Baie.jpg",
    posts: [
      {
        projet: "Installation de PC sur KVM",
        date: "11/07/2024 - 12/07/2024",
        statut: "Terminé",
        logiciels: "Windows",
        problemes:
          "Pour commencer mon stage, je devais configurer 3 PC et les utiliser simultanément. Je ne voulais pas débrancher à chaque fois ma souris, mon clavier et mon écran.",
        solutions:
          "J'ai découvert les KVM, un dispositif permettant d'utiliser plusieurs ordinateurs avec un seul clavier, moniteur et souris. Pour améliorer ma productivité, j'ai tout de même conservé 3 écrans distincts.",
        connaissances:
          "J'ai appris à utiliser cet outil, le contrôler par le clavier et comprendre les différents canaux.",
        image: "/work/kvm.png",
      },
      {
        projet: "Mise en place du serveur pour ArcServe",
        date: "12/07/2024",
        statut: "Terminé",
        logiciels: "ArcServe SPX, Windows Server",
        problemes:
          "Ma mission principale durant mon stage était de réussir à restaurer entièrement la sauvegarde d'une machine, incluant les données, les logiciels, les périphériques et le système d'exploitation. La société CIMRA utilise ArcServe pour gérer les sauvegardes, j'ai donc installé tous les logiciels nécessaires sur les PC clients et serveurs.",
        solutions:
          "Pour effectuer les restaurations, j'ai configuré un serveur et y ai installé les outils ArcServe nécessaires : Image Manager, ArcServe ShadowProtect, etc.",
        connaissances:
          "J'ai appris à installer et configurer un serveur, mettre en place les outils et analyser les logs d'installation.",
        image: "/work/arcserve-installation.png",
      },
      {
        projet: "Création de clés bootables Win 10 / 11 / srv 2022",
        date: "10/07/2024",
        statut: "Terminé",
        logiciels: "Windows",
        problemes: "Mes 3 PC étaient vierges, sans OS.",
        solutions:
          "J'ai donc configuré des clés bootables et installé les OS nécessaires pour chaque machine.",
        connaissances:
          "J'ai appris à configurer une clé pour la rendre bootable et à installer Windows Server.",
        image: "/work/cle-usb.png",
      },
      {
        projet:
          "Mise en place d'un PC et configuration réseau Ethernet pour un client",
        date: "08/07/2024",
        statut: "Terminé",
        logiciels: "Windows, NINITE",
        problemes:
          "Le client souhaitait installer un employé dans un bureau tout neuf. Cependant, aucun PC n'était présent et les ports Ethernet n'ont pas été testés après leur installation.",
        solutions:
          "Nous avons configuré et installé l'ordinateur, l'onduleur et les périphériques. Les ports Ethernet n'étaient pas reliés, avec l'accord du responsable, nous avons récupéré la connexion d'un autre poste pour la transférer vers ce nouveau poste.",
        connaissances:
          "J'ai appris l'importance d'un onduleur et son rôle, ainsi que comment reconnaître un port Ethernet jusqu'à sa terminaison dans la baie.",
        image: "/customer/Baie-serveur.jpg",
      },
      {
        projet: "Remplacement d'un switch",
        date: "23/07/2024",
        statut: "Terminé",
        logiciels: "Switch",
        problemes: "Le switch n'avait plus de ports Ethernet disponibles.",
        solutions:
          "Nous avons changé le switch pour un modèle plus grand et rebranché toutes les connexions.",
        connaissances:
          "J'ai compris l'importance d'anticiper les besoins futurs pour éviter au maximum les changements.",
        image: "/work/switch-24ports+4.jpg",
      },
    ],
  },
  {
    id: 1,
    theme: "Cybersécurité",
    image: "/work/openvpn-pfsense.png",
    posts: [
      {
        projet: "Création d'un VPN avec certificat pour accès à distance",
        date: "25/07/2024",
        statut: "Terminé",
        logiciels: "pfSense, OpenVPN",
        problemes:
          "Pour effectuer mes restaurations, j'avais besoin d'accéder aux dossiers de sauvegarde des clients présents sur le serveur.",
        solutions:
          "Pour cela, nous avons mis en place un VPN et une règle de firewall pour me permettre d'y accéder.",
        connaissances:
          "J'ai appris à configurer un VPN, à créer un utilisateur et à lui attribuer des autorisations sur pfSense.",
        image: "/work/openvpn-pfsense.png",
      },
      {
        projet: "Cours de cybersécurité",
        date: "26/07/2024",
        statut: "Terminé",
        logiciels: "Windows",
        problemes:
          "Je souhaite m'orienter en cybersécurité, mais mes connaissances sont faibles.",
        solutions:
          "Mon responsable de stage, Antoine, est également professeur en cybersécurité. Il m'a permis de comprendre les enjeux, les vulnérabilités, et m'a donné une nouvelle vision des choses.",
        connaissances:
          "J'ai appris à changer le mot de passe de session d'un utilisateur sans avoir accès à sa session, j'ai appris à faire du phishing et à retrouver des mots de passe à partir de données personnelles.",
        image: "/work/backup-job.png",
      },
    ],
  },
  {
    id: 2,
    theme: "Support Technique",
    image: "/work/Atelier.jpg",
    posts: [
      {
        projet: "Intervention client",
        date: "01/07/2024 - 09/08/2024",
        statut: "Terminé",
        logiciels: "Windows, Firewall, VPN",
        problemes:
          "Le client a subi plusieurs changements de fournisseur internet, passant de StarLink, à Orange ADSL et clé 4G, car il était impossible d'obtenir un débit convenable pour son entreprise.",
        solutions:
          "La fibre étant arrivée, le technicien Orange devait simplement l'installer et remettre les câbles. Pendant ce temps, les nouveaux équipements étaient prêts à être installés et l'intervention consistait à mettre en place le firewall. L'équipement étant défaillant, un technicien devait repasser pour le vérifier et si besoin en commander un nouveau. Notre intervention s'est soldée par une mise à jour des équipements déjà présents.",
        connaissances:
          "J'ai appris la posture professionnelle à adopter lors d'une intervention, l'importance de connaître toutes les interventions précédentes et de communiquer avec le responsable de ce qui est mis en œuvre pour son entreprise.",
        image: "/customer/PC-asso lyon.jpg",
      },
      {
        projet: "Diagnostic de pannes à distance",
        date: "01/07/2024 - 09/08/2024",
        statut: "Terminé",
        logiciels: "Helper.exe, Windows",
        problemes:
          "Débit internet faible, impossibilité d'imprimer, mot de passe perdu, gestion de compte utilisateur.",
        solutions:
          "Pour résoudre des problèmes à distance, CIMRA utilise deux logiciels : Atera et Helper.exe. Cela permet de prendre le contrôle à distance, de manière sécurisée et consentie. Pour le débit internet, un petit test de rapidité et une analyse du flux réseau ont démontré un flux normal, mais une consommation trop élevée sur l'ordinateur de l'employé. Les problèmes d'impression ont été résolus par un redémarrage de l'imprimante. Les mots de passe ont pu être réinitialisés depuis l'AD et les comptes utilisateurs créés ou supprimés en fonction du besoin.",
        connaissances:
          "J'ai appris que la plupart des problèmes sont communs et très souvent faciles à résoudre. Il faut simplement garder en tête que nos clients ne sont pas informaticiens et que chacun a son corps de métier. J'ai appris à créer, supprimer, modifier des utilisateurs et des groupes depuis l'AD.",
        image: "/work/helper.png",
      },
      {
        projet: "Analyse des logs suite à des pertes de connexion",
        date: "26/07/2024",
        statut: "Terminé",
        logiciels: "SSMS, Windows",
        problemes:
          "Un client avait des problèmes de débit internet. L'entreprise a eu des coupures d'accès au serveur à deux reprises sur des créneaux de 2 heures.",
        solutions:
          "Nous avons analysé les logs du serveur et des équipements réseaux. Finalement, il s'est avéré qu'il s'agissait d'une mise à jour du serveur et du firewall.",
        connaissances:
          "J'ai appris à diagnostiquer des pertes de connexion avec des outils comme SSMS.",
        image: "/work/Setup-travail.jpg",
      },
      {
        projet: "Déballage de commandes et ajout de RAM",
        date: "01/07/2024 - 09/08/2024",
        statut: "Terminé",
        logiciels: "Windows",
        problemes:
          "CIMRA passe des commandes d'ordinateurs, de composants et de périphériques. Cependant, certains clients demandent des modifications dans les configurations.",
        solutions:
          "Pour répondre aux besoins des clients, j'ai dû démonter des ordinateurs et rajouter des barrettes de RAM en faisant particulièrement attention à la version, à la vitesse et en ajoutant le dissipateur thermique.",
        connaissances:
          "J'ai appris à démonter des mini-PC, des PC all-in-one et à identifier des barrettes de RAM.",
        image: "/customer/reception.jpg",
      },
    ],
  },
  {
    id: 3,
    theme: "Maintenance Matériel",
    image: "/customer/PC-fixe-composants.jpg",
    posts: [
      {
        projet: "Test des disques durs serveurs S.M.A.R.T",
        date: "09/07/2024",
        statut: "Terminé",
        logiciels: "Windows, CrystalDisk, Dell Data Center",
        problemes:
          "Avant d'effectuer une restauration de serveur, il est important de s'assurer que les disques durs sont en bon état. Une restauration sur des disques défaillants peut entraîner des pertes de données.",
        solutions:
          "J'ai utilisé CrystalDisk et le Data Center de Dell pour évaluer la santé des disques durs.",
        connaissances:
          "J'ai appris à utiliser ces outils et à identifier les indicateurs de santé S.M.A.R.T pour déterminer si un disque est en bon état ou doit être remplacé.",
        image: "/work/hd-tune/test.png",
      },
      {
        projet: "Remplacement de composants défectueux",
        date: "08/07/2024 - 09/07/2024",
        statut: "Terminé",
        logiciels: "Windows",
        problemes:
          "Un des serveurs présentait des signes de défaillance matérielle, avec des erreurs fréquentes et des redémarrages inattendus.",
        solutions:
          "Après diagnostic, j'ai remplacé les composants défectueux (RAM et alimentation) et effectué un test pour vérifier la stabilité du système.",
        connaissances:
          "J'ai appris à diagnostiquer des problèmes matériels et à effectuer un remplacement de composants critiques dans un environnement serveur.",
        image: "/customer/PC-fixe-composants.jpg",
      },
    ],
  },
  {
    id: 4,
    theme: "Certification",
    image: "/work/arcserve-spx.png",
    posts: [
      {
        projet: "Passage de la certification ArcServe",
        date: "01/07/2024",
        statut: "en cours",
        logiciels: "Windows, ArcServe",
        problemes:
          "Avant d'effectuer une restauration de serveur, il est important de s'assurer que les disques durs sont en bon état. Une restauration sur des disques défaillants peut entraîner des pertes de données.",
        solutions:
          "J'ai utilisé CrystalDisk et le Data Center de Dell pour évaluer la santé des disques durs.",
        connaissances:
          "J'ai appris à utiliser ces outils et à identifier les indicateurs de santé S.M.A.R.T pour déterminer si un disque est en bon état ou doit être remplacé.",
        image: "/work/hd-tune/test.png",
      },
      {
        projet: "Remplacement de composants défectueux",
        date: "08/07/2024 - 09/07/2024",
        statut: "Terminé",
        logiciels: "Windows",
        problemes:
          "Pour réussir a faire mes restauration en cas d'incident je devais connaitre le logiciel sur lequel je travaille. ArcServe propose des leçons et des certifications, pour reussir il faut 80%",
        solutions:
          "J'ai donc passer la certification ArcServe, que j'ai raté à trois reprises dont la dernière à 1% près.",
        connaissances:
          "j'ai malgre tout appris a me servir des outils ArcServe en crossplateform et je suis capable d'effectuer une sauvegarde incrémentielle auto-réparatrice ainsi que la restaurée. Il me reste un essai que je ferai apres avoir continué mes recherches.",
        image: "/customer/PC-fixe-composants.jpg",
      },
    ],
  },
];

export default projects;
