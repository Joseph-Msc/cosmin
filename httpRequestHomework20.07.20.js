const divEl = document.getElementById('container');

getContent((response) => {
    const ulEl = document.createElement('ul');
    JSON.parse(response).forEach(
        (countryObj) => {
            const liEl = document.createElement('li');
            const liElTextNode = document.createTextNode([countryObj.country_name, countryObj.value].join(' '));
            liEl.appendChild(liElTextNode);
            ulEl.appendChild(liEl);
        }
    );
    divEl.appendChild(ulEl);
});


function getContent(callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=world-population%40kapsarc&facet=year&facet=country_name', 'true');
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            callback(xhttp.response);
        }
    }
    xhttp.send();
};

