function SocProject() {
  return (
    <main className="project-page">
      <section className="project-hero">
        <p className="badge">Projet cybersécurité</p>
        <h1>Homelab SOC Niveau 2</h1>
        <p>
          Mise en place d’une architecture de supervision et de détection basée sur
          pfSense, Wazuh et Suricata, avec segmentation LAN, DMZ, SOC et WAN.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-kicker">Contexte</p>
          <h2>Objectif du projet</h2>
        </div>

        <p>
          L’objectif de ce projet est de simuler une infrastructure d’entreprise segmentée,
          avec un serveur web exposé dans une DMZ, des postes internes dans un LAN,
          un réseau SOC dédié à la supervision, et une machine attaquante placée côté WAN.
        </p>

        <p>
          Le projet permet de travailler sur la configuration réseau, les règles firewall,
          la supervision des endpoints, la détection réseau et la documentation technique.
        </p>
      </section>

      <section className="section dark-section">
        <div className="section-header">
          <p className="section-kicker">Architecture</p>
          <h2>Plan d’adressage</h2>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Zone</th>
                <th>Machine</th>
                <th>Adresse IP</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>LAN</td><td>pfSense LAN</td><td>192.168.10.1</td></tr>
              <tr><td>LAN</td><td>Windows 10</td><td>192.168.10.2</td></tr>
              <tr><td>LAN</td><td>Ubuntu Client</td><td>192.168.10.3</td></tr>
              <tr><td>DMZ</td><td>pfSense DMZ</td><td>192.168.20.1</td></tr>
              <tr><td>DMZ</td><td>Ubuntu Web Server</td><td>192.168.20.10</td></tr>
              <tr><td>SOC</td><td>pfSense SOC</td><td>192.168.30.1</td></tr>
              <tr><td>SOC</td><td>Admin SOC</td><td>192.168.30.2</td></tr>
              <tr><td>SOC</td><td>Wazuh Server</td><td>192.168.30.10</td></tr>
              <tr><td>WAN</td><td>pfSense WAN</td><td>DHCP</td></tr>
              <tr><td>WAN</td><td>Parrot Security</td><td>DHCP</td></tr>
            </tbody>
          </table>
        </div>

        <div className="image-placeholder">
          Capture à ajouter : schéma de l’architecture LAN / DMZ / SOC
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-kicker">Technologies</p>
          <h2>Outils utilisés</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>pfSense</h3>
            <p>Pare-feu central, routage, NAT, filtrage inter-zones.</p>
          </div>

          <div className="skill-card">
            <h3>Wazuh</h3>
            <p>SIEM/XDR pour la supervision des endpoints et la centralisation des alertes.</p>
          </div>

          <div className="skill-card">
            <h3>Suricata</h3>
            <p>IDS/IPS réseau installé sur pfSense pour détecter les scans et attaques réseau.</p>
          </div>

          <div className="skill-card">
            <h3>Ubuntu / Windows / Parrot</h3>
            <p>Machines supervisées, serveur web DMZ et machine attaquante.</p>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-header">
          <p className="section-kicker">Sécurité réseau</p>
          <h2>Règles firewall</h2>
        </div>

        <p>
          Les règles firewall ont été définies selon le principe du moindre privilège.
          Le WAN ne peut accéder qu’au serveur web DMZ. Le LAN peut accéder aux services
          nécessaires. La DMZ ne peut pas accéder librement au LAN ou au SOC.
        </p>

        <div className="capture-grid">
          <div className="image-placeholder">Capture à ajouter : règles WAN</div>
          <div className="image-placeholder">Capture à ajouter : règles LAN</div>
          <div className="image-placeholder">Capture à ajouter : règles DMZ</div>
          <div className="image-placeholder">Capture à ajouter : règles SOC</div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-kicker">Supervision</p>
          <h2>Agents Wazuh</h2>
        </div>

        <p>
          Des agents Wazuh ont été installés sur les machines du LAN afin de transmettre
          les événements au serveur Wazuh situé dans le réseau SOC.
        </p>

        <ul className="clean-list">
          <li>Ubuntu LAN : agent actif sur 192.168.10.3</li>
          <li>Windows 10 LAN : agent installé sur 192.168.10.2</li>
          <li>Serveur web DMZ : agent prévu sur 192.168.20.10</li>
        </ul>

        <div className="capture-grid">
          <div className="image-placeholder">Capture à ajouter : agent Ubuntu actif</div>
          <div className="image-placeholder">Capture à ajouter : agent Windows actif</div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-header">
          <p className="section-kicker">Détection réseau</p>
          <h2>Suricata sur pfSense</h2>
        </div>

        <p>
          Suricata est installé directement sur pfSense afin d’analyser les flux réseau
          traversant le pare-feu, notamment entre le WAN et la DMZ. Dans un premier temps,
          Suricata est utilisé en mode IDS pour observer les alertes sans bloquer automatiquement
          le trafic.
        </p>

        <div className="capture-grid">
          <div className="image-placeholder">Capture à ajouter : installation Suricata</div>
          <div className="image-placeholder">Capture à ajouter : interface WAN surveillée</div>
          <div className="image-placeholder">Capture à ajouter : interface DMZ surveillée</div>
          <div className="image-placeholder">Capture à ajouter : alertes Suricata</div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-kicker">Résultats</p>
          <h2>Ce que ce projet démontre</h2>
        </div>

        <ul className="clean-list">
          <li>Conception d’une architecture réseau segmentée.</li>
          <li>Configuration de règles firewall inter-zones avec pfSense.</li>
          <li>Déploiement d’un serveur web dans une DMZ.</li>
          <li>Supervision des machines avec Wazuh.</li>
          <li>Préparation d’une détection réseau avec Suricata.</li>
          <li>Documentation technique d’un projet cybersécurité complet.</li>
        </ul>
      </section>
    </main>
  );
}

export default SocProject;