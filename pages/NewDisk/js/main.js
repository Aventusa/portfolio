"use strict";

//api

let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://edu.nd.ru/tests/test1.json'
fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    
    const table = document.querySelector('.table');

    for(let i = 0; i < data.teachers.length; i++) {
        
        let array = data.teachers;

        for (const key in array[i]) {
            
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            let br = document.createElement('br');
            
            td.append(`${key}: ${array[i][key]}`);
            tr.appendChild(td);

            if(key == 'id') {
                table.appendChild(br);
            } 

            table.appendChild(tr);
        }
    }

    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });

// поиск

document.querySelector('.search').oninput = function () {
    let val = this.value.trim();
    let item = document.querySelectorAll('td');
    if(val != ''){
        item.forEach(function(elem) {
            if(elem.innerText.search(val) ==  -1) {
                elem.classList.add('hide');
            } else {
                elem.classList.remove('hide');      
            }
        })
    } 
    else {
        item.forEach(function(elem) {
                elem.classList.remove('hide');
        });
    }
}


// Павлов Иван 06.11.2019  