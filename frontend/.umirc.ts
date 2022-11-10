export default {
  npmClient: "yarn",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
};
