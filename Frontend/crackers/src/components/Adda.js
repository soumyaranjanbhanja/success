import {useState} from 'react';
import './Adda.css';

const Adda = () => {
  const [items,setItems]=useState([]);


  const handleSubmit=()=>{
          setItems([...items,{id:items.length,value:Math.floor(Math.random()*10)+1}]);
  }
  

  return (
    <div className='t'>
      <button onClick={handleSubmit}>submit</button>
      <ul>{items.map(item=>(
        <li key={item.id}>{item.value}</li>))}
      </ul>
    </div>
  )
}

export default Adda