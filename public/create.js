//create country boxes in the cointainer
let countrybox=document.querySelector("#countrybox");
//accessing the data.js
for(let obj of data)
    {
        //country description box
        let country=document.createElement("div");
        country.setAttribute("class","country shadow");
        country.setAttribute("id",obj["name"]);
        country.setAttribute("style","");
        country.setAttribute("name","displayed");
        countrybox.append(country);
        //flag
        let flag=document.createElement("div");
        flag.setAttribute("class","flag");
        country.append(flag);
        let flagimg=document.createElement("img");
        flagimg.src=obj["flags"]["png"];
        flag.append(flagimg);
        //details content of the country
        let content=document.createElement("div");
        content.setAttribute("class","content");
        country.append(content);
        //details
        let countryname=document.createElement("h4");
        countryname.setAttribute("class","countryname");
        countryname.innerText=obj["name"];
        content.append(countryname);//countryname;
        let br=document.createElement("br");
        content.append(br);//one line space;
        //paragraphs
        let arr=["population","region","capital"];
        for(let i=0;i<3;i++)
            {
                let para=document.createElement("p");
                para.setAttribute("class",arr[i]);
                content.append(para);
                para.innerText=obj[arr[i]];
                let boldpara=document.createElement("b");
                boldpara.innerText=arr[i][0].toUpperCase().concat(arr[i].slice(1)+": ");
                para.prepend(boldpara);
            }
    }