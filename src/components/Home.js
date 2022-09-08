
import Shelf from "./shelf";
const Home=({onNavigate,books,changeShelf,booksSearch})=>{
  
    return(
        <>
            <nav className="nav">
                <h1>My Reads</h1>
            </nav>
            <Shelf books={books} head="currently reading" type="currentlyReading" changeShelf={changeShelf}  />
            <Shelf books={books} head="want to read" type="wantToRead" changeShelf={changeShelf}/>
            <Shelf books={books} head="read" type="read" changeShelf={changeShelf}/>
          
            <div className="open-search">
            <a href="#search" onClick={onNavigate}>Add a book</a>
          </div>
        
        </>
    )
}
export default Home;
{
   
}