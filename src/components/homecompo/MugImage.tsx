// components/MyComponent.tsx
'use client';
import React from 'react';

const MugImage: React.FC = () => {
  return (
    <div className="title-back">
         <style jsx>{`
    /* styles.css */

    @keyframes color-change {
      0% { color: #717655; }
      100% { color: #423E3B; }
    }
    
    .mug-link:hover {
      text-decoration-color: #717655;
      transition: all 0.5s;
      transform: translateY(-10px);
    }
    
    .mug-img {
      width: 60%;
      margin: auto;
    }
    
    .mug-back:hover {
      transition: all 0.5s;
      transform: translateY(-10px);
    }
    
    .mug-head {
      font-size: 40px;
      font-family: 'Recline', seminole;
      text-align: center;
      color: #717655;
      width: 80%;
      animation: color-change 2s infinite;
    }
    
    .title-back {
      background-color: #F4EAE2;
      height: auto;
      max-width: 100%;
    }
    
    .main-back-img {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      height: auto;
      margin: auto;
      max-width: 55%;
      padding-bottom: 40px;
    }
    
    .title-text {
      font-size: 35px;
      text-align: center;
      font-family: 'Recline', sans-serif;
      color: #717655;
      padding: 80px 10px 30px 10px;
    }
    
    @media (max-width: 600px) {
      .main-back-img {
        max-width: 100%;
      }
    
      .title-back {
        background-color: #F4EAE2;
        height: auto;
        max-width: 100%;
      }
    
      .content-text {
        font-size: 2rem;
      }
    
      .mug-back {
        margin-top: 5rem;
        margin-bottom: 5rem;
      }
    
      .mug-head {
        font-size: 28px;
        font-family: 'Recline', seminole;
        padding-bottom: 40px;
        font-weight: semibold;
        width: 70%;
        color: #717655;
        margin-left: 25px;
      }
    
      .mug-img {
        width: 67%;
        margin-left: 40px;
      }
    }
    
      `}</style>
      <p className="title-text">
        Eco-concious Choices to
        <br />
        RestoreNature and
        <br />
        Practice Circularity
      </p>
      <div className="main-back-img">
        <div style={{ width: '50%' }} className="mug-back">
          <a
            href="https://mae.in/products/m1"
            style={{ cursor: 'pointer', margin: 'auto' }}
            className="mug-link"
          >
            <p className="mug-head">
              <u>m1</u>
            </p>
            <img
              src="https://cdn.shopify.com/s/files/1/0667/8318/3163/files/m1_mug.png?v=1683536032"
              style={{}}
              className="mug-img"
            />
          </a>
        </div>
        <div style={{ width: '50%' }} className="mug-back">
          <a
            href="https://mae.in/products/m2"
            style={{ cursor: 'pointer', margin: 'auto' }}
            className="mug-link"
          >
            <p className="mug-head">
              <u>m2</u>
            </p>
            <img
              src="https://cdn.shopify.com/s/files/1/0667/8318/3163/files/m2_mug.png?v=1683536232"
              className="mug-img"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MugImage;
