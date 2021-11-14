let load_text = document.querySelector('.loading-text');
let image = document.querySelector('.image')

let load = 0  ;

let interval = setInterval(increement,30);

function increement ()
{
    load++;
    if(load > 99)
     clearInterval(interval);
    load_text.innerText = `${load}%`;
    load_text.style.opacity=scale(load,0,100,1,0);
    image.style.filter=`blur(${scale(load,0,100,30,0)}px)`;
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}