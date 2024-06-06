const rootColorEl = document.getElementById('root-color')
const colorContainerEl = document.getElementById('color-container')
const hexContainerEl = document.getElementById('hex-container')
const modeEl = document.getElementById('mode-el')
const formEl = document.getElementById('form-el')
const colorArray = []

let url = ""

formEl.addEventListener("submit", function(e) {
    e.preventDefault()
    const mode = modeEl.value
    const rootColor = rootColorEl.value.slice(1)
    url = `https://www.thecolorapi.com/scheme?hex=${rootColor}&mode=${mode}`
    getColorScheme(url)
})

function getColorScheme(url){
    fetch(url)
    .then(res => res.json())
    .then( data => {
        let colorHtml = ``
        let hexHtml = ``
        data.colors.forEach( color => {
            colorHtml += `<div class='color' style='background-color:${color.hex.value}'></div>`
            hexHtml += `<p>${color.hex.value}</p>`
        })
        console.log(colorHtml)
        colorContainerEl.innerHTML = colorHtml
        hexContainerEl.innerHTML = hexHtml
        
    })
}