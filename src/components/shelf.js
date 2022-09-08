
import SingleBook from "./singleBook";
const Shelf=({books,head,type,changeShelf})=>{
    const bookType =books.filter((book)=>book.shelf===type);


    return(
        <div className="container current" id="container">
        <h1 className="head">{head}</h1>
        <hr></hr>
            <div className="book-list" id="book-list current-book">
                {
                  bookType.map((book)=>{
                    const{imageLinks,id,authors,title}=book;
                    return(
                        <SingleBook key={id} book={book} changeShelf={changeShelf}/>
                        )
                    
                  })
                }
                </div>
                </div>
    )
}
export default Shelf