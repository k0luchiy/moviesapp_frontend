
// const hostname = "http://127.0.0.1:8000/"
const hostname = "https://moviesapp-xt3q.onrender.com/"

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
    }
    return cookieValue;
}

async function fetchAPI(url, options){
    let access_token = JSON.parse(localStorage.getItem("authTokens"))?.access
    var csrftoken = getCookie("csrftoken")
    let headers = {
        "Content-Type": "application/json",
        'X-CSRFToken': csrftoken,
    }

    if(access_token){
        headers["Authorization"] = "Bearer " + access_token
    }
    
    return await fetch(hostname + url, {
        headers,
        ...options
    }
    )
    // ).then(response=>response.json())
}

export { fetchAPI };