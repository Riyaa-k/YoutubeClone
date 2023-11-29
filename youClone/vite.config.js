import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { build, defineConfig } from 'vite'
// import envCompatible from 'vite-plugin-env-compatible'

// import react from '@vitejs/plugin-react'


// // https://vitejs.dev/config/
// export default defineConfig({
//   build:{
//     outDir:'dist',
//   },
//   envPrefix:"REACT_APP",
//   plugins: [react(),envCompatible],

// })