import './App.css';
import Card from './Component/Card';
import image1 from './images/icon-sedans.svg';
import image2 from './images/icon-suvs.svg';
import image3 from './images/icon-luxury.svg';

function App() {
  return (

    <div className="App " style={{backgroundColor:"hsl(0, 0%, 95%) "  }}>
      <div className="container my-5 text-white" >
        <div className="d-flex justify-content-center"  >
          <div className="w-25">
            <Card  style={{backgroundColor :"hsl(31, 77%, 52%)" , padding:"33.2px" , borderRadius:"10px 0 0 10px"}}
              Image={image1} 
              title="Sedans" 
              description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
             
            />
          </div>

          <div className="w-25">
            <Card style={{backgroundColor :" hsl(184, 100%, 22%)" , padding:"33px"}}
              Image={image2} 
              title="SUVs" 
              description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures." 
              
            />
          </div>

          <div className="w-25">
            <Card style={{backgroundColor :" hsl(179, 100%, 13%)" , padding:"33px" , borderRadius:"0 10px 10px 0"}}
              Image={image3} 
              title="Luxury" 
              description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style." 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
