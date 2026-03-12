// visitor counter

let visits = localStorage.getItem("visits") || 0;
visits++;

localStorage.setItem("visits", visits);

document.addEventListener("DOMContentLoaded", () => {

document.getElementById("visitorCounter").innerText =
"Visitor count: " + visits;

});

// reviews

function addReview(){

let name=document.getElementById("name").value;
let rating=document.getElementById("rating").value;
let text=document.getElementById("reviewText").value;

let div=document.createElement("div");

div.innerHTML="<strong>"+name+"</strong><p>"+ "★".repeat(rating) +"</p><p>"+text+"</p>";

document.getElementById("reviewList").prepend(div);

}

// fishing reports

function addFishing(){

let text=document.getElementById("fishText").value;

let post=document.createElement("p");

post.innerText=text;

document.getElementById("fishPosts").prepend(post);

}

// photo uploads

document.addEventListener("DOMContentLoaded", () => {

let upload=document.getElementById("photoUpload");

upload.addEventListener("change",function(){

let file=this.files[0];

let reader=new FileReader();

reader.onload=function(e){

let img=document.createElement("img");

img.src=e.target.result;

img.style.width="200px";

document.getElementById("visitorPhotos").prepend(img);

};

reader.readAsDataURL(file);

});

});

// weather

fetch("https://api.open-meteo.com/v1/forecast?latitude=36.21&longitude=-82.96&current_weather=true")
.then(res=>res.json())
.then(data=>{

let w=data.current_weather;

document.getElementById("weatherBox").innerHTML =
"Temperature: "+w.temperature+"°C<br>Wind: "+w.windspeed+" km/h";

});

// QR code

document.addEventListener("DOMContentLoaded",()=>{

let url=window.location.href;

document.getElementById("qrCode").src =
"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+url;

});