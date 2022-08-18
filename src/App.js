import './App.css';
import Home from './components/Home';
import * as bookApi from './components/booksApi';
import {useEffect,useState} from "react";
import Search from './components/Search';

function App() {
  const [books, setBooks] = useState([]);
  const[screen,setScreen]=useState("Home");
 
  
  useEffect(() => {
    const getBooks = async () => {
      const res = await bookApi.getAll();
      setBooks(res);
      
    };
    getBooks();
    
  }, );
 

  const changeShelf=async(book,shelf)=>{
    await bookApi.update(book,shelf);
    const res = await bookApi.getAll();
    setBooks(res);
  }
  return (
    <>
    {
      screen==="search" &&(<Search
        changeShelf={changeShelf}
         books={books} onNavigate={()=>setScreen("Home")}/>
      )
    }
    {
      screen==="Home"&&(<Home 
        books={books}
        changeShelf={changeShelf}
        onNavigate={()=>setScreen("search")}/>)
    }
 
</>
  );
}

export default App;
