function ImageCard({ src, title, description }) {
  return (
    <article className="project-image-card">
      <img src={src} alt={title} className="project-image" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

function SocProject() {
  const firewallRules = [
    {
      zone: 'WAN',
      role: 'Exposer uniquement le serveur web DMZ via NAT et bloquer les accès directs vers le LAN et le SOC.',
    },
    {
      zone: 'LAN',
      role: 'Autoriser les postes internes à accéder au serveur web DMZ et à envoyer leurs événements vers Wazuh.',
    },
    {
      zone: 'DMZ',
      role: 'Permettre au serveur web de sortir vers Internet et de communiquer avec Wazuh, sans accès libre au LAN.',
    },
    {
      zone: 'SOC',
      role: 'Limiter l’accès aux outils de supervision : Wazuh, pfSense et DNS nécessaires.',
    },
  ];

  return (
    <main className="project-page">
      <section className="project-hero">
        <p className="badge">Cybersécurité • Réseau • Supervision</p>
        <h1>Homelab SOC Niveau 2</h1>
        <p>
          Première version fonctionnelle d’un laboratoire SOC personnel basé sur une
          architecture segmentée LAN / DMZ / SOC / WAN, avec pfSense, Wazuh et Suricata.
        </p>

        <div className="hero-actions">
          <a href="/documents/rapport_homelab_soc.pdf" className="btn primary" download>
            Télécharger le rapport
          </a>
          <a href="#captures" className="btn secondary">
            Voir les captures
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-kicker">Contexte</p>
          <h2>Pourquoi ce projet ?</h2>
        </div>

        <p>
          J’ai commencé ce lab pour mettre en pratique des notions que l’on retrouve
          dans un environnement de sécurité réel : segmentation réseau, règles firewall,
          exposition contrôlée d’un serveur, supervision des machines et détection réseau.
        </p>

        <p>
          Le but n’était pas de faire un SOC complet dès le départ, mais de construire
          une base solide, compréhensible et améliorable. Cette version 1 me sert donc
          de fondation avant d’ajouter plus tard d’autres outils comme Zeek, TheHive,
          Cortex, Shuffle ou MISP.
        </p>

        <div className="project-status">
          <strong>État du projet :</strong> version 1 fonctionnelle, documentée et prête à être
          présentée dans le portfolio. Le projet sera complété progressivement.
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-header">
          <p className="section-kicker">Architecture</p>
          <h2>Organisation du lab</h2>
        </div>

        <p>
          L’architecture est divisée en quatre zones. pfSense joue le rôle de point
          central entre ces réseaux et applique les règles de filtrage.
        </p>

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

        <div className="single-image-wrapper">
          <ImageCard
            src="/soc/architecture_soc.png"
            title="Architecture du laboratoire"
            description="Vue globale de la segmentation LAN, DMZ, SOC et WAN."
          />
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
            <p>Pare-feu central, routage, NAT, DNS et filtrage entre les zones.</p>
          </div>

          <div className="skill-card">
            <h3>Wazuh</h3>
            <p>Supervision des endpoints, collecte des événements et dashboard de sécurité.</p>
          </div>

          <div className="skill-card">
            <h3>Suricata</h3>
            <p>IDS réseau installé sur pfSense pour analyser le trafic et générer des alertes.</p>
          </div>

          <div className="skill-card">
            <h3>Ubuntu / Windows / Parrot</h3>
            <p>Serveur web, postes supervisés et machine utilisée pour les tests côté WAN.</p>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-header">
          <p className="section-kicker">pfSense</p>
          <h2>Règles firewall</h2>
        </div>

        <p>
          Les règles ont été construites avec une logique de moindre privilège :
          on autorise seulement ce qui est nécessaire, puis on bloque le reste.
        </p>

        <div className="projects-grid">
          {firewallRules.map((rule) => (
            <article className="project-card" key={rule.zone}>
              <span className="badge">{rule.zone}</span>
              <h3>Règles {rule.zone}</h3>
              <p>{rule.role}</p>
            </article>
          ))}
        </div>

        <div className="capture-grid" id="captures">
          <ImageCard
            src="/soc/regles_wan.png"
            title="Règles WAN"
            description="Exposition contrôlée du serveur web DMZ et blocage des accès directs vers LAN/SOC."
          />

          <ImageCard
            src="/soc/regles_lan.png"
            title="Règles LAN"
            description="Accès au serveur web DMZ, DNS, Internet et communication des agents vers Wazuh."
          />

          <ImageCard
            src="/soc/regles_dmz.png"
            title="Règles DMZ"
            description="Communication du serveur web DMZ vers Wazuh et blocage du reste."
          />

          <ImageCard
            src="/soc/regles_soc.png"
            title="Règles SOC"
            description="Accès limité à Wazuh, pfSense et aux flux nécessaires."
          />
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-kicker">DMZ</p>
          <h2>Serveur web exposé</h2>
        </div>

        <p>
          Le serveur Ubuntu placé dans la DMZ héberge une page web personnalisée.
          Cette page remplace la page Apache par défaut et permet de montrer clairement
          le rôle du serveur dans l’architecture.
        </p>

        <div className="single-image-wrapper">
          <ImageCard
            src="/soc/page_web_dmz_personnalisee.png"
            title="Page web DMZ"
            description="Serveur web Ubuntu accessible depuis le WAN via la règle NAT de pfSense."
          />
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-header">
          <p className="section-kicker">Supervision</p>
          <h2>Agents Wazuh</h2>
        </div>

        <p>
          Wazuh est installé dans le réseau SOC. Les agents sont déployés sur les
          machines supervisées afin de transmettre les événements au serveur Wazuh.
        </p>

        <ul className="clean-list">
          <li>Ubuntu LAN : agent actif sur 192.168.10.3</li>
          <li>Windows 10 LAN : agent actif sur 192.168.10.2</li>
          <li>Serveur web DMZ : agent installé sur 192.168.20.10</li>
        </ul>

        <div className="capture-grid">
          <ImageCard
            src="/soc/agents_wazuh_actifs.png"
            title="Agents Wazuh"
            description="Vue des agents supervisés dans le dashboard Wazuh."
          />

          <ImageCard
            src="/soc/wazuh_windows_logon_success_t1078.png"
            title="Événements Windows"
            description="Exemple d’événements Windows remontés dans Wazuh et associés à MITRE ATT&CK."
          />
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-kicker">Détection réseau</p>
          <h2>Suricata sur pfSense</h2>
        </div>

        <p>
          Suricata a été installé directement sur pfSense. Pour cette première version,
          il est utilisé en mode IDS : il détecte et journalise les alertes, mais ne
          bloque pas automatiquement les flux.
        </p>

        <div className="capture-grid">
          <ImageCard
            src="/soc/suricata_package_installed.png"
            title="Installation Suricata"
            description="Suricata installé depuis le gestionnaire de paquets pfSense."
          />

          <ImageCard
            src="/soc/suricata_rules_update_success.png"
            title="Règles Suricata"
            description="Téléchargement des règles de détection."
          />

          <ImageCard
            src="/soc/suricata_interfaces_running.png"
            title="Interfaces surveillées"
            description="Suricata actif sur les interfaces pfSense en mode détection."
          />

          <ImageCard
            src="/soc/suricata_alerts.png"
            title="Alertes Suricata"
            description="Premières alertes observées pendant les tests réseau."
          />
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-header">
          <p className="section-kicker">Tests</p>
          <h2>Scénarios validés</h2>
        </div>

        <p>
          J’ai réalisé plusieurs tests pour vérifier que le lab fonctionne comme prévu :
          accès au serveur web depuis le WAN, scan Nmap, alertes Suricata et vérification
          du blocage entre les zones.
        </p>

        <div className="capture-grid">
          <ImageCard
            src="/soc/test_parrot_acces_web_dmz.png"
            title="Accès depuis Parrot"
            description="Accès HTTP au serveur web DMZ via l’adresse WAN de pfSense."
          />

          <ImageCard
            src="/soc/nmap_parrot_vers_wan_pfsense.png"
            title="Scan Nmap"
            description="Scan depuis Parrot vers l’adresse WAN de pfSense."
          />

          <ImageCard
            src="/soc/suricata_alerte_nmap_http.png"
            title="Alerte Suricata"
            description="Alerte générée après les tests depuis Parrot."
          />

          <ImageCard
            src="/soc/traceroute_parrot_vers_lan.png"
            title="Blocage WAN vers LAN"
            description="Traceroute montrant que le trafic ne parvient pas jusqu’au LAN."
          />
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-kicker">Bilan</p>
          <h2>Ce que cette version démontre</h2>
        </div>

        <ul className="clean-list">
          <li>Conception d’une architecture segmentée LAN / DMZ / SOC / WAN.</li>
          <li>Configuration d’un pare-feu pfSense avec règles inter-zones.</li>
          <li>Publication contrôlée d’un serveur web Ubuntu dans une DMZ.</li>
          <li>Supervision de machines Windows, Ubuntu LAN et serveur web DMZ avec Wazuh.</li>
          <li>Détection réseau avec Suricata installé sur pfSense.</li>
          <li>Tests depuis une machine Parrot placée côté WAN.</li>
          <li>Documentation technique du projet pour intégration dans le portfolio.</li>
        </ul>
      </section>

      <section className="section dark-section">
        <div className="section-header">
          <p className="section-kicker">Suite du projet</p>
          <h2>Améliorations prévues</h2>
        </div>

        <p>
          Je m’arrête ici pour cette première version afin de passer à d’autres projets,
          notamment en développement. Le lab SOC sera repris plus tard pour ajouter de
          nouvelles briques et des scénarios plus avancés.
        </p>

        <ul className="clean-list">
          <li>Centraliser les logs Suricata dans Wazuh.</li>
          <li>Améliorer la collecte des logs Apache du serveur web DMZ.</li>
          <li>Ajouter Zeek pour l’analyse réseau.</li>
          <li>Intégrer TheHive pour la gestion d’incidents.</li>
          <li>Tester Cortex, Shuffle et MISP.</li>
          <li>Créer des scénarios d’attaque et de détection plus réalistes.</li>
        </ul>

        <div className="hero-actions">
          <a href="/documents/rapport_homelab_soc.pdf" className="btn primary" download>
            Télécharger le rapport complet
          </a>
          <a href="/" className="btn secondary">
            Retour au portfolio
          </a>
        </div>
      </section>
    </main>
  );
}

export default SocProject;