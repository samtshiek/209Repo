document.addEventListener("DOMContentLoaded", function (event) {

    let MovieArray = [];
    let listHeading = document.getElementById("ListHeading");
    let listSection = document.getElementById('listSection');
    listHeading.style.visibility = "hidden";
    listSection.style.visibility = "hidden";
    document.getElementById("addMovies").addEventListener("click", function () {
        let titleTextbox = document.getElementById('TitleTextbox');
        let ratingTextbox = document.getElementById('RatingTextbox');
        let yearTextbox = document.getElementById('YearTextbox');


        if(titleTextbox.value.length != 0 && ratingTextbox.value.length != 0 && yearTextbox.value.length != 0) {
            if (MovieArray.length < 10) {
                movie = {}
                movie.title = titleTextbox.value;
                movie.rating = ratingTextbox.value;
                movie.year = yearTextbox.value;

            MovieArray.push(movie);
            }
        }
        else {
            alert("Incorrect data. Movie cannot be saved while field is empty.");
        }

        titleTextbox.value = "";
        ratingTextbox.value = "";
        yearTextbox.value = "";
    });

    document.getElementById("showMovies").addEventListener("click", function () {
        
        listHeading.style.visibility = "visible";
        listSection.style.visibility = "visible";

        let myList = "<ol>"
        for(let i = 0; i < MovieArray.length; i++) {

        myList += "<li> Title: " +  MovieArray[i].title + ", Rating: " + MovieArray[i].rating + ", Year: " + MovieArray[i].year + "</li>";
        
  }
  myList += "</ol>"
  listSection.innerHTML = myList;

    });

});

