import './TrickCard.css';

function TrickCard( skateData ) {
  console.log(skateData, 'skate stuff')
  return (
    <div>
      <h1 className='trick-type'>
        Trick: {skateData.stance}
      </h1>
    </div>
  );
}

export default TrickCard;