import { Navigate, Outlet } from 'react-router-dom';

function Protected()
{
    const token = localStorage.getItem('access-token');
    if(!token)
    {
        return <Navigate to="/login" />
    }
    return (
        <Outlet />
    );

}

export default Protected;