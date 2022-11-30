import Input from "common/Input";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        "email": "",
        "password": ""
    });

    const handleChange = ({ target }) => {
        setData({
            ...data,
            [target.id]: target.value
        });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(data);

        try {
            const res = await axios.post("http://localhost:5000/api/login", data);
            console.log(res.data);
            localStorage.setItem('access-token', JSON.stringify(res.data.accessToken));
            navigate('/category');
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="mx-5">
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <Input
                    id="email"
                    label="Email"
                    type="email"
                    value={data.email}
                    placeholder="Enter your email..."
                    handleChange={handleChange}
                // error={errors.password}                   
                />


                <Input
                    id="password"
                    label="Password"
                    type="password"
                    value={data.password}
                    placeholder="Enter your password..."
                    handleChange={handleChange}
                // error={errors.password}                   
                />

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;