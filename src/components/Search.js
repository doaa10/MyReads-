import { useState } from "react";
import SingleBook from "./singleBook";
const Search=({books,onNavigate,changeShelf})=>{
const[query,setQuery]=useState("");

const updateQuery=(query)=>{
    setQuery(query.trim());
}
 const showingBooks=(query)===""?books:books.filter((c)=>c.title.toLowerCase().includes(query.toLowerCase()));
    return(
        <div className="search-container">
              <a href="#Home" className="close-search" onClick={onNavigate}>
              Close
            </a>
            <div className="search-bar">
                <input type="text"
                 placeholder="react"
                 value={query}
                 onChange={(event)=>updateQuery(event.target.value)}
                 >
                </input>
               
            </div>
           
               <div className="search-list">
                {showingBooks.map((book)=>{
                   
                    const{imageLinks,id,authors,title}=book;
                    return (
                      <SingleBook key={book.id} book={book} changeShelf={changeShelf}/>
                    )
                })}
            </div>

        </div>
    );
}

export default Search;
