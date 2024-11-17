import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;  // Make title optional
  children: ReactNode;  // children prop is still required
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card border rounded shadow-sm">
      {/* Conditionally render the card-header if title is provided */}
      {title && (
        <div className="card-header p-4 border-b">
          <h3 className="card-title font-semibold text-lg">{title}</h3>
        </div>
      )}
      <div className="card-body p-4">
        {children} {/* Render the children here */}
      </div>
    </div>
  );
};

export default Card;
