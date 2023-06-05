import { Formik } from 'formik';
import React, { useState } from 'react';

const SimpleFormik = ({addCard}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    
    const [initialValues, setInitialValues] =useState({
        title: "",
        description: ""
    });

    const formValidationHandler = (values) => {
        const errorMessages = {};
    
        if (!values.title) {
            errorMessages.title = 'Title is required';
        }
    
        if (!values.description) {
            errorMessages.description = 'Description is required';
        }
    
        return errorMessages;
      };
    

    const formSubmitHandler = (values) => {
        values.preventDefault()
        let isValid = true;

        if (title.trim() === '') {
            setTitleError('Title is required');
            isValid = false;
        } else {
            setTitleError('');
        }
    
        if (description.trim() === '') {
            setDescriptionError('Description is required');
            isValid = false;
        } else {
            setDescriptionError('');
        }

        if (isValid) {
            addCard(values.title, values.description);
            setTitle('');
            setDescription('');
        }  
        
      };

    return(
        <Formik
            initialValues={initialValues}
            validate={formValidationHandler}
            onSubmit={formSubmitHandler}
        >
            {({}) => (
                <div>
                    <h1>Simple Formik</h1>
                    <form onSubmit={formSubmitHandler}>
                        <label>Title:
                            <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            />
                            {titleError && <div style={{color: 'red'}}>{titleError}</div>}
                        </label>
                        
                        <br></br>
                        <label>Description:
                            <input 
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            />
                            {descriptionError && <div style={{color: 'red'}}>{descriptionError}</div>}
                        </label>
                        <br></br>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </Formik>
        
    )
}

export default SimpleFormik;