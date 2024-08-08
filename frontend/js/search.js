import { FakeData } from "./main.js";

const [arrow,search,categoryWrapper] = ['#arrow-btn','#search','#categoryWrapper'].map((id)=>document.querySelector(id))

arrow.addEventListener('click',()=>window.history.back())


let data = FakeData[0].children

let Data = []
FakeData.map((item)=>item.children.map((i)=>{
    Data.push(i)
}))

console.log(Data);


const MapData = () => {
    Data.map((i) => {
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
  