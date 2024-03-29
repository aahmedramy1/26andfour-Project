const data =     [ {
    "Title" : "Thor Ragnorak",
    "Poster" : "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    "Description" : "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    "videoURL" : "https://www.youtube.com/embed/ue80QwXMRHg",
    "movieID" : "1",
    "rating" : 3.95
},
    {
    "Title" : "Spider-Man Far From Home",
    "Poster" : "https://resizing.flixster.com/6gPGTgXSvYagw4EMJL_S7_ORRLE=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2M1ZDMzZDMxLTU0MTEtNDc5Yy04NDMyLWU1NWE5MDdkOWFmMy53ZWJw",
    "Description" : "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
    "videoURL" : "https://www.youtube.com/embed/Nt9L1jCKGnE",
    "movieID" : "2",
    "rating" : 3.75
},
{
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "imdbID": "tt0076759",
    "Type": "movie",
    "Description" : "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader." ,
    "videoURL" : "https://www.youtube.com/embed/vZ734NWnAHA",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "movieID" : "3",
    "rating": 1
},
{
    "Title": "Star Wars: Episode V - The Empire Strikes Back",
    "Year": "1980",
    "imdbID": "tt0080684",
    "Type": "movie",
    "videoURL" : "https://www.youtube.com/embed/JNwNXF9Y6kY",
    "Description" : "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "movieID" : "4",
    "rating": 3
},
{
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "imdbID": "tt0086190",
    "Type": "movie",
    "Description" : "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
    "videoURL" : "https://www.youtube.com/embed/7L8p7_SLzvU",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "movieID" : "5",
    "rating": 4
},
{
    "Title": "Five Feet Apart",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzVmMjJlN2MtNWQ4Ny00Zjc2LWJjYTgtYjJiNGM5MTM1ZTlkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
    "rating": 5,
    "videoURL" : "https://www.youtube.com/embed/XtgCqMZofqM",
    "Description" : "A pair of teenagers with cystic fibrosis meet in a hospital and fall in love, though their disease means they must avoid close physical contact.",
    "movieID" : "6"
}
];

const movieContainer = document.querySelector(".movie-container");

data.forEach(movie => {
    const movieDiv = document.createElement("div");
    const imageDiv = document.createElement("div");
    var img = document.createElement("img");
    var title = document.createElement("p");
    title.innerHTML = movie.Title;
    img.src = movie.Poster;
    movieDiv.classList.add("imageDiv");
    img.classList.add("imgWidth");
    imageDiv.appendChild(img);
    movieDiv.appendChild(imageDiv);
    movieContainer.appendChild(movieDiv);
})


