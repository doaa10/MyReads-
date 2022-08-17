import { useState } from "react";
const Search=({books,onNavigate})=>{
const[query,setQuery]=useState("");
const [showSearchPage, setShowSearchpage] = useState(false);

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
                        <ul className="list" key={id}>
                            <li>
                                <img src={imageLinks.smallThumbnail}></img>
                                <div className="book-shelf-changer-search">
                            <select>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                                <h3>{title}</h3>
                                <span>{authors}</span>
                            
                            </li>
                        </ul>
                    )
                })}
            </div>

        </div>
    );
}

export default Search;
