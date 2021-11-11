/** All of the objects are going to be stored in a 
 * simple array, so add a function to the script, not
 * the constructor, so that can take users input and
 * store the new book objects into an array
 * 
 * Your code should look something like this:
 */
    let myLibrary = [];
    
    //adding books to the library


    function Album(){
        //the constructor
    }

    function addAlbumToLibrary(){
        bookName = document.getElementById('bookName').value;
        myLibrary.push(bookName);
        console.log(myLibrary);

        return false;
    }
