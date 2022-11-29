import {useEffect} from 'react';
import axios from 'axios';

function Index() {
  const getData = async() => {
    const token = localStorage.getItem('access-token');
    console.log(JSON.parse(token));
    const config = {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` }
    };
  
    const res = await axios.get('http://localhost:5000/api/categories', config);
    console.log(res.data);
  }

    useEffect(() => {
        getData();
    }, [])

  
    return (
      <div>
        <h1>Category - Index</h1>
      </div>
    )
  }
  
export default Index;