// ==============================
// MENU MOBILE
// ==============================

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active");
  });
});


// ==============================
// SACOLA DE COMPRAS
// ==============================

let cart = [];

function addToCart(productName) {

  cart.push(productName);

  updateCart();

  openCart();
}


function updateCart() {

  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");

  cartCount.textContent = cart.length;

  if (cart.length === 0) {

    cartItems.innerHTML = `
      <p class="empty-cart">
        Sua sacola está vazia.
      </p>
    `;

    return;
  }

  cartItems.innerHTML = "";

  cart.forEach((product, index) => {

    const item = document.createElement("div");

    item.classList.add("cart-item");

    item.innerHTML = `
      <strong>${product}</strong>

      <button onclick="removeFromCart(${index})">
        Remover
      </button>
    `;

    cartItems.appendChild(item);

  });
}


function removeFromCart(index) {

  cart.splice(index, 1);

  updateCart();
}


function openCart() {

  document
    .getElementById("cart")
    .classList.add("active");

  document
    .getElementById("cart-overlay")
    .classList.add("active");

  document.body.style.overflow = "hidden";
}


function closeCart() {

  document
    .getElementById("cart")
    .classList.remove("active");

  document
    .getElementById("cart-overlay")
    .classList.remove("active");

  document.body.style.overflow = "";
}


// ==============================
// FINALIZAR COMPRA
// ==============================

function demoCheckout() {

  if (cart.length === 0) {

    alert(
      "Sua sacola está vazia. Adicione um produto antes de finalizar."
    );

    return;
  }

  alert(
    "AMORA ♡\n\n" +
    "Esta é uma demonstração de loja virtual.\n\n" +
    "Em um site real, este botão levaria o cliente para o pagamento."
  );
}


// ==============================
// PESQUISA
// ==============================

function openSearch() {

  document
    .getElementById("search-box")
    .classList.add("active");

  setTimeout(() => {

    const input =
      document.querySelector("#search-box input");

    if (input) {
      input.focus();
    }

  }, 400);
}


function closeSearch() {

  document
    .getElementById("search-box")
    .classList.remove("active");
}


// ==============================
// NEWSLETTER
// ==============================

function subscribe(event) {

  event.preventDefault();

  const email =
    document.getElementById("newsletter-email").value;

  const message =
    document.getElementById("newsletter-message");

  message.innerHTML =
    "♡ Cadastro realizado! " +
    "<strong>" + email + "</strong> " +
    "foi adicionado à nossa lista demonstrativa.";

  event.target.reset();
}


// ==============================
// FECHAR COM TECLA ESC
// ==============================

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeCart();
    closeSearch();

  }

});


// ==============================
// CABEÇALHO AO ROLAR
// ==============================

window.addEventListener("scroll", () => {

  const header =
    document.getElementById("header");

  if (window.scrollY > 150) {

    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.right = "0";

    header.style.background =
      "rgba(251, 249, 246, 0.96)";

    header.style.backdropFilter =
      "blur(12px)";

    header.style.boxShadow =
      "0 4px 25px rgba(0,0,0,0.06)";

  } else {

    header.style.position = "relative";

    header.style.background = "";

    header.style.backdropFilter = "";

    header.style.boxShadow = "";

  }

});


// ==============================
// ANIMAÇÃO DOS PRODUTOS
// ==============================

const products =
  document.querySelectorAll(".product-card");

products.forEach(product => {

  product.style.opacity = "0";

  product.style.transform =
    "translateY(25px)";

  product.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

});


const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

        }

      });

    },

    {
      threshold: 0.1
    }

  );


products.forEach(product => {

  observer.observe(product);

});
