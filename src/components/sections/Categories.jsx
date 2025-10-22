import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../services/api';

const CategoriesContainer = styled.section`
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

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const CategoryCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  &.active {
    border-color: #d4af37;
    background: #fffbf0;
  }

  .icon {
    font-size: 3rem;
    color: #d4af37;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const Categories = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await api.getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };

    loadCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.slug);
    if (onCategorySelect) {
      onCategorySelect(category.slug);
    }
  };

  const getCategoryIcon = (slug) => {
    const icons = {
      'coffee': 'fas fa-coffee',
      'ice-tea': 'fas fa-glass-whiskey',
      'beverage': 'fas fa-wine-glass-alt',
      'juices': 'fas fa-apple-alt'
    };
    return icons[slug] || 'fas fa-coffee';
  };

  const getCategoryDescription = (slug) => {
    const descriptions = {
      'coffee': 'Rich and aromatic coffee blends from around the world',
      'ice-tea': 'Refreshing iced teas perfect for any time of day',
      'beverage': 'A variety of cold and hot beverages to quench your thirst',
      'juices': 'Fresh and natural fruit juices packed with vitamins'
    };
    return descriptions[slug] || 'Delicious beverages for every taste';
  };

  return (
    <CategoriesContainer>
      <Container>
        <SectionTitle>
          <h2>Our Categories</h2>
          <p>Choose from our wide variety of coffee and beverages</p>
        </SectionTitle>

        <CategoriesGrid>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              className={activeCategory === category.slug ? 'active' : ''}
              onClick={() => handleCategoryClick(category)}
            >
              <div className="icon">
                <i className={getCategoryIcon(category.slug)}></i>
              </div>
              <h3>{category.name}</h3>
              <p>{getCategoryDescription(category.slug)}</p>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </Container>
    </CategoriesContainer>
  );
};

export default Categories;
