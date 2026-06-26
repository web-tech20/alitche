// ============================================
// ALITCHÉ - Logique de l'application
// ============================================

// === État global ===
let state = {
  currentScreen: 'home',
  currentQuestion: 0,
  answers: [],
  scores: {
    "Analyse & Logique": 0,
    "Créativité & Innovation": 0,
    "Communication & Leadership": 0,
    "Empathie & Collaboration": 0,
    "Ambition & Entrepreneuriat": 0
  },
  userProfile: null,
  recommendedCareers: [],
  userData: {}
};

// ============================================
// NAVIGATION ENTRE ÉCRANS
// ============================================
function showScreen(screenName) {
  // Masquer tous les écrans
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  // Afficher l'écran demandé
  const targetScreen = document.getElementById('screen-' + screenName);
  if (targetScreen) {
    targetScreen.classList.add('active');
    state.currentScreen = screenName;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (screenName === 'simulation') {
      initSimulation();
    }
    if (screenName === 'results') {
      displayResults();
    }
    if (screenName === 'report') {
      displayReport();
    }
  }
}

// ============================================
// ONBOARDING
// ============================================
function toggleInterest(element) {
  element.classList.toggle('selected');
}

function startQuiz(event) {
  event.preventDefault();

  // Récupérer les données du formulaire
  const form = document.getElementById('onboarding-form');
  const formData = new FormData(form);

  state.userData = {
    name: formData.get('name'),
    bac: formData.get('bac'),
    moyenne: formData.get('moyenne'),
    budget: formData.get('budget'),
    mobilite: formData.get('mobilite'),
    interests: []
  };

  // Récupérer les centres d'intérêt sélectionnés
  document.querySelectorAll('.interest-tag.selected').forEach(tag => {
    state.userData.interests.push(tag.textContent.trim());
  });

  // Réinitialiser le quiz
  state.currentQuestion = 0;
  state.answers = [];
  state.scores = {
    "Analyse & Logique": 0,
    "Créativité & Innovation": 0,
    "Communication & Leadership": 0,
    "Empathie & Collaboration": 0,
    "Ambition & Entrepreneuriat": 0
  };

  // Afficher l'écran de quiz
  showScreen('quiz');
  displayQuestion();
}

// ============================================
// QUIZ - Affichage des questions
// ============================================
function displayQuestion() {
  const question = QUESTIONS[state.currentQuestion];
  const questionCard = document.getElementById('question-card');

  // Mettre à jour la barre de progression
  const progress = ((state.currentQuestion + 1) / QUESTIONS.length) * 100;
  document.getElementById('progress-text').textContent = `Question ${state.currentQuestion + 1} sur ${QUESTIONS.length}`;
  document.getElementById('progress-percent').textContent = `${Math.round(progress)}%`;
  document.getElementById('progress-fill').style.width = `${progress}%`;

  // Générer le HTML de la question
  const letters = ['A', 'B', 'C', 'D'];
  let optionsHTML = '';

  question.options.forEach((option, index) => {
    const isSelected = state.answers[state.currentQuestion] === index;
    optionsHTML += `
      <div class="option-card ${isSelected ? 'selected' : ''}" onclick="selectOption(${index})">
        <div class="option-letter">${letters[index]}</div>
        <div class="option-text">${option.text}</div>
      </div>
    `;
  });

  // Boutons de navigation
  const isFirst = state.currentQuestion === 0;
  const isLast = state.currentQuestion === QUESTIONS.length - 1;
  const hasAnswer = state.answers[state.currentQuestion] !== undefined;

  let navHTML = `
    <div class="quiz-nav">
      ${isFirst
        ? '<button class="btn btn-ghost" onclick="showScreen(\'onboarding\')">← Retour</button>'
        : `<button class="btn btn-ghost" onclick="previousQuestion()">← Précédent</button>`
      }
      ${isLast
        ? `<button class="btn btn-primary" onclick="finishQuiz()" ${!hasAnswer ? 'disabled style="opacity:0.5;"' : ''}>Voir mes résultats →</button>`
        : `<button class="btn btn-primary" onclick="nextQuestion()" ${!hasAnswer ? 'disabled style="opacity:0.5;"' : ''}>Suivant →</button>`
      }
    </div>
  `;

  questionCard.innerHTML = `
    <div class="question-dimension">${question.dimension}</div>
    <h2 class="question-text">${question.text}</h2>
    <div class="options-list">
      ${optionsHTML}
    </div>
    ${navHTML}
  `;
}

