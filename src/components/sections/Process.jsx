import React from 'react';
import styled from 'styled-components';

const ProcessContainer = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProcessStep = styled.div`
  text-align: center;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  .step-number {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background: #d4af37;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .icon {
    font-size: 3rem;
    color: #d4af37;
    margin: 1rem 0;
  }

  h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const Process = () => {
  const steps = [
    {
      number: 1,
      icon: 'fas fa-coffee',
      title: 'Choose Your Coffee',
      description: 'Select from our wide variety of premium coffee blends and beverages'
    },
    {
      number: 2,
      icon: 'fas fa-shopping-cart',
      title: 'Add to Cart',
      description: 'Add your favorite items to the cart with your preferred quantity'
    },
    {
      number: 3,
      icon: 'fas fa-credit-card',
      title: 'Place Order',
      description: 'Complete your order with our secure and easy checkout process'
    },
    {
      number: 4,
      icon: 'fas fa-truck',
      title: 'Enjoy Delivery',
      description: 'Sit back and enjoy your coffee delivered fresh to your doorstep'
    }
  ];

  return (
    <ProcessContainer>
      <Container>
        <SectionTitle>
          <h2>How It Works</h2>
          <p>Simple steps to get your favorite coffee delivered</p>
        </SectionTitle>

        <ProcessGrid>
          {steps.map((step, index) => (
            <ProcessStep key={index}>
              <div className="step-number">{step.number}</div>
              <div className="icon">
                <i className={step.icon}></i>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </ProcessStep>
          ))}
        </ProcessGrid>
      </Container>
    </ProcessContainer>
  );
};

export default Process;
