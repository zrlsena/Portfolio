module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        sena: {
          light: '#FFF6E5', //lightest color (soft pearl)
          dark: '#b6601f', //black (obsidian black)
          main: '#084595', //main color (crimson depht)
          muted: '#4D78BC', // muted (sekonder detay açıklma yazısı) (Warm sand) 
          highlight: '#fff9b1',
          red: '#A4161A',
          header: '#4b2e2e',
          sena:'#b22222',
          flat: '#fff8e5',
        }
      },
      backgroundImage: {
        'texture': "url('/src/assets/large-leather.png')",  // Texture'ı burada tanımlıyoruz
        'flat': "url('/src/assets/flat.png')",
        'paper':"url('/src/assets/paper.png')",
      }
    },
  },
  plugins: [],
}
