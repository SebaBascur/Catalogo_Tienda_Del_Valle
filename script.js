const products = [
  // 1
  {
    title: "Magic Keyboard (USB-C) - Español (América Latina)",
    desc: "El Magic Keyboard permite escribir con mayor comodidad y precisión.",
    price: "$149.990",
    originalPrice: "$201.990",
    img: "Magic Keyboard (USB-C) - Español (América Latina).jpeg",
    stock: "Disponible"
  },
  {
    title: "Apple Pencil Usb C",
    desc: "iPad Pro de 13 pulgadas (M4), iPad Pro de 12.9 pulgadas (6.ª generación), iPad Pro de 12.9 pulgadas (5.ª generación). Compra antes de las 13:00 hrs, llega el mismo día",
    price: "$124.990",
    originalPrice: "$137.990",
    img: "tagclappenuc00_370_other_1.webp",
    stock: "Disponible"
  },
  {
    title: "AirTag",
    desc: "Pierde la costumbre de perder las cosas Colócalo en llaves, mochila u otros accesorios y encuentra su ubicación fácilmente desde la app Encontrar en tu iPhone. Evita pérdidas y mantén el control de tus pertenencias personales. Compra antes de las 13:00 hrs, llega el mismo día",
    price: "$36.990",
    originalPrice: "$40.990",
    img: "airtag-double-select-202104.jpeg",
    stock: "Disponible"
  },

  {
    title: "Bolso Tablet Color: Negro",
    desc: "Bolso impermeable para tablets y iPad de hasta 11\" compatible con Galaxy Tab e iPad 11\" ",
    price: "$20.890",
    originalPrice: "$22.990",
    img: "D_NQ_NP_2X_688724-MLC90845939478_082025-F-bolso-para-samsung-galaxy-tab-o-ipad-ambos-de-11-pulgadas.webp",
    stock: "Disponible"
  },
  // 3,1
  {
    title: "Bolso Tablet",
    desc: "Bolso impermeable para tablets y iPad de hasta 11\" compatible con Galaxy Tab e iPad 11\" Color: Rosa",
    price: "$20.990",
    originalPrice: "$22.990",
    img: "bolso rosa tablet.webp",
    stock: "Disponible"
  },
  // 4
  {
    title: "Funda Samsung Galaxy Tab S9 Fe S10 Fe Tapa Magnética Silicon",
    desc: "Funda silicona liviana, resistente, soporte plegable, elegante. color: negro",
    price: "$19.990",
    // originalPrice: "$24.990",
    img: "D_NQ_NP_2X_705437-MLC90843957066_082025-F-funda-samsung-galaxy-tab-s9-fe-s10-fe-tapa-magnetica-silicon.webp",
    stock: "Disponible"
  },
  // 5
  {
    title: "Funda Samsung Galaxy Tab S9 Fe S10 Fe Tapa Magnética Silicon",
    desc: "Funda silicona liviana, resistente, soporte plegable, elegante. color: Rosa",
    price: "$19.990",
    // originalPrice: "$24.990",
    img: "D_NQ_2X_737383-MLA90844235628_082025-B.webp",
    stock: "No disponible"
  },
  // 6
  {
    title: "Funda Silicona Para S Pen Samsung Galaxy Tab S10 S9 S8 S7",
    desc: "Funda silicona premium, protege, cómoda, segura, duradera. color: Agua",
    price: "$10.480",
    // originalPrice: "$14.990",
    img: "penv2.png",
    stock: "Disponible"
  }, 
  {
    title: "Funda Silicona Para S Pen Samsung Galaxy Tab S10 S9 S8 S7",
    desc: "Funda silicona premium, protege, cómoda, segura, duradera. color: Verde",
    price: "$10.480",
    // originalPrice: "$14.990",
    img: "pen verde .png",
    stock: "Disponible"
  },
  // 7 
  {
    title: "Funda Silicona Para S Pen Samsung Galaxy Tab S10 S9 S8 S7",
    desc: "Funda silicona premium, protege, cómoda, segura, duradera. color: Rosa",
    price: "$10.480",
    // originalPrice: "$14.990",
    img: "Diseño sin título.jpg",
    stock: "No disponible"
  },
  // 8
  {
    title: "Funda Silicona Para S Pen Samsung Galaxy Tab S10 S9 S8 S7",
    desc: "Funda silicona premium, protege, cómoda, segura, duradera. color: Negro",
    price: "$10.990",
    // originalPrice: "$14.990",
    img: "pen negro.png",
    stock: "No disponible"
  },
  // Inicio Pulseras
  // aZul
  {
    title: "Correa Para Galaxy Watch 8 40mm - Reloj Pulsera",
    desc: "Fabricadas en silicona de alta calidad, resistentes, cómodas y ajustables. Diseñadas para un uso diario con estilo deportivo y elegante. Color: Azul Oscuro",
    price: "$15.780",
    // originalPrice: "$19.990",
    img: "Swazul.webp",
    stock: "Disponible"
  },
  {
    title: "Correa Para Galaxy Watch 8 44mm - Reloj Pulsera",
    desc: "Fabricadas en silicona de alta calidad, resistentes, cómodas y ajustables. Diseñadas para un uso diario con estilo deportivo y elegante. Color: Azul Oscuro",
    price: "$15.780",
    // originalPrice: "$19.990",
    img: "azul 44.png",
    stock: "No disponible"
  },
  // Azul Claro 
  {
    title: "Correa Para Galaxy Watch 8 44mm - Reloj Pulsera",
    desc: "Fabricadas en silicona de alta calidad, resistentes, cómodas y ajustables. Diseñadas para un uso diario con estilo deportivo y elegante. Color: Azul Claro",
    price: "$15.780",
    // originalPrice: "$19.990",
    img: "azul claro.png",
    stock: "No disponible"
  }, 
  // Rosa claro
  {
    title: "Correa Para Galaxy Watch 8 40mm - Reloj Pulsera",
    desc: "Fabricadas en silicona de alta calidad, resistentes, cómodas y ajustables. Diseñadas para un uso diario con estilo deportivo y elegante. Color: Rosa Claro",
    price: "$15.780",
    // originalPrice: "$19.990",
    img: "rosa claro.png",
    stock: "Disponible"
  },
  {
    title: "Correa Para Galaxy Watch 8 44mm - Reloj Pulsera",
    desc: "Fabricadas en silicona de alta calidad, resistentes, cómodas y ajustables. Diseñadas para un uso diario con estilo deportivo y elegante. Color: Rosa Claro",
    price: "$15.780",
    // originalPrice: "$19.990",
    img: "rosa claro.png",
    stock: "Disponible"
  }, 
  {
    title: "Correa Para Galaxy Watch 8 44mm - Reloj Pulsera",
    desc: "Fabricadas en silicona de alta calidad, resistentes, cómodas y ajustables. Diseñadas para un uso diario con estilo deportivo y elegante. Color: Lavanda",
    price: "$15.780",
    // originalPrice: "$19.990",
    img: "lavanda_Morado.png",
    stock: "Disponible"
  },
  {
    title: "Correa Para Galaxy Watch 8 44mm - Reloj Pulsera",
    desc: "Fabricadas en silicona de alta calidad, resistentes, cómodas y ajustables. Diseñadas para un uso diario con estilo deportivo y elegante. Color: Verde musgo",
    price: "$15.780",
    // originalPrice: "$19.990",
    img: "verde.png",
    stock: "Disponible"
  },  

  {
    title: "Protector De Teclado 12 - 14 Pulgadas",
    desc: "Protege tu laptop con estilo gracias a nuestros protectores de teclado de silicona. Color: Morado",
    price: "$6.980",
    // originalPrice: "$9.990",
    img: "D_NQ_NP_2X_925702-MLC91283729848_092025-F-protector-de-teclado-12-14-y-15-17-pulgadas.webp",
    stock: "Disponible"
  },
  {
    title: "Protector De Teclado 12 - 14 Pulgadas",
    desc: "Protege tu laptop con estilo gracias a nuestros protectores de teclado de silicona. Color: Azul",
    price: "$6.980",
    // originalPrice: "$9.990",
    img: "azul protector de teclado.webp",
    stock: "Disponible"
  },
  {
    title: "Protector De Teclado 12 - 14 Pulgadas",
    desc: "Protege tu laptop con estilo gracias a nuestros protectores de teclado de silicona. Color: Transparente ",
    price: "$6.980",
    // originalPrice: "$9.990",
    img: "transparente protector de teclado.webp",
    stock: "Disponible"
  },
  
  {
    title: "Protector De Teclado 12 - 14 Pulgadas",
    desc: "Protege tu laptop con estilo gracias a nuestros protectores de teclado de silicona. Color: Rosa Claro",
    price: "$6.980",
    // originalPrice: "$9.990",
    img: "rosa claro.jpeg",
    stock: "Disponible"
  },

  // 15 - 17 Pulgadas
  {
    title: "Protector De Teclado 15 - 17 Pulgadas",
    desc: "Protege tu laptop con estilo gracias a nuestros protectores de teclado de silicona. Color: Azul",
    price: "$6.980",
    // originalPrice: "$9.990",
    img: "azul protector de teclado.webp",
    stock: "Disponible"
  },
  {
    title: "Protector De Teclado 15 - 17 Pulgadas",
    desc: "Protege tu laptop con estilo gracias a nuestros protectores de teclado de silicona. Color: Transparente ",
    price: "$6.980",
    // originalPrice: "$9.990",
    img: "transparente protector de teclado.webp",
    stock: "Disponible"
  },
  {
    title: "Protector De Teclado 15 - 17 Pulgadas",
    desc: "Protege tu laptop con estilo gracias a nuestros protectores de teclado de silicona. Color: Rosa Claro",
    price: "$6.980",
    // originalPrice: "$9.990",
    img: "rosado claro.webp",
    stock: "Disponible"
  },

  {
    title: "Protector De Teclado 15 - 17 Pulgadas",
    desc: "Protege tu laptop con estilo gracias a nuestros protectores de teclado de silicona.",
    price: "$6.980",
    // originalPrice: "$9.990",
    img: "D_NQ_NP_2X_925702-MLC91283729848_092025-F-protector-de-teclado-12-14-y-15-17-pulgadas.webp",
    stock: "Disponible"
  }
];

