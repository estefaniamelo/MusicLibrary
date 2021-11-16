/** All of the objects are going to be stored in a 
 * simple array, so add a function to the script, not
 * the constructor, so that can take users input and
 * store the new book objects into an array
 * 
 * Your code should look something like this:
 */
    //declaring array
    let myLibrary = [];

    var autoIncrement = 0; 

    function Album(albumId, albumName, artist, songs, listenedStatus){
        this.albumId = albumId;
        this.albumName = albumName;
        this.artist = artist;
        this.songs = songs;
        this.listenedStatus = listenedStatus;
    }

    document.getElementById("addAlbum").addEventListener("click", addAlbumToLibrary);

    //function to add a new album to the library array 
    function addAlbumToLibrary(){

        //saving all user inputs into variables
        var albumId = autoIncrement;
        var albumInput = document.getElementById('albumName').value;
        var artistInput = document.getElementById('artist').value;
        var songInput = document.getElementById('songs').value;
        var listenedInput = document.getElementById('listened').value;

        //validating user input to make sure no empty strings are submitted
        if(albumInput == "" && artistInput == "" && songInput == "" && listenedInput == ""){
            window.alert("None of the fields can be empty. Try again.");
        } else{

            let album = new Album(albumId, albumInput, artistInput, songInput, listenedInput);
    
            myLibrary.push(album);

             autoIncrement++;
        }

        //clearing the input values
        document.getElementById('albumName').value = "";
        document.getElementById('artist').value = "";
        document.getElementById('songs').value = "";
        document.getElementById('listened').value = "";

    }

    document.getElementById("displayAlbum").addEventListener("click", displayLibrary);

    function displayLibrary(){
        var arrayLength = myLibrary.length;
        let html = "";

        for(var i=0; i < arrayLength; i++){

            html += "<tr class=\"rows\" + id=\"" + "album" + i + "\" + data-album-id=\"" + myLibrary[i].albumId + "\">" +
            "<td>" + myLibrary[i].albumName + "</td>" +
            "<td>" + myLibrary[i].artist + "</td>" +
            "<td>" + myLibrary[i].songs + "</td>" +
            "<td>" + myLibrary[i].listenedStatus + "</td>" + 
            "<td>" + "<button type=\"button\" class=\"" + "deleteBtn" + "\"> Delete </button>" + "</td>" +  
            "</tr>";
        }

        document.getElementById("tableBody").innerHTML = html;

        buttons = document.getElementsByClassName('deleteBtn');

        for(i =0; i < buttons.length; i++){
            buttons[i].addEventListener("click", deleteAlbum);
        }

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


    function deleteAlbum(){
        
       var row= this.parentNode.parentNode;
       var indexNum = row.getAttribute("data-album-id");

       row.parentNode.removeChild(row);

        var filtered = myLibrary.filter(function(e) {
            if (e.albumId == this) {
                return false;
            } else {
                return true;
            }
        }, indexNum)

        myLibrary = filtered; 

    }




