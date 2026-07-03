function ImageCard({ src, title, description, validation }) {
  return (
    <article className="project-image-card">
      <img
        src={src}
        alt={title}
        className="project-image"
        loading="lazy"
      />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {validation ? (
          <p className="media-validation">
            <strong>Résultat validé :</strong> {validation}
          </p>
        ) : null}
      </div>
    </article>
  );
}

const learnings = [
  {
    number: '01',
    title: 'Concevoir une architecture segmentée',
    description:
      'J’ai appris à séparer les usages en zones LAN, DMZ, SOC et WAN afin de réduire les mouvements latéraux et de mieux contrôler les flux.',
  },
  {
    number: '02',
    title: 'Configurer un pare-feu pfSense',
    description:
      'J’ai créé les interfaces, les règles inter-zones, le NAT et les restrictions nécessaires selon une logique de moindre privilège.',
  },
  {
    number: '03',
    title: 'Publier un service en DMZ',
    description:
      'J’ai exposé un serveur web Ubuntu depuis le WAN sans rendre directement accessibles le LAN et le réseau SOC.',
  },
  {
    number: '04',
    title: 'Déployer une supervision Wazuh',
    description:
      'J’ai installé les agents, vérifié leur communication avec le manager et observé les événements remontés depuis les machines supervisées.',
  },
  {
    number: '05',
    title: 'Mettre en place une détection réseau',
    description:
      'J’ai installé Suricata sur pfSense, téléchargé les règles et utilisé le mode IDS pour observer les alertes sans bloquer automatiquement les flux.',
  },
  {
    number: '06',
    title: 'Tester et corriger le laboratoire',
    description:
      'J’ai validé les flux avec curl, Nmap et traceroute, puis utilisé les journaux firewall et les alertes pour corriger les erreurs de configuration.',
  },
];

const results = [
  {
    value: '4',
    label: 'Zones réseau',
    description: 'LAN, DMZ, SOC et WAN séparés par pfSense.',
  },
  {
    value: '3',
    label: 'Agents Wazuh',
    description: 'Windows, Ubuntu LAN et serveur web DMZ supervisés.',
  },
  {
    value: '1',
    label: 'Serveur web exposé',
    description: 'Publication contrôlée depuis le WAN vers la DMZ.',
  },
  {
    value: '2',
    label: 'Sources de détection',
    description: 'Événements endpoints avec Wazuh et trafic réseau avec Suricata.',
  },
];

const firewallRules = [
  {
    zone: 'WAN',
    role: 'Exposer uniquement le serveur web DMZ via NAT et bloquer les accès directs vers le LAN et le SOC.',
  },
  {
    zone: 'LAN',
    role: 'Autoriser les postes internes à accéder aux services nécessaires et à transmettre leurs événements vers Wazuh.',
  },
  {
    zone: 'DMZ',
    role: 'Permettre au serveur web de communiquer avec les services strictement nécessaires sans accès libre au LAN.',
  },
  {
    zone: 'SOC',
    role: 'Limiter l’accès aux outils de supervision, à pfSense et aux services d’administration indispensables.',
  },
];

const architecture = [
  { zone: 'LAN', machine: 'pfSense LAN', address: '192.168.10.1' },
  { zone: 'LAN', machine: 'Windows 10', address: '192.168.10.20' },
  { zone: 'LAN', machine: 'Ubuntu Client', address: '192.168.10.30' },
  { zone: 'DMZ', machine: 'pfSense DMZ', address: '192.168.20.1' },
  { zone: 'DMZ', machine: 'Ubuntu Web Server', address: '192.168.20.10' },
  { zone: 'SOC', machine: 'pfSense SOC', address: '192.168.30.1' },
  { zone: 'SOC', machine: 'Admin SOC', address: '192.168.30.2' },
  { zone: 'SOC', machine: 'Wazuh Server', address: '192.168.30.10' },
  { zone: 'WAN', machine: 'pfSense WAN', address: 'DHCP' },
  { zone: 'WAN', machine: 'Parrot Security', address: 'DHCP' },
];

const improvements = [
  'Centraliser les journaux Suricata dans Wazuh.',
  'Améliorer la collecte des logs Apache du serveur web DMZ.',
  'Ajouter Zeek pour enrichir l’analyse réseau.',
  'Intégrer TheHive et Cortex pour la gestion et l’enrichissement des incidents.',
  'Tester Shuffle pour l’automatisation de certaines tâches SOC.',
  'Ajouter MISP et créer des scénarios de détection plus réalistes.',
];

const suggestionSubject = "Suggestion d'amélioration — Homelab SOC";

const suggestionBody = `Bonjour Joseph,

J’ai consulté votre Homelab SOC et je souhaite vous proposer l’amélioration suivante :

[Votre suggestion]

Éléments concernés :

[Architecture, pfSense, Wazuh, Suricata, détection, réponse à incident...]

Bien cordialement,`;

