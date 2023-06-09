let title = []
let plot = []
let poster = []
let meta = []
let imdb = []
fetch("./data/moovies.json")
.then(response => response.json())
.then(data => {
    for (var i = 0; i<data.length; i++){
    /* title = data[i].Title;
        plot = data[i].Plot;
        poster = data[i].Poster;
        meta = data[i].Metascore;
        imdb = data[i].imdbRating;
        */
       title.push (data[i].Title)
       plot.push (data[i].Plot)
       poster.push (data[i].Poster)
       meta.push (data[i].Metascore)
       imdb.push (data[i].imdbRating)
    }
    console.log(title[1], plot[1]);
}
)

function gettitle(){
    return title
}