function selectOption(index) {
  state.answers[state.currentQuestion] = index;
  displayQuestion();
}

function nextQuestion() {
  if (state.answers[state.currentQuestion] === undefined) return;
  if (state.currentQuestion < QUESTIONS.length - 1) {
    state.currentQuestion++;
    displayQuestion();
  }
}

function previousQuestion() {
  if (state.currentQuestion > 0) {
    state.currentQuestion--;
    displayQuestion();
  }
}

// ============================================
// SCORING - Calcul des scores
// ============================================
function calculateScores() {
  // Réinitialiser
  state.scores = {
    "Analyse & Logique": 0,
    "Créativité & Innovation": 0,
    "Communication & Leadership": 0,
    "Empathie & Collaboration": 0,
    "Ambition & Entrepreneuriat": 0
  };

  // Additionner les points
  state.answers.forEach((answerIndex, questionIndex) => {
    const question = QUESTIONS[questionIndex];
    const option = question.options[answerIndex];
    if (option && state.scores.hasOwnProperty(option.dimension)) {
      state.scores[option.dimension] += option.points;
    }
  });

  // Normaliser sur 100 (chaque dimension peut recevoir max 100 points: 5 questions × 20 points)
  // Mais comme les questions sont réparties, on garde le score brut (max 100)
  Object.keys(state.scores).forEach(key => {
    state.scores[key] = Math.min(state.scores[key], 100);
  });
}

// ============================================
// PROFIL - Détermination du profil
// ============================================
function determineProfile() {
  // Trouver la dimension avec le score le plus élevé
  let maxScore = 0;
  let topDimension = '';

  Object.keys(state.scores).forEach(dim => {
    if (state.scores[dim] > maxScore) {
      maxScore = state.scores[dim];
      topDimension = dim;
    }
  });

  // Trouver le profil correspondant
  const profile = PROFILES.find(p => p.primaryDimension === topDimension) || PROFILES[0];
  state.userProfile = profile;
  return profile;
}

// ============================================
// MÉTIERS - Calcul de compatibilité
// ============================================
function calculateCareerCompatibility() {
  const careersWithScores = CAREERS.map(career => {
    // Calculer la compatibilité = moyenne des scores des dimensions requises
    const requiredDims = career.skills;
    let totalScore = 0;

    requiredDims.forEach(dim => {
      if (state.scores.hasOwnProperty(dim)) {
        totalScore += state.scores[dim];
      }
    });

    const compatibility = Math.round(totalScore / requiredDims.length);

    return {
      ...career,
      compatibility: compatibility
    };
  });

  // Trier par compatibilité décroissante
  careersWithScores.sort((a, b) => b.compatibility - a.compatibility);

  // Garder le top 10
  state.recommendedCareers = careersWithScores.slice(0, 10);
}

// ============================================
// RÉSULTATS - Affichage
// ============================================
function displayResults() {
  displayProfile();
  displayScores();
  displayCareers();
}

