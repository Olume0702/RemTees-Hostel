// src/components/WhatsAppIcon.js
import React from 'react';
import whatsapp from '../assets/icons8-whatsapp.gif'

const WhatsAppIcon = () => {
    return (
        <a
            href="https://wa.me/08037160372"
            className="whatsapp-icon fixed bottom-8 right-8 bg-transparent p-3 rounded-full shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={whatsapp}
                alt="WhatsApp Icon"
                className="w-8 h-8"
            />
        </a>
    );
};

export default WhatsAppIcon;
