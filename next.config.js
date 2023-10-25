/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */

module.exports = withVanillaExtract(nextConfig);
