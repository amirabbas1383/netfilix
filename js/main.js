let sideLeft = document.querySelector('.side-left')
let main = document.querySelector('.main')

function CloseSide() {
    sideLeft.style.width = '0%'
    sideLeft.style.opacity = '0'
    main.style.marginLeft = '0%'
    main.style.width = '95%'
    // sideLeft.style.display = 'none'
}

function OpenSide() {
    sideLeft.style.width = '15%'
    sideLeft.style.opacity = '1'
    main.style.marginLeft = '15%'
    main.style.width = '80%'
}