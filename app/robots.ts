import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://astroloveguide.com' // ✅ Use HTTPS and remove trailing slash

  return {
    rules: [
      {
        userAgent: '*', // One unified rule for all bots
        allow: '/',
        disallow: [
          '/api/', // block API endpoints
          '/_next/', // internal Next.js files
          '/admin/', // optional: block admin area
          '/private/', // optional: block private sections
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/', // explicitly allow Google Images
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
