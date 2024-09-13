
const textbox = document.getElementById('textbox')
const topounds = document.getElementById('topounds')
const tokilograms = document.getElementById('tokilograms')
const result = document.getElementById('result')

let weight

function convert(){

    if(topounds.checked){

        weight = Number(textbox.value)
        weight = weight * 2.205
        result.textContent = weight.toFixed(1) + ' LBS'

    }
    else if(tokilograms.checked){

        temp = Number(textbox.value)
        temp = weight / 2.205
        result.textContent = weight.toFixed(1) + ' KG'


    }
    else{
        result.textContent = 'Select a unit'
    }

}