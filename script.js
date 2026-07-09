const search = document.getElementById("search");

const filter = document.getElementById("genreFilter");

const cards = document.querySelectorAll(".album-card");

function updateAlbums(){

const keyword = search.value.toLowerCase();

const genre = filter.value;

cards.forEach(card=>{

const title = card.dataset.title.toLowerCase();

const type = card.dataset.genre;

const matchTitle = title.includes(keyword);

const matchGenre = genre==="all" || genre===type;

if(matchTitle && matchGenre){

card.style.display="block";

}else{

card.style.display="none";

}

});

}

search.addEventListener("keyup",updateAlbums);

filter.addEventListener("change",updateAlbums);



document.querySelectorAll(".play-btn").forEach(button=>{

button.addEventListener("click",()=>{

alert("Music Player Coming Soon 🎵");

});

});