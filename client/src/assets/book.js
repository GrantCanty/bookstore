const Book = (props) => {
    return (
        <div className="book">
            <h1>Title: {props.title}</h1>
            <h4>Author: {props.author}</h4>
            <h4>Available copies: {props.available}</h4>
        </div>
    )
}

export default Book;