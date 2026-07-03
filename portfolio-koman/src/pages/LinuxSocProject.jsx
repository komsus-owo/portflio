const learnings = [
  {
    number: '01',
    title: 'Comprendre la structure d’un log Linux',
    description:
      'J’ai appris à repérer la date, l’hôte, le service, le message, l’adresse source et l’utilisateur ciblé dans des événements système bruts.',
  },
  {
    number: '02',
    title: 'Identifier les événements suspects',
    description:
      'J’ai distingué les échecs d’authentification, les utilisateurs inconnus, les tentatives sur root et les sources distantes répétitives.',
  },
  {
    number: '03',
    title: 'Structurer les données avec Excel',
    description:
      'J’ai utilisé Excel et Power Query pour nettoyer, filtrer, catégoriser et compter les événements avant l’automatisation.',
  },
  {
    number: '04',
    title: 'Automatiser l’analyse avec Python',
    description:
      'J’ai développé un script capable d’extraire les champs utiles, de classifier les événements suspects et d’exporter les résultats en CSV.',
  },
  {
    number: '05',
    title: 'Construire des recherches SPL',
    description:
      'J’ai utilisé Splunk pour ingérer les logs, extraire les champs avec rex, compter les occurrences et identifier les sources les plus actives.',
  },
  {
    number: '06',
    title: 'Valider les résultats par plusieurs méthodes',
    description:
      'J’ai comparé Excel, Python et Splunk afin de vérifier la cohérence des résultats et comprendre l’importance du découpage des événements.',
  },
];

const results = [
  {
    value: '2 000',
    label: 'Lignes de logs',
    description: 'Jeu de données Linux_2k.log étudié.',
  },
  {
    value: '607',
    label: 'Événements suspects',
    description: 'Entrées détectées automatiquement avec Python.',
  },
  {
    value: '490',
    label: 'Échecs SSH',
    description: 'Échecs d’authentification validés dans les trois outils.',
  },
  {
    value: '117',
    label: 'Utilisateurs inconnus',
    description: 'Tentatives visant des comptes non reconnus.',
  },
];

const methodology = [
  {
    step: '01',
    title: 'Analyse manuelle',
    description:
      'Lecture des événements bruts pour comprendre leur structure et repérer les patterns liés à SSH.',
  },
  {
    step: '02',
    title: 'Excel et Power Query',
    description:
      'Nettoyage, structuration, filtres, tableaux croisés et premières statistiques sur les sources et utilisateurs.',
  },
  {
    step: '03',
    title: 'Automatisation Python',
    description:
      'Détection des événements suspects, extraction des IP et utilisateurs, puis export d’un fichier CSV exploitable.',
  },
  {
    step: '04',
    title: 'Analyse SIEM Splunk',
    description:
      'Ingestion, recherches SPL, extraction de champs, agrégation des résultats et création d’une logique d’alerte brute force.',
  },
];

const topSources = [
  { source: '150.183.249.110', count: '80', interpretation: 'Source distante fortement répétitive.' },
  { source: 'n219076184117.netvigator.com', count: '23', interpretation: 'Tentatives répétées contre root.' },
  { source: '207.243.167.114', count: '23', interpretation: 'Volume élevé d’échecs SSH.' },
  { source: '60.30.224.116', count: '20', interpretation: 'Activité suspecte répétée.' },
  { source: '195.129.24.210', count: '15', interpretation: 'Tentatives multiples observées.' },
  { source: '218.188.2.4', count: '13', interpretation: 'Échecs répétés sur SSH.' },
];

