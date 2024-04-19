import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/book.css'

const SearchDate = (props) => {
    const [tmpData, setTmpData] = useState({'from': '', 'to': ''})
    const [isTmpDataValid, setIsTmpDataValid] = useState(false)

    useEffect(() => {
        let data =  {
                        'from': new Date('1900-01-01').toISOString('YYYY-MM-DD').split('T')[0],
                        'to': new Date().toISOString('YYYY-MM-DD').split('T')[0]
                    }
        setTmpData(data)
    },[])
    
    useEffect(() => {
        if (tmpData.fromDate !== "" || tmpData.toDate !== "") {
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
        //console.log("formData: ", formData)
        //axios.post('http://localhost:8080/api/search', tmpData)
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