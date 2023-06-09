fetch("./data/moovies.js")
.then(response => response.json())
.then(data => {
    for (var i = 0; i<data.length; i++){
        let title = data[i].Title;
        let actor = data[i].Actors;
        let poster = data[i].Poster
    }
    console.log(title);
}
)