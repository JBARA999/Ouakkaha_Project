import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Filter, ShoppingCart, Star, Heart, Eye, X, ChevronRight, Plus, Minus } from "lucide-react";
import "../styles/Product.css"; 
import toast from "react-hot-toast";

// Sample products data with minimum quantity added
const products = [
  {
    id: 1,
    name: "Poulet Fermier Marron – Élevé en Plein Air",
    category: "Volaille",
    description:
      "Un poulet fermier de couleur marron, élevé en plein air avec une alimentation naturelle pour une chair tendre et savoureuse.",
    image: "../../imgs/brown-hen-isolated_146346-1501.avif",
    price: 125,
    oldPrice: 150,
    rating: 4.9,
    tags: ["fermier", "plein air", "naturel"],
    url: "/poulet-fermier-marron",
    isNew: true,
    minQuantity: 500, // Added minimum quantity
  },
  {
    id: 2,
    name: "Poulet Blanc Bio – Élevé en Liberté",
    category: "poulet blanc",
    description:
      "Un poulet blanc de haute qualité, élevé en liberté, idéal pour une alimentation saine et équilibrée.",
    image:
      "../../imgs/chicken-with-white-tail-stands-field_558469-4135.jpg",
    price: 250,
    rating: 5.0,
    tags: ["bio", "élevé en liberté", "fermier"],
    url: "/poulet-blanc-bio",
    discount: 10,
    minQuantity: 500, // Added minimum quantity
  },
  {
    id: 3,
    name: "Poulet Fermier Clair – Alimentation Naturelle",
    category: "Volaille",
    description:
      "Un poulet fermier de couleur claire, nourri avec des aliments naturels pour une qualité supérieure.",
    image:
      "../../imgs/brown-hen-isolated-white-studio-shot_136670-2671.avif",
    price: 80,
    oldPrice: 95,
    rating: 4.6,
    tags: ["fermier", "naturel", "qualité supérieure"],
    url: "/poulet-fermier-clair",
    minQuantity: 500, // Added minimum quantity
  },
  {
    id: 4,
    name: "Trio de Poussins Bio – Élevage Naturel",
    category: "poussins",
    description:
      "Trois adorables poussins élevés sans OGM, parfaits pour un élevage respectueux de l'environnement.",
    image:
      "../../imgs/three-small-chickens-isolated-white-background_488220-8004.avif",
    price: 95,
    rating: 4.7,
    tags: ["poussins", "biologique", "sans OGM"],
    url: "/trio-poussins-bio",
    isNew: true,
    minQuantity: 500, // Added minimum quantity
  },
];

// Extract unique categories for filter
const categories = Array.from(
  new Set(products.map((product) => product.category))
);

const ProductsPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false); // Changed to false initially
  const [showHeaderCart, setShowHeaderCart] = useState(false); // Added state for header cart

  // Filter products by category
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category) {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    } else {
      setFilteredProducts(products);
    }
  };

  // Add to cart functionality with minimum quantity
  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    const minQuantity = product.minQuantity || 1;
    
    const existingItem = cartItems.find((item) => item.id === productId);
    if (existingItem) {
      // Increment quantity if already in cart
      setCartItems(
        cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + minQuantity }
            : item
        )
      );
    } else {
      // Add new item to cart with minimum quantity
      setCartItems([...cartItems, { id: productId, quantity: minQuantity }]);
    }
    
    // Show toast notification
    toast.success("Produit ajouté au panier");
  };

  // Update quantity functionality
  const updateQuantity = (productId, change) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const minQuantity = product.minQuantity || 1;
    const step = minQuantity; // Use min quantity as the step value
    
    setCartItems(
      cartItems.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + (change * step);
          // Ensure quantity is at least minimum
          return { ...item, quantity: Math.max(minQuantity, newQuantity) };
        }
        return item;
      })
    );
  };

  // Remove from cart functionality
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
    toast.info("Produit retiré du panier");
  };

  // Cart total calculation
  const cartTotal = cartItems.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  // Total items in cart
  const cartItemsCount = cartItems.reduce((count, item) => count + 1, 0);

  // Function to render star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="rating-stars">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`star-icon ${i < fullStars ? 'filled' : ''} ${hasHalfStar && i === fullStars ? 'half-filled' : ''}`} 
            size={16}
          />
        ))}
        <span className="rating-value">{rating}</span>
      </div>
    );
  };

  return (
    <div className="products-page">
      {/* Added Header with Cart */}
      <header className="site-header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              OUAKKAHA MOHAMED
            </Link>
            
            <div className="header-right">
              <div className="header-cart-container">
                <button 
                  className="header-cart-button" 
                  onClick={() => setShowHeaderCart(!showHeaderCart)}
                  aria-label="Votre panier"
                >
                  <ShoppingCart size={20} />
                  {cartItems.length > 0 && (
                    <span className="cart-badge">{cartItemsCount}</span>
                  )}
                </button>
                
                {/* Header Dropdown Cart */}
                {showHeaderCart && cartItems.length > 0 && (
                  <div className="header-cart-dropdown">
                    <div className="cart-header">
                      <h3>Votre Panier ({cartItemsCount})</h3>
                      <button 
                        className="close-cart"
                        onClick={() => setShowHeaderCart(false)}
                      >
                        <X size={16} />
                      </button>
                    </div>
                    
                    <div className="cart-items-list">
                      {cartItems.map((item) => {
                        const product = products.find((p) => p.id === item.id);
                        return product ? (
                          <div key={item.id} className="header-cart-item">
                            <div className="cart-item-img">
                              <img src={product.image} alt={product.name} />
                            </div>
                            <div className="cart-item-info">
                              <h4>{product.name}</h4>
                              <div className="cart-item-pricing">
                                <div className="quantity-controls">
                                  <button 
                                    onClick={() => updateQuantity(item.id, -1)}
                                    disabled={item.quantity <= product.minQuantity}
                                  >
                                    <Minus size={14} />
                                  </button>
                                  <span>{item.quantity}</span>
                                  <button onClick={() => updateQuantity(item.id, 1)}>
                                    <Plus size={14} />
                                  </button>
                                </div>
                                <span className="cart-item-price">
                                  {product.price * item.quantity} MAD
                                </span>
                              </div>
                            </div>
                            <button 
                              className="remove-cart-item"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : null;
                      })}
                    </div>
                    
                    <div className="header-cart-footer">
                      <div className="cart-total">
                        <span>Total</span>
                        <span className="total-amount">{cartTotal} MAD</span>
                      </div>
                      <div className="cart-actions">
                        <button className="checkout-button">
                          <ShoppingCart size={16} />
                          Passer la commande
                        </button>
                        <button 
                          className="view-cart-button"
                          onClick={() => {
                            setShowHeaderCart(false);
                            setShowCart(true);
                          }}
                        >
                          Voir le panier
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            Accueil
          </Link>
          <span className="breadcrumb-separator">
            <ChevronRight size={14} />
          </span>
          <span className="breadcrumb-current">OUAKKAHA MOHAMED</span>
        </div>
        <div className="content-wrapper">
          <div className="filters">
            <div className="filters-header">
              <Filter className="filter-icon" size={18} />
              <h3 className="filters-title">Filtres</h3>
            </div>
            <div className="filters-list">
              <button
                className={`filter-button ${
                  selectedCategory === null ? "active" : ""
                }`}
                onClick={() => filterByCategory(null)}
              >
                Tous les produits
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-button ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => filterByCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            {cartItems.length > 0 && showCart && (
              <div className="cart-summary">
                <div className="cart-header">
                  <div className="cart-header-left">
                    <ShoppingCart className="cart-icon " size={18} />
                    <h3 className="cart-title">Votre Panier</h3>
                  </div>
                  <button 
                    className="cart-toggle" 
                    onClick={() => setShowCart(!showCart)}
                    aria-label="Masquer le panier"
                  >
                    <X size={16}  />
                  </button>
                </div>
                <div className="cart-items">
                  {cartItems.map((item) => {
                    const product = products.find((p) => p.id === item.id);
                    return product ? (
                      <div key={item.id} className="cart-item">
                        <span className="cart-item-name">{product.name}</span>
                        <div className="cart-item-details">
                          <div className="quantity-controls">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={item.quantity <= product.minQuantity}
                            >
                              <Minus size={14} />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)}>
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="cart-item-price">
                            {product.price * item.quantity} MAD
                          </span>
                          <button 
                            className="remove-item-button"
                            onClick={() => removeFromCart(item.id)}
                            aria-label="Retirer du panier"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
                <div className="cart-total">
                  <span>Total</span>
                  <span>{cartTotal} MAD</span>
                </div>
                <button className="checkout-button">
                  <ShoppingCart size={16} />
                  Passer la commande
                </button>
              </div>
            )}
          </div>
          <div className="products-grid-product">
            <div className="products-header">
              <h1 className="products-title">Boutique OUAKKAHA MOHAMED</h1>
              <div className="products-count">
                {filteredProducts.length} produits
              </div>
            </div>
            <div className="products-list">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    <div className="product-badges">
                      {product.isNew && (
                        <span className="badge new-badge">Nouveau</span>
                      )}
                      {product.discount > 0 && (
                        <span className="badge discount-badge">
                          -{product.discount}%
                        </span>
                      )}
                    </div>
                    <div className="product-actions">
                      <button
                        className="action-button"
                        aria-label="Ajouter aux favoris"
                      >
                        <Heart className="action-icon" />
                      </button>
                      <button
                        className="action-button"
                        aria-label="Aperçu rapide"
                      >
                        <Eye className="action-icon" />
                      </button>
                    </div>
                    <div className="product-overlay">
                      <button
                        className="add-to-cart-button"
                        onClick={() => addToCart(product.id)}
                      >
                        <ShoppingCart className="cart-icon" color="white" size={16} />
                        <span>Ajouter au panier</span>
                      </button>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-header">
                      {renderStars(product.rating)}
                    </div>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-price-container">
                      {product.oldPrice && (
                        <span className="product-old-price">
                          {product.oldPrice} MAD
                        </span>
                      )}
                      <p className="product-price">{product.price} MAD</p>
                    </div>
                    <p className="product-description">
                      {product.description}
                    </p>
                    {/* Added min quantity display */}
                    <div className="min-quantity">
                      <span>Quantité minimum: {product.minQuantity}</span>
                    </div>
                    <div className="product-tags">
                      {product.tags.map((tag, index) => (
                        <span key={index} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;