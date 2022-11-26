import TableRow from "user/components/TableRow";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Index() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/user')
      .then(res => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  const delData = async(id) => {
    try{
      await axios.delete(`http://localhost:5000/api/user/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <h1>User - Index</h1>

      <Link className="btn btn-success" to="/user/create">Create User</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
      </thead>
      <tbody>
        {
          users.map((user) => {
            return <TableRow key={user._id} handler={() => delData(user._id)} name={user.name} email={user.email} role={user.role} />
          })

        }

      </tbody>
    </table>

      
    </div>
  )
}

export default Index;