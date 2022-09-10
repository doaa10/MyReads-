import './App.css';
import Home from './components/Home';
import * as bookApi from './components/booksApi';
import {useEffect,useState} from "react";
import Search from './components/Search';


function App() {
   const [books, setBooks] = useState([]);
   const[screen,setScreen]=useState("Home");
   const[query,setQuery]=useState("");
   const[booksSearch,setBooksSearch]=useState([]);
   const [mapOfIdToBooks, setMapOfIdToBooks] = useState(new Map());
   const [mergedBooks, setMergedBooks] = useState([]);


  useEffect(() => {
    const getBooks = async () => {
      const res = await bookApi.getAll();
      setBooks(res);
      setMapOfIdToBooks(createMapOfBooks(res))

      
    };
    getBooks();
    
  }, );
  
  useEffect(() => {

    const combined = booksSearch.map(book => {
      if (mapOfIdToBooks.has(book.id)) {
        return mapOfIdToBooks.get(book.id);
      } else {
        return book;
      }
    })
    setMergedBooks(combined);
  }, [booksSearch])


  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map(book => map.set(book.id, book));
    return map;
  }
  const updateBookShelf = (book, whereTo) => {
    const updatedBooks = books.map(b => {
      if (b.id === book.id) {
        book.shelf = whereTo;
        return book;
      }
      return b;
    })
    if (!mapOfIdToBooks.has(book.id)) {
      book.shelf = whereTo;
      updatedBooks.push(book)
    }
    setBooks(updatedBooks);
    bookApi.update(book, whereTo);
  }
   









  
  useEffect(()=>{
      let active=true;
      if(query){
          bookApi.search(query).then(data=>{
              if(data.error){
                  console.log(data)
              }
              else{
                  if(active){
                      setBooksSearch(data)
  
                  }
              }
              }
              )
  
      }
      return()=>{
          active=false;
          setBooksSearch([])
      }
  },[query]) 


  const updateQuery=(query)=>{
    setQuery(query);
  }


  const changeShelf=async(book,shelf)=>{
    await bookApi.update(book,shelf);
    const res = await bookApi.getAll();
    const res2=await bookApi.search(query);
    setBooksSearch(res2)
    setBooks(res);
  }
  return (

  <>
      {
      screen==="search" &&(<Search
      query={query}
      mergedBooks={mergedBooks}
      booksSearch={booksSearch}
      updateQuery={updateQuery}
        changeShelf={changeShelf}
         onNavigate={()=>setScreen("Home")}/>
      )
    }
    {
      screen==="Home"&&(<Home 
        booksSearch={booksSearch}
        books={books}
        changeShelf={changeShelf}
        onNavigate={()=>setScreen("search")}/>)
 

    } 
  </>
      
  
   
  );
}

export default App;
