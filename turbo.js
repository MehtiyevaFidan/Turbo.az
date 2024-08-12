// Deyisken tanimlamalariiiiiiiiiiiiiiiiiii>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const demo = document.querySelector(".all-card");
const elanSayi = document.getElementById("elanSayi");
const markaAll = document.getElementById("markaAll");
const currencys = document.getElementById("currencys");
const model = document.getElementById("model");
const banAll = document.getElementById("banAll");
const selectCount = document.getElementById("selectCount");
const artanIller = document.getElementById("artanIller");
const hiddenndiv = document.querySelector(".hiddenndiv");
let filteredMarkas = [];
const mark = document.querySelector(".mark");
const hidden_div = document.querySelector(".hidden_div");
const pulAll = document.getElementById("pulAll");
let seherrr = document.querySelector(".seherrr");
let ban = document.querySelector(".ban");
const pulsec = document.getElementById("pulsec");
const minPrice = document.getElementById("minIl");
const maxPrice = document.getElementById("maxIl");

// Datadaki melumatlarin cixarilmasi karta cixarilmasi>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

database.map(
  (item) =>
    (demo.innerHTML += `
  <div class="card">
  <i class="fa-solid fa-rotate"></i>
  <i class="fa-regular fa-heart"></i>
  <i class="fa-solid fa-crown"></i>
  <i class="fa-solid fa-gem"></i>
  <i class="fa-solid fa-percent"></i>
  <img src="${item.img}"
      alt="">
  <div class="text">
      <h4 class="price">${item.price} <span class="currency">${item.currency}</span></h4>
      <h4 class="name">${item.mark} <span class="currency">${item.model}</span></h4> 
      <h2 class="year">${item.graduationYear},
       
          <span class="muherrik">${item.enginePower}</span>,
          <span class="surush">${item.km} km</span>
      </h2>
  
      <span class="citi">${item.city},</span><span> bu gün 10:21</span>
  </div>
  </div>
  `)
  );
elanSayi.innerHTML = ` ${database.length} yeni elan`;

// Markanin Drowptown menu halinda calismasini temsil edir>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let newmarka = [];
let itemMarka = database.map((item) => item.mark);
console.log(itemMarka);
itemMarka.filter((item) => {
  if (!newmarka.includes(item)) {
    newmarka.push(item);
  }
});

for (let i = 0; i < newmarka.length; i++) {
  markaAll.innerHTML += `
 <li onclick="chooseMarkLi(this)" class="mmark">${newmarka[i]}</li>
  `;
}

// markanin uzerinde tikladigimiz zaman acilan menudur >>>>>>>>>>>>>>>

function chooseMark() {
  hidden_div.classList.toggle("mark_active");
}

// markalarimin acilan menusundaki yazilara tiklanan zaman bas veren prosesdir?>>>>>>>>>>>>>>>>>>>>>>>>>>..
let herseysl = document.getElementById("herseysl");
function chooseMarkLi(fidan) {
  filteredMarkas = database.filter((card) => card.mark == fidan.textContent);

  herseysl.style.color = "#ca1016";

  document.querySelector(".model_div").classList.remove("disabledd");
  if (!fidan.textContent.includes("Sıfırla")) {
    mark.innerHTML = `${fidan.textContent} <i class="fa-solid fa-angle-down">`;
  } else {
    mark.innerHTML = `Marka <i class="fa-solid fa-angle-down">`;
    model.innerHTML = "Model";
    herseysl.style.color = "#8d94ad";
    document.querySelector(".model_div").classList.add("disabledd");
    hiddenndiv.classList.remove("model_active");
  }
  chooseMark();
  hidden_div.classList.remove("mark_active");

  getFilteredModel();
}

// Secilen markaya gore uygunlasan modellerimiz funskiyasdir>>>>>>>>>>>>>>>>

function getFilteredModel() {
  modelAll.innerHTML =
    '<li class="mmodel" onclick="chooseModelLi(this)"><i class="fa-solid fa-x"></i> Sıfırla </li>';
  let newModel = [];
  console.log(filteredMarkas, "salam");
  newModel = filteredMarkas.map((item) => item.model);
  newModel.sort();

  for (let i = 0; i < newModel.length; i++) {
    modelAll.innerHTML += `
 
<li onclick="chooseModelLi(this)" class="mmodel" >${newModel[i]}  </li>
`;
  }
}

// Model Droptownda menunun uzerinde tiklanan zaman acilmasini ve islemesini emele getiren>>>>>>>>>>>>>>>>>>>>>>>>

function chooseModel(ehmed) {
  console.log(ehmed.textContent);
  let hiddenndiv = document.querySelector(".hiddenndiv");
  hiddenndiv.classList.toggle("model_active");
}

