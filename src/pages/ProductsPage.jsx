import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Filter,
  ShoppingCart,
  Star,
  Heart,
  Eye,
  X,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import "../styles/Product.css";
import toast from "react-hot-toast";
// data for oukkaha product page
// data for oukkaha alaf issen page
// import {AlafIssenProducts} from "../data/AlafIssenData.js"

// Extract unique categories for filter
const ProductsPage = ({ products, type = false }) => {
  const isAlafIssen = type === "alafissen";

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showHeaderCart, setShowHeaderCart] = useState(false);

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error("Error parsing cart data from localStorage:", error);
        // If parsing fails, initialize with empty cart
        setCartItems([]);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Apply global color styles based on the type
    if (isAlafIssen) {
      document.documentElement.style.setProperty("--primary-color", "#4caf50");
      document.documentElement.style.setProperty("--primary-dark", "#3d8b40");
      document.documentElement.style.setProperty("--primary-light", "#e8f5e9");
    } else {
      document.documentElement.style.setProperty("--primary-color", "#f55b09");
      document.documentElement.style.setProperty("--primary-dark", "#d44800");
      document.documentElement.style.setProperty("--primary-light", "#fff8ed");
    }

    // Cleanup function to reset styles when component unmounts
    return () => {
      document.documentElement.style.setProperty("--primary-color", "#f55b09");
      document.documentElement.style.setProperty("--primary-dark", "#d44800");
      document.documentElement.style.setProperty("--primary-light", "#fff8ed");
    };
  }, [isAlafIssen]);

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

  // Add to cart functionality with increment based on addWith property
  const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    const minQuantity = product.minQuantity || 1;
    const addWithValue = product.addWith || minQuantity; // Use addWith if available, otherwise use minQuantity

    const existingItem = cartItems.find((item) => item.id === productId);
    if (existingItem) {
      // Increment quantity with addWith value if already in cart
      setCartItems(
        cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + addWithValue }
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

  // Update quantity functionality using addWith as step
  const updateQuantity = (productId, change) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const minQuantity = product.minQuantity || 1;
    const step = product.addWith || minQuantity; // Use addWith as step if available

    setCartItems(
      cartItems.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + change * step;
          // Ensure quantity is at least minimum
          return { ...item, quantity: Math.max(minQuantity, newQuantity) };
        }
        return item;
      })
    );
  };

  // Remove from cart functionality
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    toast.info("Produit retiré du panier");
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
    toast.info("Panier vidé");
    setShowCart(false);
    setShowHeaderCart(false);
  };

  // Cart total calculation
  const cartTotal = cartItems.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  // Total items in cart
  const cartItemsCount = cartItems.reduce((count) => count + 1, 0);

  // Function to render star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="rating-stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`star-icon ${i < fullStars ? "filled" : ""} ${
              hasHalfStar && i === fullStars ? "half-filled" : ""
            }`}
            size={16}
          />
        ))}
        <span className="rating-value">{rating}</span>
      </div>
    );
  };

  // Class name helper function for theme-based styling
  const getThemeClassName = (baseClass) => {
    return isAlafIssen ? `${baseClass} alafissen-theme` : baseClass;
  };

  return (
    <div className={getThemeClassName("products-page")}>
      {/* Added Header with Cart */}
      <header className="site-header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              {isAlafIssen ? "ALAF ISSEN" : "OUAKKAHA MOHAMED"}
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
                                    disabled={
                                      item.quantity <= product.minQuantity
                                    }
                                  >
                                    <Minus size={14} />
                                  </button>
                                  <span>{item.quantity}</span>
                                  <button
                                    onClick={() => updateQuantity(item.id, 1)}
                                  >
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
                        <button
                          className={getThemeClassName("checkout-button")}
                        >
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
                        <button
                          className="clear-cart-button"
                          onClick={clearCart}
                          style={{
                            padding: "10px",
                            backgroundColor: "#ea3232",
                            color: "white",
                            borderRadius: "5px",
                            fontWeight: "700",
                          }}
                        >
                          Vider le panier
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
          <span className="breadcrumb-current">
            {isAlafIssen ? "ALAF ISSEN" : "OUAKKAHA MOHAMED"}
          </span>
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
                    <ShoppingCart className="cart-icon" size={18} />
                    <h3 className="cart-title">Votre Panier</h3>
                  </div>
                  <button
                    className="cart-toggle"
                    onClick={() => setShowCart(!showCart)}
                    aria-label="Masquer le panier"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="cart-items">
                  {cartItems.map((item) => {
                    const product = products.find((p) => p.id === item.id);
                    return product ? (
                      <div key={item.id} className="cart-item">
                        <span className="cart-item-name">{product.name}</span>
                        <div className="cart-item-img">
                          <img src={product.image} alt="" />
                        </div>
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
                <div className="cart-actions-container">
                  <button className={getThemeClassName("checkout-button")}>
                    <ShoppingCart size={16} />
                    Passer la commande
                  </button>
                  <button className="clear-cart-button" onClick={clearCart}>
                    Vider le panier
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="products-grid-product">
            <div className="products-header">
              <h1 className="products-title">
                {isAlafIssen
                  ? "Boutique ALAF ISSEN"
                  : "Boutique OUAKKAHA MOHAMED"}
              </h1>
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
                        <span
                          className={`badge new-badge ${
                            isAlafIssen ? "alafissen-new-badge" : ""
                          }`}
                        >
                          Nouveau
                        </span>
                      )}
                      {product.discount > 0 && (
                        <span
                          className={`badge discount-badge ${
                            isAlafIssen ? "alafissen-discount-badge" : ""
                          }`}
                        >
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
                        className={getThemeClassName("add-to-cart-button")}
                        onClick={() => addToCart(product.id)}
                      >
                        <ShoppingCart
                          className="cart-icon"
                          color="white"
                          size={16}
                        />
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
                      <p className={getThemeClassName("product-price")}>
                        {product.price} MAD
                      </p>
                    </div>
                    <p className="product-description">{product.description}</p>
                    {/* Updated to show both minQuantity and addWith */}
                    <div className="min-quantity">
                      <span>Quantité minimum: {product.minQuantity}</span>
                      {product.addWith && (
                        <span className="add-with-info">
                          {" "}
                          | Incrément: {product.addWith}
                        </span>
                      )}
                    </div>
                    <div className="product-tags">
                      {product.tags.map((tag, index) => (
                        <span key={index} className={getThemeClassName("tag")}>
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
