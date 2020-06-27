var currentTheme = window.localStorage.getItem('theme')
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)
} else {
  //set dark by default
  document.documentElement.setAttribute('data-theme', 'dark')
}

function setTheme(x) {
    document.documentElement.setAttribute('data-theme', x)
    window.localStorage.setItem('theme', x)
}