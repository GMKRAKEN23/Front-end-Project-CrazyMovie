import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import './dotenv.config.js';

export default defineConfig({
  plugins: [react()],
})
