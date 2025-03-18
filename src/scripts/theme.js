// システムの設定に基づいてテーマを設定
if (!('color-theme' in localStorage)) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
  }
} else {
  if (localStorage.getItem('color-theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
} 