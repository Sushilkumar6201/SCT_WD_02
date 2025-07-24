let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function updateDisplay() {
  const currentTime = Date.now() - startTime + elapsedTime;
  const milliseconds = currentTime % 1000;
  const seconds = Math.floor((currentTime / 1000) % 60);
  const minutes = Math.floor((currentTime / 60000) % 60);
  const hours = Math.floor((currentTime / 3600000));

  document.getElementById('display').textContent =
    `${String(hours).padStart(2, '0')}:` +
    `${String(minutes).padStart(2, '0')}:` +
    `${String(seconds).padStart(2, '0')}.` +
    `${String(milliseconds).padStart(3, '0')}`;
}

function startTimer() {
  if (!isRunning) {
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 10);
    isRunning = true;
  }
}

function pauseTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
    isRunning = false;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  document.getElementById('display').textContent = '00:00:00.000';
  document.getElementById('lapList').innerHTML = '';
}

function recordLap() {
  if (!isRunning) return;
  const lapTime = document.getElementById('display').textContent;
  const lapList = document.getElementById('lapList');
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap ${lapList.children.length + 1}: ${lapTime}`;
  lapList.appendChild(lapItem);
}
