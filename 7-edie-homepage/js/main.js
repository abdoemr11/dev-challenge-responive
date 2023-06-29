const menuToggle = document.getElementById('menu')
let firstTime = true
menuToggle.onclick = function () {

    const menu_items = menuToggle.parentElement.getElementsByTagName('ul')[0]
    if (menu_items.classList.contains('sm-menu-hidden') || firstTime) {
        menu_items.classList.remove('sm-menu-hidden')
        menu_items.classList.add('sm-menu-shown')
        firstTime = false
    } else {
        menu_items.classList.remove('sm-menu-shown')
        menu_items.classList.add('sm-menu-hidden')
    }
}