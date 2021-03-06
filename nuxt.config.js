const languages = require("./data/languages");

const languagesRoutes = languages.map(({ slug }) => `/languages/${slug}`);

const routes = ["/", "/languages", ...languagesRoutes];

module.exports = {
  head: {
    title: "Wata",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Learn foreign languages using emojis",
      },
      {
        hid: `og:title`,
        property: "og:title",
        content: `Wata`,
      },
      {
        hid: `og:url`,
        property: "og:url",
        content: "https://wata.online",
      },
      {
        hid: `og:image`,
        property: "og:image",
        content: "https://wata.online/icon.png",
      },
      {
        hid: `og:description`,
        property: "og:description",
        content: "Learn foreign languages using emojis",
      },
      {
        hid: `twitter:title`,
        property: "twitter:title",
        content: "Wata",
      },
      {
        hid: `twitter:description`,
        property: "twitter:description",
        content: "Learn foreign languages using emojis",
      },
      {
        hid: `twitter:image`,
        property: "twitter:image",
        content: "https://wata.online/icon.png",
      },
      {
        hid: `twitter:creator`,
        property: "twitter:creator",
        content: "@michalczmiel",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
      },
    ],
  },
  manifest: {
    name: "Wata",
    description: "Learn foreign languages using emojis",
    theme_color: "#04befe",
  },
  modules: ["@nuxtjs/pwa", "@nuxtjs/component-cache"],
  plugins: [
    "~/plugins/vuetify.js",
    "~/plugins/vue-clipboard.js",
    "~/plugins/vue-scrollto.js",
  ],
  css: ["~/assets/style/app.styl"],
  loading: { color: "#04befe" },
  build: {
    vendor: [
      "~/plugins/vuetify.js",
      "~/plugins/vue-clipboard.js",
      "~/plugins/vue-scrollto.js",
    ],
    extractCSS: true,
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
  generate: {
    routes,
  },
  sitemap: {
    routes,
    generate: true,
  },
  render: {
    static: {
      maxAge: "1y",
      setHeaders(res, path) {
        if (path.includes("sw.js")) {
          res.setHeader("Cache-Control", "public, max-age=0");
        }
      },
    },
  },
};
