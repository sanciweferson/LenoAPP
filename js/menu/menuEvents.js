import {
  menuToggleButton,
  sideMenu,
  openSideMenu,
  closeSideMenu,
  MOBILE_BREAKPOINT,
} from "./menuActions.js"

export const setupMenuToggle = () => {
  if (!menuToggleButton || !sideMenu) return

  menuToggleButton.addEventListener("click", () => {
    const isOpen = sideMenu.classList.contains("open")
    isOpen ? closeSideMenu() : openSideMenu()
  })
}

export const setupMenuStateOnLoad = () => {
  const menuOpenSaved = localStorage.getItem("menuOpen") === "true"
  if (menuOpenSaved && window.innerWidth <= MOBILE_BREAKPOINT) {
    openSideMenu()
  } else {
    closeSideMenu()
  }
}

export const setupMenuResizeHandler = () => {
  window.addEventListener("resize", () => {
    if (
      window.innerWidth > MOBILE_BREAKPOINT &&
      sideMenu.classList.contains("open")
    ) {
      closeSideMenu()
    }
  })
}

export const setupMobileLinkClicks = () => {
  if (!sideMenu) return

  const links = sideMenu.querySelectorAll("a[href]")

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href")

      // Fecha o menu sempre
      closeSideMenu()

      // Se for link de âncora local, impede o comportamento padrão e faz scroll
      if (href.startsWith("#")) {
        event.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth" })
          }, 200)
        }
      }
      // Se for link para outra página, navegador seguirá normalmente
    })
  })
}
