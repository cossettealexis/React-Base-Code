import React, { useState } from 'react';

const SimpleForm = ({addCard}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    const handleTitleChange = (event) => {
        console.log("title: ", event.target.value);
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        console.log("title: ", event.target.value);
        setDescription(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // alert(`title: ${title} description: ${description}`);
        formValidate() && addCard(title, description);
        clear();
    }

    const clear = () => {
        setTitle("");
        setDescription("");
    }

    const formValidate = () => {
        let tempErrors = errors;
        let valid = true;

        if(!title){
            tempErrors.title = "Title is required";
            valid = false;
        }

        setErrors({...errors, tempErrors});

        return valid;
    }

    return(
        <div>
            <h1>Simple Form</h1>
            <form onSubmit={onSubmit}>
                <label>Title:
                    <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    />
                    {errors.title && <p>{`${errors.title}`}</p>}
                </label>
                <label>Description:
                    <input
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    />
                </label>
                <input type="submit"/>
            </form>
        </div>
        
    )
}

export default SimpleForm;