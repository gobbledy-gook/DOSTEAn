let btn_mocktails = document.getElementById('mocktails')
let mocktail_div = document.getElementById('Mocktails')

let buffer = 'Beverages_and_Deserts';
let i=0;

function reveal(param){
    document.getElementById(buffer).style.display = 'none';
    document.getElementById(param).style.display = 'inline-block';
    buffer = param;
    i=i+1;
}

