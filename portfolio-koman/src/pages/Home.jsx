import ProjectCard from '../components/ProjectCard.jsx';
import profilePhoto from '../assets/images/photo-profil.jpeg';
const linkedinUrl = 'https://www.linkedin.com/in/TON-PROFIL';
const skills = [
  {
    title: 'GRC, audit et gestion des risques',
    items: [
      'Application de la méthode EBIOS Risk Manager.',
      'Identification et évaluation des risques cyber.',
      'Analyse des écarts de sécurité et des impacts métier.',
      'Construction de plans de traitement et de remédiation.',
      'Connaissance des référentiels ISO 27001, NIST CSF, RGPD et HDS.',
    ],
  },
  {
    title: 'SOC, détection et investigation',
    items: [
      'Analyse de journaux Windows, Linux et réseau.',
      'Investigation d’événements de sécurité avec Splunk et Wazuh.',
      'Analyse des événements Windows utiles à la détection SOC.',
      'Supervision réseau et analyse d’alertes avec Suricata.',
      'Corrélation entre événements, alertes et actions observées.',
    ],
  },
  {
    title: 'Réseaux et sécurité',
    items: [
      'Conception d’architectures LAN, DMZ, SOC et WAN.',
      'Configuration de pare-feu et de règles de filtrage avec pfSense.',
      'Mise en place du NAT, du routage et de la segmentation réseau.',
      'Maîtrise des protocoles TCP/IP, DNS, DHCP et VLAN.',
      'Diagnostic réseau et analyse des communications.',
    ],
  },
  {
    title: 'Systèmes et gestion des identités',
    items: [
      'Installation et administration de Windows Server 2022.',
      'Déploiement de domaines Active Directory avec AD DS et DNS.',
      'Gestion des utilisateurs, groupes et unités organisationnelles.',
      'Création et application de stratégies de sécurité GPO.',
      'Administration de systèmes Linux et analyse des journaux.',
    ],
  },
  {
    title: 'Cloud et virtualisation',
    items: [
      'Audit de configurations de sécurité Microsoft Azure.',
      'Analyse des accès, du stockage et de la journalisation cloud.',
      'Création de laboratoires virtualisés avec VMware et GNS3.',
      'Déploiement de services avec Docker et Docker Compose.',
      'Notions d’administration et de déploiement avec Kubernetes.',
    ],
  },
];

const projects = [
  {
    tag: 'EBIOS RM • GRC • Secteur santé',
    title: 'Analyse de risques EBIOS Risk Manager',
    description:
      'Analyse des risques cyber d’un centre médical fictif ayant permis d’identifier trois scénarios majeurs et de définir un plan de traitement composé de quinze mesures de sécurité priorisées.',
    link: '/projets/ebios-risk-manager',
  },
  {
    tag: 'Microsoft Azure • Audit • GRC Cloud',
    title: 'Audit GRC d’un environnement Microsoft Azure',
    description:
      'Évaluation d’un environnement Azure volontairement vulnérable, identification des écarts de sécurité et production d’un plan de remédiation couvrant les accès, le stockage, le réseau et la journalisation.',
    link: '/projets/audit-azure',
  },
  {
    tag: 'Splunk • Python • Linux • SSH',
    title: 'Analyse SOC de journaux Linux',
    description:
      'Analyse d’un jeu de journaux Linux et SSH avec Python et Splunk afin de détecter les comportements suspects, reconstituer les événements et produire une synthèse d’investigation.',
    link: '/projets/analyse-soc-linux',
  },
  {
    tag: 'Active Directory • GPO • Windows Server',
    title: 'Infrastructure Active Directory sécurisée',
    description:
      'Déploiement d’un domaine Windows avec contrôleur de domaine, poste client, unités organisationnelles, groupes de sécurité, comptes utilisateurs et stratégies GPO.',
    link: '/projets/active-directory',
  },
  {
    tag: 'pfSense • Wazuh • Suricata • SOC',
    title: 'Homelab SOC avec segmentation réseau',
    description:
      'Conception d’un laboratoire SOC segmenté en zones LAN, DMZ et SOC, avec centralisation des événements dans Wazuh, supervision réseau avec Suricata et filtrage avec pfSense.',
    link: '/projets/homelab-soc',
  },
];

