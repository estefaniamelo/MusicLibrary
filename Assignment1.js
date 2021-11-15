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
            "<td>" + myLibrary[i].listenedStatus + "</td>" + "<td>" + "<button type=\"button\" class=\"" + "deleteBtn" + "\"> Delete </button>" + "</td>"  +
            "<td>" + "<label class=\"switch\"> <input type=\"checkbox\"> <span class=\"slider round\"> </span> </label>" + "</td>" 
            + "</tr>";


        }

        document.getElementById("tableBody").innerHTML = html;
    }


    // Displays and closes the modal for the form
    var btn = document.getElementById("add-btn");

    var span = document.getElementsByClassName("close")[0];

    var modal = document.getElementById("album-modal");

    btn.onclick = function(){
        modal.style.display = "block";
    }

    span.onclick = function(){
        modal.style.display = "none";
    }

    //Displays the table 
    var table = document.getElementById("libraryTable");

    var displayBtn = document.getElementById("displayAlbum");

    displayBtn.onclick = function(){
        table.style.display = "block";
    }

    document.getElementsByClassName("deleteBtn").addEventListener("click", deleteAlbum);

    function deleteAlbum(){
        var row = document.getElementsByClassName("deleteBtn");

        row.parentNode.removeChild(row);
    }

