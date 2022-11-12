var container = document.getElementById("menu");
var button = document.getElementById("button");

button.onclick = function(){
    if(container.className == "open"){
        container.className = "";
    }else{
        container.className = "open";
    }
};


const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('hidden');
            }else{
                entry.target.classList.remove('hidden');
            }
    });
});

const hiddenElements = document.querySelectorAll('.show');
hiddenElements.forEach((el) => observer.observe(el));
