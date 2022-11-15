window.addEventListener("DOMContentLoaded",()=>{

    const btn=document.getElementById("btn");
    const nav=document.getElementById("nav");
    
    btn.addEventListener("click", () => {
        console.log('clicked');
        nav.classList.toggle("active");
        btn.classList.toggle("active");
    })
});
