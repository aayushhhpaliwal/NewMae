import React from 'react';

const HowIsIt: React.FC = () => {
  const containerStyle = {
    height: '100vh',
  };

  const testStyle = {
    backgroundColor: '#F4EAE2',
  };

  const HMadeStyle = {
    textAlign: 'center',
    fontSize: '40px',
    fontFamily: 'Recline',
    padding: '20px',
    // textAlign: 'center',
    color: '#B69580',
  };

  const threeTestimonialStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '100vh',
    color: 'white',
  };

  const testOneStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '33.3%',
    padding: '30px 0',
  };

  const testinImgStyle = {
    width: '60%',
    margin: 'auto',
    opacity: 0,
  };

  const sec50Style = {
    width: '80%',
  };

  const testHeadStyle = {
    fontSize: '20px',
    fontFamily: 'Recline',
    marginTop: '10px',
  };

  const testContentStyle = {
    textAlign: 'left',
  };

  return (
    <section style={containerStyle}>
      <div style={testStyle} className="test">
        <p style={HMadeStyle}>How Is It Made</p>
      </div>
      <div className="three-testimonial" style={threeTestimonialStyle}>
        <div style={{ ...testOneStyle, backgroundColor: '#707654' }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0667/8318/3163/files/TheBio-Composite_Icon_a6849695-ad9f-4d12-9dc5-81a042a12dd5.png?v=1680584530"
            alt=""
            className="testin-img"
            style={testinImgStyle}
          />
          <div style={{ ...sec50Style, textAlign: 'center', margin: 'auto' }}>
            <p style={testHeadStyle} className="test-head">
              Sourcing Agricultural Residue
            </p>
            <p style={testContentStyle} className="test-content">
              Rice husk is directly collected from farmers which is then cleaned and ground into fine particles.
            </p>
          </div>
        </div>

        <div className="test-one" style={{ ...testOneStyle, backgroundColor: '#f5ebe2' }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0667/8318/3163/files/TheBio-Composite_Icon_79561255-7930-48de-9b7f-df16eabcf8df.png?v=1680584805"
            alt=""
            className="testin-img_2"
            style={testinImgStyle}
          />
          <div style={{ ...sec50Style, textAlign: 'center', margin: 'auto', color: '#AB6D61' }}>
            <p style={testHeadStyle} className="test-head">
              The Bio-Composite
            </p>
            <p className="test-content">
              These particles are then combined with Food-safe binders to add Strength and Durability.
            </p>
          </div>
        </div>

        <div className="test-one" style={{ ...testOneStyle, backgroundColor: '#B69580' }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0667/8318/3163/files/Mug_icon_4737689d-c82c-4d87-80b8-ad0f4ad76c44.png?v=1680583902"
            alt=""
            className="testin-img_3"
            style={testinImgStyle}
          />
          <div style={{ ...sec50Style, textAlign: 'center', margin: 'auto' }}>
            <p style={testHeadStyle} className="test-head">
              Moulded Into Opulent Essentials
            </p>
            <p className="test-content">
              That are Lightweight & Break Resistant, while also being Microwave /Freezer/ Dishwasher Safe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIsIt;
