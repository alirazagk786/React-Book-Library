import React,{ useState } from "react";
import Home from "../src/Components/Home.js";
import BooksDetails from "../src/Components/BooksDetails.js";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const [bookDetail, setBookDetail] = useState();
  const [index, setIndex] = useState([]);
  const [link, setLink] = useState("");

  const handleBooksDetails = (id) => {
    let arr = index.filter((data) => data.id === id);
    setBookDetail(arr);
  };

  return (
      <BrowserRouter>
    <div className="App">
      <Switch>
          <Route
            exact
            path="/"         
          >
           <Home
                index={index}
                link={link}
                setLink={setLink}
                handleBooksDetails={handleBooksDetails}
                setIndex={setIndex}
              />
              </Route>
          <Route
            exact
            path="/bookDetail" 
              render={(props)=> <BooksDetails bookDetail={bookDetail} {...props}/>} />
          </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App ;
