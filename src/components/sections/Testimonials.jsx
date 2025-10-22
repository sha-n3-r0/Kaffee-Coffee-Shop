import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../services/api';

const TestimonialsContainer = styled.section`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const TestimonialCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: #d4af37;
    font-family: serif;
  }
`;

const TestimonialContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #d4af37;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
`;

const AuthorInfo = styled.div`
  h4 {
    color: #333;
    margin-bottom: 0.25rem;
    font-size: 1rem;
  }

  .rating {
    color: #d4af37;
    font-size: 0.9rem;
  }
`;

const AddTestimonialButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 15px 30px;
  background: #d4af37;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b8941f;
    transform: translateY(-2px);
  }
`;

const TestimonialForm = styled.form`
  max-width: 600px;
  margin: 2rem auto 0;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: ${props => props.show ? 'block' : 'none'};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: #d4af37;
    }

    &.error {
      border-color: #ff4757;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  .error-message {
    color: #ff4757;
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }
`;

const RatingInput = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;

  input[type="radio"] {
    display: none;
  }

  label {
    font-size: 1.5rem;
    color: #ddd;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover,
    &:hover ~ label {
      color: #d4af37;
    }
  }

  input[type="radio"]:checked ~ label,
  input[type="radio"]:checked + label {
    color: #d4af37;
  }
`;

const SubmitButton = styled.button`
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

  &:hover {
    background: #b8941f;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Message = styled.div`
  margin-top: 1rem;
  padding: 15px;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;

  &.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  &.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;

const TestimonialsComponent = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    testimonial: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Sample testimonials data
  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await api.getTestimonials();
        if (data.length === 0) {
          // Fallback to sample data if API returns empty
          const sampleTestimonials = [
            {
              id: 1,
              name: 'Sarah Johnson',
              email: 'sarah@example.com',
              rating: 5,
              testimonial: 'The best coffee in town! The atmosphere is cozy and the staff is incredibly friendly. I come here every morning for my daily dose of happiness.',
              createdAt: '2024-01-15'
            },
            {
              id: 2,
              name: 'Mike Chen',
              email: 'mike@example.com',
              rating: 5,
              testimonial: 'Amazing coffee and pastries! The vanilla latte is absolutely perfect. Great place to work or catch up with friends.',
              createdAt: '2024-01-14'
            },
            {
              id: 3,
              name: 'Emily Rodriguez',
              email: 'emily@example.com',
              rating: 4,
              testimonial: 'Love the variety of coffee options and the quality is consistently excellent. The baristas really know their craft!',
              createdAt: '2024-01-13'
            }
          ];
          setTestimonials(sampleTestimonials);
        } else {
          setTestimonials(data);
        }
      } catch (error) {
        console.error('Error loading testimonials:', error);
        // Fallback to sample data on error
        const sampleTestimonials = [
          {
            id: 1,
            name: 'Sarah Johnson',
            email: 'sarah@example.com',
            rating: 5,
            testimonial: 'The best coffee in town! The atmosphere is cozy and the staff is incredibly friendly. I come here every morning for my daily dose of happiness.',
            createdAt: '2024-01-15'
          },
          {
            id: 2,
            name: 'Mike Chen',
            email: 'mike@example.com',
            rating: 5,
            testimonial: 'Amazing coffee and pastries! The vanilla latte is absolutely perfect. Great place to work or catch up with friends.',
            createdAt: '2024-01-14'
          },
          {
            id: 3,
            name: 'Emily Rodriguez',
            email: 'emily@example.com',
            rating: 4,
            testimonial: 'Love the variety of coffee options and the quality is consistently excellent. The baristas really know their craft!',
            createdAt: '2024-01-13'
          }
        ];
        setTestimonials(sampleTestimonials);
      }
    };

    loadTestimonials();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating: rating
    }));
    
    if (errors.rating) {
      setErrors(prev => ({
        ...prev,
        rating: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (formData.rating === 0) {
      newErrors.rating = 'Please select a rating';
    }

    if (!formData.testimonial.trim()) {
      newErrors.testimonial = 'Testimonial is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const result = await api.submitTestimonial(formData);
      setMessage({ type: 'success', text: result.message });
      setFormData({
        name: '',
        email: '',
        rating: 0,
        testimonial: ''
      });
      setShowForm(false);
      
      // Reload testimonials to show the new one
      const updatedTestimonials = await api.getTestimonials();
      setTestimonials(updatedTestimonials);
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <TestimonialsContainer>
      <Container>
        <SectionTitle>
          <h2>What Our Customers Say</h2>
          <p>Latest experiences from our valued customers</p>
        </SectionTitle>

        <TestimonialsGrid>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <TestimonialContent>{testimonial.testimonial}</TestimonialContent>
              <TestimonialAuthor>
                <AuthorAvatar>
                  {getInitials(testimonial.name)}
                </AuthorAvatar>
                <AuthorInfo>
                  <h4>{testimonial.name}</h4>
                  <div className="rating">{renderStars(testimonial.rating)}</div>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>

        <AddTestimonialButton onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Share Your Experience'}
        </AddTestimonialButton>

        <TestimonialForm show={showForm} onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              disabled={isLoading}
            />
            {errors.name && (
              <div className="error-message">{errors.name}</div>
            )}
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              disabled={isLoading}
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </FormGroup>

          <FormGroup>
            <label>Rating *</label>
            <RatingInput>
              {[5, 4, 3, 2, 1].map((rating) => (
                <React.Fragment key={rating}>
                  <input
                    type="radio"
                    id={`star${rating}`}
                    name="rating"
                    value={rating}
                    checked={formData.rating === rating}
                    onChange={() => handleRatingChange(rating)}
                    disabled={isLoading}
                  />
                  <label htmlFor={`star${rating}`}>★</label>
                </React.Fragment>
              ))}
            </RatingInput>
            {errors.rating && (
              <div className="error-message">{errors.rating}</div>
            )}
          </FormGroup>

          <FormGroup>
            <label htmlFor="testimonial">Your Experience *</label>
            <textarea
              id="testimonial"
              name="testimonial"
              value={formData.testimonial}
              onChange={handleChange}
              className={errors.testimonial ? 'error' : ''}
              disabled={isLoading}
              placeholder="Tell us about your experience at Kaffee's..."
            />
            {errors.testimonial && (
              <div className="error-message">{errors.testimonial}</div>
            )}
          </FormGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit Testimonial'}
          </SubmitButton>

          {message && (
            <Message className={message.type}>
              {message.text}
            </Message>
          )}
        </TestimonialForm>
      </Container>
    </TestimonialsContainer>
  );
};

export default TestimonialsComponent;
