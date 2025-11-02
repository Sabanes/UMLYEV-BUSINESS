/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    
    "redirects": [
          {
            "source": "/(.*)",
            "destination": "https://your-cloudflare-domain.pages.dev/$1",
            "permanent": true
          }
        ]
  }
  
  export default nextConfig