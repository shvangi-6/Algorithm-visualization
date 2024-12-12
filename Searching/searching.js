
const slider = document.querySelector('#size_slider')
const output = document.querySelector('#size_value')
const body = document.querySelector('#mainbody')
const speedSlider = document.querySelector('#speed_slider')
const speedOutput = document.querySelector('#speed_value')
const preloader = document.querySelector('.preloader')
const select = document.querySelector('.select')
const icon = document.querySelector('.icon')
const menu = document.querySelector('.menu')
const options = document.querySelectorAll('.menu li')
const selected = document.querySelector('.selected')
const generate = document.querySelector('#generate')
const searchedVal = document.querySelector('#searchingVal')
const searchText = document.querySelector('.selected')


function disableSortingBtn() {
    document.querySelector("#linear_Search").disabled = true;
    document.querySelector("#binary_Search").disabled = true;
    document.querySelector("#searchingVal").disabled = true;
}

function enableSortingBtn() {
    document.querySelector("#linear_Search").disabled = false;
    document.querySelector("#binary_Search").disabled = false;
    document.querySelector("#searchingVal").disabled = false;

}


function disableSizeSlider() {
    document.querySelector("#size_slider").disabled = true;
    document.querySelector('#size').disabled = true
}


function enableSizeSlider() {
    document.querySelector("#size_slider").disabled = false;
    document.querySelector('#size').disabled = false
}


function disableNewArrayBtn() {
    document.querySelector("#generate").disabled = true;
}

function enableNewArrayBtn() {
    document.querySelector("#generate").disabled = false;
}






output.innerHTML = slider.value



var arr = []
for (let i = 1; i <= 64; i++) {
    let temp = Math.floor(Math.random() * (350 - 20) + 20)
    arr.push(temp)
}

for (let i = 0; i < 64; i++) {
    let bar = document.createElement('div')
    bar.className = 'bars'
    bar.style.height = `${arr[i]}px`
    bar.innerHTML = `${arr[i]}`
    bar.style.width = `4vw`;
    body.appendChild(bar)
}


var arrayVal = 64;
slider.oninput = function () {
    searchText.innerHTML = `Size Changed`
    output.innerHTML = this.value
    arrayVal = this.value
    arr = []
    for (let i = 1; i <= this.value; i++) {
        let temp = Math.floor(Math.random() * (350 - 20) + 20)
        arr.push(temp)
    }
    while (body.firstChild) {
        body.removeChild(body.firstChild)
    }
    for (let i = 0; i < this.value; i++) {
        let div = document.createElement('div')
        div.className = 'bars'
        div.innerHTML = `${arr[i]}`
        div.style.height = `${arr[i]}px`
        div.style.width = `${(96 / this.value)}vw`
        body.appendChild(div)
    }

}

generate.addEventListener('click', () => {
  
    var mouseclick = new Audio('Mouseclick.mp3')
    mouseclick.play()
    enableSortingBtn();
    enableSizeSlider();
    searchText.innerHTML = `New Array Generated`
    const description = document.querySelector('#description')
    description.style.display = 'none'
    const section = document.querySelector('#fullbody')
    section.style.height = `100vh`

    searchedVal.value = ''
    const step = document.querySelector('.step')
    step.innerHTML = ``

    const index = document.querySelector('.index')
    index.innerHTML = ``

    count=0

    while (body.firstChild) {
        body.removeChild(body.firstChild)
    }
  
    arr = []
    for (let i = 1; i <= arrayVal; i++) {
        let temp = Math.floor(Math.random() * (350 - 20) + 20)
        arr.push(temp)
    }
    console.log(arr)
   
    for (let i = 0; i < arrayVal; i++) {
        let div = document.createElement('div')
        div.className = 'bars'
        div.style.height = `${arr[i]}px`
        div.innerHTML = `${arr[i]}`
        div.style.width = `${96 / arrayVal}vw`
        body.appendChild(div)
    }
})




function waitcount(milisec) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('')
        }, milisec)
    })
}



speedOutput.innerHTML = speedSlider.value

let delay = 260;
speedSlider.oninput = function () {
    searchText.innerHTML=`Speed Changed`
    speedOutput.innerHTML = this.value
    delay = 760 - (100*this.value);
    console.log(delay);
}



menu.classList.toggle('close')

select.addEventListener('click', () => {
   
    menu.classList.toggle('close')
    icon.classList.toggle('icon-rotate')
})
options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText
        menu.classList.toggle('close')
        icon.classList.toggle('icon-rotate')

    })
});



window.addEventListener('load', () => {
    
})






const val = document.querySelector('#searchingVal')


