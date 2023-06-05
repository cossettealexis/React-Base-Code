import React, { useState, useRef } from 'react';

const UncontrolledForm = (props) => {
    const [name, setName] = useState("");
    const userNameRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hi ${userNameRef.current.value}`);
    }

    

    return(
        <div>
            <h1>Uncontrolled Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input 
                    type="text"
                    name="username"
                    // id="username"
                    ref={userNameRef} 
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
        
    )
}

export default UncontrolledForm;