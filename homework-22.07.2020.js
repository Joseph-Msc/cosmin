getListOfFriends();

function getListOfFriends () {
    const xhttp = makeRequest('https://run.mocky.io/v3/a5191d40-26a4-49ea-b128-1a3eea08104b');
    xhttp.onload = onLoad();
    xhttp.onloadend = onLoadEnd();
    xhttp.send();
}

function onLoad() {
    const loadingAnimationTemplate = renderLoadingAnimation();
    const divContentContainerEl = document.getElementById('divContentContainer');
    divContentContainerEl.appendChild(loadingAnimationTemplate);
}

function onLoadEnd() {
    setTimeout(
      () => {
          const divContentContainerEl = document.getElementById('divContentContainer');
          divContentContainerEl.replaceChild(renderLoadedMessageTemplate(), divContentContainerEl.firstChild);
      },
      5000
    );
}

function renderLoadingAnimation() {
    const divEl = document.createElement('div');
    divEl.classList.add('lds-dual-ring');

    return divEl;
}

   
function renderLoadedMessageTemplate(){
    const h5El = document.createElement('h5');
    const textNode = document.createTextNode('Finished loading')
    h5El.appendChild(textNode);

    return h5El;
}

function makeRequest(url, method = 'GET', xhttp = null) {
    if (!xhttp) {
        xhttp = new XMLHttpRequest();
    }

    xhttp.open(method, url, true);

    return xhttp;
}


