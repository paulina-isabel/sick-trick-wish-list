import './TrickCard.css';

function TrickCard({ stance, name, obstacle, tutorial }) {

  return (
    <div className='trick-card'>
      <h2 className='trick-type'>
        {stance} {name}
      </h2>
      <p>Obstacle: {obstacle}</p>
      <p>Tutorial: {tutorial}</p>
    </div>
  );
}

export default TrickCard;