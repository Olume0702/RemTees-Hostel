// src/components/Footer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Footer = () => {
    const [quotes, setQuotes] = useState([]);

    // Function to fetch random quotes from the "Type Fit" API
    const fetchRandomQuotes = async () => {
        try {
            const response = await axios.get('https://type.fit/api/quotes');
            setQuotes(response.data);
        } catch (error) {
            console.error('Error fetching quotes:', error);
        }
    };

    // Fetch quotes on component mount
    useEffect(() => {
        fetchRandomQuotes();
    }, []);

    // Function to get a random quote from the fetched quotes
    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };

    return (
        <div className="bg-gray-900 text-white p-4">
            <h3 className="text-xl font-bold mb-4">Random Quotes</h3>
            <ul>
                {[...Array(20)].map((_, index) => (
                    <li key={index} className="mb-2">
                        "{getRandomQuote().text}" - {getRandomQuote().author || 'Unknown'}
                    </li>
                ))}
            </ul>



        </div>
    );
};

export default Footer;
