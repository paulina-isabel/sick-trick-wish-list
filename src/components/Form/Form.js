import './Form.css';
import { useState } from 'react';

function Form() {
  const [stance, setStance] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [trick, setTrick] = useState('')
  const [tutorial, setTutorial] = useState('')

  return (
    <form>

      {/* stance:  'Regular' and 'Switch'*/}
      <label>        
        Stance:
        <select>
          <option>Regular</option>
          <option>Switch</option>
        </select>
      </label> 

      <input 
        type='text'
        placeholder='Name of Trick'
        name='trick-name'
        value={trick}
      />

      {/* obstacle :  'Flatground', 'Ledge', 'Rail', 'Stairs', and 'Pool'*/}
      <label>        
        Obstacle:
        <select>
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
      />

      <button>Send it!</button>
    </form>
  )

}

export default Form