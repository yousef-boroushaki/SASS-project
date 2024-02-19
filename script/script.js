const btnDarkLightMode = document.querySelector(".btn-dark-light")
const darkMode = document.querySelector(".dark-mode")
const lightMode = document.querySelector(".light-mode")
const containerCus = document.querySelector(".container-custom")
const call = document.querySelector(".call")
const darkBgBlue = document.querySelectorAll(".dark-mode-bgc-blue")
const darkBgRed = document.querySelectorAll(".dark-mode-bgc-red")
const bar = document.querySelectorAll(".bar")
const headerCartH2 = document.querySelector(".abover-header-cart-h2")
const headerCartP = document.querySelector(".abover-header-cart-p")
const headerImgDiv = document.querySelector(".above-header-img-div")
const mainImgDiv = document.querySelector(".main-img-div")
const imgSectionH3 = document.querySelector(".img-section-h3")
const imgSectionP = document.querySelector(".img-section-p")
const cartTitle = document.querySelector(".cart-title")
const bgGreen = document.querySelector(".bg-green")


darkMode.addEventListener('click', ()=>{
    btnDarkLightMode.style.backgroundColor = "#352F44"
    btnDarkLightMode.style.boxShadow = "1px 1px 5px gray"
    lightMode.style.display = "block"
    darkMode.style.display = "none"
    containerCus.style.backgroundColor = "#352F44"

    darkBgBlue.forEach(el => {
        darkModeBgcBlue(el)
    })

    darkBgRed.forEach(el => {
        darkModeBgcRed(el)
    })

    bgGreen.style.backgroundColor = "#205295"
    bgGreen.style.opacity = "0.9"

    bar.forEach(el => {
        el.style.background = "radial-gradient(closest-side, #205295 79%, transparent 80% 100%),conic-gradient(white 65%, #205295 0) "
    })

    darkModeColor(call);
    darkModeColor(headerCartH2);
    darkModeColor(headerCartP);

    headerImgDiv.style.boxShadow = "0px 0px 0px gray"
    mainImgDiv.style.boxShadow = "0px 0px 0px gray"

    darkModeColor(imgSectionH3);
    darkModeColor(imgSectionP);
    darkModeColor(cartTitle);
})

function darkModeBgcBlue(x){
    x.style.backgroundColor = "#205295"
}
function darkModeBgcRed(x){
    x.style.backgroundColor = "#720000"
}
function darkModeColor(x){
    x.style.color = "rgb(255, 255, 255)"
}
// ######################## light mode ################################

lightMode.addEventListener('click', ()=>{
    btnDarkLightMode.style.backgroundColor = "white"
    lightMode.style.display = "none"
    darkMode.style.display = "block"
    containerCus.style.backgroundColor = "white"

    darkBgBlue.forEach(el => {
        lightModeBgcGreen(el)
    })
    darkBgRed.forEach(el => {
        lightModeBgcRed(el)
    })

    bgGreen.style.backgroundColor = "rgb(16, 175, 16)"
    bgGreen.style.opacity = "0.9"

    bar.forEach(el => {
        el.style.background = "radial-gradient(closest-side, rgba(16, 175, 16) 79%, transparent 80% 100%),conic-gradient(white 65%, rgba(16, 175, 16) 0)  "
    })

    lightModeColor(call);
    lightModeColor(headerCartH2);
    lightModeColor(headerCartP);

    headerImgDiv.style.boxShadow = "1px 10px 20px gray"
    mainImgDiv.style.boxShadow = "1px 10px 20px gray"

    lightModeColor(imgSectionH3);
    lightModeColor(imgSectionP);
    lightModeColor(cartTitle);
})

function lightModeBgcGreen(x){
    x.style.backgroundColor = "rgb(16, 175, 16)"
}
function lightModeBgcRed(x){
    x.style.backgroundColor = "rgb(218, 2, 2)"
}
function lightModeColor(x){
    x.style.color = "rgb(0, 0 ,0)"
}
