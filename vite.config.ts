import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
