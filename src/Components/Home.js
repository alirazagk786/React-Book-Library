import BooksIndex from "./BooksIndex.js";
import Header from "./Header.js";
import { useEffect, useState } from "react";
const Home = ({ index, link, setIndex, setLink, handleBooksDetails }) => {
  const [url, setUrl] = useState("https://gutendex.com/books/");
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
          setIndex([...index, ...data.results]);
      });
  }, [url]);

  const handleLoadMore = () => {
    if (result.next) {
      setUrl(result.next);
    }
  };

  return (
    <div className="home">
      <Header />
      <div className="content">
        <BooksIndex
          index={index}
          link={link}
          setLink={setLink}
          handleLoadMore={handleLoadMore}
          handleBooksDetails={handleBooksDetails}
        />
      </div>
    </div>
  );
};

export default Home;
