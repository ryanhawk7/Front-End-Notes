// Concatenates a string into an array

const guestList = ['Tom', 'Mary', 'Clare', 'John', 'Liz']

const guestsHtml = guestList.map(function(guest){
    return `<div class="box">${guest}</div>`
})


document.getElementById('list').innerHTML = guestsHtml.join('')