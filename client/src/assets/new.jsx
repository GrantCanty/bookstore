import { useEffect, useState } from "react";
import axios from 'axios';
import { content } from "../types/types";

const New = (props) => {
    const [formData, setFormData] = useState(content)
    const [isFormValid, setIsFormValid] = useState(false)

    //console.log("form Data: ", formData)

    useEffect(() => {
        fetch('http://localhost:8080/api/content/nextID')   
        .then(data => data.json())
        .then(json => setFormData({
            ...formData,
            id: json,
            lastEditDate: new Date().toISOString("YYYY-MM-DD").split("T")[0],
        }))
        .catch(error => console.error(error))
    },[])

    useEffect(() => {
        if (formData.id !== null && formData.title !== "" && formData.authorName !== "" && formData.inventoryCount !== "" && formData.publishDate !== "" && formData.lastEditDate !== "") {
            setIsFormValid(true)
        } else {
            if (isFormValid) {
                setIsFormValid(false)
            } 
        }
    },[formData])

    const onFormUpdate = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const onClick =() => {
        //console.log("formData: ", formData)
        axios.post('http://localhost:8080/api/content', formData)
        props.fetchData()
        props.close()
    }
    
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            
            <input type='hidden' name='id' value={props.nextId} />
            <label>
                Book Title:
                <input type='text' name='title' value={formData.title} onChange={ onFormUpdate } />
            </label>
            <label>
                Author Name:
                <input type='text' name='authorName' value={formData.authorName} onChange={ onFormUpdate } />
            </label>
            <label>
                Available:
                <input type='number' name='inventoryCount' value={formData.inventoryCount} onChange={ onFormUpdate } />
            </label>
            <label>
                Publish Date:
                <input type='date' name='publishDate' value={formData.publishDate} onChange={ onFormUpdate } />
            </label>
            <input type='hidden' name='lastEditDate' value={formData.lastEditDate} />
            <button className={isFormValid ? 'submit' : 'submit disabled'} disabled={!isFormValid} onClick={onClick} >Submit</button>
        </form>
    )
}

export default New;