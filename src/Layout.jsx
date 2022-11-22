import router from 'router';
import Navbar from 'common/Navbar';
import { Outlet } from 'react-router-dom';

function App(){
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default App;