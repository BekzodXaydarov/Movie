import { FakeData, id, navigatePage, token } from "./main.js"

const [heroBtn,categoryWrapper,btn,form,toast] = ['#hero-section-btn','.category-wrapper','#form-btn','.form','.taostify-container'].map((id)=>document.querySelector(id))

heroBtn.addEventListener('click',()=>navigatePage("/pages/movie.html"))



btn.onclick = () =>{
   let firstInput = form[0]
   let SecondInput = form[1]
   if(firstInput.value === "" && SecondInput.value === ""){
         ShowToast("! inputlarni to`ldiring","info")      
   }else{
      fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${encodeURI(`Foydalanuvchi ma'lumotlari: \n\n Ismi:${firstInput.value} \n\n description:${SecondInput.value}`)}`).then((data)=>{
         console.log(data);
         firstInput.value = ""
         SecondInput.value = ""
         if(data.ok){
         ShowToast("Ma`lumotlar keldi","success")
         }
      })
   }
}
const ShowToast = (text,type) => {
   toast.classList.add("active")
   toast.className += " " + type
   toast.innerHTML =  " " + text
    setTimeout(()=>{
     toast.classList.remove("active")
    },2000)
}


const MapData = () => {
    FakeData.map((item)=>{
        // create tag
       const [categoryTitle,category] = ['h1','div'].map((id)=>document.createElement(id))
       categoryTitle.innerHTML = item.title
       categoryTitle.className = 'category-title'
       categoryWrapper.appendChild(categoryTitle)
    //    ============

    //    =================
    //    =================
       item.children.map((i)=>{
       const [list,img,title,time,date,lang,btn] = ['div','img','h1','p','p','p','button'].map((id)=>document.createElement(id))
       img.src = i.image
       list.appendChild(img)
    //    =================
       title.innerHTML = i.title
       title.className = 'card-title'
       list.appendChild(title)
    //    =================
       time.innerHTML = "<span>Time:</span> " +  i.time
       time.className = 'card-p'
       list.appendChild(time)
    //    =================
       date.innerHTML = "<span>date:</span> " + i.date
       date.className = 'card-p'
       list.appendChild(date)
    //    =================
       lang.innerHTML = "<span>language:</span> " + i.lang
       lang.className = 'card-p'
       list.appendChild(lang)
      //  ===========
      btn.innerHTML = "Ko`rish"
      btn.className = "card-btn"
      btn.onclick = () => navigatePage("/pages/moviePlayer.html?title=" + i.title)
      list.appendChild(btn)
    //    =================
       list.className = 'category-card'
       category.appendChild(list)
       })
    //    =================
       category.className = "category"
       categoryWrapper.appendChild(category)
       
    })
}

MapData()



