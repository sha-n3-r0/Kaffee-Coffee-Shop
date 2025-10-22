# Kaffee's Coffee Shop - React SPA

This is a complete standalone React Single Page Application (SPA) that replicates the functionality of the original PHP-based coffee shop website. The application is fully self-contained with no backend dependencies.

## Features

- **Modern React Frontend**: Built with React 19, React Router, and Styled Components
- **Responsive Design**: Mobile-first design that works on all devices
- **Shopping Cart**: Local storage-based cart with add/remove/update functionality
- **Form Handling**: Contact, feedback, and newsletter subscription forms with validation
- **Mock API**: Built-in mock API service for all functionality
- **No Backend Required**: Completely standalone application

## Project Structure

```
react-spa/
├── src/
│   ├── components/        # Reusable React components
│   │   ├── sections/     # Page sections (Hero, Categories, etc.)
│   │   ├── Header.jsx    # Navigation header
│   │   └── Footer.jsx    # Site footer
│   ├── pages/            # Page components
│   ├── services/         # Mock API service layer
│   ├── hooks/            # Custom React hooks
│   └── utils/            # Utility functions
├── public/
│   └── images/           # Static images
└── dist/                 # Built files ready to serve
```

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Navigate to the React app directory:**
   ```bash
   cd react-spa
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the application:**
   ```bash
   npm run build
   ```

4. **Serve the application:**
   ```bash
   # Option 1: Using XAMPP (Recommended - Already Set Up)
   # Files are automatically copied to C:\xampp\htdocs\kaffees-react\
   # Just start XAMPP and go to: http://localhost/kaffees-react/
   
   # Option 2: Using Python (if available)
   cd dist
   python -m http.server 3000
   
   # Option 3: Using Node.js serve
   npx serve dist -p 3000
   ```

5. **Access the application:**
   - **XAMPP**: `http://localhost/kaffees-react/` (Recommended)
   - **Python/Node.js**: `http://localhost:3000`

## Development Mode

To run in development mode with hot reloading:

```bash
cd react-spa
npm run dev
```

The app will start on `http://localhost:5173` (or another available port).

## Key Features

### Frontend Components

- **Header**: Navigation with active state management
- **Hero**: Animated hero section with floating coffee cup
- **Categories**: Interactive category selection
- **FeaturedProduct**: Product showcase with quantity selector
- **Process**: Process steps with hover effects
- **PopularFlavors**: Product grid with add-to-cart functionality
- **Newsletter**: Email subscription form
- **ContactForm**: Contact form with validation
- **FeedbackForm**: Customer feedback form with rating system

### Mock API Features

The application includes a complete mock API service that simulates:

- **Newsletter Subscription**: Email validation and duplicate checking
- **Contact Form**: Message submission with validation
- **Feedback System**: Customer feedback with rating system
- **Order Processing**: Shopping cart to order conversion
- **Product Catalog**: Product listing and details

### Shopping Cart

The shopping cart is implemented using React Context and localStorage:

- **Add to Cart**: Products can be added with custom quantities
- **Update Quantity**: Users can modify item quantities
- **Remove Items**: Items can be removed from the cart
- **Persistent Storage**: Cart data persists across browser sessions
- **Real-time Updates**: UI updates immediately when cart changes

### Form Validation

All forms include comprehensive validation:

- **Client-side**: Real-time validation with visual feedback
- **Email Validation**: Proper email format checking
- **Required Fields**: All mandatory fields are enforced
- **Error Messages**: User-friendly error messages
- **Success Feedback**: Confirmation messages for successful submissions

## Styling

The application uses Styled Components for styling:

- **CSS-in-JS**: Component-scoped styling
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth transitions and hover effects
- **Theme Variables**: Consistent color scheme and spacing
- **Font Integration**: Google Fonts and Font Awesome icons

## Mock Data

The application includes sample data for:

- **Products**: 5 coffee products with images and descriptions
- **Categories**: Coffee, Ice Tea, Beverage, and Juices
- **Form Submissions**: All form data is stored in memory during the session

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## File Structure Details

```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.jsx              # Hero section with animations
│   │   ├── Categories.jsx         # Product categories
│   │   ├── FeaturedProduct.jsx   # Featured product showcase
│   │   ├── Process.jsx           # Process steps
│   │   ├── PopularFlavors.jsx    # Product grid
│   │   ├── Newsletter.jsx        # Newsletter subscription
│   │   ├── ContactForm.jsx       # Contact form
│   │   └── FeedbackForm.jsx      # Feedback form
│   ├── Header.jsx                # Navigation header
│   └── Footer.jsx                 # Site footer
├── pages/
│   ├── Home.jsx                  # Home page
│   ├── Menu.jsx                  # Menu page
│   ├── Deals.jsx                 # Deals page
│   └── Favourite.jsx             # Favourites page
├── services/
│   └── api.js                    # Mock API service
├── hooks/
│   └── useCart.js                # Shopping cart hook
└── App.jsx                       # Main app component
```

## Customization

### Adding New Products

Edit `src/services/api.js` and add products to the `mockData.products` array:

```javascript
{
  id: 6,
  name: "New Coffee Product",
  category: "coffee",
  price: 75.00,
  description: "Description of the new product",
  image_url: "/images/new-product.png",
  is_featured: false
}
```

### Modifying Styles

All styles are in the component files using Styled Components. You can modify:

- Colors in the CSS variables
- Fonts in the GlobalStyle
- Component-specific styles in each component file

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

## Troubleshooting

### Common Issues

1. **Port Conflicts**: If port 3000 is busy, use a different port
2. **Build Errors**: Make sure all dependencies are installed with `npm install`
3. **Images Not Loading**: Ensure images are in the `public/images/` folder

### Development Tips

- Use browser developer tools to debug
- Check the console for any JavaScript errors
- Use React Developer Tools extension for component debugging

## Performance

- **Build Size**: Optimized production build
- **Loading Speed**: Fast initial load with code splitting
- **Memory Usage**: Efficient React rendering with hooks

## Future Enhancements

Potential improvements for future versions:

- Real backend integration
- User authentication
- Payment processing
- Order tracking
- Admin dashboard
- Mobile app version

## License

This project is part of the ITP110 course assignment.

## Support

For questions or issues, refer to the React documentation or create an issue in the project repository.
