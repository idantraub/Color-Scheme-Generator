
const getColorBtn= document.getElementById("get-Color-btn")
getColorBtn.addEventListener("click",handleColorBtnClick)

async function handleColorBtnClick()
{
    const color = document.getElementById("color-selector").value
    const mode = document.getElementById("theme").value
    
    console.log(color," ",mode)
    const url = `https://www.thecolorapi.com/scheme?hex=${color.slice(1)}&mode=${mode}&count=5`
    console.log(url)
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
        htmlString+=`<img src=${color.image.bare} class="color-palette-img">`
    })
    document.getElementById("colors-container").innerHTML=htmlString
}


handleColorBtnClick()