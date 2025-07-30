import React, { useEffect, useState } from 'react';
import './ImageOverlay.css';
import welcomeBanner from './welocmebanner.png'; // Adjust path as needed

interface ImageOverlayProps {
  onClose: () => void;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') handleClose();
  };

  if (!visible) return null;

  return (
    <div 
      className="overlay" 
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="close-button" 
          onClick={handleClose}
          aria-label="Close welcome banner"
        >
          &times;
        </button>
        <img 
          src={welcomeBanner} 
          alt="Welcome to our service"
          className="overlay-image"
        />
      </div>
    </div>
  );
};

export default ImageOverlay;