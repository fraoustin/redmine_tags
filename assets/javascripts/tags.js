$(document).ready(function() {
    console.log("tags");
    var colors = {
        "A" : "red",
        "B" : "blue",
        "C" : "green",
        "D" : "orange",
        "E" : "grey",
        "F" : "red",
        "G" : "blue",
        "H" : "green",
        "I" : "orange",
        "J" : "grey",
        "K" : "red",
        "L" : "blue",
        "M" : "green",
        "N" : "orange",
        "O" : "grey",
        "P" : "red",
        "Q" : "blue",
        "R" : "green",
        "S" : "orange",
        "T" : "grey",
        "U" : "red",
        "V" : "blue",
        "W" : "green",
        "X" : "orange",
        "Y" : "grey",
        "Z" : "red"
    };
    Array.from(document.querySelectorAll('.description .wiki .tags')).forEach(elt => {
        var tags = elt.innerText;
        var subject = document.querySelectorAll('.issue .subject')[0];
        var divtags = document.createElement("div");
        divtags.setAttribute('id','tags')
        tags.split(" ").forEach(tag => {
            var divtag = document.createElement("div");
            divtag.className = "tag ";
            divtag.innerText = tag;
            console.log(tag.substring(0,1).toUpperCase())
            divtag.className += colors[tag.substring(0,1).toUpperCase()]
            divtags.appendChild(divtag)
        })
        subject.appendChild(divtags)
    })
});
 

