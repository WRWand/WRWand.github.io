// Mudança de imagem

let myImage = document.querySelector("img");

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/Como-Vender-Sendo-um-Afiliado-Iniciante-1024x576.png") {
    myImage.setAttribute("src", "imagens/firefox2.png");
  } else {
    myImage.setAttribute("src", "imagens/Como-Vender-Sendo-um-Afiliado-Iniciante-1024x576.png");
  }
};

// Personalizar Boas Vindas

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla é legal, ${myName}`;
    }
  }
 
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }
  