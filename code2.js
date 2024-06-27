let nation=sessionStorage.getItem("nation");
let nationname=document.querySelector("h1");
nationname.innerText=nation;
for(let country of data)
    {
        if(country["name"]==nation)
            {
                let nationflag=document.querySelector("img");
                nationflag.src=country["flags"]["png"];
                let details1=document.querySelectorAll("#details1 p");
                for(let d1 of details1)
                    {
                        let boldheading=document.createElement("b");
                        boldheading.innerText=d1.getAttribute("name");
                        d1.innerText=country[d1.getAttribute("id")];
                        d1.prepend(boldheading);
                    }
                let details2=document.querySelectorAll("#details2 p");
                for(let d2 of details2)
                    {
                        let boldheading=document.createElement("b");
                        boldheading.innerText=d2.getAttribute("name");
                        console.log(boldheading);
                        if(d2.getAttribute("id")=="currencies")
                            d2.innerText=country["currencies"][0]["name"]+" (  "+country["currencies"][0]["symbol"]+"  )";
                        else if(d2.getAttribute("id")=="languages"){
                            let str="";
                            for(let language of country["languages"])
                                str=str+language["name"]+"   ";
                            d2.innerText=str;
                        }
                        else
                        d2.innerText=country[d2.getAttribute("id")]
                        d2.prepend(boldheading);
                    }
                let borders=document.querySelector("#borders");
                for(let neighbour of country["borders"])
                    {
                        for(let con of data)
                            {
                                if(neighbour==con["alpha3Code"])
                                    {
                                        let neighbours=document.createElement("div");
                                        neighbours.setAttribute("class","neighbours shadow");
                                        neighbours.innerText=con["name"];
                                        borders.append(neighbours);
                                        neighbours.addEventListener("click",()=>{
                                            sessionStorage.setItem("nation",neighbours.innerText);
                                            location.href="viewcountry.html";
                                        })
                                    }
                            }
                    }
            }
    }