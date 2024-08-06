import { navigatePage } from "./main.js";

const [categoryWrapper] = ["#categoryWrapper"].map((id) =>
  document.querySelector(id)
);

let FakeData = [
  {
    image: "../assets/images/Venom.jfif",
    title: "Venom 1",
    time: "1:30:00",
    date: "2018",
    lang: "Uzbek",
  },
  {
    image: "../assets/images/Venom.jfif",
    title: "Venom 1",
    time: "1:30:00",
    date: "2018",
    lang: "Uzbek",
  },
  {
    image: "../assets/images/Venom.jfif",
    title: "Venom 1",
    time: "1:30:00",
    date: "2018",
    lang: "Uzbek",
  },
  {
    image: "../assets/images/Venom.jfif",
    title: "Venom 1",
    time: "1:30:00",
    date: "2018",
    lang: "Uzbek",
  },
  {
    image: "../assets/images/Venom.jfif",
    title: "Venom 1",
    time: "1:30:00",
    date: "2018",
    lang: "Uzbek",
  },
  {
    image: "../assets/images/Venom.jfif",
    title: "Venom 1",
    time: "1:30:00",
    date: "2018",
    lang: "Uzbek",
  },
  {
    image: "../assets/images/Venom.jfif",
    title: "Venom 1",
    time: "1:30:00",
    date: "2018",
    lang: "Uzbek",
  },
  {
    image: "../assets/images/Venom.jfif",
    title: "Venom 1",
    time: "1:30:00",
    date: "2018",
    lang: "Uzbek",
  },
  {
    image: "../assets/images/Venom.jfif",
    title: "Venom 1",
    time: "1:30:00",
    date: "2018",
    lang: "Uzbek",
  },
  {
    image: "../assets/images/Venom.jfif",
    title: "Venom 1",
    time: "1:30:00",
    date: "2018",
    lang: "Uzbek",
  },
  {
    image: "../assets/images/Venom.jfif",
    title: "Venom 1",
    time: "1:30:00",
    date: "2018",
    lang: "Uzbek",
  },
  {
    image: "../assets/images/Venom.jfif",
    title: "Venom 1",
    time: "1:30:00",
    date: "2018",
    lang: "Uzbek",
  },
  {
    image: "../assets/images/Venom.jfif",
    title: "Venom 1",
    time: "1:30:00",
    date: "2018",
    lang: "Uzbek",
  },
  {
    image: "../assets/images/Venom.jfif",
    title: "Venom 1",
    time: "1:30:00",
    date: "2018",
    lang: "Uzbek",
  },
];

const MapData = () => {
  FakeData.map((i) => {
    // create tag
    const [category] = ["div"].map((id) => document.createElement(id));
    //    =================
    const [list, img, title, time, date, lang] = [
      "div",
      "img",
      "h1",
      "p",
      "p",
      "p",
    ].map((id) => document.createElement(id));
    img.src = i.image;
    list.appendChild(img);
    //    =================
    title.innerHTML = i.title;
    title.className = "card-title";
    list.appendChild(title);
    //    =================
    time.innerHTML = "<span>Time:</span> " + i.time;
    time.className = "card-p";
    list.appendChild(time);
    //    =================
    date.innerHTML = "<span>date:</span> " + i.date;
    date.className = "card-p";
    list.appendChild(date);
    //    =================
    lang.innerHTML = "<span>language:</span> " + i.lang;
    lang.className = "card-p";
    list.appendChild(lang);
    //    =================
    list.className = "category-card";
    list.addEventListener("click", () =>
      navigatePage("/pages/moviePlayer.html?title=" + i.title)
    );
    category.appendChild(list);
    //    =================
    category.className = "movie-category";
    categoryWrapper.appendChild(category);
  });
};

MapData();
