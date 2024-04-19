// author: vanthom04

const topMenu = document.getElementById('ct-top-menu')
const toggleTopMenu = document.getElementById('toggle-top-menu')

document.addEventListener('click', (e) => {
  if (toggleTopMenu.contains(e.target)) {
    topMenu.classList.toggle('ct-top-menu-expanded')
    topMenu.classList.toggle('hidden')
  } else {
    if (topMenu.classList.contains('ct-top-menu-expanded')) {
      topMenu.classList.remove('ct-top-menu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})
