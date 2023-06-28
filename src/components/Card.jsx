const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    textAlign: 'center',
    margin: '16px',
  };

  const imageStyle = {
    width: '100%',
    marginBottom: '8px',
    borderRadius: '50%',
  };

const Card = ({ image, name }) => {

    return (
      <div style={cardStyle}>
        <img src={image} alt={name} style={imageStyle} />
        <h3>{name}</h3>
      </div>
    );
  };
  
  export default Card;