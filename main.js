document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("changeWords").style.visibility = "hidden";
    document.getElementById('listSection2').style.visibility = "hidden";
    let fruitArray = [];

    document.getElementById("start").addEventListener("click", function () {
        fruitArray = [];
        document.getElementById('listSection').style.visibility = "visible";
        document.getElementById("changeWords").style.visibility = "hidden";
        document.getElementById('listSection2').style.visibility = "hidden";
        document.getElementById("start").style.visibility = "hidden";
        let listSection = document.getElementById('listSection');

        let myList = "<ul>"
        for(let i = 0; i < 3; i++) {
        let word = prompt("Please enter a word", "apple");

        if (word != null) {
            fruitArray.push(word);
            myList += "<li>" +  word + "</li>";
        }
  }
  myList += "</ul>"
  listSection.innerHTML = myList;
  document.getElementById("changeWords").style.visibility = "visible";

    });

    document.getElementById("changeWords").addEventListener("click", function () {
        document.getElementById("changeWords").style.visibility = "hidden";
        document.getElementById('listSection').style.visibility = "hidden";
        document.getElementById('listSection2').style.visibility = "visible";
        document.getElementById("start").style.visibility = "visible";
        let changedWords = fruitArray.map(changeWord);

        let listSection = document.getElementById('listSection2');

        let myList = "<ul>"
        for(let i = 0; i < changedWords.length; i++) {

        myList += "<li>" +  changedWords[i] + "</li>";
        
  }
  myList += "</ul>"
  listSection.innerHTML = myList;

        function changeWord(word) {
            return word.charAt(word.length - 1) + word.substring(1, word.length -
                1) + word.charAt(0);
        }
    });

    document.getElementById("listSection2").addEventListener("mouseover", function () {
        document.getElementById('listSection2').style.fontSize = "50px";
    });

    document.getElementById("listSection2").addEventListener("mouseout", function () {
        document.getElementById('listSection2').style.fontSize = "15px";
    });
});

