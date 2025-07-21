import React, { useState, useMemo } from "react";
import { FileText, Plus, Trash2, Save, Download, QrCode, Check, Lock, Search } from "lucide-react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

// Configuration
const CONFIG = {
  PASSWORD: "admin123", // Change this to your desired password
  SHEET_ID: "YOUR_GOOGLE_SHEET_ID", // Replace with your Google Sheet ID
  CLIENT_EMAIL: "YOUR_SERVICE_ACCOUNT_EMAIL", // Replace with your service account email
  PRIVATE_KEY: "YOUR_PRIVATE_KEY", // Replace with your private key
};

// PDF Generation utility
const generatePDF = async (customer, orders, totalAmount) => {
  try {
    await import("jspdf-autotable");

    const gstRate = 0.18;
    const gstAmount = totalAmount * gstRate;
    const grandTotal = totalAmount + gstAmount;
    const invoiceNumber = `INV-${Date.now()}`;
    const currentDate = new Date().toLocaleDateString('en-IN');

    const doc = new jsPDF();
    
    // Header
    doc.setFillColor(41, 98, 255);
    doc.rect(0, 0, 210, 35, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('WearWisely Laundry', 20, 20);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Premium Quality • Quick Service • Affordable Rates', 20, 28);

    // Invoice details
    doc.setTextColor(51, 51, 51);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('INVOICE', 160, 50);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Invoice #: ${invoiceNumber}`, 160, 58);
    doc.text(`Date: ${currentDate}`, 160, 65);
    
    // Company details
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('From:', 20, 50);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('WearWisely Laundry', 20, 58);
    doc.text('123 Service Street, Laundry District', 20, 65);
    doc.text('Phone: +91 xxxxxxxx', 20, 72);
    doc.text('Email: info@laundryservice.com', 20, 79);
    doc.text('GST: 12ABCDE3456F7Z8', 20, 86);

    // Customer details
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Bill To:', 20, 105);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`${customer.name}`, 20, 113);
    doc.text(`${customer.phone}`, 20, 120);
    if (customer.email) {
      doc.text(`${customer.email}`, 20, 127);
    }
    
    // Address handling
    const addressLines = doc.splitTextToSize(customer.address, 80);
    let yPos = customer.email ? 134 : 127;
    addressLines.forEach(line => {
      doc.text(line, 20, yPos);
      yPos += 7;
    });
    doc.text(`Pincode: ${customer.pincode}`, 20, yPos + 7);

    // Table header
    const tableStartY = yPos + 25;
    doc.setFillColor(240, 240, 240);
    doc.rect(20, tableStartY, 170, 10, 'F');
    doc.setTextColor(51, 51, 51);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text('Item', 25, tableStartY + 7);
    doc.text('Qty', 100, tableStartY + 7);
    doc.text('Rate (₹)', 125, tableStartY + 7);
    doc.text('Amount (₹)', 160, tableStartY + 7);

    // Table rows
    let currentY = tableStartY + 15;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    
    orders.forEach((order, index) => {
      const itemTotal = order.quantity * order.rate;
      
      if (index % 2 === 0) {
        doc.setFillColor(250, 250, 250);
        doc.rect(20, currentY - 5, 170, 10, 'F');
      }
      
      doc.setTextColor(51, 51, 51);
      doc.text(order.item, 25, currentY + 2);
      doc.text(order.quantity.toString(), 100, currentY + 2);
      doc.text(order.rate.toLocaleString(), 125, currentY + 2);
      doc.text(itemTotal.toLocaleString(), 160, currentY + 2);
      
      currentY += 12;
    });

    // Totals section
    const totalsY = currentY + 10;
    doc.setDrawColor(200, 200, 200);
    doc.line(120, totalsY, 190, totalsY);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Subtotal:', 130, totalsY + 10);
    doc.text(`₹${totalAmount.toLocaleString()}`, 170, totalsY + 10);
    doc.text('GST (18%):', 130, totalsY + 20);
    doc.text(`₹${gstAmount.toLocaleString(undefined, {maximumFractionDigits: 2})}`, 170, totalsY + 20);
    
    // Grand total
    doc.setFillColor(41, 98, 255);
    doc.rect(120, totalsY + 25, 70, 12, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Grand Total:', 130, totalsY + 33);
    doc.text(`₹${grandTotal.toLocaleString(undefined, {maximumFractionDigits: 2})}`, 170, totalsY + 33);

    // Footer
    const footerY = totalsY + 50;
    doc.setTextColor(102, 102, 102);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('Thank you for choosing Professional Laundry Service!', 20, footerY);
    doc.text('For any queries, please contact us at +91 98765 43210', 20, footerY + 8);
    doc.text('Visit us: www.professionallaundry.com', 20, footerY + 16);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('Terms & Conditions: Payment due within 30 days. Goods once delivered cannot be returned.', 20, footerY + 30);

    return { doc, invoiceNumber };
  } catch (error) {
    console.error("PDF generation error:", error);
    throw new Error("Failed to generate PDF. Please try again.");
  }
};

// Updated laundry items from the Excel file
const laundryItems = [
  // Daily Wear
  { name: "Shirt Starch", rate: 50, category: "Daily" },
  { name: "Shirt", rate: 90, category: "Daily" },
  { name: "Shirt Designer", rate: 120, category: "Daily" },
  { name: "T Shirt", rate: 80, category: "Daily" },
  { name: "Ladies Top", rate: 80, category: "Daily" },
  { name: "Trouser/Pant Starch", rate: 100, category: "Daily" },
  { name: "Trouser / Pant", rate: 90, category: "Daily" },
  { name: "Jeans", rate: 100, category: "Daily" },
  { name: "Skirt Half", rate: 100, category: "Daily" },
  { name: "Skirt Long", rate: 150, category: "Daily" },
  { name: "Jump Suit Heavy", rate: 300, category: "Daily" },
  { name: "Jump Suit Plain", rate: 200, category: "Daily" },
  { name: "Gown Plain", rate: 250, category: "Daily" },
  { name: "Gown M", rate: 350, category: "Daily" },
  { name: "Gown H", rate: 700, category: "Daily" },

  // Ethnic Wear
  { name: "Payjama / Salwar/ Legging Starch", rate: 60, category: "Ethnic" },
  { name: "Payjama / Salwar/ Legging", rate: 100, category: "Ethnic" },
  { name: "Plazo Plain", rate: 110, category: "Ethnic" },
  { name: "Plazo H", rate: 200, category: "Ethnic" },
  { name: "Kurta / Kameez Starch", rate: 60, category: "Ethnic" },
  { name: "Kurta / Kameez", rate: 90, category: "Ethnic" },
  { name: "Kurta / Kameez - Work", rate: 120, category: "Ethnic" },
  { name: "Gents Kurta", rate: 90, category: "Ethnic" },
  { name: "Gents Kurta Work", rate: 120, category: "Ethnic" },
  { name: "Kurta / Kameez - Light Work Starch", rate: 60, category: "Ethnic" },
  { name: "Kurta / Kameez - Light Work", rate: 120, category: "Ethnic" },
  { name: "Sharara - R", rate: 200, category: "Ethnic" },
  { name: "Sharara - M", rate: 300, category: "Ethnic" },
  { name: "Sharara - H", rate: 400, category: "Ethnic" },
  { name: "Dupatta", rate: 60, category: "Ethnic" },
  { name: "Blouse", rate: 60, category: "Ethnic" },
  { name: "Blouse - H", rate: 80, category: "Ethnic" },
  { name: "Saree - R", rate: 160, category: "Ethnic" },
  { name: "Saree - M", rate: 180, category: "Ethnic" },
  { name: "Saree - H", rate: 250, category: "Ethnic" },
  { name: "Saree - R Starch", rate: 80, category: "Ethnic" },
  { name: "Saree - H Starch", rate: 100, category: "Ethnic" },
  { name: "Gents Sherwani - R", rate: 250, category: "Ethnic" },
  { name: "Gents Sherwani - H", rate: 300, category: "Ethnic" },
  { name: "Gents Indo Western - R", rate: 300, category: "Ethnic" },
  { name: "Gents Indo Western - H", rate: 400, category: "Ethnic" },
  { name: "Lehnga / Ghagra - R", rate: 300, category: "Ethnic" },
  { name: "Lehnga / Ghagra - H", rate: 1000, category: "Ethnic" },
  { name: "Lehnga / Bridal - H", rate: 1200, category: "Ethnic" },
  { name: "Bridal Gown", rate: 400, category: "Ethnic" },
  { name: "Choli - R", rate: 80, category: "Ethnic" },
  { name: "Chaniya - R", rate: 150, category: "Ethnic" },
  { name: "Anarkali Suit - R", rate: 250, category: "Ethnic" },
  { name: "Anarkali Suit - M", rate: 300, category: "Ethnic" },
  { name: "Shrug Long", rate: 120, category: "Ethnic" },
  { name: "Zooba", rate: 150, category: "Ethnic" },
  { name: "kids Kurta", rate: 60, category: "Ethnic" },
  { name: "Kids Sherwani - R", rate: 120, category: "Ethnic" },
  { name: "Kids Coat Pant", rate: 250, category: "Ethnic" },

  // Woolen
  { name: "Sweat shirt", rate: 190, category: "Woolen" },
  { name: "Sweat Pants", rate: 172, category: "Woolen" },
  { name: "Sweater Half", rate: 130, category: "Woolen" },
  { name: "Sweater Full", rate: 180, category: "Woolen" },
  { name: "Waist Coat", rate: 180, category: "Woolen" },
  { name: "Coat", rate: 220, category: "Woolen" },
  { name: "Coat Designer", rate: 260, category: "Woolen" },
  { name: "Over Coat", rate: 300, category: "Woolen" },
  { name: "Half Koti - R", rate: 180, category: "Woolen" },
  { name: "Jacket Half", rate: 180, category: "Woolen" },
  { name: "Jacket Full", rate: 250, category: "Woolen" },
  { name: "Jacket Fur", rate: 260, category: "Woolen" },
  { name: "Shawl", rate: 200, category: "Woolen" },
  { name: "Blanket AC / Small", rate: 200, category: "Woolen" },
  { name: "Blanket AC / Large", rate: 250, category: "Woolen" },
  { name: "Comforter - D", rate: 250, category: "Woolen" },
  { name: "Comforter - S", rate: 180, category: "Woolen" },
  { name: "Blanket - S", rate: 250, category: "Woolen" },
  { name: "Blanket - D", rate: 350, category: "Woolen" },
  { name: "Quilt / Rajai - S", rate: 250, category: "Woolen" },
  { name: "Quilt / Rajai - D", rate: 350, category: "Woolen" },
  { name: "Blanket Kids", rate: 150, category: "Woolen" },

  // Household
  { name: "Bedsheet - S", rate: 120, category: "Household" },
  { name: "Bedsheet - D", rate: 180, category: "Household" },
  { name: "Bed Cover - S", rate: 150, category: "Household" },
  { name: "Bed Cover _ D", rate: 250, category: "Household" },
  { name: "Pillow Cover", rate: 60, category: "Household" },
  { name: "Cushion Cover", rate: 70, category: "Household" },
  { name: "Window Curtain", rate: 100, category: "Household" },
  { name: "Door Curtain", rate: 150, category: "Household" },
  { name: "Net Curtain", rate: 180, category: "Household" },
  { name: "Teddy - M", rate: 300, category: "Household" },
  { name: "Teddy - Large", rate: 500, category: "Household" },

  // Shoe Cleaning
  { name: "Ankle", rate: 300, category: "Shoe Cleaning" },
  { name: "Ankle Premium", rate: 400, category: "Shoe Cleaning" },
  { name: "Belle", rate: 200, category: "Shoe Cleaning" },
  { name: "Belle Designer", rate: 250, category: "Shoe Cleaning" },
  { name: "Leather", rate: 300, category: "Shoe Cleaning" },
  { name: "Leather Premium", rate: 400, category: "Shoe Cleaning" },
  { name: "Boots", rate: 400, category: "Shoe Cleaning" },
  { name: "Sleppers", rate: 97, category: "Shoe Cleaning" },
  { name: "Sports", rate: 200, category: "Shoe Cleaning" },
  { name: "Sports Premium", rate: 250, category: "Shoe Cleaning" },
  { name: "Sneakers", rate: 200, category: "Shoe Cleaning" },
  { name: "Jorden Shoes", rate: 250, category: "Shoe Cleaning" },
  { name: "Kids Shoe", rate: 150, category: "Shoe Cleaning" },
  { name: "Suede", rate: 350, category: "Shoe Cleaning" },

  // Jacket Cleaning
  { name: "Leather Jacket", rate: 400, category: "Jacket Cleaning" },
  { name: "Leather Jacket H", rate: 300, category: "Jacket Cleaning" },
  { name: "Leather Jacket Rexine", rate: 250, category: "Jacket Cleaning" },
  { name: "Leather Jacket Suede", rate: 400, category: "Jacket Cleaning" },

  // Handbag Cleaning
  { name: "Backpack Leather", rate: 400, category: "Handbag Cleaning" },
  { name: "Ladies Hand Purse", rate: 200, category: "Handbag Cleaning" },
  { name: "Ladies Purse", rate: 300, category: "Handbag Cleaning" },
  { name: "Laptop Bag", rate: 200, category: "Handbag Cleaning" },
  { name: "Backpack", rate: 200, category: "Handbag Cleaning" },
  { name: "Kids School Bag", rate: 200, category: "Handbag Cleaning" },

  // Steam Press
  { name: "Shirt (Steam Press)", rate: 40, category: "Steam Press" },
  { name: "Shirt Designer (Steam Press)", rate: 50, category: "Steam Press" },
  { name: "T-Shirt (Steam Press)", rate: 40, category: "Steam Press" },
  { name: "Ladies Top (Steam Press)", rate: 40, category: "Steam Press" },
  { name: "Trouser / Pant (Steam Press)", rate: 40, category: "Steam Press" },
  { name: "Jeans (Steam Press)", rate: 40, category: "Steam Press" },
  { name: "Skirt Half (Steam Press)", rate: 50, category: "Steam Press" },
  { name: "Skirt Full (Steam Press)", rate: 100, category: "Steam Press" },
  { name: "Dress (Steam Press)", rate: 100, category: "Steam Press" },
  { name: "Dress Designer (Steam Press)", rate: 120, category: "Steam Press" },
  { name: "Jump Suit R (Steam Press)", rate: 100, category: "Steam Press" },
  { name: "Gown Plain (Steam Press)", rate: 150, category: "Steam Press" },
  { name: "Gown M (Steam Press)", rate: 195, category: "Steam Press" },
  { name: "Gown H (Steam Press)", rate: 200, category: "Steam Press" },
  { name: "Kids Dress (Steam Press)", rate: 50, category: "Steam Press" },
];

// Function to append data to Google Sheet
const appendToGoogleSheet = async (orderData) => {
  try {
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.SHEET_ID}/values/Sheet1!A:Z:append?valueInputOption=USER_ENTERED`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${await getAccessToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [
          [
            orderData.orderNumber,
            orderData.createdAt,
            orderData.customer.name,
            orderData.customer.phone,
            orderData.customer.email || "",
            orderData.customer.address,
            orderData.customer.pincode,
            orderData.customer.date,
            JSON.stringify(orderData.orders),
            orderData.totalAmount,
            orderData.gstAmount,
            orderData.grandTotal,
            orderData.paymentMethod,
            orderData.paymentStatus,
          ]
        ]
      })
    });

    if (!response.ok) {
      throw new Error("Failed to save to Google Sheet");
    }

    return true;
  } catch (error) {
    console.error("Google Sheets error:", error);
    throw new Error("Failed to save data to Google Sheet");
  }
};

// Function to get access token for Google Sheets API
const getAccessToken = async () => {
  try {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: createJWT(),
      })
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw new Error("Failed to authenticate with Google");
  }
};

// Function to create JWT for Google Sheets API
const createJWT = () => {
  // In a real implementation, you would generate a JWT here
  // This is a simplified version - you should use a proper JWT library
  return "your_generated_jwt_token";
};

const AdminOrderPage = () => {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    date: new Date().toISOString().split('T')[0],
  });

  const [orders, setOrders] = useState([{ item: "", quantity: 1, rate: 0 }]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  const [password, setPassword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const validateForm = () => {
    const newErrors = {};
    
    if (!customer.name.trim()) newErrors.name = "Name is required";
    if (!customer.phone.trim()) newErrors.phone = "Phone is required";
    if (!/^\d{10}$/.test(customer.phone.replace(/\s|-/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (customer.email && !/\S+@\S+\.\S+/.test(customer.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!customer.address.trim()) newErrors.address = "Address is required";
    if (!customer.pincode.trim()) newErrors.pincode = "Pincode is required";
    if (!/^\d{6}$/.test(customer.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode";
    }
    if (!customer.date) newErrors.date = "Date is required";
    if (!paymentMethod) newErrors.paymentMethod = "Please select a payment method";
    
    const validOrders = orders.filter(order => order.item && order.quantity > 0);
    if (validOrders.length === 0) {
      newErrors.orders = "Please add at least one item";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrderChange = (index, field, value) => {
    const updated = [...orders];
    if (field === "item") {
      const selected = laundryItems.find((i) => i.name === value);
      updated[index].item = value;
      updated[index].rate = selected?.rate || 0;
    } else {
      updated[index][field] = Math.max(0, value);
    }
    setOrders(updated);
    
    if (errors.orders) {
      setErrors({ ...errors, orders: null });
    }
  };

  const addOrder = () => {
    setOrders([...orders, { item: "", quantity: 1, rate: 0 }]);
  };

  const removeOrder = (index) => {
    if (orders.length > 1) {
      setOrders(orders.filter((_, i) => i !== index));
    }
  };

  const totalAmount = orders.reduce(
    (sum, o) => sum + (o.quantity || 0) * (o.rate || 0),
    0
  );

  const gstAmount = totalAmount * 0.18;
  const grandTotal = totalAmount + gstAmount;

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    if (!paymentConfirmed && paymentMethod !== "paylater") {
      alert("Please complete the payment first");
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const validOrders = orders.filter(order => order.item && order.quantity > 0);
      const orderData = {
        customer,
        orders: validOrders,
        totalAmount,
        gstAmount,
        grandTotal,
        paymentMethod,
        paymentStatus: paymentMethod === "paylater" ? "pending" : "completed",
        orderNumber: `ORD-${Date.now()}`,
        createdAt: new Date().toISOString()
      };
      
      // Save to Google Sheet
      await appendToGoogleSheet(orderData);
      
      setSuccessMessage("Order saved successfully! Order ID: " + orderData.orderNumber);
      
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
      
    } catch (error) {
      console.error("Error saving order:", error);
      setErrors({ submit: error.message || "Failed to save order. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const generatePDFInvoice = async () => {
    if (!validateForm()) {
      return;
    }

    if (!paymentConfirmed && paymentMethod !== "paylater") {
      alert("Please complete the payment first");
      return;
    }

    try {
      const validOrders = orders.filter(order => order.item && order.quantity > 0);
      
      if (validOrders.length === 0) {
        alert("Please add at least one item to generate invoice.");
        return;
      }

      setIsSubmitting(true);
      const { doc, invoiceNumber } = await generatePDF(customer, validOrders, totalAmount);
      
      doc.save(`Invoice-${invoiceNumber}-${customer.name.replace(/\s+/g, '-')}.pdf`);
      
      alert(`Invoice generated successfully!\nInvoice Number: ${invoiceNumber}`);
      
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setCustomer({
      name: "",
      phone: "",
      email: "",
      address: "",
      pincode: "",
      date: new Date().toISOString().split('T')[0],
    });
    setOrders([{ item: "", quantity: 1, rate: 0 }]);
    setErrors({});
    setSuccessMessage("");
    setPaymentMethod("");
    setPaymentConfirmed(false);
    setShowQRCode(false);
  };

  const handlePaymentConfirmation = () => {
    if (paymentMethod === "upi" && !paymentConfirmed) {
      setShowQRCode(true);
      return;
    }
    setPaymentConfirmed(true);
  };

  const handleUnlock = () => {
    if (password === CONFIG.PASSWORD) {
      setIsLocked(false);
      setPassword("");
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  // Filter items based on search and category
  const filteredItems = useMemo(() => {
    return laundryItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Get unique categories for the filter dropdown
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(laundryItems.map(item => item.category))];
    return ["All", ...uniqueCategories];
  }, []);

  if (isLocked) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="flex flex-col items-center mb-6">
            <Lock className="w-12 h-12 text-blue-600 mb-4" />
            <h1 className="text-2xl font-bold text-gray-800">Admin Access</h1>
            <p className="text-gray-600 mt-2">Enter password to access the system</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter admin password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleUnlock}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Unlock System
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FileText className="w-8 h-8" />
                  Laundry Management System
                </h1>
                <p className="text-blue-100 mt-1">Create and manage laundry orders with professional invoicing</p>
              </div>
              <button
                onClick={() => setIsLocked(true)}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                title="Lock system"
              >
                <Lock className="w-4 h-4" />
                Lock
              </button>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {successMessage && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">{successMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-800">{errors.submit}</p>
              </div>
            )}

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Customer Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter customer name"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    value={customer.name}
                    onChange={(e) => {
                      setCustomer({ ...customer, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                    value={customer.phone}
                    onChange={(e) => {
                      setCustomer({ ...customer, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: null });
                    }}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="customer@example.com"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    value={customer.email}
                    onChange={(e) => {
                      setCustomer({ ...customer, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    placeholder="6-digit pincode"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.pincode ? 'border-red-300' : 'border-gray-300'
                    }`}
                    value={customer.pincode}
                    onChange={(e) => {
                      setCustomer({ ...customer, pincode: e.target.value });
                      if (errors.pincode) setErrors({ ...errors, pincode: null });
                    }}
                  />
                  {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Order Date *
                  </label>
                  <input
                    type="date"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.date ? 'border-red-300' : 'border-gray-300'
                    }`}
                    value={customer.date}
                    onChange={(e) => {
                      setCustomer({ ...customer, date: e.target.value });
                      if (errors.date) setErrors({ ...errors, date: null });
                    }}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>

                <div className="md:col-span-2 lg:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Complete Address *
                  </label>
                  <textarea
                    placeholder="Enter full pickup/delivery address"
                    rows="2"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none ${
                      errors.address ? 'border-red-300' : 'border-gray-300'
                    }`}
                    value={customer.address}
                    onChange={(e) => {
                      setCustomer({ ...customer, address: e.target.value });
                      if (errors.address) setErrors({ ...errors, address: null });
                    }}
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
                <h2 className="text-xl font-semibold text-gray-800">Order Items</h2>
                <button
                  type="button"
                  onClick={addOrder}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Item
                </button>
              </div>

              {errors.orders && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">{errors.orders}</p>
                </div>
              )}

              <div className="space-y-4">
                {orders.map((order, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-end">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Item
                        </label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={order.item}
                          onChange={(e) => handleOrderChange(index, "item", e.target.value)}
                        >
                          <option value="">Select an item</option>
                          {filteredItems.map((item) => (
                            <option key={item.name} value={item.name}>
                              {item.name} - ₹{item.rate} ({item.category})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Quantity
                        </label>
                        <input
                          type="number"
                          min="1"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={order.quantity}
                          onChange={(e) =>
                            handleOrderChange(index, "quantity", parseInt(e.target.value) || 1)
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Rate (₹)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
                          value={order.rate}
                          readOnly
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Total
                          </label>
                          <div className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-right font-semibold">
                            ₹{(order.quantity * order.rate).toLocaleString()}
                          </div>
                        </div>
                        {orders.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeOrder(index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Search and filter section */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Search Items
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search for items..."
                      className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Filter by Category
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Payment Options
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    id="paylater"
                    name="paymentMethod"
                    checked={paymentMethod === "paylater"}
                    onChange={() => {
                      setPaymentMethod("paylater");
                      setPaymentConfirmed(true);
                      setShowQRCode(false);
                    }}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="paylater" className="block text-sm font-medium text-gray-700">
                    Pay Later (Cash on Delivery)
                  </label>
                </div>

                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    id="upi"
                    name="paymentMethod"
                    checked={paymentMethod === "upi"}
                    onChange={() => {
                      setPaymentMethod("upi");
                      setPaymentConfirmed(false);
                    }}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="upi" className="block text-sm font-medium text-gray-700">
                    Pay via UPI
                  </label>
                </div>

                {errors.paymentMethod && (
                  <p className="text-red-500 text-xs mt-1">{errors.paymentMethod}</p>
                )}

                {paymentMethod === "upi" && !paymentConfirmed && (
                  <div className="mt-4">
                    <button
                      onClick={handlePaymentConfirmation}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <QrCode className="w-4 h-4" />
                      Show UPI QR Code
                    </button>
                  </div>
                )}

                {showQRCode && (
                  <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Scan to Pay</h3>
                    <div className="flex flex-col items-center">
                      <div className="w-48 h-48 bg-gray-200 mb-4 flex items-center justify-center">
                        {/* Replace with your actual QR code image */}
                        <span className="text-gray-500">UPI QR Code Here</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Amount: ₹{grandTotal.toFixed(2)}</p>
                      <p className="text-sm text-gray-600">UPI ID: yourbusiness@upi</p>
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={() => {
                          setPaymentConfirmed(true);
                          setShowQRCode(false);
                        }}
                        className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Payment Completed
                      </button>
                    </div>
                  </div>
                )}

                {paymentConfirmed && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">
                      {paymentMethod === "paylater" 
                        ? "Pay Later selected. Payment will be collected on delivery." 
                        : "UPI payment confirmed. Thank you!"}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
              <div className="space-y-2 text-right">
                <div className="flex justify-between items-center text-gray-700">
                  <span>Subtotal:</span>
                  <span className="font-semibold">₹{totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                  <span>GST (18%):</span>
                  <span className="font-semibold">₹{gstAmount.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                </div>
                <div className="border-t border-gray-300 pt-2">
                  <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                    <span>Grand Total:</span>
                    <span>₹{grandTotal.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-end pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reset Form
              </button>
              <button
                type="button"
                onClick={generatePDFInvoice}
                disabled={!paymentConfirmed && paymentMethod !== "paylater" || totalAmount === 0 || isSubmitting}
                className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <Download className="w-4 h-4" />
                {isSubmitting ? "Generating PDF..." : "Generate Invoice"}
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || totalAmount === 0}
                className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <Save className="w-4 h-4" />
                {isSubmitting ? "Saving..." : "Save Order"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderPage;