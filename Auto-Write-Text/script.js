window.addEventListener("DOMContentLoaded",after);

function after(){

const text='Do not go where the path may lead, go where there is no  path and leave a trail !!';

let index=0;

function writeText(){
    document.body.innerText=text.slice(0,index);
    index++;
    if (index>text.length){
        index=0;
    }
}
setInterval(writeText,100);

}