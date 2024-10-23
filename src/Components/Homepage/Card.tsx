"use client";
import React from 'react';
import './Card.css'

const CardContainer: React.FC = () => {
    const handleReadMore = (card: string) => {
        console.log(`Read more about ${card}`);
        // Implement navigation or other functionality here
    };

    return (  
        <div className="container mx-auto px-4 py-8 flex flex-wrap justify-evenly text-justify">
            <div className="box bg-gray-100 border border-gray-300 rounded-lg p-4 m-4 shadow-lg w-full max-w-xs">
                <div className="content">
                    <h2 className="text-xl font-semibold">Card One</h2>
                    <p className="mt-2 text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, velit est pariatur earum et magnam unde atque quo natus quae quas qui fugit voluptas 
                    </p>
                    <button 
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        onClick={() => handleReadMore("Card One")}
                    >
                        Read More
                    </button>
                </div>
            </div>

            <div className="box bg-gray-100 border border-gray-300 rounded-lg p-4 m-4 shadow-lg w-full max-w-xs">
                <div className="content">
                    <h2 className="text-xl font-semibold border-10">Card Two</h2>
                    <p className="mt-2 text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, velit est pariatur earum et magnam unde atque quo natus quae quas qui fugit voluptas 
                    </p>
                    <button 
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        onClick={() => handleReadMore("Card Two")}
                    >
                        Read More
                    </button>
                </div>
            </div>

            <div className="box bg-gray-100 border border-gray-300 rounded-lg p-4 m-4 shadow-lg w-full max-w-xs">
                <div className="content">
                    <h2 className="text-xl font-semibold">Card Three</h2>
                    <p className="mt-2 text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, velit est pariatur earum et magnam unde atque quo natus quae quas qui fugit voluptas 
                    </p>
                    <button 
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        onClick={() => handleReadMore("Card Three")}
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
