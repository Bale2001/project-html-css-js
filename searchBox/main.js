var button_search = document.querySelector('.search-box-btn');
var search_full = document.querySelector('.search-box');
button_search.addEventListener('click', function(){
    search_full.classList.add('full');
})