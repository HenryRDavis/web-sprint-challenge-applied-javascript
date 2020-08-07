// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function header() {
    const header = document.createElement('div')
    const span = document.createElement('span')
    const text = document.createElement('h1')
    const spanTemp = document.createElement('span')

    header.appendChild(span)
    header.appendChild(text)
    header.appendChild(spanTemp)

    header.classList.add('header')
    span.classList.add('data')
    spanTemp.classList.add('temp')

    return header
}

const newHeader = document.querySelector('.header-container')
newHeader.appendChild(header())