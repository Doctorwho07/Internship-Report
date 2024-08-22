const articles = [
  {
    title: "Interventions Clients et Résolutions de Problèmes",
    description:
      "Cette section couvre les différentes interventions sur site et à distance pour résoudre des problèmes clients, incluant la configuration réseau, la réparation matérielle et les dépannages.",
    photo: "interventions_clients.jpg",
    dateCreated: "2024-03-15",
    theme: "Support Technique",
    content: [
      {
        subtitle: "Intervention client Volkswagen",
        details:
          "Résolution d'un problème de connectivité Wi-Fi dans les locaux de Volkswagen. Mise à jour du firewall pour améliorer la sécurité du réseau, en s'assurant que toutes les règles de sécurité étaient correctement configurées.",
        photo: "volkswagen_wifi.jpg",
      },
      {
        subtitle: "Intervention Dépannage COCHET",
        details:
          "Ajout de plusieurs PC dans le domaine de l'entreprise COCHET, création de sessions utilisateurs personnalisées, et vérification des accès aux ressources réseau partagées.",
        photo: "cochet_setup.jpg",
      },
      {
        subtitle: "Intervention Miroiterie",
        details:
          "Installation complète d'un nouveau poste de travail, incluant PC, écran, clavier, souris, et mise en place des connexions réseau. Formation rapide de l'utilisateur sur les fonctionnalités essentielles.",
        photo: "miroiterie_installation.jpg",
      },
      {
        subtitle: "Intervention Dépannage Villeurbanne",
        details:
          "Démontage d'un PC pour ajout de RAM afin d'améliorer les performances d'une station de travail utilisée pour des tâches intensives. Nettoyage interne du PC pour prévenir les problèmes de surchauffe.",
        photo: "villeurbanne_ram.jpg",
      },
      {
        subtitle: "Support technique à distance",
        details:
          "Diagnostic et résolution de pannes via accès à distance. Utilisation d'un switch pour tester la stabilité d'une configuration réseau avec ipfire3. Vérification des journaux système pour identifier la cause des erreurs.",
        photo: "support_technique.jpg",
      },
      {
        subtitle: "Intervention chez Cochet",
        details:
          "Ajout des derniers utilisateurs dans le domaine, configuration des permissions spécifiques et tests d'accès. Ajustement des politiques de groupe pour aligner les configurations avec les exigences de sécurité de l'entreprise.",
        photo: "cochet_users.jpg",
      },
      {
        subtitle: "Intervention pour erreur d’imprimante",
        details:
          "Diagnostic et résolution d'une erreur d'imprimante réseau, incluant la réinstallation des drivers et la configuration des paramètres d'impression via Group Policy.",
        photo: "imprimante_erreur.jpg",
      },
      {
        subtitle: "Récupération d'anciens PC",
        details:
          "Intervention pour récupérer un lot d'anciens PC destinés à la donation. Vérification de l'état des composants, effacement sécurisé des données et préparation pour leur réutilisation.",
        photo: "recyclage_pc.jpg",
      },
    ],
  },
  {
    title: "Configuration et Déploiement de Matériel",
    description:
      "Cet article détaille les activités liées à la configuration, l’installation et la maintenance du matériel informatique, y compris les serveurs et postes de travail.",
    photo: "config_deploiement.jpg",
    dateCreated: "2024-03-15",
    theme: "Configuration Matériel",
    content: [
      {
        subtitle: "Mise en place de mon PC",
        details:
          "Installation et configuration d'un poste de travail complet incluant un PC, un écran, un clavier, une souris, et les logiciels nécessaires. Réglage des paramètres pour optimiser l'efficacité au travail.",
        photo: "setup_pc.jpg",
      },
      {
        subtitle: "Initialisation des PC client",
        details:
          "Préparation et configuration de nouveaux PC pour un client, incluant l'installation des logiciels, la configuration des comptes utilisateurs, et l'application des paramètres demandés par le client.",
        photo: "initialisation_pc.jpg",
      },
      {
        subtitle: "Test des disques durs serveurs",
        details:
          "Test approfondi des disques durs destinés aux serveurs pour vérifier leur intégrité et leur performance. Récupération des composants intéressants pour une réutilisation future.",
        photo: "test_disques.jpg",
      },
      {
        subtitle: "Assemblage de deux PC",
        details:
          "Assemblage de deux PC, l'un destiné à être un serveur et l'autre un client, incluant l'installation des composants internes et la configuration du BIOS pour optimiser les performances.",
        photo: "assemblage_pc.jpg",
      },
      {
        subtitle: "Installation de PC sur KVM",
        details:
          "Installation de trois PC sur un commutateur KVM, avec trois écrans, un clavier et une souris partagés. Configuration pour permettre un basculement facile entre les machines.",
        photo: "installation_kvm.jpg",
      },
      {
        subtitle: "Montage d’une baie serveur",
        details:
          "Montage complet d'une baie serveur, incluant l'installation des serveurs, du matériel réseau, et la gestion des câbles. Configuration initiale des serveurs pour préparer leur déploiement en production.",
        photo: "montage_baie.jpg",
      },
      {
        subtitle: "Installation de logiciels sur PC portable",
        details:
          "Installation et activation de la suite Office sur un PC portable, ainsi que l'ajout de licences pour d'autres logiciels nécessaires au client.",
        photo: "installation_office.jpg",
      },
      {
        subtitle: "Préparation de mini PC",
        details:
          "Préparation de deux mini PC avec l'ajout de RAM supplémentaire pour répondre aux besoins spécifiques des utilisateurs. Configuration de Windows et installation des drivers.",
        photo: "preparation_mini_pc.jpg",
      },
    ],
  },
  {
    title: "Sauvegarde et Restauration de Données",
    description:
      "Cet article décrit les activités centrées sur les processus de sauvegarde, restauration de données, et la création d'environnements de récupération.",
    photo: "sauvegarde_restoration.jpg",
    dateCreated: "2024-03-15",
    theme: "Sauvegarde et Récupération",
    content: [
      {
        subtitle: "Création de comptes et VPN",
        details:
          "Création d’un compte utilisateur pour le responsable de stage et configuration d'un VPN pour permettre un accès sécurisé à distance aux systèmes de l'entreprise.",
        photo: "creation_vpn.jpg",
      },
      {
        subtitle: "Clés bootables pour serveurs",
        details:
          "Création de clés USB bootables pour l'installation de Windows Server et Windows 10. Tests des installations sur des machines virtuelles pour garantir la stabilité.",
        photo: "cles_bootables.jpg",
      },
      {
        subtitle: "Installation ArcServe SPX",
        details:
          "Installation et configuration du logiciel ArcServe Shadow Protect SPX et d'Image Manager pour gérer les sauvegardes des systèmes critiques de l'entreprise.",
        photo: "installation_arcserve.jpg",
      },
      {
        subtitle: "Création de sauvegardes",
        details:
          "Mise en place d'une sauvegarde incrémentielle continue avec ArcServe, incluant la configuration d'un head start recovery (HSR) pour une récupération rapide en cas de sinistre.",
        photo: "sauvegarde_incre.jpg",
      },
      {
        subtitle: "Lancement des HSR et VM",
        details:
          "Lancement des processus de head start recovery (HSR) et création de machines virtuelles (VM) pour tester la récupération des systèmes. Vérification de l'intégrité des données récupérées.",
        photo: "lancement_hsr.jpg",
      },
      {
        subtitle: "Tests de récupération",
        details:
          "Tests approfondis de récupération de sauvegardes, débogage des machines virtuelles en cas de problème, et contact avec le support ArcServe pour résoudre les anomalies.",
        photo: "tests_recuperation.jpg",
      },
      {
        subtitle: "Documentation technique",
        details:
          "Rédaction de la documentation technique pour la reprise d'activité après sinistre, décrivant les étapes précises pour restaurer les services critiques à partir des sauvegardes.",
        photo: "documentation_technique.jpg",
      },
    ],
  },
  {
    title: "Certifications et Apprentissage",
    description:
      "Cet article regroupe les expériences liées à ta formation, y compris la préparation et les tentatives pour obtenir des certifications.",
    photo: "certifications_apprentissage.jpg",
    dateCreated: "2024-03-15",
    theme: "Formation et Certifications",
    content: [
      {
        subtitle: "Certification ArcServe SPX 360",
        details:
          "Lancement du processus de certification pour ArcServe SPX 360. Réalisation des leçons 13 à 49, avec une concentration sur les meilleures pratiques pour la gestion des sauvegardes.",
        photo: "certification_arcserve.jpg",
      },
      {
        subtitle: "Préparation certification",
        details:
          "Préparation intensive pour la certification ArcServe, incluant la révision des concepts clés et la pratique des simulations d'examen. Premier essai échoué avec 69%, suivi d'une analyse des erreurs.",
        photo: "preparation_certification.jpg",
      },
      {
        subtitle: "Deuxième essai",
        details:
          "Tentative de repasser la certification ArcServe, interrompue par une intervention imprévue. Analyse des nouvelles questions et identification des zones à améliorer.",
        photo: "deuxieme_essai.jpg",
      },
      {
        subtitle: "Cours de cybersécurité",
        details:
          "Formation sur les pratiques de cybersécurité, y compris l'utilisation de l'invite de commande pour changer les mots de passe sans connexion préalable, et d'autres techniques de gestion des mots de passe.",
        photo: "cybersecurite_cours.jpg",
      },
    ],
  },
  {
    title: "Travaux Complémentaires",
    description:
      "Cet article couvre diverses tâches et projets supplémentaires, y compris les travaux de maintenance et les activités annexes.",
    photo: "travaux_complementaires.jpg",
    dateCreated: "2024-03-15",
    theme: "Maintenance et Gestion de Projet",
    content: [
      {
        subtitle: "Nettoyage d'anciens PC",
        details:
          "Nettoyage et maintenance des anciens PC avant leur retrait. Comprend le nettoyage physique, la désinstallation des logiciels obsolètes, et l'effacement des données sensibles.",
        photo: "nettoyage_pc.jpg",
      },
      {
        subtitle: "Gestion des stock de matériel",
        details:
          "Inventaire et gestion des stocks de matériel informatique. Organisation des équipements disponibles pour un accès rapide et efficace lors des interventions.",
        photo: "gestion_stock.jpg",
      },
      {
        subtitle: "Analyse des besoins en matériel",
        details:
          "Analyse des besoins en matériel pour de nouveaux projets, y compris la rédaction des spécifications techniques et la sélection des équipements appropriés.",
        photo: "analyse_besoins.jpg",
      },
    ],
  },
];
export default articles;
