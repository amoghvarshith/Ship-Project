import React, { use, useState } from "react";


function SignUp() {
    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        width: '100%',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };
    const formStyle = {
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        width: '300px',
        margin: 'auto',
    };

    const [data, NewData] = useState({
        username: '',
        password: '',
        confirmpassword:'',
        mobilenumber:'',
    })

    const { username, password ,confirmpassword,mobilenumber} = data
    const handleboth = (e) => {
        NewData({ ...data, [e.target.name]: e.target.value })

    }

    const both = e => {
        e.preventDefault();
        if(username.length<=5){
            alert("Re-Enter")
        }
        else if(password!==confirmpassword){
            console.log("Enter cancel");
        }
       else{
        console.log(data);
       }
    }


    return (
        <div>
            
            <form onSubmit={both} style={formStyle}>
                <center>
                    UserName <input type="text" placeholder="username" name="username" onChange={handleboth} style={inputStyle} /><br /><br />
                    Password  <input type="password" placeholder="password" name="password" onChange={handleboth} style={inputStyle} /><br /><br />
                    confirm pass <input type="password" placeholder="confirmpassword" name="confirmpassword" onChange={handleboth} style={inputStyle} /><br /><br />
                    mobile <input type="tel" placeholder="mobilenumber" name="mobilenumber" onChange={handleboth} style={inputStyle} /><br /><br />
                    <button>SignUp</button>


                </center>
            </form>

        </div>
    )
}

export default SignUp
