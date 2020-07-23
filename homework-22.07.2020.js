
 getlistOfFriends();

function getlistOfFriends () {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://run.mocky.io/v3/a5191d40-26a4-49ea-b128-1a3eea08104b', 'true');
   onload(xhttp);
   console.log(xhttp)
    xhttp.send();
}

function onload(xhttp){
    xhttp.onload = () => {
        const divEl = document.getElementById('divEl');
        const divEl2 = document.createElement('div');
        divEl.classList.add('lds-circle')
        divEl.appendChild(divEl2);
        console.log('loading....');
        onloadend(xhttp);
    }
}

function onloadend(xhttp){
    xhttp.onloadend = () => {
        console.log('finished loading');
        divEl.classList.remove('lds-circle');
        getmessage();
    }
}

   
function getmessage(){
    const h5El = document.createElement('h5');
    const textNode = document.createTextNode('Finished loading')
    h5El.appendChild(textNode);
    divEl.appendChild(h5El);
}


