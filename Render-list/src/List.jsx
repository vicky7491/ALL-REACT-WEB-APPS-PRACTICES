import React from 'react'

const List = () => {
  const fruits = [{id: 1, name: "orange", calories: 95},
                  {id: 2, name: "banana", calories: 45},
                  {id: 3, name: "coconut", calories: 105},
                  {id: 4, name: "apple", calories: 159},
                  {id: 5, name: "pineapple", calories: 35}];
    // fruits.sort((a,b) => a.name.localeCompare(b.name));  // ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name));  //  REVERSE ALPHABETICAL
    fruits.sort((a,b) => a.calories- b.calories);  //  NUMERICAL ORDER
    fruits.sort((a,b) => b.calories- a.calories);  //  REVERSE NUMERICAL ORDER

  const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp; <b>{fruit.calories}</b></li>);
  return(<ul>{listItems}</ul>);

}

export default List