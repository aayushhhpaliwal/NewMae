// HowIsIt.tsx
import React from 'react';
import {
  Container,
  TestSection,
  HMade,
  ThreeTestimonial,
  TestOne,
  TestinImg,
  Sec50,
  TestHead,
  TestContent,
} from './HITstyles';

const HowIsIt: React.FC = () => {
  return (
    <Container>
      <TestSection className="test">
        <HMade>How Is It Made</HMade>
      </TestSection>
      <ThreeTestimonial className="three-testimonial">
        {/* First Testimonial */}
        <TestOne style={{ backgroundColor: '#707654' }}>
          <TestinImg
            src="https://cdn.shopify.com/s/files/1/0667/8318/3163/files/TheBio-Composite_Icon_a6849695-ad9f-4d12-9dc5-81a042a12dd5.png?v=1680584530"
            alt=""
            className="testin-img"
          />
          <Sec50 style={{ textAlign: 'center', margin: 'auto' }}>
            <TestHead className="test-head">Sourcing Agricultural Residue</TestHead>
            <TestContent className="test-content">
              Rice husk is directly collected from farmers which is then cleaned and ground into fine particles.
            </TestContent>
          </Sec50>
        </TestOne>

        {/* Second Testimonial */}
        <TestOne style={{ backgroundColor: '#f5ebe2' }}>
          <TestinImg
            src="https://cdn.shopify.com/s/files/1/0667/8318/3163/files/TheBio-Composite_Icon_79561255-7930-48de-9b7f-df16eabcf8df.png?v=1680584805"
            alt=""
            className="testin-img_2"
          />
          <Sec50 style={{ textAlign: 'center', margin: 'auto', color: '#AB6D61' }}>
            <TestHead className="test-head">The Bio-Composite</TestHead>
            <TestContent className="test-content">
              These particles are then combined with Food-safe binders to add Strength and Durability.
            </TestContent>
          </Sec50>
        </TestOne>

        {/* Third Testimonial */}
        <TestOne style={{ backgroundColor: '#B69580' }}>
          <TestinImg
            src="https://cdn.shopify.com/s/files/1/0667/8318/3163/files/Mug_icon_4737689d-c82c-4d87-80b8-ad0f4ad76c44.png?v=1680583902"
            alt=""
            className="testin-img_3"
          />
          <Sec50 style={{ textAlign: 'center', margin: 'auto' }}>
            <TestHead className="test-head">Moulded Into Opulent Essentials</TestHead>
            <TestContent className="test-content">
              That are Lightweight & Break Resistant, while also being Microwave /Freezer/ Dishwasher Safe.
            </TestContent>
          </Sec50>
        </TestOne>
      </ThreeTestimonial>
    </Container>
  );
};

export default HowIsIt;
