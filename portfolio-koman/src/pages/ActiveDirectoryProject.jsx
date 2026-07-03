const learnings = [
  {
    number: '01',
    title: 'Déployer une infrastructure d’identité',
    description:
      'J’ai appris à installer les rôles AD DS et DNS, à promouvoir un serveur Windows Server 2022 en contrôleur de domaine et à créer une nouvelle forêt Active Directory.',
  },
  {
    number: '02',
    title: 'Structurer un annuaire d’entreprise',
    description:
      'J’ai appris à organiser les comptes dans des unités organisationnelles, à créer des groupes de sécurité et à administrer les utilisateurs de manière centralisée.',
  },
  {
    number: '03',
    title: 'Appliquer des politiques de sécurité',
    description:
      'J’ai compris comment utiliser les GPO pour appliquer des règles communes aux utilisateurs et aux postes, notamment les politiques de mot de passe, de verrouillage et d’audit.',
  },
  {
    number: '04',
    title: 'Intégrer un poste client au domaine',
    description:
      'J’ai appris à configurer le DNS du client, à vérifier la résolution du domaine et à joindre une machine Windows au domaine starter.local.',
  },
  {
    number: '05',
    title: 'Analyser les journaux Windows',
    description:
      'J’ai appris à relier les actions d’administration aux événements enregistrés dans Windows Security, comme une connexion, la création d’un compte ou l’ajout à un groupe.',
  },
  {
    number: '06',
    title: 'Diagnostiquer les erreurs de configuration',
    description:
      'J’ai amélioré ma capacité à rechercher l’origine de problèmes liés au réseau, au DNS, à l’authentification et à la communication entre le client et le contrôleur de domaine.',
  },
];

const results = [
  {
    value: '1',
    label: 'Domaine Active Directory',
    description: 'Forêt et domaine starter.local déployés.',
  },
  {
    value: '1',
    label: 'Contrôleur de domaine',
    description: 'Windows Server 2022 avec AD DS et DNS.',
  },
  {
    value: '1',
    label: 'Poste client intégré',
    description: 'Machine cliente jointe au domaine.',
  },
  {
    value: '3',
    label: 'Unités organisationnelles',
    description: 'Annuaire structuré selon les besoins du laboratoire.',
  },
  {
    value: '3',
    label: 'Groupes de sécurité',
    description: 'Gestion des droits et des accès par groupe.',
  },
  {
    value: '3',
    label: 'GPO de sécurité',
    description: 'Mot de passe, verrouillage et audit des connexions.',
  },
  {
    value: '5',
    label: 'Event IDs étudiés',
    description: 'Événements Windows utiles à une investigation SOC.',
  },
  {
    value: '1',
    label: 'Rapport technique',
    description: 'Procédure, validations et résultats documentés.',
  },
];

const securityEvents = [
  {
    id: '4624',
    title: 'Connexion réussie',
    description:
      'Permet d’identifier une authentification réussie et d’étudier le type de connexion utilisé.',
  },
  {
    id: '4625',
    title: 'Échec de connexion',
    description:
      'Utile pour détecter des erreurs répétées, une tentative de brute force ou l’utilisation de mauvais identifiants.',
  },
  {
    id: '4672',
    title: 'Privilèges spéciaux',
    description:
      'Indique qu’une session a reçu des privilèges élevés, notamment pour un compte administrateur.',
  },
  {
    id: '4720',
    title: 'Création d’un utilisateur',
    description:
      'Trace la création d’un nouveau compte utilisateur dans Active Directory.',
  },
  {
    id: '4732',
    title: 'Ajout à un groupe',
    description:
      'Permet de surveiller l’ajout d’un utilisateur à un groupe de sécurité.',
  },
];

