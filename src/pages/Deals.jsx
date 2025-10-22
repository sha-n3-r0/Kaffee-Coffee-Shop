import React from 'react';
import styled from 'styled-components';

const DealsContainer = styled.div`
  padding: 100px 0 80px;
  background: #f8f9fa;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const PageTitle = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: 3rem;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const DealsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const DealCard = styled.div`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  .discount-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: #ff4757;
    color: #fff;
    padding: 8px 12px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 0.9rem;
    z-index: 2;
  }
`;

const DealImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${DealCard}:hover & img {
    transform: scale(1.05);
  }
`;

const DealInfo = styled.div`
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .description {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .price-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    .original-price {
      font-size: 1.2rem;
      color: #999;
      text-decoration: line-through;
    }

    .discounted-price {
      font-size: 1.8rem;
      font-weight: 700;
      color: #d4af37;
    }
  }

  .deal-details {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        color: #666;
        margin-bottom: 0.5rem;
        padding-left: 1.5rem;
        position: relative;

        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #d4af37;
          font-weight: bold;
        }
      }
    }
  }
`;

const DealButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #d4af37;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b8941f;
    transform: translateY(-2px);
  }
`;

const Deals = () => {
  const deals = [
    {
      id: 1,
      title: "Morning Coffee Combo",
      description: "Start your day right with our premium morning coffee combo",
      image: "/images/menu-1.png",
      originalPrice: 120,
      discountedPrice: 95,
      discount: "20% OFF",
      details: [
        "2 Large Espresso",
        "1 Cappuccino",
        "Free Pastry",
        "Valid until 11 AM"
      ]
    },
    {
      id: 2,
      title: "Afternoon Refreshment",
      description: "Perfect blend of coffee and tea for your afternoon break",
      image: "/images/menu-4.png",
      originalPrice: 80,
      discountedPrice: 65,
      discount: "18% OFF",
      details: [
        "1 Iced Tea",
        "1 Latte",
        "Free Cookie",
        "Valid 2 PM - 5 PM"
      ]
    },
    {
      id: 3,
      title: "Family Pack Special",
      description: "Great value for families - mix and match your favorites",
      image: "/images/menu-2.png",
      originalPrice: 200,
      discountedPrice: 160,
      discount: "20% OFF",
      details: [
        "4 Any Coffee Drinks",
        "2 Fresh Juices",
        "Free Snacks",
        "Valid all day"
      ]
    },
    {
      id: 4,
      title: "Student Discount",
      description: "Special pricing for students - show your ID and save",
      image: "/images/menu-3.png",
      originalPrice: 60,
      discountedPrice: 45,
      discount: "25% OFF",
      details: [
        "Any Coffee Drink",
        "Free Wi-Fi Access",
        "Student ID Required",
        "Valid weekdays"
      ]
    },
    {
      id: 5,
      title: "Weekend Special",
      description: "Relax and enjoy our weekend special coffee blends",
      image: "/images/menu-5.png",
      originalPrice: 100,
      discountedPrice: 80,
      discount: "20% OFF",
      details: [
        "2 Premium Coffees",
        "Free Dessert",
        "Weekend Only",
        "Valid Sat-Sun"
      ]
    },
    {
      id: 6,
      title: "Happy Hour Deal",
      description: "Join us during happy hour for amazing coffee deals",
      image: "/images/menu-6.png",
      originalPrice: 90,
      discountedPrice: 70,
      discount: "22% OFF",
      details: [
        "Any 2 Beverages",
        "Free Appetizer",
        "4 PM - 6 PM",
        "Valid weekdays"
      ]
    }
  ];

  const handleDealClick = (deal) => {
    alert(`Great choice! You've selected the ${deal.title} deal. Please visit our store to redeem this offer.`);
  };

  return (
    <DealsContainer>
      <Container>
        <PageTitle>
          <h1>Special Deals</h1>
          <p>Don't miss out on our amazing coffee deals and special offers</p>
        </PageTitle>

        <DealsGrid>
          {deals.map((deal) => (
            <DealCard key={deal.id}>
              <div className="discount-badge">{deal.discount}</div>
              
              <DealImage>
                <img src={deal.image} alt={deal.title} />
              </DealImage>
              
              <DealInfo>
                <h3>{deal.title}</h3>
                <p className="description">{deal.description}</p>
                
                <div className="price-info">
                  <span className="original-price">${deal.originalPrice}</span>
                  <span className="discounted-price">${deal.discountedPrice}</span>
                </div>

                <div className="deal-details">
                  <ul>
                    {deal.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <DealButton onClick={() => handleDealClick(deal)}>
                  Get This Deal
                </DealButton>
              </DealInfo>
            </DealCard>
          ))}
        </DealsGrid>
      </Container>
    </DealsContainer>
  );
};

export default Deals;
