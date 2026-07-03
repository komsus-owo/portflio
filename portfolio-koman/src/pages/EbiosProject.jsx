const learnings = [
  {
    number: '01',
    title: 'Cadrer une analyse de risques',
    description:
      'J’ai appris à délimiter le périmètre de l’étude, à identifier les valeurs métier, les biens supports et les événements redoutés avant de construire les scénarios.',
  },
  {
    number: '02',
    title: 'Conduire les cinq ateliers EBIOS RM',
    description:
      'J’ai appliqué la logique complète de la méthode, depuis le cadrage du socle de sécurité jusqu’à la définition d’un plan de traitement priorisé.',
  },
  {
    number: '03',
    title: 'Relier menace et impact métier',
    description:
      'J’ai appris à ne pas limiter l’analyse aux vulnérabilités techniques, mais à traduire chaque scénario en conséquences concrètes sur les soins, les données et la confiance.',
  },
  {
    number: '04',
    title: 'Construire des scénarios réalistes',
    description:
      'J’ai structuré des chemins d’attaque combinant sources de risque, objectifs visés, parties prenantes, modes opératoires et impacts redoutés.',
  },
  {
    number: '05',
    title: 'Coter et hiérarchiser les risques',
    description:
      'J’ai utilisé une cotation vraisemblance × gravité pour distinguer les risques critiques, élevés et acceptables, puis orienter les décisions.',
  },
  {
    number: '06',
    title: 'Produire un livrable de conseil',
    description:
      'J’ai travaillé la restitution pour qu’elle soit lisible par une direction, avec une synthèse exécutive, des priorités, des responsables et un calendrier de mise en œuvre.',
  },
];

const results = [
  {
    value: '5',
    label: 'Ateliers EBIOS RM',
    description: 'Méthode appliquée de bout en bout sur un cas d’étude santé.',
  },
  {
    value: '3',
    label: 'Scénarios majeurs',
    description: 'Rançongiciel, compromission via prestataire et négligence interne.',
  },
  {
    value: '15',
    label: 'Mesures de sécurité',
    description: 'Plan de traitement technique, organisationnel et réglementaire.',
  },
  {
    value: 'Élevé',
    label: 'Risque global initial',
    description: 'Niveau nécessitant des décisions rapides de la direction.',
  },
];

const scenarios = [
  {
    level: 'Critique',
    title: 'Rançongiciel via phishing',
    description:
      'Un message frauduleux conduit à l’exécution d’un fichier malveillant, puis au chiffrement de Hellodoc, des dossiers patients et éventuellement des sauvegardes.',
    impacts:
      'Interruption des consultations, indisponibilité des dossiers patients, perturbation de la télétransmission et risque financier important.',
  },
  {
    level: 'Élevé',
    title: 'Compromission via un prestataire',
    description:
      'Un accès distant, un compte technique ou un service cloud insuffisamment sécurisé est utilisé pour atteindre les données du centre.',
    impacts:
      'Vol silencieux de données de santé, atteinte à la confidentialité et difficulté de détection en l’absence de journalisation adaptée.',
  },
  {
    level: 'Élevé',
    title: 'Exposition par négligence interne',
    description:
      'Des comptes partagés, des mots de passe faibles ou des supports amovibles non maîtrisés favorisent une fuite ou une altération de données.',
    impacts:
      'Exposition de données patients, erreurs de manipulation, perte de traçabilité et risque de non-conformité.',
  },
];

const priorities = [
  'Supprimer les comptes partagés et individualiser les accès.',
  'Migrer les sauvegardes vers une solution adaptée aux données de santé et tester régulièrement la restauration.',
  'Encadrer les accès distants et les comptes des prestataires.',
  'Former le personnel au phishing et aux bonnes pratiques de sécurité.',
  'Mettre en place une journalisation exploitable et une revue des accès sensibles.',
  'Contrôler les supports USB et formaliser un plan de continuité et de reprise.',
];



const suggestionSubject =
  "Suggestion d'amélioration — Projet EBIOS Risk Manager";

const suggestionBody = `Bonjour Joseph,

J’ai consulté votre projet EBIOS Risk Manager et je souhaite vous proposer l’amélioration suivante :

[Votre suggestion]

Éléments concernés :

[Cadrage, scénarios, cotation, plan de traitement, restitution...]

Bien cordialement,`;

