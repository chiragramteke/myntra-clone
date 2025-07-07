import offer from './image/offer.jpg';
import woman1 from './image/woman1.jpg';
import woman2 from './image/woman2.jpg';
import woman3 from './image/woman3.jpg';
import woman4 from './image/woman4.jpg';
import image2 from './image/image2.jpg';
import image3 from './image/image3.jpg';
import image1 from './image/image1.jpg';
import image4 from './image/image4.jpg';
import image5 from './image/image5.jpg';
import kids1 from './image/kids1.jpg';
import kids2 from './image/kids2.jpg';
import kids3 from './image/kids3.jpg';
import kids4 from './image/kids4.jpg';
import kids5 from './image/kids5.jpg';

import './App.css';

function Home() {
  return (
    <div className="app">
      <img src={offer} alt="offer" className="image-view" />

      <label
        style={{
          fontSize: '30px',
          marginTop: '23px',
          display: 'table-caption',
        }}
      >
        MEN
      </label>
      <img src={image2} alt="image2" className="image-style" />
      <img src={image3} alt="image3" className="image-style" />
      <img src={image1} alt="image1" className="image-style" />
      <img src={image4} alt="image4" className="image-style" />
      <img src={image5} alt="image5" className="image-style" />

      <label
        style={{
          fontSize: '30px',
          marginTop: '23px',
          display: 'table-caption',
        }}
      >
        WOMEN
      </label>
      <img src={woman1} alt="woman1" className="image-style" />
      <img src={woman2} alt="woman2" className="image-style" />
      <img src={woman3} alt="woman3" className="image-style" />
      <img src={woman4} alt="woman4" className="image-style" />

      <label
        style={{
          fontSize: '30px',
          marginTop: '23px',
          display: 'table-caption',
        }}
      >
        KIDS
      </label>
      <img src={kids1} alt="kids1" className="image-style" />
      <img src={kids2} alt="kids2" className="image-style" />
      <img src={kids3} alt="kids3" className="image-style" />
      <img src={kids4} alt="kids4" className="image-style" />
      <img src={kids5} alt="kids5" className="image-style" />
    </div>
  );
}

export default Home;
