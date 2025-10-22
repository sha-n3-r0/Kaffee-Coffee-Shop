import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  padding: 3rem 0 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #d4af37;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p, li {
    color: #ccc;
    line-height: 1.8;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #ccc;
    transition: color 0.3s ease;

    &:hover {
      color: #d4af37;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #d4af37;
    color: #fff;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      background: #b8941f;
      transform: translateY(-2px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #555;
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  color: #ccc;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Kaffee's</h3>
          <p>
            We are passionate about serving the finest coffee and beverages 
            to our customers. Our commitment to quality and customer satisfaction 
            makes us the perfect choice for your daily coffee needs.
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#deals">Deals</a></li>
            <li><a href="#favourite">Favourites</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> 123 Coffee Street, City
          </p>
          <p>
            <i className="fas fa-phone"></i> +1 (555) 123-4567
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@kaffees.com
          </p>
          <SocialLinks>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Opening Hours</h3>
          <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
          <p>Saturday: 8:00 AM - 9:00 PM</p>
          <p>Sunday: 9:00 AM - 7:00 PM</p>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; 2024 Kaffee's Coffee Shop. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
