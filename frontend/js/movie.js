import { FakeData, navigatePage } from "./main.js";

const [categoryWrapper,movieSearch] = ["#categoryWrapper",'.movie-search'].map((id) =>
  document.querySelector(id)
);

let data = FakeData[0].children

movieSearch.addEventListener('change',(e)=>{
  data = FakeData[0].children.filter((f)=>{
    if(e.target.value !== ""){
      if(f.title.toLocaleLowerCase().includes(e.target.value)){
        console.log("title");
        return f.title.toLocaleLowerCase().includes(e.target.value)
      }else if(f.date.toLocaleLowerCase().includes(e.target.value)){
        console.log("date");       
        return f.date.toLocaleLowerCase().includes(e.target.value)
      }else if(f.lang.toLocaleLowerCase().toLocaleLowerCase().includes(e.target.value)){
        console.log("lang");
        return f.lang.toLocaleLowerCase().includes(e.target.value)
      }
    }else{
      return f
    }
  }) 
  if(data.length === 0){
    categoryWrapper.innerHTML = `<h1 class='empty-h1'>Kino topilmadi</h1>`
  }else{
  categoryWrapper.innerHTML = ""
  MapData()
  }

})

const MapData = () => {
  data.map((i) => {
    // create tag
    const [list, img, title, time, date, lang,btn] = [
      "div",
      "img",
      "h1",
      "p",
      "p",
      "p",
      "button"
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
      //  ===========
      btn.innerHTML = "Ko`rish"
      btn.className = "card-btn"
      btn.onclick = () => navigatePage("/pages/moviePlayer.html?title=" + i.title)
      list.appendChild(btn)
    //    =================
    list.className = "category-card";
    //    =================
    categoryWrapper.append(list)
  });
};

MapData();
