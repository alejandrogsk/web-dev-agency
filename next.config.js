/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  api: { bodyParse:false, },
  i18n: {
    locales: ['es', 'en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'es',
  },
}

module.exports = nextConfig