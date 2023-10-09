// styles.ts
import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
`;

export const TestSection = styled.div`
  background-color: #F4EAE2;
`;

export const HMade = styled.p`
  text-align: center;
  font-size: 40px;
  font-family: 'Recline';
  padding: 20px;
  color: #B69580;
`;

export const ThreeTestimonial = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  color: white;
`;

export const TestOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3%;
  padding: 30px 0;
  @media (max-width: 768px) {
    width: 50%; /* Set width to 100% for screens smaller than 768px */
  }

`;

export const TestinImg = styled.img`
  width: 60%;
  margin: auto;
  opacity: 0;
`;

export const Sec50 = styled.div`
  width: 80%;
`;

export const TestHead = styled.p`
  font-size: 20px;
  font-family: 'Recline';
  margin-top: 10px;
`;

export const TestContent = styled.p`
  text-align: left;
`;

export const TestOne1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3%;
  padding: 30px 0;
  
  @media (max-width: 768px) {
    width: 100%; /* Set width to 100% for screens smaller than 768px */
  }
`;