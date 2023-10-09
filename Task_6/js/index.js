const Monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",],
    Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];




async function fetchData(city="cairo"){
    // console.log(s)
    
    city.toLocaleLowerCase();
    let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=3`);
    if (t.ok && 400 != t.status) {
        let response = await t.json();
        // console.log(response)
        // console.log(a.current)
        //     , a.current),
       
       // display(response.current)
       console.log(response.current);
       console.log( response.location);
       console.log( response.forecast)
       display(response.current,response.location,response.forecast)

    }
}
fetchData()

function display(current, location, NextDay){
    var  cartouna = ``;

 cartouna+=` <div class="card col-md-4">
 <div class="card-header m-0 p-0 ">
    <div class="float-start"><p>${Days[new Date().getDay(location.localtime)]}</p></div>
    <div class="float-end"><p>${new Date().getDate(location.localtime)} ${Monthes[new Date().getMonth(location.localtime)]}</p></div>
 </div>
<div class="card-body">
  <div class="row">
    <div class="col-md-12"><P>${location.region}, ${location.country}</P></div>
    <div class="col-md-8"><p class="temp">${current.temp_c}<sup>o</sup>C</p></div>
    <div class="col-md-4"><img src="${current.condition.icon}" alt="" width="90"></div>
   </div>
   <p class="textt">${current.condition.text}</p>
   <div class="d-flex justify-content-between mt-5">
    <div class="d-flex"><img src="images1 (4).png" alt="" class="Img"><p class="mt-2 ms-1">20%</p></div>
    <div class="d-flex"><img src="images1 (5).png" alt="" class="Img"><p class="mt-2 ms-1">18km/h</p></div>
    <div class="d-flex"><img src="images1 (6) (1).png" alt="" class="Img"><p class="mt-2 ms-1">East</p></div>
   </div>
</div>
</div>


<div class="card col-md-4" id="_2">
<div class="card-header m-0 p-0 ">
   <div class="text-center"><p>${Days[new Date(NextDay.forecastday[1].date).getDay()]}</p></div>
  
</div>
<div class="card-body">
 <div class="row text-center">
  <div class="col-md-12 "><img src="${NextDay.forecastday[1].day.condition.icon}"></div>
   <div class="col-md-12 mt-3"><h3>${NextDay.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h3></div>
   <div class="col-md-12 "><p >${NextDay.forecastday[1].day.mintemp_c}<sup>o</sup></p></div>
    <p class="mt-2 ttt">${NextDay.forecastday[1].day.condition.text}</p>
  </div>

</div>
</div>




<div class="card col-md-4" >
<div class="card-header m-0 p-0 ">
   <div class="text-center"><p>${Days[new Date(NextDay.forecastday[2].date).getDay()]}</p></div>
  
</div>
<div class="card-body">
 <div class="row text-center">
  <div class="col-md-12 "><img src="${NextDay.forecastday[2].day.condition.icon}"></div>
   <div class="col-md-12 mt-3"><h3>${NextDay.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h3></div>
   <div class="col-md-12 "><p >${NextDay.forecastday[2].day.mintemp_c}<sup>o</sup></p></div>
    <p class="mt-2 ttt">${NextDay.forecastday[2].day.condition.text}</p>
  </div>

</div>
</div>

`


    
document.getElementById("demo").innerHTML=cartouna    
}