const screenshots = [
  {
    title: 'Installation des rôles AD DS et DNS',
    src: '/projects/active-directory/images/roles_serveur.png',
    description:
      'Installation des rôles nécessaires au déploiement du domaine Active Directory et du service DNS.',
    validation:
      'Cette capture valide la préparation du serveur avant sa promotion en contrôleur de domaine.',
  },
  {
    title: 'Résolution DNS côté client',
    src: '/projects/active-directory/images/nslookup_client.png',
    description:
      'Vérification de la résolution du domaine starter.local depuis le poste client.',
    validation:
      'Cette vérification confirme que le client utilise correctement le serveur DNS du domaine.',
  },
  {
    title: 'Création de l’OU StarterUsers',
    src: '/projects/active-directory/images/creation_ou.png',
    description:
      'Création d’une unité organisationnelle dédiée à la gestion des comptes utilisateurs.',
    validation:
      'Cette capture démontre la structuration logique des objets dans l’annuaire.',
  },
  {
    title: 'Création des utilisateurs',
    src: '/projects/active-directory/images/creation_users.png',
    description:
      'Création de plusieurs comptes utilisateurs pour reproduire un environnement d’entreprise.',
    validation:
      'Cette étape valide la gestion centralisée des identités dans Active Directory.',
  },
  {
    title: 'Analyse des journaux Windows Security',
    src: '/projects/active-directory/images/logs_security.png',
    description:
      'Consultation des événements de sécurité produits par les actions réalisées dans le domaine.',
    validation:
      'Cette capture établit le lien entre l’administration Active Directory et les traces exploitables par un analyste SOC.',
  },
];

const videos = [
  {
    title: 'Installation de Windows Server 2022 — Partie 1',
    src: '/projects/active-directory/videos/installation-windows-server-partie-1.mp4',
    description:
      'Démarrage sur l’image ISO et lancement de l’installation de Windows Server 2022.',
    result:
      'Préparation de la machine virtuelle destinée à devenir le contrôleur de domaine.',
  },
  {
    title: 'Installation de Windows Server 2022 — Partie 2',
    src: '/projects/active-directory/videos/installation-windows-server-partie-2.mp4',
    description:
      'Finalisation de l’installation et configuration initiale du compte administrateur.',
    result:
      'Obtention d’un serveur Windows fonctionnel et prêt à être configuré.',
  },
  {
    title: 'Configuration IP du contrôleur de domaine',
    src: '/projects/active-directory/videos/configuration-ip-dc.mp4',
    description:
      'Configuration réseau de SRV-DC01 et vérification de la communication avec le poste client.',
    result:
      'Mise en place d’un adressage stable nécessaire au fonctionnement d’Active Directory et du DNS.',
  },
  {
    title: 'Installation des rôles AD DS et DNS',
    src: '/projects/active-directory/videos/installation-ad-ds.mp4',
    description:
      'Installation des rôles permettant de déployer l’annuaire et le service de résolution de noms.',
    result:
      'Préparation du serveur pour sa promotion en contrôleur de domaine.',
  },
  {
    title: 'Promotion du serveur en contrôleur de domaine',
    src: '/projects/active-directory/videos/promotion-dc.mp4',
    description:
      'Promotion de SRV-DC01 et création de la forêt starter.local.',
    result:
      'Déploiement d’un domaine Active Directory opérationnel.',
  },
  {
    title: 'Création des utilisateurs',
    src: '/projects/active-directory/videos/creation-utilisateurs.mp4',
    description:
      'Création d’une unité organisationnelle et de plusieurs comptes utilisateurs.',
    result:
      'Mise en place d’une gestion centralisée des identités.',
  },
  {
    title: 'Ajout de Marie au groupe RDP',
    src: '/projects/active-directory/videos/ajout-marie-rdp.mp4',
    description:
      'Ajout du compte marie.dupont au groupe Remote Desktop Users.',
    result:
      'Attribution d’un accès distant à travers l’utilisation d’un groupe de sécurité.',
  },
];

const suggestionSubject =
  "Suggestion d'amélioration — Projet Active Directory";

const suggestionBody = `Bonjour Joseph,

J’ai consulté votre projet Active Directory et je souhaite vous proposer l’amélioration suivante :

[Votre suggestion]

Éléments concernés :

[Architecture, GPO, sécurité, journalisation, documentation...]

Bien cordialement,`;

const suggestionMailto = `mailto:komanohouojoseph@gmail.com?subject=${encodeURIComponent(
  suggestionSubject
)}&body=${encodeURIComponent(suggestionBody)}`;

