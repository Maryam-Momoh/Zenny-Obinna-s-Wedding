const findTable_btn = document.querySelector(".table");
const giveGift_btn = document.querySelector(".gift");
const search_btn = document.querySelector(".search-btn");
const search_con = document.querySelector(".search-container")
const animated_bg = document.querySelector(".animated-bg")
const header = document.querySelector(".header")
const search = document.querySelector(".search")


const display = () => {
    if(search_con.style.display === "none"){
        search_con.style.display = "flex"
    }else{
        search_con.style.display = "none"
    }
}

findTable_btn.addEventListener('click', display )

const getData = () => {
    header.style.background = "./images/download2.jpg"
    
    animated_bg.classList.remove('animated-bg')
}

setTimeout(getData,2000)



fetch("table.json")
.then(response => response.json())
.then(data => showInfo(data))


// const showInfo = (data) => {
//     const find = data[0].names
//     console.log(find)
//     console.log(find.indexOf("Segun Oyero"))
// }





// search_btn.addEventListener('click', findTable)