const splQueries = [
  {
    title: 'Valider le nombre d’échecs d’authentification',
    code: `source="Linuxlog.log" sourcetype="linux2" "authentication failure"`,
    explanation:
      'Cette recherche retourne 490 événements après une réimportation correcte du fichier.',
  },
  {
    title: 'Compter les échecs par source et utilisateur',
    code: `source="Linuxlog.log" sourcetype="linux2" "authentication failure"
| rex field=_raw "rhost=(?<rhost>\\S+)"
| rex field=_raw "\\suser=(?<user>\\S+)"
| stats count as occurrences by rhost user
| sort - occurrences`,
    explanation:
      'Cette requête extrait les champs utiles et classe les sources selon le volume d’échecs.',
  },
  {
    title: 'Détecter une activité répétitive',
    code: `source="Linuxlog.log" sourcetype="linux2" "authentication failure"
| rex field=_raw "rhost=(?<src_ip>\\S+)"
| stats count as failures by src_ip
| where failures >= 10
| sort - failures`,
    explanation:
      'Cette base peut être enregistrée comme alerte pour signaler les sources dépassant un seuil défini.',
  },
];

const recommendations = [
  'Désactiver la connexion SSH directe du compte root.',
  'Déployer Fail2ban ou une solution équivalente pour limiter les tentatives répétées.',
  'Privilégier l’authentification par clé et désactiver les mots de passe lorsque le contexte le permet.',
  'Restreindre les sources autorisées par pare-feu ou liste blanche.',
  'Centraliser les journaux et créer des alertes sur les échecs répétés par IP.',
  'Enrichir les adresses sources avec de la threat intelligence et documenter la qualification.',
];

const evidenceItems = [
  {
    title: 'Jeu de logs brut',
    src: '/projects/analyse-soc-linux/images/logs-bruts.png',
    description:
      'Extrait du fichier Linux_2k.log utilisé pour comprendre la structure des événements.',
  },
  {
    title: 'Analyse Excel et Power Query',
    src: '/projects/analyse-soc-linux/images/analyse-excel.png',
    description:
      'Structuration des champs, filtres et comptage des événements suspects.',
  },
  {
    title: 'Résultat du script Python',
    src: '/projects/analyse-soc-linux/images/resultat-python.png',
    description:
      'Résumé des détections et export des événements suspects dans un fichier CSV.',
  },
  {
    title: 'Validation dans Splunk',
    src: '/projects/analyse-soc-linux/images/validation-splunk.png',
    description:
      'Recherche SPL confirmant les 490 échecs d’authentification SSH.',
  },
];

const suggestionSubject =
  "Suggestion d'amélioration — Analyse SOC de logs Linux";

const suggestionBody = `Bonjour Joseph,

J’ai consulté votre projet d’analyse SOC Linux et je souhaite vous proposer l’amélioration suivante :

[Votre suggestion]

Éléments concernés :

[Python, Splunk, recherches SPL, alertes, enrichissement, remédiation...]

Bien cordialement,`;

const suggestionMailto = `mailto:komanohouojoseph@gmail.com?subject=${encodeURIComponent(
  suggestionSubject,
)}&body=${encodeURIComponent(suggestionBody)}`;

