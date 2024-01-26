let active_button = document.getElementsByClassName('active-search');

function SetSearchEngine(search_url, event) {
    active_button[0].classList.remove('active-search');

    //active_button = event.target;
    //active_button[0].classList.add('active-search');
    event.target.classList.add('active-search');
    document.getElementById('search-input').setAttribute('data-search-url', search_url);
}

function Search() {
    const search_url = document.getElementById('search-input').getAttribute('data-search-url');

    const search_input_value = document.getElementById('search-input').value;

    const full_url = search_url.replace('%s', search_input_value);

    window.location.href = full_url;
}

function SearchCheckEnter(event) {
    if (event.key === 'Enter') {
        Search();
    }
    
}