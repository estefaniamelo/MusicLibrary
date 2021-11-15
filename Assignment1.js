/** All of the objects are going to be stored in a 
 * simple array, so add a function to the script, not
 * the constructor, so that can take users input and
 * store the new book objects into an array
 * 
 * Your code should look something like this:
 */
    //declaring array
    let myLibrary = [
        {
            albumName: "abc",
            artist: "abc",
            songs: "12",
            listenedStatus: "yes"
        },
        {
            albumName: "bcd",
            artist: "bcd",
            songs: "13",
            listenedStatus: "bcd"
        }

    ];

    function Album(albumName, artist, songs, listenedStatus){
        this.albumName = albumName;
        this.artist = artist;
        this.songs = songs;
        this.listenedStatus = listenedStatus;
    }

    document.getElementById("addAlbum").addEventListener("click", addAlbumToLibrary);

    //function to add a new album to the library array 
    function addAlbumToLibrary(){

        //saving all user inputs into variables
        var albumInput = document.getElementById('albumName').value;
        var artistInput = document.getElementById('artist').value;
        var songInput = document.getElementById('songs').value;
        var listenedInput = document.getElementById('listened').value;

        let album = new Album(albumInput, artistInput, songInput, listenedInput);
        
        console.log(album);

        myLibrary.push(album);

        console.log(myLibrary);
    }

    document.getElementById("displayAlbum").addEventListener("click", displayLibrary);

    function displayLibrary(){
        var arrayLength = myLibrary.length;
        let html = "";

        for(var i=0; i < arrayLength; i++){

            html += "<tr id=\"" + "album" + i + "\" + data-album-id=\"" + i + "\">" +
            "<td>" + myLibrary[i].albumName + "</td>" +
            "<td>" + myLibrary[i].artist + "</td>" +
            "<td>" + myLibrary[i].songs + "</td>" +
            "<td>" + myLibrary[i].listenedStatus + "</td>" + "<td>" + "<button type=\"button\"> Delete </button>"    
            + "</tr>";


        }

        document.getElementById("tableBody").innerHTML = html;
    }



var btn = document.getElementById("add-btn");

var span = document.getElementsByClassName("close")[0];

var modal = document.getElementById("album-modal");

btn.onclick = function(){
    console.log("in the function");
    modal.style.display = "block";
}

span.onclick = function(){
    console.log("in the function");
    modalf.style.display = "none";
}