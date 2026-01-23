
document.addEventListener("DOMContentLoaded", function(){var themeTogglebtn = document.querySelector('#theme-btn');

themeTogglebtn.addEventListener('click', toggleTheme);

function toggleTheme(){
    var html = document.documentElement;
    var currentTheme = html.getAttribute("data-theme");

    var stringPath = document.querySelector("#stringPath");
    var arrow = document.querySelectorAll('.arrow');
    
    // Setting to Dark theme
    if(currentTheme !== "dark"){
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        stringPath.setAttribute("stroke","#fec56b");
        arrow.forEach(function(e){
            e.setAttribute("stroke","#fec56b")
        });
        themeTogglebtn.innerText = 'Light'
    }
    // Setting to Light theme
    else{
        html.removeAttribute('data-theme');
        stringPath.setAttribute("stroke","#1e3347");
        arrow.forEach(function(e){
            e.setAttribute("stroke","#1e3347")
        });
        localStorage.setItem('theme', 'light');
        themeTogglebtn.innerText = 'Dark'
        // console.log(themeTogglebtn.innerText);
    }
}

// const savedTheme = localStorage.getItem("theme");
// if(savedTheme === "dark"){
//     document.documentElement.setAttribute("data-theme", "dark");
// }


})