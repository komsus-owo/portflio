const learnings = [
  {
    number: '01',
    title: 'Définir un périmètre d’audit cloud',
    description:
      'J’ai appris à distinguer les ressources réellement observées des éléments hors périmètre afin de ne pas présenter une photographie de laboratoire comme une certification globale du tenant.',
  },
  {
    number: '02',
    title: 'Traduire une configuration en risque GRC',
    description:
      'J’ai relié les paramètres Azure aux impacts sur la confidentialité, l’intégrité, la disponibilité et la traçabilité des données.',
  },
  {
    number: '03',
    title: 'Évaluer le stockage Blob',
    description:
      'J’ai analysé l’accès anonyme, le niveau d’exposition du conteneur, les clés de compte et les restrictions réseau du service de stockage.',
  },
  {
    number: '04',
    title: 'Construire un registre des risques',
    description:
      'J’ai structuré les constats, les scénarios de menace, les conséquences, les scores initiaux et les niveaux résiduels cibles.',
  },
  {
    number: '05',
    title: 'Mapper les contrôles de sécurité',
    description:
      'J’ai rapproché les recommandations de NIST CSF, CIS Controls, ISO 27001 et des bonnes pratiques de sécurité cloud.',
  },
  {
    number: '06',
    title: 'Prioriser une remédiation cloud',
    description:
      'J’ai appris à ordonner les corrections selon l’urgence : supprimer l’exposition publique, réduire les privilèges, puis améliorer la détection et la gouvernance.',
  },
];

const results = [
  {
    value: '5',
    label: 'Risques recensés',
    description: 'Trois risques critiques et deux risques élevés.',
  },
  {
    value: '20/25',
    label: 'Score maximal',
    description: 'Exposition anonyme du conteneur et de ses objets.',
  },
  {
    value: 'Critique',
    label: 'Niveau initial',
    description: 'Traitement immédiat requis avant tout usage réel.',
  },
  {
    value: 'Modéré',
    label: 'Cible résiduelle',
    description: 'Niveau visé après remédiation et contrôles de suivi.',
  },
];

const findings = [
  {
    severity: 'Critique',
    title: 'Accès anonyme au conteneur',
    description:
      'Le conteneur donnees-sensibles a été rendu accessible anonymement avec un niveau permettant l’énumération des objets.',
    recommendation:
      'Rendre le conteneur privé et désactiver l’accès anonyme au niveau du compte de stockage.',
  },
  {
    severity: 'Critique',
    title: 'Accès réseau depuis tous les réseaux',
    description:
      'Le service de stockage est joignable depuis l’ensemble des réseaux publics, ce qui augmente fortement la surface d’exposition.',
    recommendation:
      'Restreindre les réseaux autorisés, utiliser des points de terminaison privés et appliquer une politique de moindre exposition.',
  },
  {
    severity: 'Critique',
    title: 'Clés de compte à portée étendue',
    description:
      'Deux clés donnent un accès large au compte de stockage sans mécanisme de rotation automatique démontré.',
    recommendation:
      'Préférer Microsoft Entra ID et le RBAC, protéger les secrets restants et automatiser leur rotation.',
  },
  {
    severity: 'Élevé',
    title: 'Authentifiants partagés et privilèges élevés',
    description:
      'L’usage de clés partagées limite l’individualisation des accès et réduit la traçabilité des actions.',
    recommendation:
      'Mettre en place des identités nominatives ou managées avec des rôles limités au besoin métier.',
  },
  {
    severity: 'Élevé',
    title: 'Journalisation insuffisamment démontrée',
    description:
      'Les paramètres de diagnostic classiques sont désactivés et aucune exportation moderne n’est visible dans les preuves.',
    recommendation:
      'Activer les logs, centraliser les événements et configurer des alertes sur les accès et changements sensibles.',
  },
];

const roadmap = [
  {
    step: '01',
    title: 'Supprimer l’exposition immédiate',
    description:
      'Rendre le conteneur privé, désactiver l’accès anonyme et vérifier qu’aucun objet ne reste publiquement accessible.',
  },
  {
    step: '02',
    title: 'Réduire la surface réseau',
    description:
      'Limiter les réseaux autorisés, envisager Private Endpoint et documenter les flux réellement nécessaires.',
  },
  {
    step: '03',
    title: 'Renforcer les identités',
    description:
      'Remplacer progressivement les clés partagées par Microsoft Entra ID, le RBAC et des identités managées.',
  },
  {
    step: '04',
    title: 'Améliorer la détection',
    description:
      'Activer les diagnostics, centraliser les journaux et créer des alertes sur les accès anonymes, les échecs et les modifications de configuration.',
  },
];

