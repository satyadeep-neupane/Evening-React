import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access-token');
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/user">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">User</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="category">Category</Link>
                        </li>
                    </ul>
                </div>

                <form className="d-flex" onSubmit={handleLogout}>
                    <button className="btn btn-danger float-end">Logout</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;