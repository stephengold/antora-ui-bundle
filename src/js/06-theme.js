var currentTheme = window.localStorage.getItem('theme')
if (currentTheme) {
  setTheme(currentTheme)
} else {
  //set 'light' by default
  setTheme('light')
}

function setTheme (x) {
  document.documentElement.setAttribute('data-theme', x)
  window.localStorage.setItem('theme', x)
}