function buildCatalog() {
  const grid = document.querySelector(".product-grid");
  products.forEach((p, idx) => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    // Generar HTML de precios
    let priceHTML = '';
    if (p.originalPrice) {
      priceHTML = `
        <div class="price-container">
          <div class="original-price">${p.originalPrice}</div>
          <div class="sale-price">${p.price}</div>
        </div>
      `;
    } else {
      priceHTML = `<div class="product-price">${p.price}</div>`;
    }
    
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="product-title">${p.title}</div>
      <div class="product-desc">${p.desc}</div>
      ${priceHTML}
      <button class="buy-btn">Comprar</button>
      <div class="product-stock ${p.stock && p.stock.toLowerCase().includes("no disponible") ? "no-stock" : "stock"}">${p.stock ? p.stock : ""}</div>
    `;
    card.onclick = () => showModal(idx);
    card.querySelector(".buy-btn").onclick = (event) => {
      event.stopPropagation();
      showModal(idx);
    };
    grid.appendChild(card);
  });
}
buildCatalog();

function showModal(idx) {
  const prod = products[idx];
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  document.getElementById("modalImg").src = prod.img;
  document.getElementById("modalTitle").textContent = prod.title;
  document.getElementById("modalDesc").textContent = prod.desc;
  
  // Generar precios en modal
  const modalPriceContainer = document.getElementById("modalPrice");
  if (prod.originalPrice) {
    modalPriceContainer.innerHTML = `
      <div class="original-price">${prod.originalPrice}</div>
      <div class="sale-price">${prod.price}</div>
    `;
  } else {
    modalPriceContainer.textContent = prod.price;
  }
  
  const stockElem = document.getElementById("modalStock");
  stockElem.textContent = prod.stock ? prod.stock : "";
  stockElem.className = `product-stock ${prod.stock && prod.stock.toLowerCase().includes("no disponible") ? "no-stock" : "stock"}`;
  document.getElementById("modalBuyBtn").onclick = function () {
    buyProduct(idx);
  };
}

document.getElementById("closeBtn").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

const wsapNumber = "56954354068";
function buyProduct(idx) {
  const prod = products[idx];
  const waMsg = `Hola quiero comprar el ${prod.title}. Saludos`;
  window.open(`https://wa.me/${wsapNumber}?text=${encodeURIComponent(waMsg)}`);
}
