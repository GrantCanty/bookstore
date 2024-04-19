import '../styles/book.css'

const RecentItem = (props) => {
    return(
        <div className='table-item readonly' id={props.idName}>
            <input type='text' name='title' className='item-info' value={props.title} readOnly={true} />
            <input type='text' name='authorName' className='item-info' value={props.author} readOnly={true} />
            <input type='number' name='inventoryCount' className='item-info' value={props.available} readOnly={true} />
            <input type='date' name='publishDate' className='item-info' value={props.pub} readOnly={true} />
            <input type='date' name='lastEditDate' className='item-info' value={props.edit} readOnly={true} />
        </div>
    )

}

export default RecentItem;