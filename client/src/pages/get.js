import '../styles/content.css'
import '../styles/card.css'
import { useState, useEffect } from 'react'

const Get = () => {
    
    /*const [data, setData] = useState()

    useEffect(() => {
        fetch("http://localhost:8080/api/content/available")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error))
    },[])

    console.log(data)*/
    
    return (
        <div className="content">
            <div className='card-grid'>
                <div className='card-wrapper'>
                    <div className='card-content'>
                        card1
                    </div>
                </div>
                <div className='card-wrapper'>
                    <div className='card-content'>
                            card1
                    </div>
                </div>
                <div className='card-wrapper'>
                    <div className='card-content'>
                        card1
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Get;