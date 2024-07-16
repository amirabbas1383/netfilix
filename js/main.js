let sideright = document.querySelector('.side-right')
let btnopen = document.querySelector('.btn-open')
let btnclose = document.querySelector('.btn-close')


function openSideLeft() {
    sideright.style.width = '10%'
    btnclose.style.display = 'flex'

}
function closeSideLeft() {
    sideright.style.width = '5%'
    btnopen.style.display = 'flex'
}

