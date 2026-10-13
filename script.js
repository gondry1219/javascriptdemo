// 간단한 동작: 다크모드 토글, 폼 제출 시 에코, 시계 업데이트
document.addEventListener('DOMContentLoaded', function(){
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const form = document.getElementById('echoForm');
  const textInput = document.getElementById('textInput');
  const output = document.getElementById('output');
  const clock = document.getElementById('clock');

  // 이전 선택 기억
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '라이트 모드';
  }

  themeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark');
    themeToggle.textContent = isDark ? '라이트 모드' : '다크 모드';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = textInput.value.trim();
    if (!text) return;
    output.textContent = `입력값: ${text}`;
    textInput.value = '';
  });

  // 시계 업데이트
  function updateClock(){
    const now = new Date();
    const hh = String(now.getHours()).padStart(2,'0');
    const mm = String(now.getMinutes()).padStart(2,'0');
    const ss = String(now.getSeconds()).padStart(2,'0');
    clock.textContent = `${hh}:${mm}:${ss}`;
  }
  updateClock();
  setInterval(updateClock, 1000);
});