function displayProfile() {
  const profile = state.userProfile;
  const dimension = DIMENSIONS.find(d => d.key === profile.primaryDimension);
  const profileCard = document.getElementById('profile-card');

  let strengthsHTML = profile.strengths.map(s => `<span class="strength-tag positive">${s}</span>`).join('');
  let developHTML = profile.toDevelop.map(s => `<span class="strength-tag negative">${s}</span>`).join('');

  profileCard.innerHTML = `
    <div class="profile-icon" style="background: ${dimension.bgColor};">${dimension.icon}</div>
    <h2 class="profile-name">${profile.name}</h2>
    <p class="profile-description">${profile.description}</p>
    <div class="strengths-section">
      <div class="strength-block strengths">
        <h4>💪 Tes points forts</h4>
        <div class="strength-tags">${strengthsHTML}</div>
      </div>
      <div class="strength-block develop">
        <h4>🎯 À développer</h4>
        <div class="strength-tags">${developHTML}</div>
      </div>
    </div>
  `;
}

function displayScores() {
  const scoresList = document.getElementById('scores-list');
  let html = '';

  // Trier les scores par valeur décroissante
  const sortedScores = Object.entries(state.scores).sort((a, b) => b[1] - a[1]);

  sortedScores.forEach(([dim, score]) => {
    const dimension = DIMENSIONS.find(d => d.key === dim);
    html += `
      <div class="score-item">
        <div class="score-header">
          <div class="score-label">
            <span>${dimension.icon}</span>
            <span>${dim}</span>
          </div>
          <div class="score-value" style="color: ${dimension.color};">${score}/100</div>
        </div>
        <div class="score-bar">
          <div class="score-fill" style="width: ${score}%; background: ${dimension.color};"></div>
        </div>
      </div>
    `;
  });

  scoresList.innerHTML = html;
}

function displayCareers() {
  const careersList = document.getElementById('careers-list');
  let html = '';

  state.recommendedCareers.forEach((career, index) => {
    html += `
      <div class="career-card" onclick="toggleCareerDetails(${index})" style="cursor: pointer;">
        <div class="career-rank">${index + 1}</div>
        <div class="career-info">
          <div class="career-name">${career.name}</div>
          <div class="career-meta">
            <span>💰 ${career.salary}</span>
            <span>📈 Demande: ${career.demand}</span>
          </div>
        </div>
        <div class="career-compatibility">
          <div class="compatibility-score">${career.compatibility}%</div>
          <div class="compatibility-label">Compatibilité</div>
        </div>
      </div>
      <div class="career-details" id="career-details-${index}" style="display: none;">
        <h4>🎯 Compétences requises</h4>
        <div class="detail-row">
          ${career.skills.map(s => `<span class="detail-badge badge-indigo">${s}</span>`).join('')}
        </div>
        <h4>📚 Filières d'études</h4>
        <div class="detail-row">
          ${career.fields.map(f => `<span class="detail-badge badge-blue">${f}</span>`).join('')}
        </div>
        <h4>🏫 Établissements</h4>
        <div class="detail-row">
          ${career.schools.map(s => `<span class="detail-badge badge-orange">${s}</span>`).join('')}
        </div>
        <h4>📈 Croissance du marché</h4>
        <p style="color: var(--gray-dark);">${career.demandGrowth}</p>
      </div>
    `;
  });

  careersList.innerHTML = html;
}

function toggleCareerDetails(index) {
  const details = document.getElementById('career-details-' + index);
  if (details.style.display === 'none') {
    details.style.display = 'block';
  } else {
    details.style.display = 'none';
  }
}

