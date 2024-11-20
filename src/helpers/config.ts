// src/helpers/config.ts

interface Config {
  apiUrl: string;
  webUrl: string;
  environment: string;
  isProduction: boolean;
}

const config: Config = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  webUrl: import.meta.env.VITE_WEB_URL || 'http://localhost:4000',
  environment: import.meta.env.VITE_ENV || 'development',
  isProduction: false, // Default value
};

// Set isProduction based on the environment
config.isProduction = config.environment === 'production';

// Debug log during development
if (!config.isProduction) {
  console.log('Config:', config);
}

export default config;
