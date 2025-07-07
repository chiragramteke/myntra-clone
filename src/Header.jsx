import PropTypes from 'prop-types';

function Header({
  setCategory,
  cartItems,
  favorites,
  searchQuery,
  setSearchQuery,
}) {
  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <header className="myntra-header">
      <div className="logo">MYNTRA</div>

      <nav className="nav-links">
        {['Home', 'Men', 'Women', 'Kids', 'Beauty', 'Books', 'Contact us'].map(
          (cat) => (
            <button
              key={cat}
              className="nav-btn"
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          )
        )}
      </nav>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search (shirt, book, dress...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="user-section">
        <div
          className="user-icon"
          onClick={() => handleCategoryClick('PROFILE')}
        >
          <span>👤</span>
        </div>
        <div
          className="user-icon"
          onClick={() => handleCategoryClick('FAVORITE')}
        >
          <span>🖤</span>
          <p>({favorites.length})</p>
        </div>
        <div className="user-icon" onClick={() => handleCategoryClick('CART')}>
          <span>🛒</span>
          <p>({cartItems.length})</p>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  setCategory: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default Header;
