import Card from '../card/card.component';
import './cardlist.style.css';

const Cardlist = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default Cardlist;
