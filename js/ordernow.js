let expandonclick = document.getElementById('expandonclick')
let boolvalexpand = false;
let boolvalordernow = false;

expandonclick.addEventListener('click', e=>{
    boolvalexpand = !boolvalexpand;
    if(boolvalexpand)
    {
        expandonclick.classList.add('expand');
    }else{
        expandonclick.classList.remove('expand');
    }
})

let ordernowbutton = document.getElementById('order_now_button')

ordernowbutton.addEventListener('click', e=>{
    boolvalordernow=!boolvalordernow
    if(boolvalordernow)
    {
        ordernowbutton.classList.add('marginbottom')
    }else{
        expandonclick.classList.remove('marginbottom');
    }
})