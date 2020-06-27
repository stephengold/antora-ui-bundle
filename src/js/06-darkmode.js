var currentTheme = window.localStorage.getItem('theme')
if (currentTheme) {
  setTheme(currentTheme)
} else {
  //set dark by default
  setTheme('dark')
}

function setTheme (x) {
  document.documentElement.setAttribute('data-theme', x)
  window.localStorage.setItem('theme', x)
}
