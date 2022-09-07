module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN,
  },
  i18n: {
    // locales: ["et", "ru", "en"],
    locales: ["et"],
    defaultLocale: "et",
  },
};
