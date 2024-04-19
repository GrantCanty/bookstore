import { useEffect, useState } from 'react';
import '../styles/book.css'

const SearchDate = (props) => {
    const [tmpData, setTmpData] = useState({'from': '', 'to': ''})
    const [isTmpDataValid, setIsTmpDataValid] = useState(false)
    
    useEffect(() => {
        if (tmpData.from !== "" && tmpData.to !== "") {
            console.log(tmpData.to === "")
            setIsTmpDataValid(true)
        } else {
            if (isTmpDataValid) {
                setIsTmpDataValid(false)
            } 
        }
    },[tmpData])

    const onInputUpdate = (e) => {
        setTmpData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const onClick =() => {
        props.fetchData(tmpData)
        props.close()
    }

    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <label>
                From:
                <input type='date' name='from' className='item-info' value={tmpData.from} onChange={ onInputUpdate } />
            </label>
            <label>
                To:
                <input type='date' name='to' className='item-info' value={tmpData.to} onChange={ onInputUpdate } />
            </label>
            <button className={isTmpDataValid ? 'submit' : 'submit disabled'} disabled={!isTmpDataValid} onClick={onClick} >Submit</button>
        </form>
    )

}

export default SearchDate;