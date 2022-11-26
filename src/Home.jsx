import { useNavigate } from "react-router-dom";

function Home()
{
    const navigate = useNavigate();

    const data = 2;

    if(data == 1)
    {
        return(<h1>Home</h1>)
    }else{
        return navigate('/user');
    }
}


export default Home;