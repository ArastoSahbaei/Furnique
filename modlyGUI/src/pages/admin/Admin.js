import React, { useState, useEffect } from 'react';
import {getAllEmailsFromConfirmedUsers} from '../../shared/api/UserAPI'

function Admin() {
  const [hasError, setErrors] = useState(false);
  const [users, setUsers] = useState([]);
  const [confirmedEmails, setConfirmedEmails] = useState([]);

  async function fetchData() {
    const res = await fetch("http://localhost:8080/users");
    res.json()
       .then(res => setUsers(res))
       .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
    getAllEmailsFromConfirmedUsers().then(function (response) {
      setConfirmedEmails(response);
      })
    .catch(function (error) {
      console.log(error);
      });
  });
  
  return (
    <div>

        <h1>Amount of registered users: {users.length}</h1>
    {users.map((item, index) => (
      
      <ul className="displayUsers">
                        <li>UserID:       {item.userId}</li>
                        <li>First Name:   {item.firstName}</li>
                        <li>Last Name:    {item.lastName}</li>
                        <li>Email:        {item.lastName}</li>
                        <li>Country:      {item.country}</li>
                        <li>City:         {item.city}</li>
                        <li>Phone:        {item.phone}</li>
                        <hr/>
                    </ul>
    ))}
          <h1>{confirmedEmails.data}</h1>


      {console.log(users)}
   {/*  <span>{JSON.stringify(users)}</span> */}
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
}
export default Admin;

