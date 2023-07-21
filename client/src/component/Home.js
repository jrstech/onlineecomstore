import React from 'react';

import Slider from 'react-slick';

const Home = () => {
  const settings = {
  dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
     <div>
      <h2>Welcome to my hosting</h2>
      <div>
        <Slider {...settings}>
          <div>
            <img width="1200px" height="500px" src="https://www.pngall.com/wp-content/uploads/8/College-Student-PNG.png" alt="Slide 1" />
          </div>
          <div>
            <img width="1200px" height="500px" src="https://www.pngall.com/wp-content/uploads/8/College-Student-PNG.png" alt="Slide 2" />
          </div>
          <div>
            <img width="1200px" height="500px" src="https://www.pngall.com/wp-content/uploads/8/College-Student-PNG.png" alt="Slide 3" />
          </div>
          <div>
            <img width="1200px" height="500px" src="https://www.pngall.com/wp-content/uploads/8/College-Student-PNG.png" alt="Slide 4" />
          </div>
          <div>
            <img width="1200px" height="500px" src="https://www.pngall.com/wp-content/uploads/8/College-Student-PNG.png" alt="Slide 5" />
          </div>
          <div>
            <img width="1200px" height="500px" src="https://www.pngall.com/wp-content/uploads/8/College-Student-PNG.png" alt="Slide 6" />
          </div>
          {/* Add more slides with additional images */}
        </Slider>
      </div>
    </div>
  )
}
export default Home