const evidenceItems = [
  {
    title: 'Création du compte de stockage',
    src: '/projects/audit-azure/images/02_creation_compte_stockage.png',
    description:
      'Compte grstoragelab créé dans le groupe GRC-Lab, en région France Central, avec une performance Standard.',
  },
  {
    title: 'Conteneur initialement privé',
    src: '/projects/audit-azure/images/03_creation_conteneur_prive.png',
    description:
      'État initial du conteneur donnees-sensibles avant la simulation de la mauvaise configuration.',
  },
  {
    title: 'Accès anonyme de niveau conteneur',
    src: '/projects/audit-azure/images/06_niveau_acces_conteneur.png',
    description:
      'Configuration vulnérable permettant l’accès anonyme et l’énumération des objets.',
  },
  {
    title: 'Clés d’accès du compte',
    src: '/projects/audit-azure/images/07_cles_acces.png',
    description:
      'Présence de deux clés à forte portée nécessitant une protection et une rotation rigoureuses.',
  },
  {
    title: 'Accès réseau public',
    src: '/projects/audit-azure/images/10_acces_reseau_tous.png',
    description:
      'Service accessible depuis tous les réseaux publics dans l’état observé.',
  },
  {
    title: 'Diagnostic désactivé',
    src: '/projects/audit-azure/images/11_diagnostic_desactive.png',
    description:
      'Absence de journalisation opérationnelle démontrée dans les captures du laboratoire.',
  },
];

const suggestionSubject = "Suggestion d'amélioration — Audit GRC Azure";

const suggestionBody = `Bonjour Joseph,

J’ai consulté votre audit GRC Azure et je souhaite vous proposer l’amélioration suivante :

[Votre suggestion]

Éléments concernés :

[Stockage, accès, réseau, journalisation, cotation, remédiation...]

Bien cordialement,`;

const suggestionMailto = `mailto:komanohouojoseph@gmail.com?subject=${encodeURIComponent(
  suggestionSubject,
)}&body=${encodeURIComponent(suggestionBody)}`;

function AzureAuditProject() {
  return (
    <main className="project-page azure-page">
      <section className="project-hero" id="project-overview">
        <p className="badge">Microsoft Azure • GRC Cloud • Audit • Risques</p>

        <h1>Audit GRC d’un environnement Microsoft Azure</h1>

        <p>
          Évaluation d’un compte de stockage Azure volontairement configuré de
          manière vulnérable afin de transformer les constats techniques en
          risques GRC, contrôles de sécurité et plan de remédiation priorisé.
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
            href="/documents/rapport_grc_azure.pdf"
            download="rapport_grc_azure.pdf"
          >
            Télécharger le rapport
          </a>

          <a className="btn secondary" href={suggestionMailto}>
            Proposer une amélioration
          </a>

          <a className="btn ghost" href="#evidence">
            Voir les preuves
          </a>
        </div>

        <p className="project-feedback-text">
          L’audit couvre uniquement les ressources et paramètres visibles dans
          les preuves du laboratoire. Il ne constitue pas une certification de
          conformité de l’ensemble d’un tenant Azure.
        </p>
      </section>

      <section className="section" id="context">
        <div className="section-header">
          <p className="section-kicker">Contexte</p>
          <h2>Pourquoi ce projet ?</h2>
        </div>

        <div className="project-context-grid">
          <article className="project-context-main">
            <h3>Passer d’un constat Azure à une décision de sécurité</h3>

            <p>
              Le périmètre étudié comprend le groupe de ressources GRC-Lab, le
              compte de stockage grstoragelab et le conteneur Blob
              donnees-sensibles, hébergés en région France Central.
            </p>

            <p>
              Plusieurs paramètres ont été volontairement dégradés : accès
              anonyme, réseau public ouvert, clés de compte disponibles et
              journalisation insuffisamment démontrée. L’objectif était de les
              analyser comme le ferait un consultant GRC cloud.
            </p>
          </article>

          <article className="project-objective-card">
            <p className="project-card-label">Objectif de l’audit</p>
            <h3>Évaluer, coter et remédier</h3>
            <p>
              Identifier les actifs, les menaces et les vulnérabilités,
              construire un registre des risques, mapper les contrôles puis
              définir un ordre d’exécution réaliste pour les corrections.
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
              Ce projet m’a permis de relier la configuration d’un service
              Azure à des enjeux de gouvernance, de contrôle d’accès, de
              protection des données et de capacité de détection.
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
            L’audit met en évidence une posture initiale critique, principalement
            liée à l’exposition anonyme, au réseau public et aux clés de compte.
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
          <p className="section-kicker">Constats prioritaires</p>
          <h3>Risques identifiés et recommandations</h3>
        </div>

        <div className="audit-findings-grid">
          {findings.map((finding) => (
            <article className="audit-finding-card" key={finding.title}>
              <span className="risk-level">{finding.severity}</span>
              <h3>{finding.title}</h3>
              <p>{finding.description}</p>
              <div className="finding-recommendation">
                <strong>Remédiation recommandée</strong>
                <p>{finding.recommendation}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="project-subsection-heading">
          <p className="section-kicker">Feuille de route</p>
          <h3>Ordre d’exécution recommandé</h3>
        </div>

        <div className="roadmap-grid">
          {roadmap.map((item) => (
            <article className="roadmap-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section" id="evidence">
        <div className="section-container">
          <div className="section-header">
            <p className="section-kicker">Preuves visuelles</p>
          </div>

          <div className="project-evidence-grid">
  {evidenceItems.map((item) => (
    <article className="evidence-card" key={item.title}>
      <div className="evidence-image-wrapper">
        <img
          src={item.src}
          alt={item.title}
          className="evidence-image"
          loading="lazy"
          onError={(event) => {
            console.error(
              `Image introuvable : ${item.src}`,
            );

            event.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <div className="evidence-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  ))}
</div>

          
        </div>
      </section>
    </main>
  );
}

export default AzureAuditProject;
