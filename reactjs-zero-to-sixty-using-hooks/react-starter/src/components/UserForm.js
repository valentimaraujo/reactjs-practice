import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

function UserForm ({addPost, editingUser}) {
  const [ loading, setLoading ] = useState(false);
  const [ user, setPost ] = useState({ first_name: '', email: '', id: '' });

  useEffect(() => {
    setPost(editingUser)
  }, [editingUser]);

  const onChange = (event) => {
    setPost({ ...user, [ event.target.name ]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if(user.id) {
      axios.put(`/users/${user.id}`, user)
        .then(({ data }) => {
          addPost(data);
          setLoading(false);
          setPost({ first_name: '', email: '' });
        })
        .catch(err => console.log(err));
    } else {
      axios.post('/users', user)
        .then(({ data }) => {
          addPost(data);
          setLoading(false);
          setPost({ first_name: '', email: '' });
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <Fragment>
      {!loading ? (
        <form action="push-in" onSubmit={onSubmit}>
          <div className="input-field">
            <label htmlFor="first_name">Name</label>
            <input type="text"
                   name="first_name"
                   value={user.first_name}
                   onChange={onChange}
                   className="validate"
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">E-mail</label>
            <input type="text"
                   name="email"
                   value={user.email}
                   onChange={onChange}
                   className="validate"
            />
          </div>
          <button type="submit" className="waves-effect waves-light btn">
            {user.id ? 'Update' : 'Add'}
          </button>
        </form>
      ) : (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      )}
    </Fragment>
  )
}

export default UserForm;
