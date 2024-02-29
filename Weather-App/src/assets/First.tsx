import backgroundImage from '../assets/cloud-img.jpg';

const styles = {
    backgroundImage: "url('../assets/cloud-img.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    /* You can add more background properties here */
  };
  

  function First() {
    return (
      <div style={styles}>
        {/* Content of your component */}
        <button type="button" className="btn btn-outline-light">Click Here to Search Your City Weather</button> 
      </div>
    );
  }
  
  export default First;