function Home() {
  return (
    <main>
      {/* ACCUEIL */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="badge">
              Cybersécurité • GRC • Sécurité opérationnelle 
            </p>

            <h1>KOMAN OHOUO Joseph</h1>

            <h2 className="hero-title">
              Étudiant ingénieur en réseaux et sécurité informatique
            </h2>

            <p className="hero-description">
              Je développe une double compétence en Analyse des risques cyber et
              en cybersécurité opérationnelle à travers des projets appliqués
              en analyse de risques, audit cloud, investigation SOC et
              sécurisation des infrastructures.
            </p>

            <p className="hero-search">
              Je recherche actuellement un stage de fin d’études en
              cybersécurité, notamment dans le conseil, la GRC, l’audit ou les
              opérations SOC.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn primary">
                Découvrir mes projets
              </a>

              <a href="#contact" className="btn ghost">
                Me contacter
              </a>
            </div>
          </div>

          <div className="hero-photo-wrapper">
            <img
              src={profilePhoto}
              alt="KOMAN OHOUO Joseph"
              className="hero-photo"
            />

            <div className="photo-card">
              <strong>recherche de stage de fin d'étude</strong>
            </div>
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section id="about" className="section">
        <div className="section-header">
          <p className="section-kicker">Présentation</p>
          <h2>À propos de moi</h2>
        </div>

        <div className="about-content">
          <p>
            Étudiant en dernière année de cycle ingénieur, spécialisé en
            réseaux et sécurité informatique, je réalise des projets
            reproduisant des situations rencontrées en entreprise : analyse de
            risques, audit de sécurité, investigation SOC, gestion des
            identités et segmentation réseau.
          </p>

          <p>
            Mon objectif est de rejoindre un environnement exigeant dans lequel
            je pourrai contribuer à l’évaluation des risques, à la protection
            des systèmes d’information et à la production de recommandations
            concrètes et directement exploitables.
          </p>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section id="skills" className="section dark-section">
        <div className="section-container">
          <div className="section-header">
            <p className="section-kicker">Expertise</p>
            <h2>Compétences</h2>

            <p className="section-description">
              Des compétences développées à travers ma formation, mes
              laboratoires et mes projets appliqués en cybersécurité.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>

                <ul className="skill-list">
                  {skill.items.map((item) => (
                    <li key={`${skill.title}-${item}`}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projects" className="section">
        <div className="section-header">
          <p className="section-kicker">Réalisations</p>
          <h2>Projets principaux</h2>

          <p className="section-description">
            Une sélection de projets documentés présentant leur contexte, la
            démarche suivie, les résultats obtenus et les livrables produits.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              tag={project.tag}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* EXPÉRIENCES */}
      <section id="experience" className="section dark-section">
        <div className="section-container">
          <div className="section-header">
            <p className="section-kicker">Parcours professionnel</p>
            <h2>Expériences</h2>

            <p className="section-description">
              Une première expérience professionnelle orientée maintenance,
              assistance aux utilisateurs et administration de postes de
              travail.
            </p>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-date">Juil. — Août 2024</span>

              <div className="timeline-content">
                <div className="experience-heading">
                  <div>
                    <h3>Technicien Hardware / Support Informatique</h3>

                    <p className="timeline-location">
                      Centrale Maintenance — Côte d’Ivoire
                    </p>
                  </div>

                  <span className="experience-type">Stage</span>
                </div>

                <ul className="experience-list">
                  <li>
                    Diagnostic et réparation de 40 à 50 ordinateurs en deux
                    mois : pannes matérielles, erreurs de démarrage, lenteurs
                    système et problèmes de configuration.
                  </li>

                  <li>
                    Installation et configuration de 15 à 20 postes Windows et
                    Linux : pilotes, mises à jour, antivirus et logiciels
                    essentiels.
                  </li>

                  <li>
                    Assistance aux utilisateurs sur des incidents courants,
                    avec priorisation des demandes et restitution claire des
                    actions réalisées.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
<section id="contact" className="section">
  <div className="section-header">
    <p className="section-kicker">Contact</p>
    <h2>Me contacter</h2>

    <p className="section-description">
      Je recherche un stage de fin d’études en cybersécurité et reste
      disponible pour échanger au sujet d’une opportunité dans le consulting, la GRC, l'audit,
      le SOC.
    </p>
  </div>

  <div className="contact-box">
    <div className="contact-information">
      <p className="contact-label">Disponible pour un stage</p>

      <h3>KOMAN OHOUO Joseph</h3>

      <p>Étudiant ingénieur en réseaux et sécurité informatique</p>

      <p>
        <strong>Email :</strong>{' '}
        <a href="mailto:komanohouojoseph@gmail.com">
          komanohouojoseph@gmail.com
        </a>
      </p>

      <p>
        <strong>LinkedIn :</strong>{' '}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>

      <p>
        <strong>Localisation :</strong> France
      </p>
    </div>

    <div className="contact-actions">
      <a
        href="mailto:komanohouojoseph@gmail.com"
        className="btn primary"
      >
        Envoyer un message
      </a>
    </div>
  </div>
</section>
    </main>
  );
}

export default Home;