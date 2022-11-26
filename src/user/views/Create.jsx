import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import Input from 'common/Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    const navigate = useNavigate();
    // const [name, setName] = useState("Satyadeep");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const [msg, setMsg] = useState("");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });

    const [errors, setErrors] = useState({})

    const handleChange = ({target}) => {
        setData({
            ...data,
            [target.id]: target.value
        });
    }


    const [test, setTest] = useState();

    const handleTestChange = (e) => {
        if(e.target.value !== "admin"){
            setTest(e.target.value);
        }else{
            setMsg("Invalid User Role");
        }
    }

    // const handleNameChange = (e) => {
    //     setName(e.target.value);
    // }

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // }
    
    const validPassword = () => {
            let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            return re.test(data.password);
        }

    const addUser = async () => {
        // let data = {name:name, email:email, password:password}

        if(data?.role === "admin"){
            console.log("Here");
            setErrors({...errors, 'role': "Invalid Role Assigned"})
            console.log("Here");
        }

        if(!validPassword())
        {
            setErrors({...errors, 'password': "Password too weak"})
        }
        
        else{
            try{
                await axios.post('http://localhost:5000/api/user', data);
                setMsg("User Added Successfully");
    
                toast.success('User Added Successfully', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
    
                navigate('/user');
            }catch(err)
            {
                setMsg("<script>alert('Error Occured')</script>");
            }    
        }
    }


    return (
        
        <div className="px-3">
            <h1>Create User</h1>

            <form>
                <Input
                    id="name"
                    label="name"
                    type="name"
                    value={data.name}
                    placeholder="Enter your name..."
                    handleChange={handleChange}                    
                />

                <Input
                    id="email"
                    label="Email"
                    type="email"
                    value={data.email}
                    placeholder="Enter your email..."
                    handleChange={handleChange}                    
                />

                <Input
                    id="password"
                    label="Password"
                    type="password"
                    value={data.password}
                    placeholder="Enter your password..."
                    handleChange={handleChange} 
                    error={errors.password}                   
                />

                <Input
                    id="role"
                    label="Role"
                    type="text"
                    value={data.role}
                    placeholder="Enter your role..."
                    handleChange={handleChange}
                    error={errors.role}                  
                />

                <Input id="test"
                    label="Test"
                    type="text"
                    value={test}
                    placeholder="Enter your test..."
                    handleChange={handleTestChange}
                />


                <button type="button" className="btn btn-primary" onClick={addUser}>Submit</button>

                <h1 className='text-danger'>{msg}</h1>
            </form>

            <b>Test: {test}</b>
        </div>
    )
}

export default Create;