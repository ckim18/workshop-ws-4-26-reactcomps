import React from 'react';
import { Carousel } from 'antd';


function onChange(a, b, c) {
  console.log(a, b, c);
}

const CarouselComp = (props) => {
  return (
    <Carousel afterChange={onChange}>
      <div className="slide"><img src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" alt="cat1" height="300" width="400" /><h3>1</h3></div>
      <div className="slide"><img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="cat2" height="300" width="400" /><h3>2</h3></div>
      <div className="slide"><img src="https://i.ytimg.com/vi/I7jgu-8scIA/maxresdefault.jpg" alt="cat3" height="300" width="400" /><h3>3</h3></div>
      <div className="slide"><img src="https://www.pets4homes.co.uk/images/articles/771/large/cat-lifespan-the-life-expectancy-of-cats-568e40723c336.jpg" alt="cat4" height="300" width="400" /><h3>4</h3></div>
    </Carousel>
  );
  // }
};

export default CarouselComp;