// ============================================
// RAPPORT FINAL
// ============================================
function displayReport() {
  const profile = state.userProfile;
  const topCareer = state.recommendedCareers[0];
  const name = state.userData.name || 'toi';
  const reportSummary = document.getElementById('report-summary');
  const parentMessage = document.getElementById('parent-message');
  const fieldsList = document.getElementById('fields-list');
  const careersCatalog = document.getElementById('careers-catalog');
  const schoolsList = document.getElementById('schools-list');
  const scholarshipsList = document.getElementById('scholarships-list');

  if (!profile || !state.recommendedCareers.length) {
    const defaultFields = Array.from(new Set(CAREERS.flatMap(career => career.fields))).slice(0, 8);
    const defaultSchools = SCHOOLS.slice(0, 6);

    reportSummary.innerHTML = `
      <p><strong>ALITCHÉ</strong> te propose un aperçu des meilleures filières et écoles au Bénin,
      même si tu n'as pas encore fait le test.</p>
      <p style="margin-top: 0.75rem;">Commence par "Commencer mon diagnostic" pour obtenir un rapport personnalisé.
      En attendant, voici des filières et établissements recommandés.</p>
    `;

    parentMessage.innerHTML = `
      <p>Pour convaincre tes parents, montre-leur que tu explores déjà des filières sérieuses et des écoles reconnues au Bénin.</p>
    `;

    fieldsList.innerHTML = `
      <div class="detail-row">
        ${defaultFields.map(f => `<span class="detail-badge badge-blue" style="font-size: 0.9rem; padding: 0.5rem 1rem;">${f}</span>`).join('')}
      </div>
    `;

    careersCatalog.innerHTML = CAREERS.slice(0, 8).map(career => `
      <div class="feature-card">
        <div class="feature-icon">🏆</div>
        <h3>${career.name}</h3>
        <p>${career.category}</p>
        <p style="font-size: 0.9rem; color: var(--gray-medium);">Salaires estimés : ${career.salary}</p>
      </div>
    `).join('');

    schoolsList.innerHTML = defaultSchools.map(school => `
      <div style="margin-bottom: 1rem; padding: 1rem; background: var(--gray-pale); border-radius: var(--r-md);">
        <strong style="color: var(--indigo);">${school.name}</strong>
        <p style="font-size: 0.9rem; color: var(--gray-dark); margin: 0.25rem 0;">${school.fullName}</p>
        <p style="font-size: 0.85rem; color: var(--gray-medium);">⏱️ ${school.duration} | 💰 ${school.cost}</p>
      </div>
    `).join('');

    scholarshipsList.innerHTML = SCHOLARSHIPS.slice(0, 4).map(s => `
      <div style="margin-bottom: 0.75rem; padding: 0.875rem 1rem; background: var(--orange-light); border-radius: var(--r-md);">
        <strong style="color: var(--orange);">🎓 ${s.name}</strong>
        <p style="font-size: 0.85rem; color: var(--gray-dark); margin-top: 0.25rem;">${s.description}</p>
      </div>
    `).join('');

    return;
  }

  // Synthèse
  reportSummary.innerHTML = `
    <p><strong>${name}</strong>, ton profil dominant est <strong>${profile.name}</strong>.
    Le métier le plus compatible avec ton profil est <strong>${topCareer.name}</strong>
    avec un score de compatibilité de <strong>${topCareer.compatibility}%</strong>.</p>
    <p style="margin-top: 0.75rem;">Tu excelles particulièrement dans les domaines liés à
    <strong>${profile.primaryDimension}</strong>. ${profile.description}</p>
  `;

  // Message pour les parents
  const secondCareer = state.recommendedCareers[1] || topCareer;
  const thirdCareer = state.recommendedCareers[2] || topCareer;
  const topCareerNames = [topCareer.name, secondCareer.name, thirdCareer.name].filter(Boolean).join(', ');

  document.getElementById('parent-message').innerHTML = `
    <p>"Suite à un test de personnalité réalisé sur ALITCHÉ, ${name} a un profil de type
    <strong>${profile.name}</strong>. Les métiers les plus recommandés pour ${name} sont
    <strong>${topCareerNames}</strong>. Ces métiers sont en demande au Bénin et correspondent
    aux forces naturelles de ${name}."</p>
  `;

  // Filières recommandées (basées sur le top 3 métiers)
  const allFields = new Set();
  state.recommendedCareers.slice(0, 3).forEach(career => {
    career.fields.forEach(f => allFields.add(f));
  });
  fieldsList.innerHTML = `
    <div class="detail-row">
      ${Array.from(allFields).map(f => `<span class="detail-badge badge-blue" style="font-size: 0.9rem; padding: 0.5rem 1rem;">${f}</span>`).join('')}
    </div>
  `;

  // Établissements
  const allSchools = new Set();
  state.recommendedCareers.slice(0, 3).forEach(career => {
    career.schools.forEach(s => allSchools.add(s));
  });

  let schoolsHTML = '';
  SCHOOLS.forEach(school => {
    if (allSchools.has(school.name) || allSchools.has(school.fullName)) {
      schoolsHTML += `
        <div style="margin-bottom: 1rem; padding: 1rem; background: var(--gray-pale); border-radius: var(--radius-md);">
          <strong style="color: var(--indigo);">${school.name}</strong>
          <p style="font-size: 0.9rem; color: var(--gray-dark); margin: 0.25rem 0;">${school.fullName}</p>
          <p style="font-size: 0.85rem; color: var(--gray-medium);">⏱️ ${school.duration} | 💰 ${school.cost}</p>
        </div>
      `;
    }
  });

  // Si aucun établissement ne correspond, afficher tous les établissements
  if (!schoolsHTML) {
    SCHOOLS.forEach(school => {
      schoolsHTML += `
        <div style="margin-bottom: 1rem; padding: 1rem; background: var(--gray-pale); border-radius: var(--radius-md);">
          <strong style="color: var(--indigo);">${school.name}</strong>
          <p style="font-size: 0.9rem; color: var(--gray-dark); margin: 0.25rem 0;">${school.fullName}</p>
          <p style="font-size: 0.85rem; color: var(--gray-medium);">⏱️ ${school.duration} | 💰 ${school.cost}</p>
        </div>
      `;
    });
  }

  schoolsList.innerHTML = schoolsHTML;

  // Bourses
  scholarshipsList.innerHTML = SCHOLARSHIPS.map(s => `
    <div style="margin-bottom: 0.75rem; padding: 0.875rem 1rem; background: var(--orange-light); border-radius: var(--radius-md);">
      <strong style="color: var(--orange);">🎓 ${s.name}</strong>
      <p style="font-size: 0.85rem; color: var(--gray-dark); margin-top: 0.25rem;">${s.description}</p>
    </div>
  `).join('');
}

