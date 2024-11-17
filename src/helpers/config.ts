// src/helpers/config.ts

const config = {
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api', // Default API URL for development
    webUrl: import.meta.env.VITE_WEB_URL || 'http://localhost:4000',     // Default Web URL for development
    environment: import.meta.env.VITE_ENV || 'development',              // Default environment
  };
  
  export default config;
  