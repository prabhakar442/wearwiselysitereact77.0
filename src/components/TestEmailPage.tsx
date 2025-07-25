import React from "react";
import emailjs from "@emailjs/browser";

// Your sendEmail function
const sendEmail = async (customer, invoiceNumber, grandTotal) => {
  const CONFIG = {
    COMPANY_NAME: "Wear Wisely",
    COMPANY_PHONE: "9876543210",
    COMPANY_EMAIL: "admin@wearwisely.com",
    ADMIN_EMAIL: "admin@wearwisely.com",
  };

  const currentDate = new Date().toLocaleDateString();

  await emailjs.send(
    "service_0fz254l",
    "template_76c0gch",
    {
      to_name: customer.name,
      to_email: customer.email || CONFIG.ADMIN_EMAIL,
      from_email: CONFIG.COMPANY_EMAIL,
      admin_email: CONFIG.ADMIN_EMAIL,
      subject: `Invoice #${invoiceNumber}`,
      message: `Dear ${customer.name},\n\nPlease find your invoice #${invoiceNumber} for ₹${grandTotal.toFixed(2)}.\nThank you!`,
      invoice_number: invoiceNumber,
      grand_total: grandTotal.toFixed(2),
      current_date: currentDate,
      company_name: CONFIG.COMPANY_NAME,
      company_phone: CONFIG.COMPANY_PHONE,
    },
    "yKzPEtzad9qgCuM2M"
  );

  alert("Test email sent!");
};

const TestEmailPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Send Test Email</h1>
      <button
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        onClick={() =>
          sendEmail(
            {
              name: "Test User",
              email: "youremail@example.com",
            },
            "INV001",
            499
          )
        }
      >
        Test EmailJS
      </button>
    </div>
  );
};

export default TestEmailPage;
