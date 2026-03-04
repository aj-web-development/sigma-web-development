import './Card.css';
const Card = (props) => {
  return (
    <div className='card'>
      <img
        width={265}
        height={235}
        src='https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_rp_progressive&w=740&q=80'
        alt=''
      />
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
