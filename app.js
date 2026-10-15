const scenes = [
  {
    title: 'Era uma vez, bem baixinho...',
    text: 'A Lua morava no alto do céu e adorava ouvir o mundo dormir. Mas naquela noite, ela queria contar uma história.',
    art: 'A Lua que Aprendeu a Sussurrar'
  },
  {
    title: 'O segredo das coisas pequenas',
    text: 'Ela descobriu que uma folha fazendo shhh... era música. Que um abraço tinha som. E que o silêncio também sabia cantar.',
    art: 'Uma descoberta macia'
  },
  {
    title: 'Um convite no escuro',
    text: '“Querem ouvir?”, perguntou a Lua. A raposinha ajeitou o cobertor, o passarinho fechou os olhos e o quarto ficou quentinho.',
    art: 'Todo mundo pertinho'
  },
  {
    title: 'A história que virou brilho',
    text: 'A Lua contou sobre uma estrelinha que tinha medo de piscar. Cada palavra era um pontinho dourado no céu.',
    art: 'Pontinhos de coragem'
  },
  {
    title: 'Boa noite, Lua',
    text: 'Quando a história acabou, todos já dormiam. A Lua sorriu e sussurrou: “Até amanhã. Que seus sonhos sejam leves.”',
    art: 'Um final para guardar'
  }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const body = document.body;
const reader = $('#reader');
const sceneTitle = $('#sceneTitle');
const sceneText = $('#sceneText');
const sceneKicker = $('#sceneKicker');
const progressBar = $('#progressBar');
const progressPercent = $('#progressPercent');
const sceneLabel = $('#sceneLabel');
const prevScene = $('#prevScene');
const nextScene = $('#nextScene');
const sceneDots = $('#sceneDots');
const toast = $('#toast');
let currentScene = Number(localStorage.getItem('lumia-scene') || 0);
let toastTimer;
let filterFree = false;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

function setTheme(theme) {
  body.dataset.theme = theme;
  localStorage.setItem('lumia-theme', theme);
  $$('.theme-pill').forEach((button) => button.classList.toggle('active', button.dataset.theme === theme));
  const label = $(`.theme-pill[data-theme="${theme}"] span:last-child`)?.textContent || 'novo céu';
  showToast(`Céu trocado para ${label.toLowerCase()}.`);
}

function setNightMode(enabled) {
  body.classList.toggle('night-mode', enabled);
  localStorage.setItem('lumia-night', enabled ? 'on' : 'off');
  const label = enabled ? 'Desativar modo noturno' : 'Ativar modo noturno';
  ['#nightToggle', '#readerNight'].forEach((selector) => {
    const button = $(selector);
    if (button) {
      button.setAttribute('aria-label', label);
      button.querySelector('span').textContent = enabled ? '☀' : '☾';
    }
  });
}

function setReaderNightMode(enabled) {
  reader.classList.toggle('reader-night-mode', enabled);
  $('#readerNight').setAttribute('aria-label', enabled ? 'Desativar modo noturno' : 'Ativar modo noturno');
  $('#readerNight span').textContent = enabled ? '☀' : '☾';
}

function renderDots() {
  sceneDots.innerHTML = scenes.map((scene, index) => `<button type="button" aria-label="Ir para a cena ${index + 1}" class="${index === currentScene ? 'active' : ''}" data-scene="${index}"></button>`).join('');
  $$('#sceneDots button').forEach((dot) => dot.addEventListener('click', () => {
    currentScene = Number(dot.dataset.scene);
    renderScene();
  }));
}

function renderScene() {
  const scene = scenes[currentScene];
  const percent = Math.round(((currentScene + 1) / scenes.length) * 100);
  sceneTitle.textContent = scene.title;
  sceneText.textContent = scene.text;
  sceneKicker.textContent = scene.art;
  sceneLabel.textContent = `Cena ${currentScene + 1} de ${scenes.length}`;
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  prevScene.disabled = currentScene === 0;
  nextScene.innerHTML = currentScene === scenes.length - 1 ? 'Voltar para a biblioteca <span class="button-arrow">↗</span>' : 'Próxima cena <span class="button-arrow">→</span>';
  renderDots();
  localStorage.setItem('lumia-scene', String(currentScene));
}

function openReader(startAt = 0) {
  currentScene = Math.max(0, Math.min(startAt, scenes.length - 1));
  renderScene();
  reader.classList.add('is-open');
  reader.setAttribute('aria-hidden', 'false');
  document.documentElement.style.overflow = 'hidden';
  setReaderNightMode(body.classList.contains('night-mode'));
  $('#closeReader').focus();
}

function closeReader() {
  reader.classList.remove('is-open');
  reader.setAttribute('aria-hidden', 'true');
  document.documentElement.style.overflow = '';
  window.speechSynthesis?.cancel();
}

function openDialog(id) {
  const dialog = $(id);
  dialog.classList.add('is-open');
  dialog.setAttribute('aria-hidden', 'false');
  document.documentElement.style.overflow = 'hidden';
  dialog.querySelector('[data-close-dialog], .dialog-close')?.focus();
}

function closeDialogs() {
  $$('.dialog-backdrop.is-open').forEach((dialog) => {
    dialog.classList.remove('is-open');
    dialog.setAttribute('aria-hidden', 'true');
  });
  if (!reader.classList.contains('is-open')) document.documentElement.style.overflow = '';
}

function speakScene() {
  if (!('speechSynthesis' in window)) {
    showToast('O áudio não está disponível neste dispositivo.');
    return;
  }
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    $('#speakLabel').textContent = 'Ouvir história';
    return;
  }
  const utterance = new SpeechSynthesisUtterance(`${scenes[currentScene].title}. ${scenes[currentScene].text}`);
  utterance.lang = 'pt-BR';
  utterance.rate = .85;
  utterance.pitch = 1.05;
  utterance.onstart = () => { $('#speakLabel').textContent = 'Parar narração'; };
  utterance.onend = () => { $('#speakLabel').textContent = 'Ouvir história'; };
  window.speechSynthesis.speak(utterance);
}

