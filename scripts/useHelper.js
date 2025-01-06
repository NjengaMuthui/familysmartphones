function filename(name) {
  /*let port = window.location.port === "" ? "" : `:${window.location.port}`;
  return `${window.location.protocol}//${window.location.hostname}${port}*/
  return `/images/${name}`;
}
function selectProduct(id) {
  let rando = getFakeProductsArr().find((product) => id === product.id);
  return {
    id: rando.id,
    imgs: [filename(rando.img), filename(rando.img), filename(rando.img)],
    name: rando.nm,
    price: rando.price,
    description: `${rando.nm} is a sleek and modern smartphone designed to deliver a seamless user experience. It features a 6.56-inch HD+ display with a 120Hz refresh rate for smooth visuals, housed in a stylish lavender finish with a shimmering effect. The phone is powered by the MediaTek Dimensity 700 chipset, offering 5G connectivity and efficient performance, paired with 4GB/6GB of RAM and 64GB/128GB of expandable storage. Its dual rear camera setup includes a 50MP primary lens and a 2MP depth sensor, while the 8MP front camera ensures crisp selfies. The device runs on Android 12 with ColorOS 12.1, supported by a long-lasting 5000mAh battery with 33W fast charging. Additional features include a side-mounted fingerprint sensor, dual-SIM support, and USB-C charging, making it a versatile option for everyday use`,
    features: [
      "6.56-inch HD+ LCD display",
      "Resolution: 1612 x 720 pixels",
      "120Hz refresh rate for smoother visuals",
      "Dual rear cameras: 50MP (primary) + 2MP (depth sensor)",
      "8MP front camera for selfies",
      "MediaTek Dimensity 700 chipset",
      "4GB/6GB RAM options",
      "64GB/128GB internal storage, expandable via microSD",
      "5000mAh battery with 33W fast charging",
      "Android 12 with ColorOS 12.1",
      "Side-mounted fingerprint sensor",
      "Dual-SIM support",
      "5G connectivity",
      "Bluetooth 5.1 and Wi-Fi 802.11ac",
      "USB-C charging port",
      "3.5mm headphone jack"
    ]
  };
}
function formatNumberWithCommas(number) {
  return number.toLocaleString();
}

function generateProducts(product_amount) {
  let arr = getFakeProductsArr();
  let products = [];

  for (let i = 0; i < product_amount; i++) {
    let rando = arr[Math.floor(Math.random() * 6)];
    products.push({
      id: rando.id,
      imgs: [filename(rando.img), filename(rando.img), filename(rando.img)],
      name: rando.nm,
      price: rando.price,
      description: `${rando.nm} is a sleek and modern smartphone designed to deliver a seamless user experience. It features a 6.56-inch HD+ display with a 120Hz refresh rate for smooth visuals, housed in a stylish lavender finish with a shimmering effect. The phone is powered by the MediaTek Dimensity 700 chipset, offering 5G connectivity and efficient performance, paired with 4GB/6GB of RAM and 64GB/128GB of expandable storage. Its dual rear camera setup includes a 50MP primary lens and a 2MP depth sensor, while the 8MP front camera ensures crisp selfies. The device runs on Android 12 with ColorOS 12.1, supported by a long-lasting 5000mAh battery with 33W fast charging. Additional features include a side-mounted fingerprint sensor, dual-SIM support, and USB-C charging, making it a versatile option for everyday use`,
      features: [
        "6.56-inch HD+ LCD display",
        "Resolution: 1612 x 720 pixels",
        "120Hz refresh rate for smoother visuals",
        "Dual rear cameras: 50MP (primary) + 2MP (depth sensor)",
        "8MP front camera for selfies",
        "MediaTek Dimensity 700 chipset",
        "4GB/6GB RAM options",
        "64GB/128GB internal storage, expandable via microSD",
        "5000mAh battery with 33W fast charging",
        "Android 12 with ColorOS 12.1",
        "Side-mounted fingerprint sensor",
        "Dual-SIM support",
        "5G connectivity",
        "Bluetooth 5.1 and Wi-Fi 802.11ac",
        "USB-C charging port",
        "3.5mm headphone jack"
      ]
    });
  }
  return products;
}
function getFakeProductsArr() {
  return [
    {
      img: "apple-iphone-13-pro-max.jpg",
      price: "30000",
      nm: "Apple Iphone 13 Pro Max",
      id: 0
    },
    {
      img: "images (28).jpeg",
      price: "45000",
      nm: "HP 830",
      id: 1
    },
    {
      img: "wtc.png",
      price: "6000",
      nm: "Tecno Watch 2 Pro",
      id: 2
    },
    {
      img: "images.jpeg",
      price: "15600",
      nm: "Vivo v40 Series",
      id: 3
    },
    {
      img: "Vivo-V40-Lite-4G-a-1.jpg",
      price: "38000",
      nm: "Vivo v40 Series",
      id: 4
    },
    {
      img: "Samsung-Galaxy-Fit-3.jpg",
      price: "145000",
      nm: "Samsung Galaxy Fit 3",
      id: 5
    }
  ];
}
export { filename, generateProducts, selectProduct, formatNumberWithCommas };