// ============================================
// FIN DU QUIZ
// ============================================
function finishQuiz() {
  // Calculer les scores
  calculateScores();

  // Déterminer le profil
  determineProfile();

  // Calculer la compatibilité des métiers
  calculateCareerCompatibility();

  // Afficher les résultats
  displayResults();

  // Afficher l'écran de résultats
  showScreen('results');
}

// ============================================
// PARTAGE & RESET
// ============================================
function shareResult() {
  const profile = state.userProfile;
  const topCareer = state.recommendedCareers[0];
  const name = state.userData.name || 'Quelqu\'un';

  const text = `Je viens de faire mon test d'orientation sur ALITCHÉ ! Mon profil: ${profile.name}. Métier recommandé: ${topCareer.name} (${topCareer.compatibility}% de compatibilité). Fais le tien sur ALITCHÉ ! 🚀`;

  if (navigator.share) {
    navigator.share({
      title: 'Mon profil ALITCHÉ',
      text: text
    }).catch(err => console.log('Partage annulé'));
  } else {
    // Copier dans le presse-papier
    navigator.clipboard.writeText(text).then(() => {
      alert('Résultat copié ! Tu peux le partager sur WhatsApp. 📋');
    }).catch(() => {
      alert(text);
    });
  }
}

function resetAll() {
  state = {
    currentScreen: 'home',
    currentQuestion: 0,
    answers: [],
    scores: {
      "Analyse & Logique": 0,
      "Créativité & Innovation": 0,
      "Communication & Leadership": 0,
      "Empathie & Collaboration": 0,
      "Ambition & Entrepreneuriat": 0
    },
    userProfile: null,
    recommendedCareers: [],
    userData: {}
  };

  // Réinitialiser le formulaire
  document.getElementById('onboarding-form').reset();
  document.querySelectorAll('.interest-tag.selected').forEach(tag => {
    tag.classList.remove('selected');
  });

  showScreen('home');
}

