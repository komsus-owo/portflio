const screenshots = [
  {
    title: "Installation des rôles AD DS et DNS",
    src: "/active-directory/images/roles_serveur.png",
    description:
      "Installation des rôles nécessaires au déploiement d’Active Directory et du service DNS.",
  },
  {
    title: "Résolution DNS côté client",
    src: "/active-directory/images/nslookup_client.png",
    description:
      "Vérification de la résolution du domaine starter.local depuis le poste client.",
  },
  {
    title: "Création de l’OU StarterUsers",
    src: "/active-directory/images/creation_ou.png",
    description:
      "Organisation des utilisateurs dans une unité organisationnelle dédiée.",
  },
  {
    title: "Création des utilisateurs",
    src: "/active-directory/images/creation_users.png",
    description:
      "Création de comptes utilisateurs dans Active Directory pour simuler un environnement d’entreprise.",
  },
  {
    title: "Journaux Windows Security",
    src: "/active-directory/images/logs_security.png",
    description:
      "Analyse des événements de sécurité générés par les actions réalisées dans le domaine.",
  },
];

const videos = [
  {
    title: "Installation de Windows Server 2022 — Partie 1",
    src: "/active-directory/videos/installation-windows-server-partie-1.mp4",
    description:
      "Démarrage sur l’image ISO et lancement de l’installation de Windows Server 2022.",
  },
  {
    title: "Installation de Windows Server 2022 — Partie 2",
    src: "/active-directory/videos/installation-windows-server-partie-2.mp4",
    description:
      "Finalisation de l’installation et configuration initiale du compte administrateur.",
  },
  {
    title: "Configuration IP du contrôleur de domaine",
    src: "/active-directory/videos/configuration-ip-dc.mp4",
    description:
      "Configuration réseau de SRV-DC01 et vérification de la connectivité avec le client.",
  },
  {
    title: "Installation des rôles AD DS et DNS",
    src: "/active-directory/videos/installation-ad-ds.mp4",
    description:
      "Installation des rôles nécessaires à la mise en place d’Active Directory.",
  },
  {
    title: "Promotion du serveur en contrôleur de domaine",
    src: "/active-directory/videos/promotion-dc.mp4",
    description:
      "Promotion de SRV-DC01 en contrôleur de domaine et création de la forêt starter.local.",
  },
  {
    title: "Création des utilisateurs",
    src: "/active-directory/videos/creation-utilisateurs.mp4",
    description:
      "Création d’une OU et de comptes utilisateurs dans Active Directory.",
  },
  {
    title: "Ajout de Marie au groupe RDP",
    src: "/active-directory/videos/ajout-marie-rdp.mp4",
    description:
      "Ajout de marie.dupont au groupe Remote Desktop Users pour autoriser l’accès distant.",
  },
];

