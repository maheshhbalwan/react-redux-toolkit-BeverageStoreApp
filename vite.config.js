import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-redux-toolkit-BeverageStoreApp/ ",
  server: {
    port: 3000,
  },
});
