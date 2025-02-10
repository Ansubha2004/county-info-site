let lightbtn=document.querySelector("#lighttheme");
let navbar=document.querySelector("header");
let main=document.querySelector("main");
let searchfilter=document.querySelector("#searchfilter");
let countries=document.querySelectorAll(".country");
let opts=document.querySelectorAll(".opts");
let input=document.querySelector("input");
let backbtn=document.querySelector("#back");
let neighbours=document.querySelectorAll(".neighbours")
lightbtn.addEventListener("click",()=>{
    
    let theme=lightbtn.children[1].innerText;
    if(theme=="Dark Mode")
        darkmode();
    else
    lightmode();
})
const darkmode=()=>{
    lightbtn.children[1].innerText="Light Mode";
    navbar.setAttribute("class","darkmode");
    main.setAttribute("class","darkmode1");
    if(location.href=="file:///C:/Users/subha/OneDrive/Desktop/rest-countries-api-with-color-theme-switcher-master/viewcountry.html")
        {
            backbtn.setAttribute("class","darkmode");
        }
    else{
    searchfilter.children[0].setAttribute("class","darkmode");
    searchfilter.children[1].setAttribute("class","darkmode");
    for(let country of countries)
    country.setAttribute("class","country darkmode");
    for(let options of opts)
        options.setAttribute("style","background-color:hsl(209, 23%, 22%)");
    opts[0].parentElement.setAttribute("class","");
    input.setAttribute("class","darkmode");
    input.setAttribute("style","border-color:hsl(209, 23%, 22%)");
    }
};
const lightmode=()=>{
    lightbtn.children[1].innerText="Dark Mode";
    navbar.setAttribute("class","");
    main.setAttribute("class","");
    if(location.href=="file:///C:/Users/subha/OneDrive/Desktop/rest-countries-api-with-color-theme-switcher-master/viewcountry.html")
        {
            backbtn.setAttribute("class","shadow");
        }
    else{
    searchfilter.children[0].setAttribute("class","shadow");
    searchfilter.children[1].setAttribute("class","shadow");
    for(let country of countries)
    country.setAttribute("class","country shadow");
    for(let options of opts)
        options.setAttribute("style","");
    opts[0].parentElement.setAttribute("class","shadow");
    input.setAttribute("class","");
    input.setAttribute("style","");}
    
};