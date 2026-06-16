import ProjectCard from '../components/ProjectCard.jsx';
import profilePhoto from '../assets/images/photo-profil.jpeg';
import cvFile from '../assets/documents/cv_koman.pdf';
function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
            <div className="hero-text">
                <p className="badge">Réseaux • Cybersécurité • Développement • Systèmes</p>
                <h1>Portfolio de KOMAN OHOUO Joseph</h1>
                <p>Étudiant ingénieur en Réseaux et Sécurité Informatique, je construis des projets
        autour des systèmes, des réseaux, de la cybersécurité, du développement web
        et des infrastructures informatiques.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn primary">Découvrir mes projets</a>
                    <a href={cvFile} download className="btn secondary">Télécharger mon CV</a>
                    <a href="#contact" className="btn ghost">Me contacter</a>
                </div>
            </div>

            <div className="hero-photo-wrapper">
                <img src={profilePhoto} alt="KOMAN OHOUO Joseph" className="hero-photo" />
                <div className="photo-card">
                <span>Profil</span>
                <strong>Ingénieur réseaux & cybersécurité</strong>
                </div>
            </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-header">
          <p className="section-kicker">Présentation</p>
          <h2>À propos de moi</h2>
        </div>

        <p className="large-text">
          Je suis étudiant ingénieur en Réseaux et Sécurité Informatique. Je m’intéresse
          particulièrement à l’administration systèmes, à la sécurité réseau, aux SOC,
          aux SIEM, aux IDS/IPS, mais aussi au développement d’applications web et mobiles.
        </p>

        <p>
          Mon objectif est de construire des projets concrets, documentés et proches de
          situations réelles afin de renforcer mes compétences techniques et de valoriser
          ma progression.
        </p>
      </section>

      <section id="skills" className="section dark-section">
        <div className="section-header">
          <p className="section-kicker">Compétences</p>
          <h2>Domaines techniques</h2>
        </div>

        <div className="skills-grid">
  <div className="skill-card">
    <h3>Réseaux & segmentation</h3>
    <ul className="skill-list">
      <li>Conception d’architectures LAN, DMZ, SOC et WAN.</li>
      <li>Configuration de règles firewall avec pfSense.</li>
      <li>Mise en place du NAT, du routage et du filtrage inter-zones.</li>
      <li>Tests de connectivité et diagnostic réseau avec ping, ipconfig, nslookup.</li>
    </ul>
  </div>

  <div className="skill-card">
    <h3>Cybersécurité opérationnelle</h3>
    <ul className="skill-list">
      <li>Analyse d’alertes, de journaux système et d’événements de sécurité.</li>
      <li>Compréhension du rôle des IDS/IPS, SIEM et outils de supervision.</li>
      <li>Corrélation entre actions techniques et traces observées dans les logs.</li>
      <li>Détection d’attaques réseau de base et exploitation de vulnérabilités.</li>
    </ul>
  </div>

  <div className="skill-card">
    <h3>Systèmes & identité</h3>
    <ul className="skill-list">
      <li>Installation et configuration de Windows Server 2022.</li>
      <li>Déploiement d’un domaine Active Directory avec AD DS et DNS.</li>
      <li>Création d’OU, de comptes utilisateurs et gestion des droits de base.</li>
      <li>Administration Linux, services réseau, Apache et journaux système.</li>
    </ul>
  </div>

  <div className="skill-card">
    <h3>Documentation et Développement </h3>
    <ul className="skill-list">
      <li>Développement d’interfaces web avec React, JavaScript, HTML et CSS, node.js.</li>
      <li>bonne connaissance de python pour le scripting ou le developpement.</li>
      <li>Rédaction de rapports techniques structurés et exploitables.</li>
      
    </ul>
  </div>
</div>
</section>

      <section id="projects" className="section">
        <div className="section-header">
          <p className="section-kicker">Réalisations</p>
          <h2>Mes projets</h2>
        </div>

        <div className="projects-grid">
          <ProjectCard
            tag="Active Directory • Windows Server • DNS"
            title="Infrastructure Active Directory complète"
            description="Déploiement d’un domaine Windows avec contrôleur de domaine, gestion des utilisateurs, jonction client et analyse des événements de sécurité Windows."
            link="/projets/active-directory"
          />
          
          <ProjectCard
            tag="Cybersécurité • Réseau • SOC"
            title="Homelab SOC Niveau 2"
            description="Mise en place d’un laboratoire SOC avec pfSense, Wazuh, Suricata, LAN, DMZ, SOC, serveur web Ubuntu et machine attaquante Parrot."
            link="/projets/homelab-soc"
          />
          
        </div>
      </section>

      <section id="contact" className="section dark-section">
        <div className="section-header">
          <p className="section-kicker">Contact</p>
          <h2>Me contacter</h2>
        </div>

        <p>
          Je suis ouvert aux opportunités de stage, projets techniques et collaborations
          dans les domaines des systèmes, réseaux et cybersécurité.
        </p>

        <div className="contact-box">
          <p>Email : <strong>komanohouojoseph@gmail.com</strong></p>
          <p>Localisation : France</p>
        </div>
      </section>
    </main>
  );
}

export default Home;