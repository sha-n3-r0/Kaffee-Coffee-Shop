// Mock API service for the coffee shop
const mockData = {
  products: [
    {
      id: 1,
      name: "Espresso",
      category: "coffee",
      price: 45.00,
      description: "Rich and bold espresso with perfect crema",
      image_url: "/images/menu-1.png",
      is_featured: true
    },
    {
      id: 2,
      name: "Cappuccino",
      category: "coffee",
      price: 55.00,
      description: "Classic cappuccino with steamed milk foam",
      image_url: "/images/menu-2.png",
      is_featured: true
    },
    {
      id: 3,
      name: "Latte",
      category: "coffee",
      price: 60.00,
      description: "Smooth latte with artful milk design",
      image_url: "/images/menu-3.png",
      is_featured: false
    },
    {
      id: 4,
      name: "Iced Tea",
      category: "ice-tea",
      price: 35.00,
      description: "Refreshing iced tea with natural flavors",
      image_url: "/images/menu-4.png",
      is_featured: false
    },
    {
      id: 5,
      name: "Fresh Juice",
      category: "juices",
      price: 40.00,
      description: "Freshly squeezed fruit juice",
      image_url: "/images/menu-5.png",
      is_featured: false
    }
  ],
  categories: [
    { id: 1, name: "Coffee", slug: "coffee" },
    { id: 2, name: "Ice Tea", slug: "ice-tea" },
    { id: 3, name: "Beverage", slug: "beverage" },
    { id: 4, name: "Juices", slug: "juices" }
  ],
  newsletter: [],
  contacts: [],
  feedback: [],
  testimonials: [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      rating: 5,
      testimonial: 'The best coffee in town! The atmosphere is cozy and the staff is incredibly friendly. I come here every morning for my daily dose of happiness.',
      createdAt: '2024-01-15',
      status: 'approved'
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike@example.com',
      rating: 5,
      testimonial: 'Amazing coffee and pastries! The vanilla latte is absolutely perfect. Great place to work or catch up with friends.',
      createdAt: '2024-01-14',
      status: 'approved'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily@example.com',
      rating: 4,
      testimonial: 'Love the variety of coffee options and the quality is consistently excellent. The baristas really know their craft!',
      createdAt: '2024-01-13',
      status: 'approved'
    },
    {
      id: 4,
      name: 'David Kim',
      email: 'david@example.com',
      rating: 5,
      testimonial: 'Outstanding service and the coffee is always fresh. The baristas are knowledgeable and make great recommendations.',
      createdAt: '2024-01-12',
      status: 'approved'
    }
  ]
};

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Newsletter subscription
  async subscribeNewsletter(email) {
    // Try to use real PHP backend first
    try {
      const response = await fetch('/api/newsletter.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        return { success: true, message: 'Successfully subscribed to newsletter!' };
      } else {
        throw new Error(result.error || 'Failed to subscribe');
      }
    } catch (error) {
      console.warn('PHP backend unavailable, using mock storage:', error.message);
      
      // Fallback to mock storage if PHP backend is not available
      await delay(500);
      
      if (!email || !email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }
      
      // Store in localStorage as fallback
      const storedNewsletter = localStorage.getItem('kaffees_newsletter');
      let newsletter = [];
      
      if (storedNewsletter) {
        try {
          newsletter = JSON.parse(storedNewsletter);
        } catch (e) {
          newsletter = [];
        }
      }
      
      const existing = newsletter.find(sub => sub.email === email);
      if (existing) {
        throw new Error('Email already subscribed');
      }
      
      const subscription = {
        id: Date.now(),
        email,
        subscribedAt: new Date().toISOString()
      };
      
      newsletter.push(subscription);
      localStorage.setItem('kaffees_newsletter', JSON.stringify(newsletter));
      
      return { 
        success: true, 
        message: 'Newsletter subscription saved locally. Please ensure the backend is running for proper processing.' 
      };
    }
  },

  // Contact form submission
  async submitContact(data) {
    // Try to use real PHP backend first
    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        return { success: true, message: 'Message sent successfully! We\'ll get back to you soon.' };
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.warn('PHP backend unavailable, using mock storage:', error.message);
      
      // Fallback to mock storage if PHP backend is not available
      await delay(500);
      
      if (!data.name || !data.email || !data.message) {
        throw new Error('All fields are required');
      }
      
      const contact = {
        id: Date.now(),
        ...data,
        submittedAt: new Date().toISOString()
      };
      
      // Store in localStorage as fallback
      const storedContacts = localStorage.getItem('kaffees_contacts');
      let contacts = [];
      
      if (storedContacts) {
        try {
          contacts = JSON.parse(storedContacts);
        } catch (e) {
          contacts = [];
        }
      }
      
      contacts.unshift(contact);
      localStorage.setItem('kaffees_contacts', JSON.stringify(contacts));
      
      return { 
        success: true, 
        message: 'Message saved locally. Please ensure the backend is running for proper delivery.' 
      };
    }
  },

  // Feedback submission
  async submitFeedback(data) {
    // Try to use real PHP backend first
    try {
      const response = await fetch('/api/feedback.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        return { success: true, message: 'Thank you for your feedback! We appreciate your input.' };
      } else {
        throw new Error(result.error || 'Failed to submit feedback');
      }
    } catch (error) {
      console.warn('PHP backend unavailable, using mock storage:', error.message);
      
      // Fallback to mock storage if PHP backend is not available
      await delay(500);
      
      if (!data.name || !data.email || !data.rating) {
        throw new Error('Name, email, and rating are required');
      }
      
      const feedback = {
        id: Date.now(),
        ...data,
        submittedAt: new Date().toISOString()
      };
      
      // Store in localStorage as fallback
      const storedFeedback = localStorage.getItem('kaffees_feedback');
      let feedbackList = [];
      
      if (storedFeedback) {
        try {
          feedbackList = JSON.parse(storedFeedback);
        } catch (e) {
          feedbackList = [];
        }
      }
      
      feedbackList.unshift(feedback);
      localStorage.setItem('kaffees_feedback', JSON.stringify(feedbackList));
      
      return { 
        success: true, 
        message: 'Feedback saved locally. Please ensure the backend is running for proper processing.' 
      };
    }
  },

  // Get all products
  async getProducts() {
    await delay(300);
    return mockData.products;
  },

  // Get products by category
  async getProductsByCategory(category) {
    await delay(300);
    return mockData.products.filter(product => product.category === category);
  },

  // Get featured products
  async getFeaturedProducts() {
    await delay(300);
    return mockData.products.filter(product => product.is_featured);
  },

  // Get categories
  async getCategories() {
    await delay(200);
    return mockData.categories;
  },

  // Process order
  async processOrder(orderData) {
    await delay(1000);
    
    if (!orderData.items || orderData.items.length === 0) {
      throw new Error('No items in order');
    }
    
    const order = {
      id: `ORD-${Date.now()}`,
      ...orderData,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };
    
    return { success: true, order, message: 'Order placed successfully!' };
  },

  // Testimonials
  async getTestimonials() {
    await delay(300);
    
    // Get testimonials from localStorage
    const storedTestimonials = localStorage.getItem('kaffees_testimonials');
    let testimonials = [];
    
    if (storedTestimonials) {
      try {
        testimonials = JSON.parse(storedTestimonials);
      } catch (error) {
        console.error('Error parsing stored testimonials:', error);
        testimonials = mockData.testimonials; // Fallback to default
      }
    } else {
      // Initialize with default testimonials if none exist
      testimonials = [...mockData.testimonials];
      localStorage.setItem('kaffees_testimonials', JSON.stringify(testimonials));
    }
    
    // Sort by submission date (newest first) and limit to 6 latest
    const sortedTestimonials = testimonials
      .sort((a, b) => {
        const dateA = new Date(a.submittedAt || a.createdAt || 0);
        const dateB = new Date(b.submittedAt || b.createdAt || 0);
        return dateB - dateA; // Newest first
      })
      .slice(0, 6); // Only show 6 latest
    
    return sortedTestimonials;
  },

  async submitTestimonial(data) {
    await delay(500);
    
    if (!data.name || !data.email || !data.rating || !data.testimonial) {
      throw new Error('All fields are required');
    }
    
    const testimonial = {
      id: Date.now(),
      ...data,
      status: 'approved', // Auto-approve for demo purposes
      submittedAt: new Date().toISOString()
    };
    
    // Get existing testimonials
    const storedTestimonials = localStorage.getItem('kaffees_testimonials');
    let testimonials = [];
    
    if (storedTestimonials) {
      try {
        testimonials = JSON.parse(storedTestimonials);
      } catch (error) {
        console.error('Error parsing stored testimonials:', error);
        testimonials = [...mockData.testimonials];
      }
    } else {
      testimonials = [...mockData.testimonials];
    }
    
    // Add new testimonial
    testimonials.unshift(testimonial); // Add to beginning of array
    
    // Save back to localStorage
    localStorage.setItem('kaffees_testimonials', JSON.stringify(testimonials));
    
    return { success: true, message: 'Testimonial submitted successfully!' };
  },

  // Utility function to clear all testimonials (for testing)
  clearTestimonials() {
    localStorage.removeItem('kaffees_testimonials');
    return { success: true, message: 'Testimonials cleared!' };
  },

  // Utility function to reset testimonials to default
  resetTestimonials() {
    localStorage.setItem('kaffees_testimonials', JSON.stringify(mockData.testimonials));
    return { success: true, message: 'Testimonials reset to default!' };
  }
};

export default api;