// ============================================
// IA COACH
// ============================================
function toggleCoach() {
  const panel = document.getElementById('coach-panel');
  panel.classList.toggle('open');
}

function sendCoachMessage() {
  const input = document.getElementById('coach-input-field');
  const message = input.value.trim();

  if (!message) return;

  // Ajouter le message de l'utilisateur
  addCoachMessage(message, 'user');

  // Vider l'input
  input.value = '';

  // Générer une réponse
  setTimeout(() => {
    const response = generateCoachResponse(message);
    addCoachMessage(response, 'bot');
  }, 500);
}

function sendSuggestion(text) {
  addCoachMessage(text, 'user');
  setTimeout(() => {
    const response = generateCoachResponse(text);
    addCoachMessage(response, 'bot');
  }, 500);
}

function addCoachMessage(text, sender) {
  const messagesContainer = document.getElementById('coach-messages');
  const messageEl = document.createElement('div');
  messageEl.className = `coach-message ${sender}`;
  messageEl.textContent = text;
  messagesContainer.appendChild(messageEl);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleCoachEnter(event) {
  if (event.key === 'Enter') {
    sendCoachMessage();
  }
}

function initSimulation() {
  const careerSelect = document.getElementById('simulation-career-select');
  careerSelect.innerHTML = CAREERS.map(career => `<option value="${career.name}">${career.name}</option>`).join('');
  if (CAREERS.length > 0) {
    updateSimulationFields(CAREERS[0].name);
  }
}

function updateSimulationFields(careerName) {
  const career = CAREERS.find(item => item.name === careerName) || CAREERS[0];
  const fieldSelect = document.getElementById('simulation-field-select');
  const schoolSelect = document.getElementById('simulation-school-select');

  fieldSelect.innerHTML = career.fields.map(field => `<option value="${field}">${field}</option>`).join('');
  schoolSelect.innerHTML = career.schools.map(school => `<option value="${school}">${school}</option>`).join('');
  updateSimulationPreview();
}

function updateSimulationPreview() {
  const careerName = document.getElementById('simulation-career-select').value;
  const selectedField = document.getElementById('simulation-field-select').value;
  const selectedSchool = document.getElementById('simulation-school-select').value;
  const career = CAREERS.find(item => item.name === careerName) || CAREERS[0];
  const summary = document.getElementById('simulation-summary');
  const timeline = document.getElementById('simulation-timeline');
  const metrics = document.getElementById('simulation-metrics');

  const estimatedSalary = career.salary;
  const demand = career.demand;
  const demandGrowth = career.demandGrowth;
  const fields = career.fields.join(' • ');
  const schools = career.schools.join(', ');

  summary.innerHTML = `
    <h4>Résumé du métier</h4>
    <p><strong>${career.name}</strong> — ${career.category}</p>
    <p>Filière choisie : <strong>${selectedField}</strong></p>
    <p>Établissement choisi : <strong>${selectedSchool}</strong></p>
    <p>Salaires estimés : <strong>${estimatedSalary}</strong></p>
    <p>Demande locale : <strong>${demand}</strong></p>
  `;

  timeline.innerHTML = `
    <h4>Parcours d'étude simulé</h4>
    <div class="simulation-step"><span>1</span><div><strong>Étape 1</strong><p>Choisis la filière <strong>${selectedField}</strong> et prépare ton dossier.</p></div></div>
    <div class="simulation-step"><span>2</span><div><strong>Étape 2</strong><p>Intègre <strong>${selectedSchool}</strong> pour suivre la formation.</p></div></div>
    <div class="simulation-step"><span>3</span><div><strong>Étape 3</strong><p>Complète 3 à 5 ans de cours et projets pratiques.</p></div></div>
    <div class="simulation-step"><span>4</span><div><strong>Étape 4</strong><p>Valide ton stage et ta première expérience professionnelle.</p></div></div>
    <div class="simulation-step"><span>5</span><div><strong>Étape 5</strong><p>Accède à un emploi cible avec un salaire prévu de ${estimatedSalary}.</p></div></div>
  `;

  metrics.innerHTML = `
    <h4>Indicateurs clés</h4>
    <p>Demande : <strong>${demand}</strong></p>
    <p>Croissance projetée : <strong>${demandGrowth}</strong></p>
    <p>Établissement choisi : <strong>${selectedSchool}</strong></p>
    <p>Filière choisie : <strong>${selectedField}</strong></p>
  `;
}

function generateCoachResponse(message) {
  const msg = message.toLowerCase();

  // Réponses basées sur des mots-clés
  if (msg.includes('filière') || msg.includes('filiere')) {
    if (state.userProfile) {
      const topCareer = state.recommendedCareers[0];
      return `D'après ton profil (${state.userProfile.name}), je te recommande les filières: ${topCareer.fields.join(', ')}. Tu peux les étudier à ${topCareer.schools.join(', ')}.`;
    }
    return 'Pour te recommander des filières, il faut d\'abord faire le test de personnalité. Clique sur "Commencer mon diagnostic" ! 🚀';
  }

  if (msg.includes('choisir') || msg.includes('métier') || msg.includes('metier')) {
    return 'Pour choisir ton métier, commence par le test de personnalité. Il te révélera tes forces et te proposera des métiers concrets au Bénin. Ensuite, regarde le score de compatibilité et les salaires réels ! 💡';
  }

  if (msg.includes('demandé') || msg.includes('demande') || msg.includes('marché')) {
    return 'Les métiers les plus demandés au Bénin sont dans la technologie (développeur, data scientist), la santé (médecin, infirmier) et le business (entrepreneur, manager). La croissance est de 40-60% par an dans la tech ! 📈';
  }

  if (msg.includes('salaire') || msg.includes('gagne')) {
    return 'Les salaires au Bénin varient selon le secteur: Tech (250 000 - 800 000 FCFA), Santé (150 000 - 600 000 FCFA), Business (200 000 - 1 000 000+ FCFA). Fais le test pour voir les salaires des métiers qui te correspondent ! 💰';
  }

  if (msg.includes('bourse') || msg.includes('financement')) {
    return 'Il existe plusieurs bourses: gouvernement béninois, Campus France, bourses africaines (AAGB, BAD), bourses privées et crédits étudiants. Consulte ton rapport final pour plus de détails ! 💰';
  }

  if (msg.includes('bonjour') || msg.includes('salut') || msg.includes('hello')) {
    return 'Salut ! 😊 Je suis là pour t\'aider avec ton orientation. Tu peux me demander sur les filières, les métiers, les salaires ou les bourses au Bénin !';
  }

  if (msg.includes('merci')) {
    return 'De rien ! N\'hésite pas si tu as d\'autres questions. Bonne chance pour ton orientation ! 🍀';
  }

  // Réponse par défaut
  return 'Bonne question ! Je peux t\'aider sur les filières, les métiers, les salaires et les bourses au Bénin. Que veux-tu savoir exactement ? 🤔';
}

// ============================================
// INITIALISATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('ALITCHÉ - Application initialisée');
  initSimulation();
});

window.showScreen = showScreen;
window.displayReport = displayReport;
window.updateSimulationFields = updateSimulationFields;
window.updateSimulationPreview = updateSimulationPreview;
window.initSimulation = initSimulation;
window.toggleInterest = toggleInterest;
window.startQuiz = startQuiz;
window.selectOption = selectOption;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.finishQuiz = finishQuiz;
window.sendCoachMessage = sendCoachMessage;
window.sendSuggestion = sendSuggestion;
window.handleCoachEnter = handleCoachEnter;
window.toggleCareerDetails = toggleCareerDetails;
window.shareResult = shareResult;