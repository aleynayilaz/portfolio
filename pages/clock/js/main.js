//DOM ELEMENTS
const time= document.getElementById('time')
const greeting=document.getElementById('greeting')
const name=document.getElementById('name')
const focus=document.getElementById('focus')

  //SHOW TİME
  function showTime() {
      let today=new Date()
      let hour = today.getHours()
      let min= today.getMinutes()
      let sec=today.getSeconds();

    //Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';
    //12hr format
    hour=hour % 12 || 12;

    //output time
    time.innerHTML= `${amPm} ${hour} <span>:</span>${min} <span>:</span> ${sec}`;
    setTimeout(showTime, 1000);
  }
// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.innerHTML = 'Good Morning, ';
    
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.innerHTML = 'Good Afternoon, ';
    

  } else {
    // Evening
    document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.innerHTML = 'Good Evening, ';
    document.body.style.color = 'white';
  
  }
}

  showTime();
  setBgGreet();

  