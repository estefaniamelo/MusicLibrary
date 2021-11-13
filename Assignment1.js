/** All of the objects are going to be stored in a 
 * simple array, so add a function to the script, not
 * the constructor, so that can take users input and
 * store the new book objects into an array
 * 
 * Your code should look something like this:
 */
    //declaring array
    let myLibrary = [];


    //adding event listener to addAlbum button
   

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