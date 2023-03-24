const grabH3 = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const bodyBgColor = document.getElementById('background')

const setGradient = () => {
    bodyBgColor.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    grabH3.textContent = bodyBgColor.style.background  
}

color1.addEventListener('input', setGradient)

color2.addEventListener('input', setGradient)  


