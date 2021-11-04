import "react-responsive-carousel/lib/styles/carousel.css";
import {Carousel} from "react-responsive-carousel";

const Slides = () => {
    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            interval={4000}
            infiniteLoop={true}
            emulateTouch={true}
            dynamicHeight={true}
            swipeable={true}
            stopOnHover={true}
            transitionTime={300}
        >
            <div>
                <img
                    src="https://i.ibb.co/XWyj6sw/IMG-0826.jpg"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://i.ibb.co/ZKR34RW/Whats-App-Image-2021-08-14-at-12-26-03.jpg"
                    alt=""
                />
            </div>
            <div>
                <img src="https://i.ibb.co/YPbzsYQ/Whats-App-Image-2021-10-06-at-10-28-08.jpg" alt="quadro" />
            </div>
        </Carousel>
    );
};
export default Slides;
