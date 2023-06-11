const openMenuBtn = document.getElementById('open-menu')
const closeMenuBtn = document.getElementById('close-menu')
const navMenu = document.querySelector('header nav')
console.log(openMenuBtn);
console.log(closeMenuBtn);
openMenuBtn.onclick = () => {
    navMenu.style.display = 'block'
}
closeMenuBtn.onclick = () => {
    navMenu.style.display = 'none'

}


const mediaQuery = window.matchMedia('(min-width: 768px)')
mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
        navMenu.style.display = 'block'
        console.log('hi');
    }
})
// Check if the media query is true
