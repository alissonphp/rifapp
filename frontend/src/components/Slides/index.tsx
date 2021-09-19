import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";

const Slides = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      emulateTouch={true}
      swipeable={true}
      stopOnHover={true}
      transitionTime={300}
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=460&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=460&q=80"
          alt=""
        />
      </div>
    </Carousel>
  );
};
export default Slides;
