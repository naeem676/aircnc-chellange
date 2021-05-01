import React from 'react';
import { useState } from 'react';

const AddHomes = () => {
    const [info, setInfo] = useState({title:'', details:'', cost:'', star:''})
    const [file, setFile] = useState(null);
    const handleOnBlur = e => {
         const newInfo = {...info}
         newInfo[e.target.name] = e.target.value
         setInfo(newInfo)
    }
    const handleChange = e =>{
        const newFile = e.target.files[0]
        setFile(newFile)
        console.log(newFile)

    }
    const handleSubmit = e => {
        let formData = new FormData();
        formData.append('title', info.title)
        formData.append('details', info.details)
        formData.append('cost', info.cost)
        formData.append('star', info.star)
        formData.append('file', file)

        fetch('http://localhost:4000/homeImage', {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.error(error)
          })
  

        e.preventDefault()

    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
            <input onBlur={handleOnBlur} name="title" type="text"/><br/>
            <input onBlur={handleOnBlur}  name="details" type="text"/><br/>
            <input onBlur={handleOnBlur}  name="cost" type="number"/><br/>
            <input onBlur={handleOnBlur}  name="star" type="number"/><br/>
            <input onChange={handleChange} type="file"/><br/>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddHomes;