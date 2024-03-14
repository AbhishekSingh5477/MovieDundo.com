let movieSearch=document.getElementById("movSearch");
let main=document.getElementsByClassName("main")[0];
let curstatus=document.getElementsByClassName("status")[0]
let img=document.getElementsByTagName("img")[0];
let heading=document.getElementsByTagName("H2")[0];
movieSearch.addEventListener("click",()=>{
    main.innerHTML=""
    let search=document.getElementById("search").value;
    let url=`http://www.omdbapi.com/?s=${search}/&page=4&apikey=fb3d79ac`
    if(search.length==0){
       curstatus.textContent="**First Type something**"
    }
    else{
        curstatus.textContent=""
        fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            console.log(data)
            // img.src=`${data.Search[0].Poster}`
            // heading.textContent=`${data.Search[0].Title}`
            for(let i=0;i<data.Search.length;i++){
                let newDiv=document.createElement("div")
                newDiv.className="box"
                newDiv.innerHTML=`<img src="${data.Search[i].Poster}" alt="Not able to load"><h2>${data.Search[i].Title}</h2><button>Watch Now</button>`
                main.appendChild(newDiv)
            }

        }).catch(()=>{
            curstatus.textContent="Sorry! Not able to find any movie";
         })
    }
})
   