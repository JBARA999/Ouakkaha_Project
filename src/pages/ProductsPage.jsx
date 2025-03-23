import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Filter, ShoppingCart, Star, Heart, Eye, X, ChevronRight } from "lucide-react";
import "../styles/Product.css"; 
import toast from "react-hot-toast";

// Sample products data (unchanged)
const products = [
  {
    id: 1,
    name: "Poulet Fermier Marron – Élevé en Plein Air",
    category: "Volaille",
    description:
      "Un poulet fermier de couleur marron, élevé en plein air avec une alimentation naturelle pour une chair tendre et savoureuse.",
    image: "../../public/imgs/brown-hen-isolated_146346-1501.avif",
    price: 125,
    oldPrice: 150, // Added old price for discount display
    rating: 4.9,
    tags: ["fermier", "plein air", "naturel"],
    url: "/poulet-fermier-marron",
    isNew: true, // Added to show new badge
  },
  {
    id: 2,
    name: "Poulet Blanc Bio – Élevé en Liberté",
    category: "poulet blanc",
    description:
      "Un poulet blanc de haute qualité, élevé en liberté, idéal pour une alimentation saine et équilibrée.",
    image:
      "../../public/imgs/chicken-with-white-tail-stands-field_558469-4135.jpg",
    price: 250,
    rating: 5.0,
    tags: ["bio", "élevé en liberté", "fermier"],
    url: "/poulet-blanc-bio",
    discount: 10, // Added discount percentage
  },
  {
    id: 3,
    name: "Poulet Fermier Clair – Alimentation Naturelle",
    category: "Volaille",
    description:
      "Un poulet fermier de couleur claire, nourri avec des aliments naturels pour une qualité supérieure.",
    image:
      "../../public/imgs/brown-hen-isolated-white-studio-shot_136670-2671.avif",
    price: 80,
    oldPrice: 95,
    rating: 4.6,
    tags: ["fermier", "naturel", "qualité supérieure"],
    url: "/poulet-fermier-clair",
  },
  {
    id: 4,
    name: "Trio de Poussins Bio – Élevage Naturel",
    category: "poussins",
    description:
      "Trois adorables poussins élevés sans OGM, parfaits pour un élevage respectueux de l'environnement.",
    image:
      "../../public/imgs/three-small-chickens-isolated-white-background_488220-8004.avif",
    price: 95,
    rating: 4.7,
    tags: ["poussins", "biologique", "sans OGM"],
    url: "/trio-poussins-bio",
    isNew: true,
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
  const [showCart, setShowCart] = useState(true); // To control cart visibility on mobile

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

  // Add to cart functionality
  const addToCart = (productId) => {
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem) {
      // Increment quantity if already in cart
      setCartItems(
        cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new item to cart
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
      
      // Show cart on first add (for mobile)
      setShowCart(true);
    }

    // Show toast notification (requires react-toastify)
    toast.success("Produit ajouté au panier");
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
      <div className="main-content">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            Accueil
          </Link>
          <span className="breadcrumb-separator">
            <ChevronRight size={14} />
          </span>
          <Link to="/boutique" className="breadcrumb-link">
            Boutique
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
                          <span className="cart-item-quantity">
                            x{item.quantity}
                          </span>
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