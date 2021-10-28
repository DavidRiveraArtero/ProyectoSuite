const fotter = document.getElementById('piePagina')



window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    fotter.style.backgroundPositionY = offset * 1.4 + "px";
})
