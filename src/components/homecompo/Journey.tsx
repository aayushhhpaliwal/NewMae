import React from 'react';

const JourneyComponent: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .journey {
          text-align: center;
          font-size: 40px;
          font-family: 'Recline', seminole;
          background-color: #F4EAE2;
          padding: 40px;
          color: #AB6D61;
        }
        .hand-text {
          text-align: center;
          font-size: 40px;
          font-family: 'Recline', seminole;
          color: #717655;
        }
        @media (max-width: 600px) {
          .journey {
            font-size: 20px;
          }
          .hand-text {
            font-size: 20px;
            padding: 0px 10px;
          }
        }
        .title-back {
          background-color: #F4EAE2;
        }
        .safety {
          display: flex;
          justify-content: center;
          padding-top: 1rem;
        }
        .icons {
          width: 50%;
          margin-bottom: 10px;
          margin-left: auto;
        }
        .mughimg {
          width: 70%;
        }
        @media screen and (max-width: 800px) {
          .icons {
            width: 75%;
            margin-bottom: 0px;
          }
          .safety {
            padding-top: 3rem;
          }
          .mughimg {
            width: 88%;
          }
        }
        .hand-back {
          display: flex;
          margin-top: 50px;
          margin-bottom: 80px;
          justify-content: space-between;
        }
        .lefthand {
          max-width: 50%;
        }
        .righthand {
          max-width: 48%;
        }
        .highlighted {
          color: #AB6D5F;
        }
      `}</style>

      <div className="title-back">
        <p className="hand-text" style={{ paddingTop: '30px' }}>
          Reviving a Sustainable Coexistence:<br />
          A Harmonious Future for <span className="highlighted">Humanity</span> and 
          <span className="highlighted">Nature</span>
        </p>
        <div style={{ width: '100%', paddingBottom: '80px' }}>
          <img src="https://cdn.shopify.com/s/files/1/0667/8318/3163/files/Less_than_20mb.gif?v=1680850054" style={{ width: '100%' }} alt="Nature" />
        </div>
        <div style={{ backgroundColor: '#F4EDE5' }}>
          <p style={{ paddingTop: '40px' }} className="journey">Features</p>
        </div>
        <div className="safety">
          <div style={{ width: '25%', marginTop: 'auto' }}>
            <img src="https://cdn.shopify.com/s/files/1/0667/8318/3163/files/break_resis_1.png?v=1684151663" className="icons" alt="Break Resistant" />
          </div>
          <div style={{ width: '75%' }}>
            <img src="https://cdn.shopify.com/s/files/1/0667/8318/3163/files/mug_hand.png?v=1680175116" style={{ marginLeft: 'auto', paddingTop: '2rem' }} className="mughimg" alt="Mug in Hand" />
          </div>
        </div>
        <div style={{ textAlign: 'center', paddingTop: '70px', paddingBottom: '80px' }}>
          <a href="https://mae.in/products/m1">
            <button style={{ padding: '5px 13px', backgroundColor: '#707654', color: 'white', borderRadius: '20px' }}>Shop Now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default JourneyComponent;
