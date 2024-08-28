document.addEventListener("DOMContentLoaded", function () {
  // Создание футера и его добавление в DOM
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    const footer = document.createElement("footer");
    footer.innerHTML = `
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    `;
    footerContainer.appendChild(footer);
  }

  // Avatar syles
  const avatar = document.getElementById("avatar");
  if (avatar) {
    avatar.style.width = "230px";
    avatar.style.padding = "0px";
    avatar.style.margin = "auto";
    avatar.style.borderRadius = "14%";
  }

  // Switcher of Language
  const languageMenu = document.querySelector(".language-menu");
  const selectedLanguageImg = document.querySelector(".selected-language img");
  const selectedLanguageText = document.querySelector(
    ".selected-language span"
  );
  const languages = document.querySelectorAll(".language-switcher .language");

  if (
    languageMenu &&
    selectedLanguageImg &&
    selectedLanguageText &&
    languages.length
  ) {
    languageMenu.addEventListener("click", function () {
      languageMenu.classList.toggle("open");
    });

    languages.forEach((language) => {
      language.addEventListener("click", function () {
        const imgSrc = this.querySelector("img").src;
        const langText = this.querySelector("span").textContent;
        selectedLanguageImg.src = imgSrc;
        selectedLanguageText.textContent = langText;
        languageMenu.classList.remove("open");
      });
    });
  }

  // Colse the menu when clicked under that menu
  document.addEventListener("click", function (event) {
    if (languageMenu && !languageMenu.contains(event.target)) {
      languageMenu.classList.remove("open");
    }

    const modal = document.getElementById("modal");
    if (
      modal &&
      modal.classList.contains("open") &&
      !modal.contains(event.target) &&
      !event.target.closest(".gallery-item img")
    ) {
      modal.classList.remove("open");
    }
  });

  // Modal creating
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalClose = document.querySelector(".modal-close");

  if (modalImg && modalClose) {
    // Open modal when user clicked on img in "gallery"
    document.querySelectorAll(".gallery-item img").forEach((item) => {
      item.addEventListener("click", function () {
        const imgSrc = this.src;
        modalImg.src = imgSrc;
        modal.classList.add("open");
      });
    });

    // Close modal when clicked on cross
    modalClose.addEventListener("click", function () {
      modal.classList.remove("open");
    });
  }

  // Burger Menu
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", function () {
      navbarCollapse.classList.toggle("active");
    });
  }
});
