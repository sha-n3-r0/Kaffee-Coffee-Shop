import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const HeroContainer = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
              url('/images/home-bg.jpg') center/cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: #fff;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    line-height: 1.6;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const HeroButton = styled.button`
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &.primary {
    background: #d4af37;
    color: #fff;
    border: none;

    &:hover {
      background: #b8941f;
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;

    &:hover {
      background: #fff;
      color: #333;
    }
  }
`;

const HeroImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <h1>Fresh Coffee in the Morning</h1>
          <p>
            Start your day with our premium coffee blends. We serve the finest 
            coffee beans from around the world, carefully roasted to perfection 
            for the ultimate coffee experience.
          </p>
          <HeroButtons>
            <HeroButton className="primary">
              Order Now
            </HeroButton>
            <HeroButton className="secondary">
              View Menu
            </HeroButton>
          </HeroButtons>
        </HeroText>
        
        <HeroImage>
          <img src="/images/home-img-1.png" alt="Coffee" />
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
