
for(let country of countries)
    {
        country.addEventListener("click",()=>{
                let countryname=country.getAttribute("id");
                sessionStorage.setItem("nation",countryname);
                location.href="viewcountry.html";
            })
    }
if(location.href=="file:///C:/Users/subha/OneDrive/Desktop/rest-countries-api-with-color-theme-switcher-master/viewcountry.html")
    {backbtn.addEventListener("click",()=>{
            location.href="index.html";
        })
    }
