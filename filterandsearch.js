let allcountry=document.querySelectorAll(".country");
//filter
let filtericon=document.querySelector("#filter i");
let temp=1;
filtericon.addEventListener("click",()=>{
    if(temp%2==1)
        {
            filtericon.nextElementSibling.setAttribute("style","visibility:none;");
            for(let continent of filtericon.nextElementSibling.childNodes){
                continent.addEventListener("click",()=>{
                    filtericon.previousElementSibling.innerText=continent.innerText;
                    for(let country of allcountry)
                        {
                            let region;
                            for(let obj of data)
                                {
                                    if(country.getAttribute("id")==obj["name"])
                                        {
                                            region=obj["region"];
                                            break;
                                        }
                                }
                                if(region==continent.innerText || continent.innerText=="All")
                                    {
                                        country.setAttribute("style","");
                                        country.setAttribute("name","displayed");
                                    }
                                else
                                {
                                    country.setAttribute("style","display:none");
                                    country.setAttribute("name","notdisplayed");

                                }
                            }
                })
            }
        }
        else
        {
            filtericon.nextElementSibling.setAttribute("style","visibility:hidden");
        }
    temp++;
});
//search
let searchinput=document.querySelector("#search input");
let searchicon=document.querySelector("#find");
let close=document.querySelector("#close");
const resetfunc=()=>{
    for(let country of allcountry)
        {
            if(country.getAttribute("name")=="displayed")
                country.setAttribute("style","");
        }
}
searchicon.addEventListener("click",()=>{
    let value=searchinput.value;
    let c=0;
    for(let country of allcountry)
        {
            if(country.getAttribute("name")=="displayed")
                {
                    
                    if(country.getAttribute("id").toLowerCase()==value.toLowerCase())
                        {
                            country.setAttribute("style","");
                            c=1;
                        }
                    else{
                        country.setAttribute("style","display:none");
                    }

                }
        }
        if(c==0)
            {
                searchinput.placeholder="Not found....";
                searchinput.value="";
                resetfunc();
            }
            else
            {
                close.addEventListener("click",()=>{
                    searchinput.value="";
                    resetfunc();
                    }
                );
            }
});