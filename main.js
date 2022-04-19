container=document.querySelector(".container");
search=container.querySelector(".search");
city=container.querySelector(".city");
temp=container.querySelector(".weather");
input=search.querySelector("input")
b1=document.getElementById("b1");
b2=document.getElementById("b2");
file=container.querySelector(".file");  
b2.addEventListener("click",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess,onError);

    }
    else{
        console.log("Geolocation not supported");
    }
});
b1.addEventListener("click",()=>{
    city=document.getElementById("searchbar").value;
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e8d7403e9859949aaa3de26ea7101655`;
    fetch(api).then(response => response.json()).then(result => weather(result));
    city.innerText="Location: "+city;

});


function onSuccess(position){
    const{latitude,longitude}=position.coords;
    let api=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e8d7403e9859949aaa3de26ea7101655`;
    fetch(api).then(response => response.json()).then(result => weather(result));
}


function onError(error){
    console.log(error);
}



function weather(info){
    const cityy=info.name;
    const tempp=info.main;
    const op=info.weather[0];

    document.getElementById("searchbar").value=city;
    temp.innerHTML=op.description;
    file.innerText=(Math.round(tempp.temp-273.00).toFixed(2))+"°C";       
}