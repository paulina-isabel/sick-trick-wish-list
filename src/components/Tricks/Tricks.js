import TrickCard from '../TrickCard/TrickCard';
import './Tricks.css';

function Tricks({ skateData }) {

  console.log(skateData, 'skate stuff')

  const trickCards = skateData.map(trick => {
    return (
      <TrickCard
        stance={trick.stance}
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
        id={trick.id}
        key={trick.id}
      />
    )
  })
  
  return (
    <>
      {trickCards}
    </>
  )
}

export default Tricks;