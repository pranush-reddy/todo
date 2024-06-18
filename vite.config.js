import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
    host: '0.0.0.0', // Bind to 0.0.0.0 to be accessible externally
    port: 5173, // You can specify the port you want to use
=======
    host: '0.0.0.0', 
    port: 5173, 
>>>>>>> 4c986bc07b96da5b56735f7b439b9d7060fa08b3
  },
});
