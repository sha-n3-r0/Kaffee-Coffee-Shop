import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCart } from '../../hooks/useCart.jsx';
import api from '../../services/api';

const FeaturedContainer = styled.section`
  padding: 80px 0;
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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProductCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProductInfo = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #d4af37;
    margin-bottom: 1rem;
  }
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #d4af37;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      background: #b8941f;
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }

  span {
    font-size: 1.1rem;
    font-weight: 600;
    min-width: 30px;
    text-align: center;
  }
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #d4af37;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b8941f;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const FeaturedProduct = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart();

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        const products = await api.getFeaturedProducts();
        setFeaturedProducts(products);
        
        // Initialize quantities
        const initialQuantities = {};
        products.forEach(product => {
          initialQuantities[product.id] = 1;
        });
        setQuantities(initialQuantities);
      } catch (error) {
        console.error('Error loading featured products:', error);
      }
    };

    loadFeaturedProducts();
  }, []);

  const updateQuantity = (productId, change) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, prev[productId] + change)
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart(product, quantity);
    
    // Show success message (you could add a toast notification here)
    alert(`${product.name} added to cart!`);
  };

  return (
    <FeaturedContainer>
      <Container>
        <SectionTitle>
          <h2>Featured Products</h2>
          <p>Our most popular coffee blends and beverages</p>
        </SectionTitle>

        <ProductGrid>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage>
                <img src={product.image_url} alt={product.name} />
              </ProductImage>
              
              <ProductInfo>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="price">${product.price.toFixed(2)}</div>
                
                <QuantitySelector>
                  <button 
                    onClick={() => updateQuantity(product.id, -1)}
                    disabled={quantities[product.id] <= 1}
                  >
                    -
                  </button>
                  <span>{quantities[product.id] || 1}</span>
                  <button onClick={() => updateQuantity(product.id, 1)}>
                    +
                  </button>
                </QuantitySelector>

                <AddToCartButton onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </AddToCartButton>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </Container>
    </FeaturedContainer>
  );
};

export default FeaturedProduct;
