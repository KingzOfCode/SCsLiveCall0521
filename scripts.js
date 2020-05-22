// let date = new Date().toLocaleDateString();
// let clock = document.getElementsByClassName("clock")
// clock[0].innerHTML = date;

// setInterval(function(){
  //  let date = new Date().toLocaleDateString();
  //  let clock = document.getElementsByClassName('clock').innerHTML= date;
    // console.log(new Date().toLocaleDateString())
// }, 1000)

setInterval(function(){
    document.getElementById("clock").innerHTML = clock.innerHTML = new Date().toLocaleTimeString();
       }, 1000)