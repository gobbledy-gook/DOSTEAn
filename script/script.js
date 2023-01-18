let btn_mocktails = document.getElementById('mocktails')
let mocktail_div = document.getElementById('Mocktails')

let buffer = 'test';
let i=0;

function reveal(param){
    if(i>0)
    {
        document.getElementById(buffer).style.display = 'none';
    }
    document.getElementById(param).style.display = 'inline-block';
    buffer = param;
    i=i+1;
}
