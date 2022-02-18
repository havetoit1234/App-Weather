var currentWeather = ''
var $ = document.querySelector.bind(document)
var inputSearch = $('.inputSearch')
var city = $('.city')
var country = $('.country')
var time = $('.dayTime')
var temp = $('.Temp')
var weather = $('.weather')
var eyes = $('.action-weather .describe-weather')
var wind = $('.action-win .describe-weather')
var cloud = $('.action-cloud .describe-weather')
var body = $('body')    
var main = $('.main')
console.log(time)
async function getApi(){
    if(inputSearch.value.trim()==''){
        currentWeather = 'ha noi'
        
    }else{
         currentWeather = inputSearch.value
    }
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${currentWeather}&appid=060e0d6618fb9b55f8c3cb077c56b8f7`
    let data = await fetch(apiUrl)
    .then(res => res.json())
    city.innerText = data.name
    country.innerText = data.sys.country
    time.innerText = new Date().toLocaleString('vi')
    temp.innerText = Math.floor(data.main.temp - 273.15)
    weather.innerText = data.weather[0].main
    eyes.innerText = data.wind.deg + '(m)'
    wind.innerText = data.wind.speed + ('m/s')
    cloud.innerText = data.clouds.all + ('m/s')
    if(temp.innerText >=20){
        body.classList.remove('cold')
        main.classList.remove('cold')
        body.classList.add('hot')
        main.classList.add('hot')
    }else{
        body.classList.remove('hot')
        main.classList.remove('hot')
        body.classList.add('cold')
        main.classList.add('cold')
    }
}
getApi()
inputSearch.addEventListener('keydown',e =>{
    if(e.key == 'Enter'){
        getApi()
        inputSearch.value = ''
    }
})