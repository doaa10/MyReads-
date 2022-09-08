import { useState,useEffect } from "react";
import SingleBook from "./singleBook";
import * as bookApi from './booksApi';

const Search=({query,booksSearch,onNavigate,changeShelf,updateQuery,mergedBooks})=>{

 const showingBooks=(query)===""?mergedBooks:mergedBooks.filter((c)=>c.title.toLowerCase().includes(query.toLowerCase()));
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
                                       return (
                      <SingleBook key={book.id} book={book} changeShelf={changeShelf}/>
                    )
                })}
            </div>

        </div>
    );
}

export default Search;