const suggestionMailto = `mailto:komanohouojoseph@gmail.com?subject=${encodeURIComponent(
  suggestionSubject,
)}&body=${encodeURIComponent(suggestionBody)}`;

function SocProject() {
  return (
    <main className="project-page soc-page">
      <section className="project-hero" id="project-overview">
        <p className="badge">pfSense • Wazuh • Suricata • LAN • DMZ • SOC</p>

        <h1>Homelab SOC avec segmentation réseau</h1>

        <p>
          Conception d’un laboratoire SOC personnel fondé sur une architecture
          segmentée LAN, DMZ, SOC et WAN, avec filtrage pfSense, supervision
          Wazuh, détection Suricata et tests depuis une machine externe.
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
            href="/documents/rapport_homelab_soc.pdf"
            className="btn primary"
            download="rapport_homelab_soc.pdf"
          >
            Télécharger le rapport
          </a>

          <a className="btn secondary" href={suggestionMailto}>
            Proposer une amélioration
          </a>

          <a href="#evidence" className="btn ghost">
            Voir les preuves
          </a>
        </div>

        <p className="project-feedback-text">
          Cette première version est fonctionnelle et documentée. Elle sert de
          base à l’ajout progressif de nouvelles briques de détection, de
          threat intelligence et de réponse à incident.
        </p>
      </section>

      <section className="section" id="context">
        <div className="section-header">
          <p className="section-kicker">Contexte</p>
          <h2>Pourquoi ce projet ?</h2>
        </div>

        <div className="project-context-grid">
          <article className="project-context-main">
            <h3>Reproduire une infrastructure de sécurité d’entreprise</h3>

            <p>
              Le laboratoire a été conçu pour mettre en pratique plusieurs
              activités rencontrées dans un environnement SOC : segmentation,
              filtrage réseau, exposition d’un service en DMZ, collecte
              d’événements endpoints et détection du trafic suspect.
            </p>

            <p>
              L’objectif n’était pas de créer immédiatement un SOC complet,
              mais de construire une fondation cohérente, compréhensible,
              testable et suffisamment documentée pour évoluer dans le temps.
            </p>
          </article>

          <article className="project-objective-card">
            <p className="project-card-label">Objectif du laboratoire</p>
            <h3>Segmenter, superviser et détecter</h3>
            <p>
              Concevoir une architecture réaliste, contrôler les flux avec
              pfSense, centraliser les événements dans Wazuh et observer les
              alertes réseau générées par Suricata pendant les tests.
            </p>
          </article>
        </div>
      </section>

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

            <p>
              Le laboratoire m’a permis de relier l’architecture réseau, les
              règles de sécurité, la collecte d’événements et les validations
              techniques dans une même démarche.
            </p>
          </div>

          <div className="project-learning-grid">
            {learnings.map((learning) => (
              <article
                className="project-learning-card"
                key={learning.number}
              >
                <span className="learning-number">{learning.number}</span>
                <h3>{learning.title}</h3>
                <p>{learning.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="results">
        <div className="section-header">
          <p className="section-kicker">Résultats</p>
          <h2>Résultats du projet</h2>
          <p className="section-description">
            La version actuelle démontre une architecture segmentée,
            l’exposition contrôlée d’un service, la supervision des machines et
            une première capacité de détection réseau.
          </p>
        </div>

        <div className="project-results-grid">
          {results.map((result) => (
            <article className="project-result-card" key={result.label}>
              <strong>{result.value}</strong>
              <h3>{result.label}</h3>
              <p>{result.description}</p>
            </article>
          ))}
        </div>

        <div className="project-subsection-heading">
          <p className="section-kicker">Architecture</p>
          <h3>Organisation du laboratoire</h3>
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
              {architecture.map((item) => (
                <tr key={`${item.zone}-${item.machine}`}>
                  <td>{item.zone}</td>
                  <td>{item.machine}</td>
                  <td>{item.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="single-image-wrapper">
          <ImageCard
            src="/projects/soc/architecture_soc.png"
            title="Architecture du laboratoire"
            description="Vue globale de la segmentation LAN, DMZ, SOC et WAN autour du pare-feu pfSense."
            validation="Les communications inter-zones passent par pfSense, qui applique les règles de filtrage."
          />
        </div>

        <div className="project-subsection-heading">
          <p className="section-kicker">Filtrage</p>
          <h3>Logique des règles firewall</h3>
        </div>

        <div className="audit-findings-grid">
          {firewallRules.map((rule) => (
            <article className="audit-finding-card" key={rule.zone}>
              <span className="risk-level">Zone {rule.zone}</span>
              <h3>Règles {rule.zone}</h3>
              <p>{rule.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section" id="evidence">
        <div className="section-container">
          <div className="section-header">
            <p className="section-kicker">Preuves visuelles</p>
            <h2>Configuration et validations</h2>
            <p className="section-description">
              Les captures montrent les règles pfSense, la publication du
              serveur web, la supervision Wazuh, l’installation de Suricata et
              les tests réalisés depuis le WAN.
            </p>
          </div>

          <div className="capture-grid">
            <ImageCard
              src="/projects/soc/regles_wan.png"
              title="Règles WAN"
              description="Exposition contrôlée du serveur web DMZ et blocage des accès directs vers LAN et SOC."
              validation="Le WAN ne dispose pas d’un accès libre aux réseaux internes."
            />

            <ImageCard
              src="/projects/soc/regles_lan.png"
              title="Règles LAN"
              description="Accès aux services autorisés, à Internet et au serveur Wazuh."
              validation="Les postes internes communiquent uniquement avec les services prévus."
            />

            <ImageCard
              src="/projects/soc/regles_dmz.png"
              title="Règles DMZ"
              description="Flux nécessaires au serveur web et communication contrôlée vers Wazuh."
              validation="La DMZ ne bénéficie pas d’un accès libre au LAN."
            />

            <ImageCard
              src="/projects/soc/regles_soc.png"
              title="Règles SOC"
              description="Accès limité aux outils de supervision et aux services nécessaires."
              validation="Le réseau SOC reste séparé des usages classiques du LAN."
            />

            <ImageCard
              src="/projects/soc/page_web_dmz_personnalisee.png"
              title="Serveur web en DMZ"
              description="Page Apache personnalisée publiée depuis le WAN via une règle NAT pfSense."
              validation="Le service est accessible sans exposer directement l’adresse privée du serveur."
            />

            <ImageCard
              src="/projects/soc/agents_wazuh_actifs.png"
              title="Agents Wazuh actifs"
              description="Vue des agents supervisés dans le dashboard Wazuh."
              validation="Les machines transmettent leurs événements au manager situé dans le réseau SOC."
            />

            <ImageCard
              src="/projects/soc/wazuh_windows_logon_success_t1078.png"
              title="Événement Windows dans Wazuh"
              description="Exemple d’un événement d’authentification Windows associé à MITRE ATT&CK."
              validation="La collecte permet de relier un événement endpoint à une technique de sécurité."
            />

            <ImageCard
              src="/projects/soc/suricata_interfaces_running.png"
              title="Interfaces Suricata actives"
              description="Suricata fonctionne en mode IDS sur les interfaces sélectionnées de pfSense."
              validation="Le trafic réseau est observé sans blocage automatique pendant la phase de test."
            />

            <ImageCard
              src="/projects/soc/suricata_alerts.png"
              title="Alertes Suricata"
              description="Premières alertes générées pendant les tests réseau."
              validation="La sonde détecte des activités correspondant aux règles chargées."
            />

            <ImageCard
              src="/projects/soc/test_parrot_acces_web_dmz.png"
              title="Accès web depuis le WAN"
              description="Test HTTP réalisé depuis Parrot vers l’adresse WAN de pfSense."
              validation="La redirection NAT permet d’atteindre uniquement le service web prévu."
            />

            <ImageCard
              src="/projects/soc/nmap_parrot_vers_wan_pfsense.png"
              title="Scan Nmap externe"
              description="Scan de l’adresse WAN pour vérifier les services réellement exposés."
              validation="Le test confirme l’exposition contrôlée du port nécessaire au serveur web."
            />

            <ImageCard
              src="/projects/soc/traceroute_parrot_vers_lan.png"
              title="Blocage WAN vers LAN"
              description="Traceroute effectué depuis Parrot en direction du réseau interne."
              validation="Le trafic externe ne parvient pas directement jusqu’au LAN."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-kicker">Évolution</p>
          <h2>Améliorations prévues</h2>
          <p className="section-description">
            La base actuelle permet d’ajouter progressivement des fonctions
            d’enrichissement, d’automatisation et de gestion d’incidents.
          </p>
        </div>

        <div className="project-result-details">
          <article className="result-detail-card">
            <p className="project-card-label">Prochaines étapes</p>
            <h3>Faire évoluer le laboratoire</h3>
            <ul className="project-clean-list">
              {improvements.map((improvement) => (
                <li key={improvement}>{improvement}</li>
              ))}
            </ul>
          </article>

          <article className="result-detail-card">
            <p className="project-card-label">Compétences démontrées</p>
            <h3>Une démarche complète de laboratoire</h3>
            <ul className="project-clean-list">
              <li>Conception d’une architecture réseau sécurisée.</li>
              <li>Configuration de pfSense, du NAT et des règles firewall.</li>
              <li>Déploiement d’un serveur web Ubuntu en DMZ.</li>
              <li>Supervision avec Wazuh et détection avec Suricata.</li>
              <li>Tests, analyse des résultats, correction et documentation.</li>
            </ul>
          </article>
        </div>

        <div className="project-final-message">
          <div>
            <p className="project-card-label">Projet évolutif</p>
            <h3>Une brique SOC à ajouter ?</h3>
            <p>
              Je reste ouvert aux retours sur l’architecture, les règles de
              filtrage, les scénarios de détection ou l’intégration de TheHive,
              Cortex, Zeek, Shuffle et MISP.
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

export default SocProject;
