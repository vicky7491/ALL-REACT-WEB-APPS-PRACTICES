import React, {useState} from 'react';

const MyComponents = () => {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(45);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
        setName("spongebob");  
    }
    const increamentAge = () => {
      setAge(age + 1);  
  }
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);  
}
  return (
    <div>
        <p>Name: {name}</p>
        <button  onClick={updateName}>SET NAME</button>
        <p>Age: {age}</p>
        <button  onClick={increamentAge}>increament AGE</button>
        <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
        <button className='bg-red' onClick={toggleEmployedStatus}>Emplyed or not</button>
    </div>
  )
}

export default MyComponents