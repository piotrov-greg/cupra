const carList = [
  {
    title: "CUPRA Formentor",
    img: "assets/cars/formentor-x2.png",
    info: "Maksymalna prędkość: 204 KM/H Moc silnika: 150 KM",
    netto: "1439 zł",
    brutto: "127 800 zł",
  },
  {
    title: "CUPRA Formentor VZ",
    img: "assets/cars/formentor-vz-x2.png",
    info: "Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM",
    netto: "1533 zł",
    brutto: "152 400 zł",
  },
  {
    title: "CUPRA Ateca",
    img: "assets/cars/ateca-x2.png",
    info: "Maksymalna prędkość: 247 KM/H Moc silnika: 300 KM",
    netto: "2334 zł",
    brutto: "220 700 zł",
  },
  {
    title: "CUPRA Born",
    img: "assets/cars/born-x2.png",
    info: "Akumulator 58 kWh moc do 204 KM²",
    netto: "1943 zł",
    brutto: "179 600 zł",
  },
  {
    title: "Leon",
    img: "assets/cars/leon-x2.png",
    info: "Maksymalna prędkość: 245 KM/H Moc silnika: 300 KM",
    netto: "1553 zł",
    brutto: "152 400 zł",
  },
  {
    title: "Leon Sportstourer",
    img: "assets/cars/sportstourer-x2.png",
    info: "Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM",
    netto: "1601 zł",
    brutto: "156 200 zł",
  },
];
const itemContainer = document.querySelector(".itemContainer");
function createCaruselItems(carList) {
  carList.forEach((car) => {
    const caruselItem = document.createElement("div");
    caruselItem.classList.add("caruselItem");

    const title = document.createElement("h2");
    title.classList.add("caruselItemTitle");
    title.textContent = car.title;

    const image = document.createElement("img");
    image.classList.add("caruselImg");
    image.src = car.img;
    image.alt = "";

    const info = document.createElement("p");
    info.classList.add("caruselItemInfo");
    info.textContent = car.info;

    const pricingContainer = document.createElement("div");
    pricingContainer.classList.add("pricingContainer");

    const leasingInfo = document.createElement("p");
    leasingInfo.classList.add("pricingItem");
    leasingInfo.textContent = "Dostępny w leasingu z 0% opłaty własnej";

    const nettoPrice = document.createElement("p");
    nettoPrice.classList.add("pricingItem");
    nettoPrice.textContent = `Rata netto/mies. od* `;
    const nettoSpan = document.createElement("span");
    nettoSpan.classList.add("price");
    nettoSpan.textContent = car.netto;
    nettoPrice.appendChild(nettoSpan);

    const bruttoPrice = document.createElement("p");
    bruttoPrice.classList.add("pricingItem");
    bruttoPrice.textContent = `Rata brutto już od `;
    const bruttoSpan = document.createElement("span");
    bruttoSpan.classList.add("price");
    bruttoSpan.textContent = car.brutto;
    bruttoPrice.appendChild(bruttoSpan);

    caruselItem.appendChild(title);
    caruselItem.appendChild(image);
    caruselItem.appendChild(info);
    pricingContainer.appendChild(leasingInfo);
    pricingContainer.appendChild(nettoPrice);
    pricingContainer.appendChild(bruttoPrice);
    caruselItem.appendChild(pricingContainer);

    itemContainer.appendChild(caruselItem);
  });
}

createCaruselItems(carList);

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;

function changeCar() {
  if (index > carList.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = carList.length - 1;
  }

  const caruselItems = document.querySelectorAll(".caruselItem");
  caruselItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  itemContainer.style.transform = `translateX(${-index * 827}px)`;
}

changeCar();

next.addEventListener("click", () => {
  index++;
  changeCar();
});

prev.addEventListener("click", () => {
  index--;
  changeCar();
});

const barsBtn = document.getElementById("openNav");
const closeBtn = document.getElementById("coloseNav");
const navBarMobile = document.querySelector(".navbarMobile");

barsBtn.addEventListener("click", () => {
  navBarMobile.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  navBarMobile.classList.add("hidden");
});

function changeImageSource(imageId, newSource) {
  document.getElementById(imageId).src = newSource;
}

function restoreImageSource(imageId, originalSource) {
  document.getElementById(imageId).src = originalSource;
}

const btnScroll = document.querySelectorAll(".testDrive");

for (i = 0; i < btnScroll.length; i++) {
  btnScroll[i].addEventListener("click", function () {
    scrollToSection(".formSection");
  });
}

function scrollToSection(selector) {
  const section = document.querySelector(selector);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const carCardListItems = document.getElementById("carCardListItems");
const mainDropdown = document.getElementById("dropDownCars");

mainDropdown.addEventListener("click", () => {
  carCardListItems.classList.remove("hidden");
});

function generateCarList(carList) {
  const selectMenu = document.querySelector(".selectMenu");

  carList.forEach((car) => {
    const menuItem = document.createElement("li");
    menuItem.classList.add("menuItem");

    const selectDropdown = document.createElement("div");
    selectDropdown.classList.add("selectDropdown");

    const carCard = document.createElement("div");
    carCard.classList.add("carCard");

    const carImg = document.createElement("img");
    carImg.classList.add("carCardImg");
    carImg.src = car.img;
    carImg.alt = "";

    const carName = document.createElement("p");
    carName.classList.add("carCardName");
    carName.textContent = car.title;

    carCard.appendChild(carImg);
    carCard.appendChild(carName);
    selectDropdown.appendChild(carCard);
    menuItem.appendChild(selectDropdown);
    selectMenu.appendChild(menuItem);

    menuItem.addEventListener("click", function () {
      mainDropdown.querySelector(".carCardImg").src = car.img;
      mainDropdown.querySelector(".carCardName").textContent = car.title;
      carCardListItems.classList.add("hidden");
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  generateCarList(carList);
});
