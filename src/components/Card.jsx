import './card.css';
//Accept any class that is added and a onClick function
const Card = ({ children, className, onClick }) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
      {children}
    </article>
  );
};

export default Card;
