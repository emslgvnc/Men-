/* Menüyü tanımlama */

const menu = [{
        id: 1,
        title: "Humus",
        category: "Hatay",
        price: '25₺',
        img: "img/hayat-humus.jpg",
        desc: `Humus; nohut, tahin ve sumak ile hazırlanır.`,
    },
    {
        id: 2,
        title: "Fellah Köftesi",
        category: "Hatay",
        price: '20₺',
        img: "img/hatay-fellah.jpg",
        desc: ` İnce bulgur, irmik ve salça ile hazırlanan fellah köfte, sarımsaklı yoğurt eşliğinde sunulur. `,
    },
    {
        id: 3,
        title: "Etsiz Çiğ köfte",
        category: "Urfa",
        price: '35₺',
        img: "img/urfa-etsizcig.jpg",
        desc: `Etsiz çiğ köfte Urfa’da kendine özgün baharatlar ile yapılır.`,
    },
    {
        id: 4,
        title: "Beyran Çorbası",
        category: "Gaziantep",
        price: '15₺',
        img: "img/antap-beyarni.jpg",
        desc: `Başlangıç menüleri için en çok tercih edilen yemek beyran çorbasıdır.`,
    },
    {
        id: 5,
        title: "Kepse Pilavı",
        category: "Hatay",
        price: '55₺',
        img: "img/hatay-kepsepilavı.jpg",
        desc: `Bol baharatlı ve yasemin pirinçli kepse pilavı, Hatay mutfağıyla özdeşleşmiştir.`,
    },
    {
        id: 6,
        title: "Yuvalama",
        category: "Gaziantep",
        price: '15₺',
        img: "img/antep-yuvalama.jpg",
        desc: `İnce bulgurların yuvarlanıp özel yoğurtlu suyumuza kuşbaşı eklenerek çorba gibi yapılan yemeğimiz.`,
    },
    {
        id: 7,
        title: "Söğülme",
        category: "Urfa",
        price: '25₺',
        img: "img/urfa-sogulmeli.jpg",
        desc: `Közlenen patlıcanlar ince ince kıyılması ve kıyma ile buluşması. `,
    },
    {
        id: 8,
        title: "Ali Nazik",
        category: "Gaziantep",
        price: '45₺',
        img: "img/antep-alinazik.jpg",
        desc: `Közlenmiş patlıcan, yoğurt ve kıyma ile hazırlanır.`,
    },
    {
        id: 9,
        title: "Tepsi Kebabı",
        category: "Urfa",
        price: '50₺',
        img: "img/urfa-tepsikebabı.jpg",
        desc: `Közlenmiş patlıcanların içerisine yoğun baharatla donatılmış kıymalı köfteler ekleniyor.`,
    },
    {
        id: 10,
        title: "Ekşi Aşı",
        category: "Hatay",
        price: '40₺',
        img: "img/hatay-ekşiaşı.jpg",
        desc: `Oruk köftesi ile hazırlanır. Salça, nar ekşisi ve naneli su içerisinde pişirilir.`,
    },
    {
        id: 11,
        title: "Simit Kebabı",
        category: "Gaziantep",
        price: '55₺',
        img: "img/antep-simitkebabı.jpg",
        desc: `Simit adı verilen ince bulgur ve zırh kıyması ile hazırlanan bu yemek, fıstıklı yoğurt eşliğinde sunulur.`,
    },
    {
        id: 12,
        title: "Belen Tava",
        category: "Hatay",
        price: '45₺',
        img: "img/hatay-belan.jpg",
        desc: `Kuzu eti, tereyağı ve biber ile hazırlanmaktadır.`,
    },
    {
        id: 13,
        title: "Ağzı Açık",
        category: "Urfa",
        price: '10₺',
        img: "img/urfa-agzıaçık.jpg",
        desc: `Elle açılan hamurun kıyma ve baharatlar ile birleşmesinden meydana gelir.`,
    },
    {
        id: 14,
        title: "Borani",
        category: "Urfa",
        price: '35₺',
        img: "img/urfa-borani.jpg",
        desc: `Tereyağı, börülce, nohut gibi malzemeler ile hazırlanan yöresel tatlardan biridir.`,
    },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
    (values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ["Hepsi"]
);

/* Yemeklerin kategorilere ayrılması */

const categoryList = () => {
    const categoryBtns = categories
        .map((category) => {
            return `<button class="button button1 btn-item" data-id=${category}>${category}</button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".btn-item");

    /* Menü butonları */

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;
            console.log(category);
            const menuCategory = menu.filter((menuItem) => {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "Hepsi") {
                menuList(menu);
            } else {
                menuList(menuCategory);
            }
        });
    });
};

const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
        return `<div class="menu-items col-lg-6 col-sm-12">
              <img
                src=${item.img}
                alt=${item.title}
                class="photo"
              />
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>
      `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();