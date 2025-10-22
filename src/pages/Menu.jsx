import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCart } from '../hooks/useCart.jsx';
import api from '../services/api';

const MenuContainer = styled.div`
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

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  button {
    padding: 10px 20px;
    background: #fff;
    color: #333;
    border: 2px solid #e9ecef;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;

    &:hover {
      border-color: #d4af37;
      color: #d4af37;
    }

    &.active {
      background: #d4af37;
      color: #fff;
      border-color: #d4af37;
    }
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
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProductCard}:hover & img {
    transform: scale(1.05);
  }

  .category-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #d4af37;
    color: #fff;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: capitalize;
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
    font-size: 0.9rem;
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

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart();

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          api.getProducts(),
          api.getCategories()
        ]);
        
        setProducts(productsData);
        setFilteredProducts(productsData);
        setCategories(categoriesData);
        
        // Initialize quantities
        const initialQuantities = {};
        productsData.forEach(product => {
          initialQuantities[product.id] = 1;
        });
        setQuantities(initialQuantities);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  const handleCategoryFilter = (categorySlug) => {
    setSelectedCategory(categorySlug);
    
    if (categorySlug === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === categorySlug);
      setFilteredProducts(filtered);
    }
  };

  const updateQuantity = (productId, change) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, prev[productId] + change)
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart(product, quantity);
    
    // Show success message
    alert(`${product.name} added to cart!`);
  };

  const getCategoryDisplayName = (category) => {
    const categoryNames = {
      'coffee': 'Coffee',
      'ice-tea': 'Ice Tea',
      'beverage': 'Beverage',
      'juices': 'Juices'
    };
    return categoryNames[category] || category;
  };

  return (
    <MenuContainer>
      <Container>
        <PageTitle>
          <h1>Our Menu</h1>
          <p>Discover our wide selection of premium coffee and beverages</p>
        </PageTitle>

        <CategoryFilter>
          <button
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => handleCategoryFilter('all')}
          >
            All Items
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={selectedCategory === category.slug ? 'active' : ''}
              onClick={() => handleCategoryFilter(category.slug)}
            >
              {category.name}
            </button>
          ))}
        </CategoryFilter>

        <ProductGrid>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage>
                <img src={product.image_url} alt={product.name} />
                <div className="category-badge">
                  {getCategoryDisplayName(product.category)}
                </div>
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
    </MenuContainer>
  );
};

export default Menu;
