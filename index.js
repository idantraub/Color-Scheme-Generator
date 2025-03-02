
const getColorBtn= document.getElementById("get-Color-btn")
getColorBtn.addEventListener("click",handleColorBtnClick)

async function handleColorBtnClick()
{
    const color = document.getElementById("color-selector").value
    const mode = document.getElementById("theme").value
    
    const url = `https://www.thecolorapi.com/scheme?hex=${color.slice(1)}&mode=${mode}&count=5`

    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        generateColorsFromData(data.colors)
        })
}


function generateColorsFromData(colorsArray)
{
    let htmlString = ''
    colorsArray.forEach(color => {
        htmlString+=`<div class="color-container" data-hex=${color.hex.value}>`
        htmlString+=`<img src=${color.image.bare} class="color-palette-img" data-hex=${color.hex.value}>`
        htmlString+=`<h3 data-hex=${color.hex.value}>${color.hex.value}</h3>`
        htmlString+='</div>'
    })
    document.getElementById("colors-container").innerHTML=htmlString
    document.getElementById("colors-container").addEventListener("click",event =>{
        
        if(event.target.dataset.hex)
            {
                navigator.clipboard.writeText(event.target.dataset.hex)
                alert("Copied the text: " + event.target.dataset.hex);
            }
    })
}






handleColorBtnClick()