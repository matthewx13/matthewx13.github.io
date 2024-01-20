const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/profile_pic.jpeg") {
    myImage.setAttribute("src", "images/mickey.jpeg");
  } else {
    myImage.setAttribute("src", "images/profile_pic.jpeg");
  }
};

let image = document.getElementById('image')
let images = ["images/profile_pic.jpeg", "images/mickey.jpeg", "images/hill.jpeg", "images/hiking.jpeg", "images/duo_pic.jpeg", "images/sightseeing.jpeg"]

setInterval(function(){
  let random = Math.floor(Math.random() * images.length);
  image.src = images[random];
}, 3000)

let myButton = document.getElementById("changeUserButton");
let userHeader = document.getElementById("userHeader");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    userHeader.textContent = `Hello, ${myName}, it was nice meeting you and thank you for visiting the website!`;
  }
}

myButton.onclick = () => {
  setUserName();
};
  

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `It was nice meeting you, ${storedName}`;
}
