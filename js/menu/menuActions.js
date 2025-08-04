// js/menu/menuActions.js

export const menuToggleButton = document.getElementById("menu-toggle")
export const sideMenu = document.getElementById("side-menu")
export const MOBILE_BREAKPOINT = 768

export const openSideMenu = () => {
  sideMenu.classList.add("open")
  menuToggleButton.innerHTML = "&times;"
  menuToggleButton.setAttribute("aria-expanded", "true")
  sideMenu.setAttribute("aria-hidden", "false")
  localStorage.setItem("menuOpen", "true")
}

export const closeSideMenu = () => {
  sideMenu.classList.remove("open")
  menuToggleButton.innerHTML = "&#9776;"

  menuToggleButton.setAttribute("aria-expanded", "false")
  sideMenu.setAttribute("aria-hidden", "true")
  localStorage.setItem("menuOpen", "false")
}
