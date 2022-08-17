import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import * as bookApi from './components/booksApi';
import {useEffect,useState} from "react";
import { Routes, Route ,Link} from "react-router-dom"

import Search from './components/Search';

function App() {
  const [books, setBooks] = useState([]);
  const[screen,setScreen]=useState("Home");
  const[wantToRead,setWantToRead]=useState([]);
  const[currentlyReading,setCurrentlyReading]=useState([]);
  const[read,setRead]=useState([]);

 

  

  useEffect(() => {
    const getBooks = async () => {
      const res = await bookApi.getAll();
      setBooks(res);
      setCurrentlyReading(books.slice(0,2));
      setRead(books.slice(2,4));
      setWantToRead(books.slice(4,6))
    };

    getBooks();
    
  }, );

  
  return (
    <>
    {
      screen==="search" &&(<Search books={books} onNavigate={()=>setScreen("Home")}/>
      )
    }
    {
      screen==="Home"&&(<Home wantToRead={wantToRead} 
        setWantToRead={setWantToRead}
        currentlyReading={currentlyReading}
        
        read={read}
        onNavigate={()=>setScreen("search")}/>)
    }
    {/* <Routes>
    <Route path="/" element={<Home />} />
    <Route path="search" element={<Search books={books} />} />
  </Routes> */}
</>
  );
}

export default App;
