const products = [
  // 1
  {
    title: "Magic Keyboard (USB-C) Apple Español (América Latina)",
    desc: "El Magic Keyboard permite escribir con mayor comodidad y precisión.",
    price: "$201.990",
    originalPrice: "$149.990" ,
    img: "Magic Keyboard (USB-C) - Español (América Latina).jpeg",
    stock: "Disponible"
  },
  // 2
  {
    title: "Apple Pencil Usb C",
    desc: "iPad Pro de 13 pulgadas (M4), iPad Pro de 12.9 pulgadas (6.ª generación), iPad Pro de 12.9 pulgadas (5.ª generación).",
    price: "$144.990",
    originalPrice: "$118.791",
    img: "tagclappenuc00_370_other_1.webp",
    stock: "Disponible"
  },
  // 3
  {
    title: "AirTag Apple",
    desc: "Úsalo en llaves, mochila u objetos personales y localízalos con la app Encontrar en tu iPhone.",
    // PrecioAntiguo
    price: "$40.990",
    // PrecioDeVenta
    originalPrice: "35.990",
    img: "airtag-double-select-202104.jpeg",
    stock: "Disponible"
  },
  //4
  {
    title: "Cargador USB-C 20w Apple",
    desc: "Carga rápida y eficiente que tu iPhone o iPad merece con el Adaptador de Corriente USB-C de 20W de Apple.",
    price: "24.990",
    originalPrice: "26.990",
    img: "1cargador-apple.png",
    stock: "Disponible"
  },
  {
    title: "Parlante Portátil Bose Soundlink Flex 2da generación Color: Negro.",
    desc: "Parlante portátil Soundlink Flex 2ª generación con sonido potente y diseño resistente.",
    price: "$189.990",
    originalPrice: "$145.990",
    img: "boseNegro.png",
    stock: "Disponible"
  },
  //5
  {
    title: "Auriculares Samsung Galaxy Buds Fe Blanco White",
    desc: "Cambia de dispositivo fácilmente y mantén el sonido fluido entre smartphone, tablet y televisor Samsung Galaxy gracias a Auto Switch y Smart",
    price: "$88.736",
    originalPrice: "79.990",
    img: "budsWhite.png",
    stock: "Disponible"
  },
  // 5
  {
    title: "Bolso Tablet Color: Rosa",
    desc: "Bolso impermeable para tablets y iPad de hasta 11\" compatible con Galaxy Tab e iPad 11\"",
    price: "$22.990",
    originalPrice: "$20.990",
    img: "bolso rosa tablet.webp",
    stock: "Disponible"
  },

    {
    title: "Bolso Tablet Color: Negro",
    desc: "Bolso impermeable para tablets y iPad de hasta 11\" compatible con Galaxy Tab e iPad 11\"",
    price: "$22.990",
    originalPrice: "$20.990",
    img: "bolso negro.webp",
    stock: "Disponible"
  },


  // 6
  {
    title: "Funda Samsung Galaxy Tab S9 Fe S10 Fe Tapa Magnética Silicon Color: Negro",
    desc: "Funda silicona liviana, resistente, soporte plegable, elegante.",
    price: "$19.990",
    // originalPrice: "$24.990",
    img: "D_NQ_NP_2X_705437-MLC90843957066_082025-F-funda-samsung-galaxy-tab-s9-fe-s10-fe-tapa-magnetica-silicon.webp",
    stock: "Disponible"
  },
  // 7
  {
    title: "Funda Samsung Galaxy Tab S9 Fe S10 Fe Tapa Magnética Silicon Color: Rosa",
    desc: "Funda silicona liviana, resistente, soporte plegable, elegante.",
    price: "$19.990",
    // originalPrice: "$24.990",
    img: "D_NQ_2X_737383-MLA90844235628_082025-B.webp",
    stock: "Disponible"
  },
  {
    title: "Hub Usb Ugreen Uno 7 En 1 Azul Oscuro",
    desc: "Potencia tu laptop, tablet o consola con el UGREEN Uno USB-C HUB, un adaptador multifuncional diseñado para ofrecer velocidad, compatibilidad y estilo.",
    price: "$64.990",
    // originalPrice: "$24.990",
    img: "D_NQ_NP_2X_804045-MLA93967788875_102025-F-hub-usb-ugreen-uno-7-en-1-azul-oscuro.webp",
    stock: "Disponible"
  },
  {
    title: "Bateria Externa Xtorm 20000 Mah Blanco",
    desc: "Batería externa de alta capacidad con carga rápida y diseño compacto.",
    price: "$27.990",
    // originalPrice: "$24.990",
    img: "bateriaBlanca.webp",
    stock: "Disponible"
  },
  
      {
    title: "Bateria Externa Xtorm 20000 Mah Negra",
    desc: "Batería externa de alta capacidad con carga rápida y diseño compacto.",
    price: "$27.990",
    // originalPrice: "$24.990",
    img: "w=800,h=800,fit=pad (1).jpeg",
    stock: "Disponible"
  },
  
  // 8
    {
    title: "Protectores De Silicona Joycon Switch 2 Color: Azul Y Rojo",
    desc: "Este producto es un kit de fundas de silicona diseñada especialmente para los controles Joy-Con del Nintendo Switch 2.",
    price: "$9.990",
    // originalPrice: "$14.990",
    img: "Protectores De Silicona Joycon Switch 2.png",
    stock: "Disponible"
  },
  {
    title: "Bolso Estuche Rígido Para Nintendo Switch 2",
    desc: "Protege tu Nintendo Switch 2 con este resistente y ligero bolso de viaje, diseñado para ofrecer seguridad, comodidad y estilo, ideal para transportar tu consola a donde quieras.",
    price: "$23.380",
    // originalPrice: "$14.990",
    img: "bolsomario Switch2.png",
    stock: "Disponible"
  },
  //9
  {
    title: "Bolso Estuche Rígido Para Nintendo Switch 2 Color: Rojo",
    desc: "Funda protectora para Nintendo Switch 2, diseñada a medida para un ajuste seguro y perfecto de la consola y accesorios.",
    price: "24.990",
    // originalPrice: "$14.990",
    img: "1.png",
    stock: "Disponible"
  },
  {
    title: "Bolso Estuche Rígido Para Nintendo Switch 2 Color: Negro",
    desc: "Funda protectora para Nintendo Switch 2, diseñada a medida para un ajuste seguro y perfecto de la consola y accesorios.",
    price: "24.990",
    // originalPrice: "$14.990",
    img: "2.png",
    stock: "Disponible"
  },
  {
    title: "Ventilador Enfriador Ps5 Usb Silencioso",
    desc: "Soporte vertical para PS5 con triple ventilador y puerto USB que enfría la consola y la mantiene estable.",
    price: "24.990",
    // originalPrice: "$14.990",
    img: "Ventilador Enfriador Ps5 Usb Silencioso.png",
    stock: "Disponible"
  },

  
  {
    title: "Funda Silicona Para S Pen Samsung Galaxy Tab S10 S9 S8 S7 color: Agua",
    desc: "Funda silicona premium, protege, cómoda, segura, duradera.",
    price: "$10.480",
    // originalPrice: "$14.990",
    img: "penv2.png",
    stock: "Disponible"
  },
  
  //10
  {
    title: "Funda Silicona Para S Pen Samsung Galaxy Tab S10 S9 S8 S7 color: Verde",
    desc: "Funda silicona premium, protege, cómoda, segura, duradera.",
    price: "$10.480",
    // originalPrice: "$14.990",
    img: "pen verde .png",
    stock: "Disponible"
  },
  // 11 
  {
    title: "Funda Silicona Para S Pen Samsung Galaxy Tab S10 S9 S8 S7 color: Rosa",
    desc: "Funda silicona premium, protege, cómoda, segura, duradera.",
    price: "$10.480",
    // originalPrice: "$14.990",
    img: "Diseño sin título.jpg",
    stock: "No disponible"
  },
  // 12
  {
    title: "Funda Silicona Para S Pen Samsung Galaxy Tab S10 S9 S8 S7 color: Negro",
    desc: "Funda silicona premium, protege, cómoda, segura, duradera.",
    price: "$10.990",
    // originalPrice: "$14.990",
    img: "pen negro.png",
    stock: "No disponible"
  },
//13
  // Inicio Pulseras
  // aZul
  {
    title: "Correa Para Galaxy Watch 8 40mm - Reloj Pulsera Color: Azul Oscuro",
    desc: "Fabricadas en silicona de alta calidad, resistentes, cómodas y ajustables. Diseñadas para un uso diario con estilo deportivo y elegante.",
    price: "$15.780",
    // originalPrice: "$19.990",
    img: "Swazul.webp",
    stock: "Disponible"
  },
  //14
  {
    title: "Correa Para Galaxy Watch 8 44mm - Reloj Pulsera Color: Azul Oscuro",
    desc: "Fabricadas en silicona de alta calidad, resistentes, cómodas y ajustables. Diseñadas para un uso diario con estilo deportivo y elegante.",
    price: "$15.780",
    // originalPrice: "$19.990",
    img: "AZULV2.jpeg",
    stock: "Disponible"
  },
  //15
  // Azul Claro 
  {
    title: "Correa Para Galaxy Watch 8 44mm - Reloj Pulsera",
    desc: "Fabricadas en silicona de alta calidad, resistentes, cómodas y ajustables. Diseñadas para un uso diario con estilo deportivo y elegante. Color: Azul Claro",
    price: "$15.780",
    // originalPrice: "$19.990",
    img: "azul claro.png",
    stock: "Disponible"
  }, 
  //16
  // Rosa claro
  {
    title: "Correa Para Galaxy Watch 8 40mm - Reloj Pulsera",
    desc: "Fabricadas en silicona de alta calidad, resistentes, cómodas y ajustables. Diseñadas para un uso diario con estilo deportivo y elegante. Color: Rosa Claro",
    price: "$15.780",
    // originalPrice: "$19.990",
    img: "rosa claro.png",
    stock: "Disponible"
  },
  //17
  {
    title: "Correa Para Galaxy Watch 8 44mm - Reloj Pulsera",
    desc: "Fabricadas en silicona de alta calidad, resistentes, cómodas y ajustables. Diseñadas para un uso diario con estilo deportivo y elegante. Color: Rosa Claro",
    price: "$15.780",
    // originalPrice: "$19.990",
    img: "rosa claro.png",
    stock: "Disponible"
  }, 
  //18
  {
    title: "Correa Para Galaxy Watch 8 44mm - Reloj Pulsera",
    desc: "Fabricadas en silicona de alta calidad, resistentes, cómodas y ajustables. Diseñadas para un uso diario con estilo deportivo y elegante. Color: Lavanda",
    price: "$15.780",
    // originalPrice: "$19.990",
    img: "lavanda_Morado.png",
    stock: "Disponible"
  },
  //19
  {
    title: "Correa Para Galaxy Watch 8 44mm - Reloj Pulsera Color: Verde musgo",
    desc: "Fabricadas en silicona de alta calidad, resistentes, cómodas y ajustables. Diseñadas para un uso diario con estilo deportivo y elegante.",
    price: "$15.780",
    // originalPrice: "$19.990",
    img: "verde.png",
    stock: "Disponible"
  },  
  //20
  {
    title: "Funda De Samsung Galaxy Buds 3 Y 3 Pro Color: Rosa",
    desc: "Protección contra golpes y rasguños con un diseño elegante, duradero y fácil de limpiar.",
    price: "$8.980",
    // originalPrice: "$19.990",
    img: "rosaBuds.png",
    stock: "Disponible"
  }, 
//21
  {
    title: "Funda De Samsung Galaxy Buds 3 Y 3 Pro Color: Gris",
    desc: "Protección contra golpes y rasguños con un diseño elegante, duradero y fácil de limpiar.",
    price: "$8.980",
    // originalPrice: "$19.990",
    img: "grisBuds.png",
    stock: "Disponible"
  },
//22 
  {
    title: "Funda De Samsung Galaxy Buds 3 Y 3 Pro Color: Verde",
    desc: "Protección contra golpes y rasguños con un diseño elegante, duradero y fácil de limpiar.",
    price: "$8.980",
    // originalPrice: "$19.990",
    img: "verdeBuds.png",
    stock: "Disponible"
  },
//23 
  {
    title: "Funda De Samsung Galaxy Buds 3 Y 3 Pro Color: Negro",
    desc: "Protección contra golpes y rasguños con un diseño elegante, duradero y fácil de limpiar.",
    price: "$8.980",
    // originalPrice: "$19.990",
    img: "negroBuds.png",
    stock: "Disponible"
  }, 

//24
// fin de pulseras
  {
    title: "Protector De Teclado 12 - 14 Pulgadas",
    desc: "Protege tu laptop con estilo gracias a nuestros protectores de teclado de silicona. Color: Morado",
    price: "$6.980",
    // originalPrice: "$9.990",
    img: "D_NQ_NP_2X_925702-MLC91283729848_092025-F-protector-de-teclado-12-14-y-15-17-pulgadas.webp",
    stock: "Disponible"
  },
  //25
  {
    title: "Protector De Teclado 12 - 14 Pulgadas",
    desc: "Protege tu laptop con estilo gracias a nuestros protectores de teclado de silicona. Color: Azul",
    price: "$6.980",
    // originalPrice: "$9.990",
    img: "azul protector de teclado.webp",
    stock: "Disponible"
  },
  //26
  {
    title: "Protector De Teclado 12 - 14 Pulgadas",
    desc: "Protege tu laptop con estilo gracias a nuestros protectores de teclado de silicona. Color: Transparente ",
    price: "$6.980",
    // originalPrice: "$9.990",
    img: "transparente protector de teclado.webp",
    stock: "Disponible"
  },
  //27
  {
    title: "Protector De Teclado 12 - 14 Pulgadas",
    desc: "Protege tu laptop con estilo gracias a nuestros protectores de teclado de silicona. Color: Rosa Claro",
    price: "$6.980",
    // originalPrice: "$9.990",
    img: "rosa claro.jpeg",
    stock: "Disponible"
  },
//28
  // 15 - 17 Pulgadas
  {
    title: "Protector De Teclado 15 - 17 Pulgadas",
    desc: "Protege tu laptop con estilo gracias a nuestros protectores de teclado de silicona. Color: Azul",
    price: "$6.980",
    // originalPrice: "$9.990",
    img: "azul protector de teclado.webp",
    stock: "Disponible"
  },
  //29
  {
    title: "Protector De Teclado 15 - 17 Pulgadas",
    desc: "Protege tu laptop con estilo gracias a nuestros protectores de teclado de silicona. Color: Transparente ",
    price: "$6.980",
    // originalPrice: "$9.990",
    img: "transparente protector de teclado.webp",
    stock: "Disponible"
  },
  //30
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

// Renderizado de productos (soporta búsqueda)
let currentQuantity = 1;

function buildCatalog(filteredProducts = products) {
  const grid = document.querySelector(".product-grid");
  grid.innerHTML = "";
  filteredProducts.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";

    let priceHTML = "";
    if (p.hasOwnProperty("originalPrice")) {
      // Muestra el más bajo (oferta) tachado, el anterior en rojo destacado
      priceHTML = `
        <div class="price-container">
          <div class="original-price">${p.price}</div>
          <div class="sale-price">${p.originalPrice}</div>
        </div>
      `;
    } else {
      priceHTML = `<div class="product-price">${p.price}</div>`;
    }

    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" />
      <div class="product-title">${p.title}</div>
      <div class="product-desc">${p.desc}</div>
      ${priceHTML}
      <button class="buy-btn">Comprar</button>
      <div class="product-stock ${
        p.stock && p.stock.toLowerCase().includes("no disponible")
          ? "no-stock"
          : "stock"
      }">${p.stock || ""}</div>
    `;

    card.onclick = () => showModal(products.indexOf(p));
    card.querySelector(".buy-btn").onclick = (e) => {
      e.stopPropagation();
      showModal(products.indexOf(p));
    };

    grid.appendChild(card);
  });
}

function showModal(idx) {
  const prod = products[idx];
  const modal = document.getElementById("modal");
  const imageOverlay = document.getElementById("imageOverlay");
  const enlargedImg = document.getElementById("enlargedImg");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "flex";
  document.getElementById("modalImg").src = prod.img;
  document.getElementById("modalTitle").textContent = prod.title;
  document.getElementById("modalDesc").textContent = prod.desc;

  // Igual que en catálogo: oferta tachado, anterior rojo
  const modalPriceContainer = document.getElementById("modalPrice");
  if (prod.hasOwnProperty("originalPrice")) {
    modalPriceContainer.innerHTML = `
        <div class="original-price">${prod.price}</div>
        <div class="sale-price">${prod.originalPrice}</div>
      `;
  } else {
    modalPriceContainer.textContent = prod.price;
  }

  const stockElem = document.getElementById("modalStock");
  stockElem.textContent = prod.stock || "";
  stockElem.className = `product-stock ${
    prod.stock && prod.stock.toLowerCase().includes("no disponible")
      ? "no-stock"
      : "stock"
  }`;

  currentQuantity = 1;
  document.getElementById("quantityNumber").textContent = currentQuantity;

  document.getElementById("decrementBtn").onclick = () => {
    if (currentQuantity > 1) {
      currentQuantity--;
      document.getElementById("quantityNumber").textContent = currentQuantity;
    }
  };

  document.getElementById("incrementBtn").onclick = () => {
    currentQuantity++;
    document.getElementById("quantityNumber").textContent = currentQuantity;
  };

  document.getElementById("modalBuyBtn").onclick = () => {
    buyProduct(idx, currentQuantity);
  };

  modalImg.onclick = () => {
    enlargedImg.src = modalImg.src;
    imageOverlay.style.display = "flex";
  };

  imageOverlay.onclick = () => {
    imageOverlay.style.display = "none";
  };
}

const wsapNumber = "56954368"; // Cambia por tu número real

function buyProduct(idx, qty) {
  const prod = products[idx];
  const waMsg = `Hola, quiero comprar ${qty} unidad${qty > 1 ? "es" : ""} de "${
    prod.title
  }". Saludos`;
  window.open(`https://wa.me/${wsapNumber}?text=${encodeURIComponent(waMsg)}`);
}

document.addEventListener("DOMContentLoaded", () => {
  buildCatalog();

  document.getElementById("searchInput").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      buildCatalog();
      return;
    }
    const filtered = products.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        (p.desc && p.desc.toLowerCase().includes(query))
    );
    buildCatalog(filtered);
  });

  // Cerrar la modal al hacer click en el fondo, pero NO al hacer click en el contenido
  document.getElementById("modal").addEventListener("click", function(e) {
    if (e.target === this) {
      this.style.display = "none";
    }
  });

  document.getElementById("closeBtn").onclick = () => {
    document.getElementById("modal").style.display = "none";
  };
});