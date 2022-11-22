import router from 'router';
import {RouterProvider} from 'react-router-dom';
import Navbar from 'common/Navbar';

function App(){
    return(
        <>
            <Navbar />
            <RouterProvider router={router} />
        </>
    )
}

export default App;