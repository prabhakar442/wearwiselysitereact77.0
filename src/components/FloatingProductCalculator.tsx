import React, { useState } from 'react';
import { Plus, X, ShoppingCart, Trash2, Menu } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProductCategory {
  category: string;
  items: Product[];
}

const FloatingProductCalculator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showProductList, setShowProductList] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const GST_RATE = 18; // Fixed 18% GST

  // Product categories and items with fixed prices
  const productCategories: ProductCategory[] = [
    {
      category: 'Shirts & Tops',
      items: [
        { id: 1, name: 'Shirt (Regular)', price: 90, quantity: 1 },
        { id: 2, name: 'Shirt with Starch', price: 50, quantity: 1 },
        { id: 3, name: 'Designer Shirt', price: 120, quantity: 1 },
        { id: 4, name: 'T-Shirt', price: 80, quantity: 1 },
        { id: 5, name: 'Ladies Top', price: 80, quantity: 1 },
      ]
    },
    {
      category: 'Pants & Jeans',
      items: [
        { id: 6, name: 'Trouser/Pant', price: 90, quantity: 1 },
        { id: 7, name: 'Trouser with Starch', price: 100, quantity: 1 },
        { id: 8, name: 'Jeans', price: 100, quantity: 1 },
      ]
    },
    {
      category: 'Skirts & Dresses',
      items: [
        { id: 9, name: 'Short Skirt', price: 100, quantity: 1 },
        { id: 10, name: 'Long Skirt', price: 150, quantity: 1 },
        { id: 11, name: 'Plain Jumpsuit', price: 200, quantity: 1 },
        { id: 12, name: 'Heavy Jumpsuit', price: 300, quantity: 1 },
        { id: 13, name: 'Plain Gown', price: 250, quantity: 1 },
        { id: 14, name: 'Medium Gown', price: 350, quantity: 1 },
        { id: 15, name: 'Heavy Gown', price: 700, quantity: 1 },
      ]
    },
    {
      category: 'Footwear Cleaning',
      items: [
        { id: 16, name: 'Ankle Boots', price: 300, quantity: 1 },
        { id: 17, name: 'Premium Ankle Boots', price: 400, quantity: 1 },
        { id: 18, name: 'Bellies', price: 200, quantity: 1 },
        { id: 19, name: 'Designer Bellies', price: 250, quantity: 1 },
        { id: 20, name: 'Leather Shoes', price: 300, quantity: 1 },
        { id: 21, name: 'Premium Leather', price: 400, quantity: 1 },
        { id: 22, name: 'Boots', price: 400, quantity: 1 },
        { id: 23, name: 'Slippers', price: 97, quantity: 1 },
        { id: 24, name: 'Sports Shoes', price: 200, quantity: 1 },
        { id: 25, name: 'Premium Sports', price: 250, quantity: 1 },
        { id: 26, name: 'Sneakers', price: 200, quantity: 1 },
        { id: 27, name: 'Jordan Shoes', price: 250, quantity: 1 },
        { id: 28, name: 'Kids Shoes', price: 150, quantity: 1 },
        { id: 29, name: 'Suede Shoes', price: 350, quantity: 1 },
      ]
    },
    {
      category: 'Jackets & Outerwear',
      items: [
        { id: 30, name: 'Leather Jacket', price: 400, quantity: 1 },
        { id: 31, name: 'Heavy Leather Jacket', price: 300, quantity: 1 },
        { id: 32, name: 'Rexine Jacket', price: 250, quantity: 1 },
        { id: 33, name: 'Suede Jacket', price: 400, quantity: 1 },
        { id: 73, name: 'Half Jacket', price: 70, quantity: 1 },
        { id: 75, name: 'Full Jacket', price: 90, quantity: 1 },
      ]
    },
    {
      category: 'Bags & Accessories',
      items: [
        { id: 34, name: 'Leather Backpack', price: 400, quantity: 1 },
        { id: 35, name: 'Hand Purse', price: 200, quantity: 1 },
        { id: 36, name: 'Ladies Purse', price: 300, quantity: 1 },
        { id: 37, name: 'Laptop Bag', price: 200, quantity: 1 },
        { id: 38, name: 'Backpack', price: 200, quantity: 1 },
        { id: 39, name: 'School Bag', price: 200, quantity: 1 },
      ]
    },
    {
      category: 'Traditional Wear',
      items: [
        { id: 40, name: 'Pajama/Salwar', price: 40, quantity: 1 },
        { id: 41, name: 'Plain Palazzo', price: 50, quantity: 1 },
        { id: 42, name: 'Heavy Palazzo', price: 100, quantity: 1 },
        { id: 43, name: 'Kurta/Kameez', price: 40, quantity: 1 },
        { id: 44, name: 'Work Kurta', price: 55, quantity: 1 },
        { id: 45, name: 'Light Work Kurta', price: 50, quantity: 1 },
        { id: 46, name: 'Heavy Work Kurta', price: 70, quantity: 1 },
        { id: 47, name: 'Regular Sharara', price: 120, quantity: 1 },
        { id: 48, name: 'Heavy Sharara', price: 150, quantity: 1 },
        { id: 49, name: 'Dupatta', price: 30, quantity: 1 },
        { id: 50, name: 'Heavy Dupatta', price: 50, quantity: 1 },
        { id: 51, name: 'Blouse', price: 30, quantity: 1 },
        { id: 52, name: 'Heavy Blouse', price: 40, quantity: 1 },
        { id: 53, name: 'Heavy Lehenga', price: 250, quantity: 1 },
        { id: 54, name: 'Regular Lehenga', price: 200, quantity: 1 },
        { id: 55, name: 'Bridal Gown', price: 250, quantity: 1 },
        { id: 56, name: 'Choli', price: 40, quantity: 1 },
        { id: 58, name: 'Anarkali Suit', price: 150, quantity: 1 },
        { id: 59, name: 'Short Shrug', price: 40, quantity: 1 },
        { id: 60, name: 'Kids Kurta', price: 30, quantity: 1 },
        { id: 61, name: 'Kids Sherwani', price: 100, quantity: 1 },
      ]
    },
    {
      category: 'Winter Collection',
      items: [
        { id: 62, name: 'Sweatshirt', price: 50, quantity: 1 },
        { id: 63, name: 'Sweatpants', price: 50, quantity: 1 },
        { id: 64, name: 'Half Sweater', price: 40, quantity: 1 },
        { id: 65, name: 'Full Sweater', price: 60, quantity: 1 },
        { id: 66, name: 'Waistcoat', price: 60, quantity: 1 },
        { id: 67, name: 'Coat', price: 100, quantity: 1 },
        { id: 68, name: 'Designer Coat', price: 120, quantity: 1 },
        { id: 69, name: 'Overcoat', price: 120, quantity: 1 },
        { id: 70, name: 'Woolen Overcoat', price: 150, quantity: 1 },
        { id: 76, name: 'Shawl', price: 60, quantity: 1 },
        { id: 77, name: 'Fancy Shawl', price: 80, quantity: 1 },
      ]
    },
    {
      category: 'Home Textiles',
      items: [
        { id: 78, name: 'Single Bedsheet', price: 50, quantity: 1 },
        { id: 79, name: 'Double Bedsheet', price: 80, quantity: 1 },
        { id: 80, name: 'Single Bed Cover', price: 50, quantity: 1 },
        { id: 81, name: 'Double Bed Cover', price: 80, quantity: 1 },
        { id: 82, name: 'Pillow Cover', price: 20, quantity: 1 },
        { id: 83, name: 'Cushion Cover', price: 20, quantity: 1 },
        { id: 84, name: 'Window Curtain', price: 30, quantity: 1 },
        { id: 85, name: 'Door Curtain', price: 50, quantity: 1 },
        { id: 86, name: 'Net Curtain', price: 60, quantity: 1 },
      ]
    }
  ];

  // Filter products based on search
  const filteredCategories = productCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setShowProductList(false);
    setSearchTerm('');
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gstAmount = (subtotal * GST_RATE) / 100;
  const total = subtotal + gstAmount;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 lg:hidden ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Desktop Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hidden lg:flex fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 items-center space-x-2 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <ShoppingCart size={20} />
        <span className="font-medium">Price Calculator</span>
        {totalItems > 0 && (
          <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-full sm:max-w-md lg:max-w-lg bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Laundry Services</h2>
              <p className="text-blue-100 text-sm">Price Calculator</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-800 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Search and Add Section */}
          <div className="p-4 border-b bg-gray-50">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowProductList(true);
                }}
                onFocus={() => setShowProductList(true)}
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
              <Menu className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            {/* Product Dropdown */}
            {showProductList && (
              <div className="absolute z-10 mt-1 w-full max-w-md lg:max-w-lg left-4 right-4 max-h-80 overflow-auto bg-white border border-gray-300 rounded-lg shadow-xl">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category) => (
                    <div key={category.category}>
                      <div className="px-4 py-2 bg-blue-50 font-semibold text-sm text-blue-800 sticky top-0 border-b">
                        {category.category}
                      </div>
                      {category.items.map((item) => (
                        <div
                          key={item.id}
                          className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex justify-between items-center border-b border-gray-100 transition-colors"
                          onClick={() => addToCart(item)}
                        >
                          <span className="font-medium text-gray-800">{item.name}</span>
                          <span className="text-blue-600 font-bold">₹{item.price}</span>
                        </div>
                      ))}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center text-gray-500">
                    No services found
                  </div>
                )}
                <div className="p-2 bg-gray-50 border-t">
                  <button
                    onClick={() => setShowProductList(false)}
                    className="w-full text-center text-sm text-gray-600 hover:text-gray-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Selected Items ({totalItems})</h3>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Clear All
                </button>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg mb-2">No items selected</p>
                <p className="text-gray-400 text-sm">Search and add services above</p>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-blue-600 font-semibold">₹{item.price} each</p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <div className="flex items-center space-x-1 bg-gray-100 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded-l-lg"
                        >
                          <span className="text-lg font-bold text-gray-600">−</span>
                        </button>
                        <span className="px-3 py-1 font-semibold min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded-r-lg"
                        >
                          <span className="text-lg font-bold text-gray-600">+</span>
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 p-1 rounded"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Total Section */}
          {cart.length > 0 && (
            <div className="border-t bg-gradient-to-r from-gray-50 to-gray-100 p-4">
              <div className="space-y-3">
                <div className="flex justify-between text-base">
                  <span className="text-gray-700">Subtotal:</span>
                  <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-700">GST (18%):</span>
                  <span className="font-semibold">₹{gstAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold border-t pt-3">
                  <span className="text-gray-800">Total Amount:</span>
                  <span className="text-blue-600">₹{total.toFixed(2)}</span>
                </div>
                <div className="text-center text-sm text-gray-600 mt-2">
                  Total Items: {totalItems} • All prices include 18% GST
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FloatingProductCalculator;