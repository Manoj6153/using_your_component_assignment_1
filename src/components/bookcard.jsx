// write the book component code here
function BookList({ books }) {
    return (
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
        {books.map((book) => (
          <div key={book.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', width: '200px' }}>
            <img src={book.image} alt={book.name} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
            <h3>{book.name}</h3>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Author:</strong> {book.author}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default BookList;
  