function LinuxSocProject() {
  return (
    <main className="project-page linux-soc-page">
      <section className="project-hero" id="project-overview">
        <p className="badge">Splunk • Python • Linux • SSH • Investigation SOC</p>

        <h1>Analyse SOC de journaux Linux</h1>

        <p>
          Analyse progressive d’un jeu de logs Linux et SSH, depuis la lecture
          manuelle jusqu’à l’automatisation Python et la validation dans
          Splunk, afin de détecter des comportements compatibles avec une
          activité de brute force.
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
            href="/documents/rapport_logs_linux.pdf"
            download="rapport_logs_linux.pdf"
          >
            Télécharger le rapport
          </a>

          <a className="btn secondary" href={suggestionMailto}>
            Proposer une amélioration
          </a>

          <a className="btn ghost" href="#queries">
            Voir les recherches SPL
          </a>
        </div>

        <p className="project-feedback-text">
          Le projet reproduit une démarche d’investigation SOC junior sur un
          jeu de données d’entraînement. Les événements ont été validés par
          plusieurs méthodes afin d’améliorer la fiabilité de l’analyse.
        </p>
      </section>

      <section className="section" id="context">
        <div className="section-header">
          <p className="section-kicker">Contexte</p>
          <h2>Pourquoi ce projet ?</h2>
        </div>

        <div className="project-context-grid">
          <article className="project-context-main">
            <h3>Reproduire le travail d’investigation d’un analyste SOC</h3>

            <p>
              Le fichier Linux_2k.log contient environ 2 000 événements Linux,
              notamment des traces d’authentification, des événements SSH, des
              ouvertures de session et des messages système.
            </p>

            <p>
              L’objectif était de détecter les tentatives suspectes, de repérer
              les sources répétitives et de produire une analyse reproductible,
              plutôt que de se limiter à une lecture ponctuelle des logs.
            </p>
          </article>

          <article className="project-objective-card">
            <p className="project-card-label">Objectif de l’investigation</p>
            <h3>Détecter, valider et documenter</h3>
            <p>
              Identifier les événements suspects, automatiser l’extraction des
              informations, confirmer les résultats dans un SIEM et proposer
              des mesures de réduction du risque SSH.
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
              La principale valeur du projet est la progression entre
              compréhension manuelle, structuration des données, automatisation
              et exploitation SIEM.
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
            Excel, Python et Splunk ont permis de confirmer le même volume
            d’échecs d’authentification SSH après une ingestion correcte des
            événements.
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
          <p className="section-kicker">Démarche</p>
          <h3>Une analyse en quatre étapes</h3>
        </div>

        <div className="roadmap-grid">
          {methodology.map((item) => (
            <article className="roadmap-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="project-subsection-heading">
          <p className="section-kicker">Sources répétitives</p>
          <h3>Adresses les plus actives observées</h3>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Source</th>
                <th>Occurrences</th>
                <th>Interprétation</th>
              </tr>
            </thead>
            <tbody>
              {topSources.map((item) => (
                <tr key={item.source}>
                  <td>{item.source}</td>
                  <td>{item.count}</td>
                  <td>{item.interpretation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section dark-section" id="queries">
        <div className="section-container">
          <div className="section-header">
            <p className="section-kicker">Splunk</p>
            <h2>Recherches SPL utilisées</h2>
            <p className="section-description">
              Ces recherches permettent de valider les événements, d’extraire
              les champs et de préparer une logique d’alerte sur les échecs
              répétés.
            </p>
          </div>

          <div className="query-grid">
            {splQueries.map((query) => (
              <article className="query-card" key={query.title}>
                <h3>{query.title}</h3>
                <pre className="project-code-block">
                  <code>{query.code}</code>
                </pre>
                <p>{query.explanation}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-kicker">Remédiation</p>
          <h2>Recommandations de sécurité</h2>
        </div>

        <div className="project-result-details">
          <article className="result-detail-card">
            <p className="project-card-label">Actions prioritaires</p>
            <h3>Réduire le risque de brute force SSH</h3>
            <ul className="project-clean-list">
              {recommendations.map((recommendation) => (
                <li key={recommendation}>{recommendation}</li>
              ))}
            </ul>
          </article>

          <article className="result-detail-card">
            <p className="project-card-label">Livrables produits</p>
            <h3>Une investigation reproductible</h3>
            <ul className="project-clean-list">
              <li>Rapport d’analyse SOC documenté.</li>
              <li>Script Python d’extraction et de classification.</li>
              <li>Export CSV des événements suspects.</li>
              <li>Recherches SPL de validation et d’agrégation.</li>
              <li>Recommandations de remédiation actionnables.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section dark-section" id="evidence">
        <div className="section-container">
          <div className="section-header">
            <p className="section-kicker">Preuves visuelles</p>
            <h2>Captures de l’investigation</h2>
            <p className="section-description">
              Les emplacements ci-dessous indiquent où déposer les captures
              pour compléter la page du projet.
            </p>
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
        />
      </div>

      <div className="evidence-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  ))}
</div>

          <div className="project-final-message">
            <div>
              <p className="project-card-label">Projet évolutif</p>
              <h3>Une règle de détection à améliorer ?</h3>
              <p>
                Je reste ouvert aux retours sur les recherches SPL, le seuil
                d’alerte, l’enrichissement des IP, la qualification ou les
                recommandations de réponse à incident.
              </p>
            </div>

            <a className="btn secondary" href={suggestionMailto}>
              Proposer une amélioration
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LinuxSocProject;