export default function ActiveDirectoryProject() {
  return (
    <main className="project-page ad-page">
      <section className="project-hero ad-hero">
        <span className="badge">Active Directory • Windows Server • DNS</span>

        <h1>Infrastructure Active Directory complète</h1>

        <p>
          Déploiement d’une infrastructure d’identité Windows avec contrôleur de
          domaine, gestion centralisée des utilisateurs, jonction client et
          analyse des événements de sécurité Windows.
        </p>

        <div className="hero-actions">
          <a
            className="btn primary"
            href="/documents/rapport_active_directory.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Télécharger le rapport
          </a>

          <a className="btn secondary" href="#captures">
            Voir les captures
          </a>

          <a className="btn ghost" href="#videos">
            Voir les vidéos
          </a>
        </div>
      </section>

      <section className="section">
        <span className="section-kicker">Contexte</span>
        <h2>Pourquoi ce projet ?</h2>

        <p className="large-text">
          J’ai réalisé ce projet pour mettre en pratique les bases d’une
          infrastructure d’identité d’entreprise. Active Directory est au cœur de
          nombreux environnements Windows : il permet de centraliser les comptes,
          les ordinateurs, les groupes, les droits et l’authentification des
          utilisateurs.
        </p>

        <p>
          L’objectif était de construire un environnement fonctionnel avec un
          contrôleur de domaine, un poste client joint au domaine, des comptes
          utilisateurs organisés dans une OU, puis d’observer les événements de
          sécurité générés dans les journaux Windows Security.
        </p>

        <div className="project-status">
          <strong>État du projet :</strong> infrastructure Active Directory
          fonctionnelle, documentée et enrichie avec des captures et des
          séquences vidéo de démonstration.
        </div>
      </section>

      <section className="section dark-section">
        <span className="section-kicker">Architecture</span>
        <h2>Environnement déployé</h2>

        <div className="skills-grid">
          <article className="skill-card">
            <h3>SRV-DC01</h3>
            <p>
              Serveur Windows Server 2022 promu en contrôleur de domaine pour
              la forêt <strong>starter.local</strong>.
            </p>
          </article>

          <article className="skill-card">
            <h3>DNS</h3>
            <p>
              Service DNS utilisé pour permettre au client de résoudre le
              domaine et localiser le contrôleur de domaine.
            </p>
          </article>

          <article className="skill-card">
            <h3>WKS-CLIENT01</h3>
            <p>
              Poste client joint au domaine afin de tester l’authentification
              centralisée avec des comptes utilisateurs.
            </p>
          </article>

          <article className="skill-card">
            <h3>Windows Security Logs</h3>
            <p>
              Journaux analysés pour relier les actions Active Directory aux
              Event IDs de sécurité.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <span className="section-kicker">Réalisation</span>
        <h2>Étapes techniques réalisées</h2>

        <div className="ad-timeline">
          <article>
            <span>01</span>
            <h3>Installation de Windows Server 2022</h3>
            <p>
              Création des machines virtuelles et installation de l’environnement
              Windows Server.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Configuration réseau du DC</h3>
            <p>
              Configuration IP du serveur, vérification de la connectivité et
              préparation du rôle DNS.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Installation AD DS et DNS</h3>
            <p>
              Ajout des rôles nécessaires au déploiement de l’annuaire Active
              Directory.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Promotion en contrôleur de domaine</h3>
            <p>
              Création de la forêt Active Directory et du domaine
              <strong> starter.local</strong>.
            </p>
          </article>

          <article>
            <span>05</span>
            <h3>Gestion des utilisateurs</h3>
            <p>
              Création de l’OU StarterUsers, création des comptes et ajout d’un
              utilisateur au groupe RDP.
            </p>
          </article>

          <article>
            <span>06</span>
            <h3>Analyse des événements</h3>
            <p>
              Consultation des journaux Windows Security et corrélation avec les
              actions réalisées.
            </p>
          </article>
        </div>
      </section>

      <section className="section dark-section" id="captures">
        <span className="section-kicker">Preuves visuelles</span>
        <h2>Captures clés du projet</h2>

        <p>
          Ces captures présentent les étapes importantes du projet : installation
          des rôles Active Directory, vérification DNS, création des objets dans
          l’annuaire et analyse des journaux de sécurité Windows.
        </p>

        <div className="capture-grid">
          {screenshots.map((shot) => (
            <article className="project-image-card" key={shot.title}>
              <img className="project-image" src={shot.src} alt={shot.title} />
              <div>
                <h3>{shot.title}</h3>
                <p>{shot.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="videos">
        <span className="section-kicker">Démonstration</span>
        <h2>Séquences vidéo du projet</h2>

        <p>
          Les vidéos ci-dessous montrent les manipulations réalisées pendant le
          projet : installation du serveur, configuration réseau, installation
          d’Active Directory, promotion du contrôleur de domaine et gestion des
          utilisateurs.
        </p>

        <div className="ad-video-grid">
          {videos.map((video) => (
            <article className="ad-video-card" key={video.title}>
              <video controls preload="metadata">
                <source src={video.src} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>

              <div>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <span className="section-kicker">Analyse SOC</span>
        <h2>Événements de sécurité observés</h2>

        <p>
          La partie sécurité du projet repose sur l’analyse des journaux Windows
          Security. Les événements observés permettent de comprendre comment les
          actions d’administration Active Directory laissent des traces
          exploitables dans une logique SOC.
        </p>

        <div className="ad-events-grid">
          <article>
            <h3>4624</h3>
            <p>Connexion réussie d’un utilisateur du domaine.</p>
          </article>

          <article>
            <h3>4720</h3>
            <p>Création d’un compte utilisateur dans Active Directory.</p>
          </article>

          <article>
            <h3>4724</h3>
            <p>Réinitialisation du mot de passe d’un compte utilisateur.</p>
          </article>

          <article>
            <h3>4732</h3>
            <p>Ajout d’un utilisateur à un groupe de sécurité.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <span className="section-kicker">Résultat</span>
        <h2>Ce que ce projet démontre</h2>

        <p>
          Ce projet montre ma capacité à mettre en place une infrastructure
          Active Directory complète, à gérer des identités dans un domaine
          Windows et à exploiter les journaux de sécurité pour comprendre les
          traces générées par les actions d’administration.
        </p>

        <div className="project-status">
          <strong>Compétences mobilisées :</strong> Windows Server 2022, Active
          Directory, AD DS, DNS, jonction domaine, gestion des utilisateurs,
          Event Viewer, analyse des logs Windows Security et supervision SOC.
        </div>
      </section>
    </main>
  );
}