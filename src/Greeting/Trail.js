//this is for the all like login saving tboth console.log
import React, { useState } from 'react';

function Trail() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // Separate handlers for each input field
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload
        console.log('submitted:', { name, password });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <center>
                    <input
                        type="text"
                        placeholder="username"
                        value={name}
                        name="username"
                        onChange={handleNameChange}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        name="password"
                        onChange={handlePasswordChange}
                    />
                    <br />
                    <button type="submit">
                        <strong>Submit</strong>
                    </button>
                </center>
            </form>
        </div>
    );
}

export default Trail;
