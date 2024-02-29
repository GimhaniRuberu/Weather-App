import backgroundImage from '../assets/cloud-img.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

// const styles = {
//     backgroundImage: "url('../assets/cloud-img.jpg')",
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     /* You can add more background properties here */
//   };
  

  function First() {
    return (
      <div 
      //style={styles}
      >
        {/* Content of your component */}
        <button type="button" className="btn btn-info">First</button> 
      </div>
    );
  }
  
  export default First;