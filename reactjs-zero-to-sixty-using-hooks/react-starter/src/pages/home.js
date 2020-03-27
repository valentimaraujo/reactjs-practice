import React, { useEffect, useState } from 'react';
import axios from 'axios';

import UserForm from '../components/UserForm';

const Home = () => {
  const [ users, setUsers ] = useState([]);
  const [ limit, setLimit ] = useState(5);
  const [ editingUser, setEditingUser ] = useState({ first_name: '', email: '', id: '' });

  useEffect(() => {
    axios.get('/users')
      .then(({ data }) => {
        console.log(data.data);
        setUsers(data.data);
      })
      .catch(err => console.log(err))
  }, []);

  function editPost (user) {
    setEditingUser(user);
  }

  function deletePost (id) {
    axios.delete(`/users/${id}`)
      .then(() => {
        const usersUpdate = users.filter(p => p.id !== id);
        setUsers(usersUpdate);
      })
  }

  function addPost (user) {
    if (users.find(u => u.id === user.id)) {
      const index = users.findIndex(u => u.id === user.id);
      const usersUpdated = [ ...users ];
      usersUpdated.splice(index, 1, user);
      setUsers(usersUpdated);
    } else {
      const usersUpdated = [ user, ...users ];
      setUsers(usersUpdated);
    }
  }

  const getNumberOfUsers = () => {
    axios.get(`/users?per_page=${limit}`)
      .then(({ data }) => {
        setUsers(data.data);
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="row">
        <div className="col s6">
          <UserForm addPost={addPost} editingUser={editingUser}></UserForm>
        </div>
        <div className="col s3">
          <p>Limit number of users</p>
          <input type="number"
                 value={limit}
                 onChange={event => setLimit(event.target.value)}
          />
          <button onClick={getNumberOfUsers} className="waves-effect waves-light btn">
            Set
          </button>
        </div>
      </div>
      <div className="row">
        {users.map(user => (
          <div className="col s6" key={user.id}>
            <div className="card">
              <div className="card-content">
                <div className="card-title">
                  <img src={user.avatar} alt="" className="circle"/>
                  {user.first_name}
                </div>
                <p className="timestamp">
                  {user.id}
                </p>
                <p>{user.email}</p>
              </div>
              <div className="card-action">
                <a href="#" onClick={editPost.bind(null, user)}>Edit</a>
                <a href="#" className="delete-btn" onClick={deletePost.bind(null, user.id)}>Delete</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;
