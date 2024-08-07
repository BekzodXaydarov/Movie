const [bars,nav] = ['#bars','#nav-media-list'].map((id)=>document.querySelector(id))
const [nav_logo,search,heart,login] = ['.nav-logo','.search','.heart','.login'].map((id)=>document.querySelectorAll(id))
const [a,btns] = ['.nav-list-li-a','.btn'].map((id)=>document.querySelectorAll(id))
const aArray = [
    {name:"Asosiy",link:"/index.html"},
    {name:"Kinolar",link:"/pages/movie.html"},
    {name:"Multfilimlar",link:"/pages/cartoon.html"},
]

const btnArray = [
    {name:"Heart",link:"/pages/heart.html"},
]

bars?.addEventListener('click',()=>{
    if(nav.className.includes("active-nav-list")){
        nav.classList.remove("active-nav-list")
        bars.style.color = "#f70776"
        bars.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }else{
        nav.classList.add("active-nav-list")
        bars.style.color = "#233142"
        bars.innerHTML = `<i class="fa-solid fa-x"></i>`
    }
})

export const navigatePage = (location)=>window.location.href = location 
nav_logo[0].addEventListener('click',()=>navigatePage("/index.html"))
search[0].addEventListener('click',()=>navigatePage("/pages/search.html"))
heart[0].addEventListener('click',()=>navigatePage("/pages/heart.html"))
login[0].addEventListener('click',()=>navigatePage("/pages/login.html"))
search[1].addEventListener('click',()=>navigatePage("/pages/search.html"))
heart[1].addEventListener('click',()=>navigatePage("/pages/heart.html"))
login[1].addEventListener('click',()=>navigatePage("/pages/login.html"))

for (let i = 0; i <=aArray.length - 1; i++) {
        if(aArray[i].link.includes(window.location.pathname)){
            for(let j = 0;j<=a.length -1;j++){
                if(a[j].innerHTML === aArray[i].name){
                    a[j].className += " active"
                }
            }        
        }
}

for (let i = 0; i <=btnArray.length - 1; i++) {
    if(btnArray[i].link.includes(window.location.pathname)){
        for(let j = 0;j<=btns.length -1;j++){
           if(btns[j].attributes[1]?.textContent.includes(btnArray[i].name)){
             btns[j].className += " active"
           }
           
        }               
    }
}


export let id = '6900877326'
export let token = "6377527692:AAH6MZTNPRIUnx9Kdq-gGLW4bMXM9oe0zWU"

export let FakeData = [
    {title:"Kinollar",children:[
    {image:"../assets/images/Venom.jfif",title:"Venom 2",time:"1:30:00",date:"2019",lang:"Uzbek"},
    {image:"../assets/images/Venom.jfif",title:"Venom 1",time:"1:30:00",date:"2018",lang:"Ruscha"},
    {image:"../assets/images/Venom.jfif",title:"Venom 1",time:"1:30:00",date:"2018",lang:"Uzbek"},
    {image:"../assets/images/Venom.jfif",title:"Venom 1",time:"1:30:00",date:"2018",lang:"Uzbek"},
    {image:"../assets/images/Venom.jfif",title:"Venom 1",time:"1:30:00",date:"2018",lang:"Uzbek"},
    {image:"../assets/images/Venom.jfif",title:"Venom 1",time:"1:30:00",date:"2018",lang:"Uzbek"},
    {image:"../assets/images/Venom.jfif",title:"Venom 1",time:"1:30:00",date:"2018",lang:"Uzbek"},
    {image:"../assets/images/Venom.jfif",title:"Venom 1",time:"1:30:00",date:"2018",lang:"Uzbek"},
    {image:"../assets/images/Venom.jfif",title:"Venom 1",time:"1:30:00",date:"2018",lang:"Uzbek"},
    {image:"../assets/images/Venom.jfif",title:"Venom 1",time:"1:30:00",date:"2018",lang:"Uzbek"},
    {image:"../assets/images/Venom.jfif",title:"Venom 1",time:"1:30:00",date:"2018",lang:"Uzbek"},
    {image:"../assets/images/Venom.jfif",title:"Venom 1",time:"1:30:00",date:"2018",lang:"Uzbek"},
    {image:"../assets/images/Venom.jfif",title:"Venom 1",time:"1:30:00",date:"2018",lang:"Uzbek"},
    {image:"../assets/images/Venom.jfif",title:"Venom 1",time:"1:30:00",date:"2018",lang:"Uzbek"},
    ]},
]