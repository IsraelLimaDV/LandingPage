function openMenu(){
    let menu = document.querySelectorAll(".menu-mobile")[0]
    if(menu.style.display != 'block'){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}