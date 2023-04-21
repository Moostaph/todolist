
import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => {
  const handleFilterChange = (e) => {
    // Set the filter value in the store
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTask />
      <div>
        <label>
          <input
            type="radio"
            value="all"
            name="filter"
            defaultChecked
            onChange={handleFilterChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="done"
            name="filter"
            onChange={handleFilterChange}
          />
          Done
        </label>
        <label>
          <input
            type="radio"
            value="not"
            name="filter"
            onChange={handleFilterChange}
            />
         </label>
         <ListTask/>

        </div>
        </div>


  


    
              ) 
            };

