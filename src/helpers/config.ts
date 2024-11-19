// src/helpers/config.ts

interface Config {
  apiUrl: string;
  webUrl: string;
  environment: string;
  isProduction: boolean;
}

const config: Config = {
  apiUrl:
      process.env.VITE_API_URL ||
      import.meta.env.VITE_API_URL ||
      'http://localhost:5000/api',
  webUrl:
      process.env.VITE_WEB_URL ||
      import.meta.env.VITE_WEB_URL ||
      'http://localhost:4000',
  environment:
      process.env.VITE_ENV ||
      import.meta.env.VITE_ENV ||
      'development',
  isProduction: false, // Default value
};

// Set isProduction based on the environment
config.isProduction = config.environment === 'production';

export default config;
