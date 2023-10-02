// components/LogoSlider.tsx
'useclient';
import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const FeaturedIn: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay(); // Start the slider when the component mounts
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.slickPause(); // Pause the slider
      }
    };
  }, []);

  const sliderSettings = {
    slidesToShow: 3, // Number of logos to show on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Decreased slider speed to 3 seconds
    arrows: true,
    dots: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Number of logos to show on mobile
          slidesToScroll: 2, // Scroll 2 logos at a time on mobile
        },
      },
    ],
  };

  return (
    <div className="logo-slider">
      <style jsx>{`
        /* components/LogoSlider.css */

        /* Style for the container of the logo slider */
        .logo-slider {
          margin: 0 auto;
          max-width: 100%;
          padding: 20px;
          text-align: center;
        }

        /* Style for the logo items */
        .slick-slide {
          padding: 0 10px; /* Adjust padding for mobile */
          display: flex;
          justify-content: center; /* Center-align the images */
        }

        /* Style for the logo images */
        .slick-slide img {
          max-width: 100%;
          height: auto;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
          background-color: #fff;
          margin: auto;
        }

        /* Style for the navigation arrows */
        .slick-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
          cursor: pointer;
          font-size: 24px;
        }

        .slick-prev {
          left: 10px;
        }

        .slick-next {
          right: 10px;
        }

        /* Style for the navigation arrow icons (Font Awesome icons used here) */
        .slick-arrow::before {
          content: "\f104"; /* Left arrow icon */
          font-family: FontAwesome;
          color: #333;
        }

        .slick-next::before {
          content: "\f105"; /* Right arrow icon */
        }

        /* Style for the dots (if enabled) */
        .slick-dots {
          list-style: none;
          text-align: center;
          padding: 0;
        }

        .slick-dots li {
          display: inline-block;
          margin: 0 5px;
        }

        .slick-dots li button {
          width: 10px;
          height: 10px;
          border: 2px solid #333;
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .slick-dots li.slick-active button {
          background-color: #333;
        }
      `}</style>
      <Slider ref={(slider) => (sliderRef.current = slider)} {...sliderSettings}>
        {/* Add your logo elements here */}
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0667/8318/3163/files/12.png?v=1679740352"
            alt="Logo 1"
            className="featureInImg"
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0667/8318/3163/files/13.png?v=1679740352"
            alt="Logo 2"
            className="featureInImg"
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0667/8318/3163/files/14.png?v=1679740352"
            alt="Logo 3"
            className="featureInImg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default FeaturedIn;