// let models = "";
function chooseModelLi(modelchoes) {
  if (!modelchoes.textContent.includes("Sıfırla")) {
    model.innerHTML = `${modelchoes.textContent} <i class="fa-solid fa-angle-down">`;
  } else {
    model.innerHTML = `Model <i class="fa-solid fa-angle-down">`;
  }
  hiddenndiv.classList.remove("model_active");
  let cont = modelchoes.textContent.trim()
  filteredMarkas= filteredMarkas.filter(item=>item.model.includes(cont))
}

// Datadan valyutalari maplayan ve getiren>>>>>>>>>>>>>>>>>>>>.

let newCurrency = [];
let itemcurrency = database.map((item) => item.currency);
itemcurrency.forEach((item) => {
  if (!newCurrency.includes(item)) {
    newCurrency.push(item);
  }
});
newCurrency.sort();
for (let i = 0; i < newCurrency.length; i++) {}

function choosePul() {
  const pulAll = document.getElementById("pulAll");
  pulAll.classList.toggle("active");
}

function choosePulli(sebb) {
  herseysl.style.color = "#ca1016";
  const pulsec = document.getElementById("pulsec");
  pulsec.textContent = sebb;
  choosePul();
}

// Datadan ban novlerini getiren >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let newBan = [];
let itemBan = database.map((item) => item.typeBan);
itemBan.filter((item) => {
  if (!newBan.includes(item)) {
    newBan.push(item);
  }
});
newBan.sort();

for (let i = 0; i < newBan.length; i++) {
  banAll.innerHTML += `
 
<li class="bban mmark" onclick="chooseBanLi(this)"> ${newBan[i]}</li>
`;
}

function chooseBan() {
  let banhdndiv = document.querySelector(".banhdndiv");
  banhdndiv.classList.toggle("model_active");
}

function chooseBanLi(nicat) {
  herseysl.style.color = "#ca1016";
  let ban = document.querySelector(".ban");
  if (!nicat.textContent.includes("Sıfırla")) {
    ban.innerHTML = `${nicat.textContent} <i class="fa-solid fa-angle-down">`;
  } else {
    ban.innerHTML = `Ban növü <i class="fa-solid fa-angle-down">`;
    herseysl.style.color = "#8d94ad";
  }
  chooseBan();
}

// Datadan seherleri getiren ve maplayan>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let newCoun = [];
let itemCoun = database.map((item) => item.city);
itemCoun.filter((item) => {
  if (!newCoun.includes(item)) {
    newCoun.push(item);
  }
});
newCoun.sort();

for (let i = 0; i < newCoun.length; i++) {
  let seherAll = document.getElementById("seherAll");
  seherAll.innerHTML += `
 
<li class="sseher mmark" onclick="chooSeseherLi(this)" >${newCoun[i]}</li>
`;
}

function chooseseher() {
  let hiddendiv = document.querySelector(".hiddendiv");
  hiddendiv.classList.toggle("mark_active");
}

function chooSeseherLi(fidan) {
  herseysl.style.color = "#ca1016";
  let hiddendiv = document.querySelector(".hiddendiv");
  let seherrr = document.querySelector(".seherrr");
  if (!fidan.textContent.includes("Sıfırla")) {
    seherrr.innerHTML = `${fidan.textContent} <i class="fa-solid fa-angle-down"></i>`;
  } else {
    seherrr.innerHTML = `Şəhər <i class="fa-solid fa-angle-down"></i>`;
    herseysl.style.color = "#8d94ad";
    hiddenndiv.classList.remove("model_active");
  }
  chooseseher();
}

const articles = document.querySelectorAll(".yenispan");

articles.forEach((a) => {
  a.classList.remove("red");
});
articles[0].classList.add("red");

let flag = false;

articles.forEach((article) => {
  article.addEventListener("click", () => {
    articles.forEach((a) => {
      a.classList.remove("red");
    });

    article.classList.add("red");

    if (article.textContent.includes("Hamısı")) {
      flag = true;
    } else {
      flag = false;
    }
    herseysl.style.color = flag ? "#8d94ad" : "#ca1016";
    console.log(flag);
  });
});

const spans = document.querySelectorAll(".credit span");

spans.forEach((span) => {
  span.onclick = function() {
    if (span.classList.contains("red")) {
      span.classList.remove("red");
    } else {
      spans.forEach((a) => a.classList.remove("red"));
      span.classList.add("red");
    }
    herseysl.style.color = "#ca1016";
  };
});

