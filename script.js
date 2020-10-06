const cuisine = document.querySelector(".btn-cuisine");
const sdb = document.querySelector(".btn-sdb");
const exterieure = document.querySelector(".btn-exterieure");
const s1 = document.querySelector("#cuisine");
const s2 = document.querySelector("#sdb");
const s3 = document.querySelector("#exterieure");

cuisine.addEventListener("click", () => {
    if(s1.style.display === "none"){
        s1.style.display = "block";                
        s2.style.display = "none";                
        s3.style.display = "none";
        cuisine.classList.add("btn-select");              
        sdb.classList.remove("btn-select");
        exterieure.classList.remove("btn-select");
    }else{
        s1.style.display = "none";
        cuisine.classList.remove("btn-select");
    }
});
sdb.addEventListener("click", () => {
    if(s2.style.display === "none"){
        s2.style.display = "block";                
        s1.style.display = "none";                
        s3.style.display = "none";                
        sdb.classList.add("btn-select");
        cuisine.classList.remove("btn-select");
        exterieure.classList.remove("btn-select");
        
    }else{
        s2.style.display = "none";
        sdb.classList.remove("btn-select");
    }
});
exterieure.addEventListener("click", () => {
    if(s3.style.display === "none"){
        s3.style.display = "block";                
        s1.style.display = "none";                
        s2.style.display = "none";   
        exterieure.classList.add("btn-select");
        cuisine.classList.remove("btn-select");             
        sdb.classList.remove("btn-select");             

    }else{
        s3.style.display = "none";
        exterieure.classList.remove("btn-select");
    }
});