import {useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableRow from '../components/TableRow';

function Index() {
  const [categories, setCategories] = useState([]);

  const getData = async() => {
    const token = localStorage.getItem('access-token');
    const config = {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` }
    };
    try{
      const res = await axios.get('http://localhost:5000/api/category', config);
      setCategories(res.data);
    }catch(err)
    {
      console.log("Something went wrong");
    }
  }

  useEffect(() => {
      getData();
  }, [])

  
    const delData = async(id) => {
      try{
        await axios.delete(`http://localhost:5000/api/category/${id}`);
        setCategories(categories.filter((category) => category._id !== id));
      }catch(err){
        console.log(err);
      }
    }
  
    return (
      <div>
        <h1>Category - Index</h1>
  
        <Link className="btn btn-success" to="/user/create">Create Category</Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
          {
            categories.map((category) => {
              return <TableRow key={category._id} handler={() => delData(category._id)} name={category.name} />
            })
          }
  
        </tbody>
      </table>
  
        
      </div>
    )
  }
  
export default Index;