// herseyi sil funksiyasi>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function herseyisil() {
  let artill = document.querySelector(".artill");
  let artil = document.querySelector(".artil");
  const spans = document.querySelectorAll(".credit span");
  const article = document.querySelector(".yenispan");
  const articles = document.querySelectorAll(".yenispan");
  artil.innerHTML = `İl, min. <i class="fa-solid fa-angle-down"></i>`;
  artill.innerHTML = `İl, max. <i class="fa-solid fa-angle-down"></i>`;
  mark.innerHTML = ` Marka <i class="fa-solid fa-angle-down"></i>`;
  model.innerHTML = `Model <i class="fa-solid fa-angle-down"></i>`;
  seherrr.innerHTML = `Şəhər <i class="fa-solid fa-angle-down"></i>`;
  ban.innerHTML = `Ban növü <i class="fa-solid fa-angle-down"></i>`;

  pulsec.textContent = "AZN";
  if (spans) {
    spans.forEach(function (span) {
      span.classList.remove("red");
    });
  }

  if (articles) {
    articles.forEach(function (article) {
      if (
        article.textContent === "Yeni" ||
        article.textContent === "Sürülmüş"
      ) {
        article.classList.remove("red");
      }
    });
  }
  const hamisi = document.querySelector(".yenispan:first-child");
  if (hamisi) {
    hamisi.classList.add("red");
    herseysl.style.color = "#8d94ad";
  }

  document.querySelector(".model_div").classList.add("disabledd");
}

// il min ve il max funksiyasi>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const iller = [];
let artilAll = document.getElementById("artilAll");
let artilAll1 = document.getElementById("artilAll1");

for (let i = 2024; i > 1904; i--) {
  iller.push(i);
  artilAll.innerHTML += `
  <li class="aartil mmark" onclick="chooseartli(this)">${i}</li>`;
  artilAll1.innerHTML += `
  <li class="aartil mmark" onclick="chooseartli1(this)">${i}</li>`;
}

console.log(iller);

// tiklananda menunun acilmasi funskiaysi>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function chooseart() {
  let artilhdndiv = document.querySelector(".artilhdndiv");
  artilhdndiv.classList.toggle("mark_active");
}
function chooseart1() {
  let artilhdndi = document.querySelector(".artilhdndi");
  artilhdndi.classList.toggle("mark_active");
}
function chooseartli(fidan){
  herseysl.style.color = "#ca1016";
  let artilhdndiv = document.querySelector(".artilhdndiv");
  let artil = document.querySelector(".artil");
  
  let fidanContent = fidan.innerHTML;

  if (!fidanContent.includes("Sıfırla")) {
    artil.innerHTML = `${fidanContent} <i class="fa-solid fa-angle-down"></i>`;
  } else {
    artil.innerHTML = `İl, min. <i class="fa-solid fa-angle-down"></i>`;
    herseysl.style.color = "#8d94ad";
    artilhdndiv.classList.remove("model_active");
  }

  chooseart();
}

function chooseartli1(fidan){
  
  herseysl.style.color = "#ca1016";
  let artilhdndi = document.querySelector(".artilhdndi");
  let artill = document.querySelector(".artill");
  if (!fidan.innerHTML.includes("Sıfırla")) {
    artill.innerHTML = `${fidan.innerHTML} <i class="fa-solid fa-angle-down"></i>`;
  } else {
    artill.innerHTML = `İl, max. <i class="fa-solid fa-angle-down"></i>`;
    herseysl.style.color = "#8d94ad";
    artilhdndi.classList.remove("model_active");
  }
  
  chooseart1();
}

 let filterIl=[]

function filtrle(){
   console.log(filterIl);
   filterle2()
  resetValue()
  yazdir()

}
function filterle2(){
  let data= filteredMarkas ? filteredMarkas :database
  filterIl = data.filter(item => {
    const numericPrice = +item.price.replace(/\s/g, '');
    return numericPrice >= +minPrice.value && numericPrice <= +maxPrice.value;
});

}

 function resetValue(){
  demo.innerHTML=""
 }
 function yazdir(){

let data = filteredMarkas ? filteredMarkas : database
filterIl.length>0? data = filterIl:data
console.log(data);
  for(let i=0;i<data.length;i++){
    demo.innerHTML += `
  <div class="card">
  <i class="fa-solid fa-rotate"></i>
  <i class="fa-regular fa-heart"></i>
  <i class="fa-solid fa-crown"></i>
  <i class="fa-solid fa-gem"></i>
  <i class="fa-solid fa-percent"></i>
  <img src="${data[i].img}"
      alt="">
  <div class="text">
      <h4 class="price">${data[i].price} <span class="currency">${data[i].currency}</span></h4>
      <h4 class="name">${data[i].mark} <span class="currency">${data[i].model}</span></h4> 
      <h2 class="year">${data[i].graduationYear},
       
          <span class="muherrik">${data[i].enginePower}</span>,
          <span class="surush">${data[i].km} km</span>
      </h2>
  
      <span class="citi">${data[i].city},</span><span> bu gün 10:21</span>
  </div>
  </div>
  `

  }
 }