function ActiveDirectoryProject() {
  return (
    <main className="project-page ad-page">
      {/* NOM DU PROJET */}
      <section
        className="project-hero ad-hero"
        id="project-overview"
      >
        <p className="badge">
          Active Directory • Windows Server • DNS • GPO • SOC
        </p>

        <h1>Infrastructure Active Directory sécurisée</h1>

        <p>
          Déploiement d’un environnement Windows d’entreprise permettant de
          centraliser les identités, d’appliquer des politiques de sécurité et
          d’analyser les traces d’administration dans les journaux Windows.
        </p>

        <nav
          className="project-section-links"
          aria-label="Navigation dans le projet"
        >
          <a className="section-link-btn" href="#context">
            Pourquoi ce projet ?
          </a>

          <a className="section-link-btn" href="#learnings">
            Ce que j’ai appris
          </a>

          <a className="section-link-btn" href="#results">
            Résultats du projet
          </a>
        </nav>

        <div className="hero-actions">
          <a
            className="btn primary"
            href="/documents/rapport_active_directory.pdf"
            download="rapport_active_directory.pdf"
          >
            Télécharger le rapport
          </a>

          <a className="btn secondary" href={suggestionMailto}>
            Proposer une amélioration
          </a>

          <a className="btn ghost" href="#screenshots">
            Voir les preuves
          </a>
        </div>

        <p className="project-feedback-text">
          Ce projet reste évolutif. Les professionnels et passionnés de
          cybersécurité peuvent me transmettre leurs remarques ou proposer des
          améliorations techniques et méthodologiques.
        </p>
      </section>

      {/* POURQUOI CE PROJET */}
      <section className="section" id="context">
        <div className="section-header">
          <p className="section-kicker">Contexte</p>
          <h2>Pourquoi ce projet ?</h2>
        </div>

        <div className="project-context-grid">
          <article className="project-context-main">
            <h3>Reproduire un environnement Windows d’entreprise</h3>

            <p>
              Active Directory constitue le socle de gestion des identités de
              nombreuses organisations. Il permet de centraliser les comptes,
              les ordinateurs, les groupes, les droits d’accès et
              l’authentification des utilisateurs.
            </p>

            <p>
              Une mauvaise configuration de l’annuaire, des privilèges ou des
              politiques de sécurité peut toutefois faciliter une
              compromission, une élévation de privilèges ou un mouvement
              latéral dans le système d’information.
            </p>
          </article>

          <article className="project-objective-card">
            <p className="project-card-label">Objectif du laboratoire</p>

            <h3>Comprendre, sécuriser et superviser</h3>

            <p>
              Mon objectif était de construire un environnement fonctionnel,
              de gérer les identités et les accès, d’appliquer des politiques
              de sécurité, puis d’observer les traces produites dans les
              journaux Windows.
            </p>
          </article>
        </div>
      </section>

      {/* CE QUE J’AI APPRIS */}
      <section
        className="section learning-highlight-section"
        id="learnings"
      >
        <div className="section-container">
          <div className="learning-highlight-header">
            <div>
              <p className="section-kicker">Apprentissages</p>

              <h2>Ce que j’ai appris en réalisant ce projet</h2>
            </div>

          </div>

          <div className="project-learning-grid">
            {learnings.map((learning) => (
              <article
                className="project-learning-card"
                key={learning.number}
              >
                <span className="learning-number">
                  {learning.number}
                </span>

                <h3>{learning.title}</h3>

                <p>{learning.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RÉSULTATS */}
      <section className="section" id="results">
        <div className="section-header">
          <p className="section-kicker">Résultats</p>

          <h2>Résultats du projet</h2>

          <p className="section-description">
            Le laboratoire a abouti à une infrastructure fonctionnelle,
            sécurisée par plusieurs politiques et documentée par des preuves
            techniques.
          </p>
        </div>

        <div className="project-results-grid">
          {results.map((result) => (
            <article
              className="project-result-card"
              key={result.label}
            >
              <strong>{result.value}</strong>

              <h3>{result.label}</h3>

              <p>{result.description}</p>
            </article>
          ))}
        </div>

        <div className="project-result-details">
          <article className="result-detail-card">
            <p className="project-card-label">
              Configuration obtenue
            </p>

            <h3>Un environnement d’identité centralisé</h3>

            <ul className="project-clean-list">
              <li>
                Déploiement du domaine <strong>starter.local</strong>.
              </li>

              <li>
                Installation des rôles <strong>AD DS</strong> et{' '}
                <strong>DNS</strong>.
              </li>

              <li>
                Intégration d’un poste client dans le domaine.
              </li>

              <li>
                Création et organisation des utilisateurs, groupes et unités
                organisationnelles.
              </li>

              <li>
                Application de politiques de mot de passe, de verrouillage et
                d’audit.
              </li>
            </ul>
          </article>

          <article className="result-detail-card">
            <p className="project-card-label">
              Livrables produits
            </p>

            <h3>Des résultats documentés et vérifiables</h3>

            <ul className="project-clean-list">
              <li>Rapport technique du laboratoire.</li>
              <li>Captures d’écran des configurations principales.</li>
              <li>Vidéos de démonstration des différentes phases.</li>
              <li>Inventaire des événements Windows étudiés.</li>
              <li>Synthèse des compétences développées.</li>
            </ul>
          </article>
        </div>

        <div className="security-events-block">
          <div className="security-events-heading">
            <div>
              <p className="section-kicker">Analyse SOC</p>

              <h3>Événements Windows étudiés</h3>
            </div>

            <p>
              Ces événements permettent de relier les actions réalisées dans
              le domaine aux traces exploitables pendant une investigation.
            </p>
          </div>

          <div className="ad-events-grid">
            {securityEvents.map((event) => (
              <article key={event.id}>
                <span className="event-id">{event.id}</span>

                <h3>{event.title}</h3>

                <p>{event.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPTURES */}
      <section
        className="section dark-section"
        id="screenshots"
      >
        <div className="section-container">
          <div className="section-header">
            <p className="section-kicker">Preuves visuelles</p>

            <h2>Captures d’écran</h2>

            <p className="section-description">
              Chaque capture confirme une configuration, un contrôle ou un
              résultat obtenu pendant la réalisation du laboratoire.
            </p>
          </div>

          <div className="capture-grid">
            {screenshots.map((screenshot) => (
              <article
                className="project-image-card"
                key={screenshot.title}
              >
                <img
                  className="project-image"
                  src={screenshot.src}
                  alt={screenshot.title}
                  loading="lazy"
                />

                <div>
                  <h3>{screenshot.title}</h3>

                  <p>{screenshot.description}</p>

                  <p className="media-validation">
                    <strong>Résultat validé :</strong>{' '}
                    {screenshot.validation}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VIDÉOS */}
      <section className="section" id="videos">
        <div className="section-header">
          <p className="section-kicker">Démonstrations</p>

          <h2>Vidéos du projet</h2>

          <p className="section-description">
            Ces séquences montrent les principales manipulations réalisées,
            depuis l’installation du serveur jusqu’à la gestion des
            utilisateurs et des droits.
          </p>
        </div>

        <div className="ad-video-grid">
          {videos.map((video) => (
            <article
              className="ad-video-card"
              key={video.title}
            >
              <video controls preload="metadata">
                <source src={video.src} type="video/mp4" />

                Votre navigateur ne prend pas en charge la lecture de cette
                vidéo.
              </video>

              <div>
                <h3>{video.title}</h3>

                <p>{video.description}</p>

                <p className="media-validation">
                  <strong>Résultat visible :</strong>{' '}
                  {video.result}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="project-final-message">
          <div>
            <p className="project-card-label">
              Projet évolutif
            </p>

            <h3>Vous avez une suggestion technique ?</h3>

            <p>
              Je reste ouvert aux retours sur l’architecture, les GPO, le
              durcissement, la supervision ou les scénarios de détection qui
              pourraient enrichir ce laboratoire.
            </p>
          </div>

          <a className="btn secondary" href={suggestionMailto}>
            Proposer une amélioration
          </a>
        </div>
      </section>
    </main>
  );
}

export default ActiveDirectoryProject;