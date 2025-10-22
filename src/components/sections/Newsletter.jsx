import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../../services/api';

const NewsletterContainer = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #d4af37, #b8941f);
  color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.div`
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const NewsletterForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  min-width: 250px;

  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    min-width: auto;
  }
`;

const SubscribeButton = styled.button`
  padding: 15px 30px;
  background: #fff;
  color: #d4af37;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const Message = styled.div`
  margin-top: 1rem;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;

  &.success {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  &.error {
    background: rgba(255, 71, 87, 0.2);
    color: #fff;
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage({ type: 'error', text: 'Please enter your email address' });
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const result = await api.subscribeNewsletter(email);
      setMessage({ type: 'success', text: result.message });
      setEmail('');
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <NewsletterContainer>
      <Container>
        <SectionTitle>
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Stay updated with our latest coffee blends, special offers, 
            and exclusive deals delivered straight to your inbox.
          </p>
        </SectionTitle>

        <NewsletterForm onSubmit={handleSubmit}>
          <EmailInput
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <SubscribeButton type="submit" disabled={isLoading}>
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </SubscribeButton>
        </NewsletterForm>

        {message && (
          <Message className={message.type}>
            {message.text}
          </Message>
        )}
      </Container>
    </NewsletterContainer>
  );
};

export default Newsletter;
