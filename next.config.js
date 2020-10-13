const isProd = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa");

const data = require('./utils/staticPaths');

module.exports = withPWA({
  pageExtensions: ["tsx"],
  pwa: {
    disable: !isProd,
    dest: "public"
  },
  trailingSlash: true,
  // exportPathMap: async function () {
  //   const { staticPaths } = data;
  //   const paths = {
  //     '/': { page: '/' },
  //   };

  //   staticPaths.forEach(({ page, title }) => {
  //     paths[`/${page}`] = {
  //       page: `/${page}`,
  //       query: { path: title },
  //       // https://github.com/staticwebdev/nextjs-starter/blob/master/utils/projectsData.js
  //       // https://docs.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs
  //     };
  //   });

  //   return paths;
  // },
});
