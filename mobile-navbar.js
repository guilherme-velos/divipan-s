class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();





































  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".cta-button");

    window.addEventListener("scroll", () => {
        const scrollPos = window.scrollY;

        if (scrollPos > 100) {
            button.classList.add("scroll-effect");
        } else {
            button.classList.remove("scroll-effect");
        }
    });
});































document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector("#sobre");
  const aboutText = document.querySelector(".about-text");
  const aboutImage = document.querySelector(".about-image");

  // Função para verificar se o elemento está visível na tela
  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Função para aplicar animações quando a seção estiver visível
  function handleScroll() {
      if (isElementInViewport(aboutSection)) {
          aboutText.classList.add("animate-text");
          aboutImage.classList.add("animate-image");
      }
  }

  // Adiciona evento de rolagem
  window.addEventListener("scroll", handleScroll);

  // Adiciona animação inicial
  handleScroll();
});


















document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("product-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const closeModal = document.querySelector(".close-modal");
  const buttons = document.querySelectorAll(".btn-detalhes");

  // Função para abrir o modal com os detalhes do produto
  buttons.forEach(button => {
      button.addEventListener("click", () => {
          const name = button.getAttribute("data-name");
          const desc = button.getAttribute("data-desc");
          const img = button.getAttribute("data-img");

          modalTitle.textContent = name;
          modalDesc.textContent = desc;
          modalImg.src = img;

          modal.style.display = "flex";
      });
  });

  // Fechar modal
  closeModal.addEventListener("click", () => {
      modal.style.display = "none";
  });

  // Fechar modal clicando fora do conteúdo
  window.addEventListener("click", (e) => {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });
});











document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");

  contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // Simulação de envio de formulário
      alert("Obrigado por entrar em contato! Responderemos em breve.");
      contactForm.reset();
  });

  // Efeito de rolagem suave para links (se houver)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute("href")).scrollIntoView({
              behavior: "smooth"
          });
      });
  });
});


















document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".mobile-menu1");
  const navList = document.querySelector(".nav-list1");

  // Toggle do menu mobile
  mobileMenu.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      navList.classList.toggle("active");
  });

  // Fechar o menu ao clicar em um link
  document.querySelectorAll(".nav-list1 a").forEach(link => {
      link.addEventListener("click", () => {
          mobileMenu.classList.remove("active");
          navList.classList.remove("active");
      });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-list1 a'); // Seleciona os links da navegação

  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Impede o comportamento padrão do link

          // Obtém o destino a partir do atributo href
          const targetId = this.getAttribute("href").slice(1); // Remove o "#" do href
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              // Calcula a posição do destino na página
              const headerOffset = 70; // Altura do header fixo
              const elementPosition = targetElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY - headerOffset;

              // Suaviza a rolagem para o destino
              window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
              });
          }
      });
  });
});
