import React from 'react';
import styled from 'styled-components';
import { useCart } from '../hooks/useCart.jsx';

const FavouriteContainer = styled.div`
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

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  .icon {
    font-size: 4rem;
    color: #d4af37;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .btn {
    display: inline-block;
    padding: 12px 24px;
    background: #d4af37;
    color: #fff;
    border-radius: 5px;
    font-weight: 500;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      background: #b8941f;
      transform: translateY(-2px);
    }
  }
`;

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CartItem = styled.div`
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

const ItemImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${CartItem}:hover & img {
    transform: scale(1.05);
  }
`;

const ItemInfo = styled.div`
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
    font-size: 0.9rem;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #d4af37;
    margin-bottom: 1rem;
  }

  .quantity {
    color: #666;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;

const ItemActions = styled.div`
  display: flex;
  gap: 1rem;

  button {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &.primary {
      background: #d4af37;
      color: #fff;

      &:hover {
        background: #b8941f;
      }
    }

    &.secondary {
      background: #ff4757;
      color: #fff;

      &:hover {
        background: #ff3742;
      }
    }
  }
`;

const CartSummary = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: #666;

    &.total {
      font-size: 1.2rem;
      font-weight: 700;
      color: #333;
      border-top: 2px solid #e9ecef;
      padding-top: 1rem;
      margin-top: 1rem;
    }
  }

  .checkout-btn {
    width: 100%;
    padding: 15px;
    background: #d4af37;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;

    &:hover {
      background: #b8941f;
    }
  }
`;

const Favourite = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartItemCount } = useCart();

  const handleQuantityChange = (productId, change) => {
    const currentQuantity = cart.find(item => item.id === productId)?.quantity || 1;
    const newQuantity = currentQuantity + change;
    
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId) => {
    if (window.confirm('Are you sure you want to remove this item from your cart?')) {
      removeFromCart(productId);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    alert(`Order total: $${getCartTotal().toFixed(2)}\n\nThank you for your order! Your items will be prepared shortly.`);
  };

  if (cart.length === 0) {
    return (
      <FavouriteContainer>
        <Container>
          <PageTitle>
            <h1>My Favourites</h1>
            <p>Your selected items and cart</p>
          </PageTitle>

          <EmptyState>
            <div className="icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h3>Your cart is empty</h3>
            <p>Looks like you haven't added any items to your cart yet. Browse our menu and add some delicious coffee to get started!</p>
            <a href="/menu" className="btn">Browse Menu</a>
          </EmptyState>
        </Container>
      </FavouriteContainer>
    );
  }

  return (
    <FavouriteContainer>
      <Container>
        <PageTitle>
          <h1>My Favourites</h1>
          <p>Your selected items and cart</p>
        </PageTitle>

        <CartGrid>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <ItemImage>
                <img src={item.image_url} alt={item.name} />
              </ItemImage>
              
              <ItemInfo>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="price">${item.price.toFixed(2)}</div>
                <div className="quantity">Quantity: {item.quantity}</div>
                
                <ItemActions>
                  <button 
                    className="primary"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    Add More
                  </button>
                  <button 
                    className="secondary"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </ItemActions>
              </ItemInfo>
            </CartItem>
          ))}
        </CartGrid>

        <CartSummary>
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Items ({getCartItemCount()})</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>$5.00</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${(getCartTotal() + 5).toFixed(2)}</span>
          </div>
          
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </CartSummary>
      </Container>
    </FavouriteContainer>
  );
};

export default Favourite;
