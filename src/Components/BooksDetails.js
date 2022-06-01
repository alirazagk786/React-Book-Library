const BooksDetails = ({bookDetail}) => {
    return ( 
        <div className="booksdetails1">
            <h1>Book Details</h1>
            <h5>{bookDetail && bookDetail[0].title}</h5>
            <h5>{bookDetail[0].authors[0] && bookDetail[0].authors[0].name}</h5>
            <img src={bookDetail && bookDetail[0].formats['image/jpeg']}></img>
        </div>
     );
}
 
export default BooksDetails;