const suggestionMailto = `mailto:komanohouojoseph@gmail.com?subject=${encodeURIComponent(
  suggestionSubject,
)}&body=${encodeURIComponent(suggestionBody)}`;

function EbiosProject() {
  return (
    <main className="project-page ebios-page">
      <section className="project-hero" id="project-overview">
        <p className="badge">EBIOS RM • GRC • Santé • Gestion des risques</p>

        <h1>Analyse de risques EBIOS Risk Manager</h1>

        <p>
          Réalisation d’une analyse de risques cybersécurité pour un centre
          médical fictif afin d’identifier les menaces prioritaires, mesurer
          leurs impacts métier et construire un plan d’action exploitable par
          la direction.
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
            href="/documents/rapport_ebios_rm.pdf"
            download="rapport_ebios_rm.pdf"
          >
            Télécharger le rapport
          </a>

          <a className="btn secondary" href={suggestionMailto}>
            Proposer une amélioration
          </a>

        </div>

        <p className="project-feedback-text">
          L’étude porte sur un cas fictif et ne constitue pas un audit réel
          d’un établissement de santé. Le livrable a été conçu comme une
          mission de conseil structurée et orientée décision.
        </p>
      </section>

      <section className="section" id="context">
        <div className="section-header">
          <p className="section-kicker">Contexte</p>
          <h2>Pourquoi ce projet ?</h2>
        </div>

        <div className="project-context-grid">
          <article className="project-context-main">
            <h3>Simuler une mission GRC dans le secteur de la santé</h3>

            <p>
              Le Centre Médical Saint-Antoine dépend fortement de ses outils
              numériques pour accéder aux dossiers patients, organiser les
              consultations, assurer la télétransmission et maintenir son
              activité quotidienne.
            </p>

            <p>
              Le projet vise à dépasser une simple liste de vulnérabilités en
              reliant chaque menace à ses conséquences concrètes sur les soins,
              la confidentialité des données de santé et la continuité de
              service.
            </p>
          </article>

          <article className="project-objective-card">
            <p className="project-card-label">Objectif de la mission</p>
            <h3>Donner à la direction une feuille de route claire</h3>
            <p>
              Identifier les scénarios les plus crédibles, les hiérarchiser,
              puis proposer des mesures réalistes, priorisées et compatibles
              avec les moyens d’une structure médicale de taille moyenne.
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
              Cette étude m’a permis de structurer une analyse de risques de
              bout en bout et de transformer les résultats techniques en
              décisions compréhensibles par un public non spécialiste.
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
            L’analyse a permis de faire ressortir les risques les plus urgents
            et de produire un plan de traitement cohérent avec les enjeux du
            centre médical.
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
          <p className="section-kicker">Scénarios prioritaires</p>
          <h3>Les trois risques majeurs identifiés</h3>
        </div>

        <div className="risk-scenarios-grid">
          {scenarios.map((scenario) => (
            <article className="risk-card" key={scenario.title}>
              <span className="risk-level">{scenario.level}</span>
              <h3>{scenario.title}</h3>
              <p>{scenario.description}</p>
              <div className="risk-impact">
                <strong>Impacts principaux</strong>
                <p>{scenario.impacts}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="project-result-details">
          <article className="result-detail-card">
            <p className="project-card-label">Priorités de traitement</p>
            <h3>Un plan d’action directement exploitable</h3>
            <ul className="project-clean-list">
              {priorities.map((priority) => (
                <li key={priority}>{priority}</li>
              ))}
            </ul>
          </article>

          <article className="result-detail-card">
            <p className="project-card-label">Valeur du livrable</p>
            <h3>Une restitution orientée direction</h3>
            <ul className="project-clean-list">
              <li>Synthèse exécutive lisible en quelques minutes.</li>
              <li>Scénarios reliés aux conséquences métier.</li>
              <li>Mesures classées par urgence et bénéfice attendu.</li>
              <li>Prise en compte du RGPD et des exigences HDS.</li>
              <li>Trajectoire de réduction du risque dans le temps.</li>
            </ul>
          </article>
        </div>
      </section>

      
    </main>
  );
}

export default EbiosProject;
