import './Form.css';
import { useState } from 'react';

function Form({ addTrick }) {
  const [stance, setStance] = useState('')
  // const [trick, setTrick] = useState('')
  const [name, setName] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [tutorial, setTutorial] = useState('')

  function submitTrick(event) {
    event.preventDefault()
    const newTrick = {
      id: Date.now(),
      stance,
      name,
      obstacle,
      tutorial
    }
    addTrick(newTrick)
  }

  return (
    <form>

      {/* stance:  'Regular' and 'Switch'*/}
      <label>        
        Stance:
        <select value={stance} onChange={event => setStance(event.target.value)}>
          <option>Regular</option>
          <option>Switch</option>
        </select>
      </label> 

      <input 
        type='text'
        placeholder='Name of Trick'
        name='trick'
        value={name}
        onChange={event => setName(event.target.value)}
      />

      {/* obstacle :  'Flatground', 'Ledge', 'Rail', 'Stairs', and 'Pool'*/}
      <label>        
        Obstacle:
        <select value={obstacle} onChange={event => setObstacle(event.target.value)}>
          <option>Flatground</option>
          <option>Ledge</option>
          <option>Rail</option>
          <option>Stairs</option>
          <option>Pool</option>
        </select>
      </label> 

      <input 
        type='text'
        placeholder='Link to Tutorial'
        name='tutorial'
        value={tutorial}
        onChange={event => setTutorial(event.target.value)}
      />

      <button onClick={event => submitTrick(event)}>Send it!</button>
    </form>
  )

}

export default Form