$$('.theme-pill').forEach((button) => button.addEventListener('click', () => setTheme(button.dataset.theme)));
$('#startStory').addEventListener('click', () => openReader(0));
$('#resumeStory').addEventListener('click', () => {
  const saved = Number(localStorage.getItem('lumia-scene') || 0);
  if (saved > 0 && saved < scenes.length - 1) {
    openReader(saved);
    showToast(`Voltamos para a cena ${saved + 1}.`);
  } else {
    openReader(0);
  }
});
$$('.open-story').forEach((button) => button.addEventListener('click', (event) => {
  event.stopPropagation();
  openReader(0);
}));
$$('.open-club').forEach((button) => button.addEventListener('click', () => openDialog('#clubDialog')));
$('#parentButton').addEventListener('click', () => openDialog('#parentDialog'));
$('#nightToggle').addEventListener('click', () => setNightMode(!body.classList.contains('night-mode')));
$('#readerNight').addEventListener('click', () => {
  const enabled = !reader.classList.contains('reader-night-mode');
  setReaderNightMode(enabled);
  setNightMode(enabled);
});
$('#closeReader').addEventListener('click', closeReader);
$('#nextScene').addEventListener('click', () => {
  if (currentScene === scenes.length - 1) {
    closeReader();
    showToast('Que bom sonhar com você. Até a próxima noite.');
    return;
  }
  currentScene += 1;
  renderScene();
});
prevScene.addEventListener('click', () => {
  if (currentScene > 0) {
    currentScene -= 1;
    renderScene();
  }
});
$('#speakScene').addEventListener('click', speakScene);
$('#hintButton').addEventListener('click', () => showToast('Dica: leia devagar e deixe a criança completar os sons.'));
$('#filterButton').addEventListener('click', () => {
  filterFree = !filterFree;
  $('#filterButton').innerHTML = filterFree ? 'Grátis <span aria-hidden="true">⌄</span>' : 'Todas <span aria-hidden="true">⌄</span>';
  $$('.premium-card').forEach((card) => card.classList.toggle('is-filtered', filterFree));
  if (filterFree) {
    $$('.premium-card').forEach((card) => { card.style.display = 'none'; });
    showToast('Mostrando histórias gratuitas.');
  } else {
    $$('.premium-card').forEach((card) => { card.style.display = ''; });
    showToast('Biblioteca completa restaurada.');
  }
});
$('#interestButton').addEventListener('click', () => {
  closeDialogs();
  showToast('Anotado. Avisaremos quando o Clube Lúmia abrir.');
});
$$('[data-close-dialog]').forEach((button) => button.addEventListener('click', closeDialogs));
$$('.dialog-backdrop').forEach((backdrop) => backdrop.addEventListener('click', (event) => { if (event.target === backdrop) closeDialogs(); }));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { if (reader.classList.contains('is-open')) closeReader(); else closeDialogs(); }
  if (reader.classList.contains('is-open') && event.key === 'ArrowRight') nextScene.click();
  if (reader.classList.contains('is-open') && event.key === 'ArrowLeft') prevScene.click();
});

const savedTheme = localStorage.getItem('lumia-theme');
if (savedTheme) {
  body.dataset.theme = savedTheme;
  $$('.theme-pill').forEach((button) => button.classList.toggle('active', button.dataset.theme === savedTheme));
}
setNightMode(localStorage.getItem('lumia-night') === 'on');
