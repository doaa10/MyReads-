const SingleBook=({book,changeShelf})=>{
       const updateShelf=(event)=>{
        changeShelf(book,event.target.value)

    }
return(
                    
                      <ul className="list" key={book.id}>
                      <li>
                          <img src={book.imageLinks?.smallThumbnail}></img>
                          <div className="book-shelf-changer-search">
                      <select onChange={updateShelf} defaultValue={book.shelf?book.shelf:"none"}
                     >
                        <option value="none" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading"
                        >
                          Currently Reading  
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                          <h3>{book.title}</h3>
                          <span>{book.authors}</span>
                      
                      </li>
                  </ul>
)
}
export default SingleBook