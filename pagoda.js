
const input = document.querySelector(".input")
const btn = document.querySelector(".search-btn")
const pagoda = document.querySelector(".pagoda")

pagoda.style.display = "none"

function task() {

  axios(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=6b4c292e3e049dbf64d6c2441cc77864&lang=ru`).then((res) => {
    console.log(res.data);
    pagoda.innerHTML =`<div class="pag">
    <h2>${res.data.name}  <sup>${res.data.sys.country}</sup> </h2>
    <h3>${res.data.weather.map((el) => el.description)}</h3>
    <h5 class="text">Температура:<span> ${res.data.main.temp}</span></h5>
    <h5> Скорость ветра: <span>${res.data.wind.speed}</span></h5>

     </div>
    `
  })
  
}
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter"){
    task()
    input.value = ""
pagoda.style.display = "block"
   
  }

})

btn.addEventListener("click", () => {
  task()
  if (input.value === ""){
    input.style.border = "2px solid red"
    input.style.background = "none"
    return 
  }else {
    input.style.border = ""
    input.style.background = ""
  }
  input.value = ""
pagoda.style.display = "block"

})




