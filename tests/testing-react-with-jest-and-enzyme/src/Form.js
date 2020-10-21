import React, { Component } from 'react';
import { saveUser } from './service';

const COLOURS = ['blue', 'red', 'yellow'];

const startinState = {
  name: '',
  email: '',
  colour: COLOURS[0],
};

class Form extends Component {
  state = startinState;

  reset = () => this.setState(startinState);

  updateField = stateKey => e => {
    this.setState({ [stateKey]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    return saveUser(this.state.name, this.state.email, this.state.colour);
  };

  render() {
    return <div style={{ border: '1px solid #000', padding: '1px 30px' }}>
      <form onSubmit={this.submitForm}>
        <div className='group'>
          <label>Name</label>
          <input type="text" id="name-input" value={this.state.name} onChange={this.updateField('name')} />
        </div>

        <div className='group'>
          <label>Email</label>
          <input type="text" id="email-input" value={this.state.email} onChange={this.updateField('email')} />
        </div>

        <div className='group'>
          <label>Favourite Colour</label>
          <select id="colour-input" value={this.state.colour} onChange={this.updateField('colour')}>
            {COLOURS.map(c => (
              <option value={c} key={c}>
                My fav colours is: {c}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Sign up</button>
        <button type="button" onClick={this.reset}>Reset</button>
      </form>
    </div>;
  }
}

export default Form;
