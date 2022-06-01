import { Link } from 'react-router-dom';
const BooksIndex = ({index ,handleLoadMore,handleBooksDetails}) => {
    return ( 
        <div className="booksindex">
            {index?.map((data,id)=>{
                return(
                   <div key={id} className="index" >
                       <Link to='/bookDetail'>
                   { data?.title && <p onClick={()=>{handleBooksDetails(data.id)}} ><strong>Title : </strong>{data.title}</p>}
                    {data.authors[0] && <p onClick={()=>{handleBooksDetails(data.id)}} ><strong>Author : </strong>{data.authors[0].name}</p>}
                    </Link>
                    </div>
                )
            } )}
            <button onClick={handleLoadMore}>Load More</button>
        </div>
     );
}

export default BooksIndex;