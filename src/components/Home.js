import { useState } from "react";
import { Link } from "react-router-dom";

const Home=({onNavigate,read,currentlyReading,wantToRead,addToWant,setWantToRead})=>{
  const onClickSelect=(e)=>{
   
    
  }
    return(
        <>
            <nav className="nav">
                <h1>My Reads</h1>
            </nav>

        <div className="container current" id="container">
        <h1 className="head">Currently reading</h1>
        <hr></hr>
            <div className="book-list" id="book-list current-book">
                {
                  currentlyReading.map((book)=>{
                    const{imageLinks,id,authors,title}=book;
                    return(
                      <ul className="list" key={id}>
                      <li>
                          <img src={imageLinks.smallThumbnail}></img>
                          <div className="book-shelf-changer-search">
                      <select 
                      onChange={onClickSelect}>
                        <option value="none" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading"
                        selected="selected"
                        >
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
                  })
                }
                </div>
                </div>



                <div className="container want">
        <h1 className="head">wantToRead</h1>
        <hr></hr>
            <div className="book-list">
                {
                  wantToRead.map((book)=>{
                    const{imageLinks,id,authors,title}=book;
                    return(
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
                        <option 
                        selected="selected"
                        value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                          <h3>{title}</h3>
                          <span>{authors}</span>
                      
                      </li>
                  </ul>
                    )
                  })
                }
                </div>
                </div>


                <div className="container read">
        <h1 className="head">Read</h1>
        <hr></hr>
            <div className="book-list">
                {
                  read.map((book)=>{
                    const{imageLinks,id,authors,title}=book;
                    return(
                      <ul className="list" key={id}>
                      <li>
                          <img src={imageLinks.smallThumbnail}></img>
                          <div className="book-shelf-changer-search">
                      <select>
                        <option value="none" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading"
                        >
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option 
                        selected="selected"
                        value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                          <h3>{title}</h3>
                          <span>{authors}</span>
                      
                      </li>
                  </ul>
                    )
                  })
                }
                </div>
                </div>

              

            <div className="open-search">
            <a href="#search" onClick={onNavigate}>Add a book</a>
          </div>
        
        </>
    )
}
export default Home;
{
   
}