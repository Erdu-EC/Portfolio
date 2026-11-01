import type {APIRoute} from 'astro'
import {getCollection} from 'astro:content'

interface SitemapEntry {
    loc: string
    priority: string
    lastmod?: string
}

export const GET: APIRoute = async () => {
    const posts = await getCollection('blog')

    const baseUrl = 'https://erdu.dev'

    const staticPages: SitemapEntry[] = [
        {loc: baseUrl, priority: '1.0'},
        {loc: `${baseUrl}/projects`, priority: '0.8'},
        {loc: `${baseUrl}/blog`, priority: '0.8'},
        {loc: `${baseUrl}/contact`, priority: '0.6'},
    ]

    const blogUrls: SitemapEntry[] = posts.map((post) => ({
        loc: `${baseUrl}/blog/${post.id}`,
        priority: '0.7',
        lastmod: post.data.pubDate.toISOString(),
    }))

    const allPages: SitemapEntry[] = [...staticPages, ...blogUrls]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map((page) => {
        return `  <url>
    <loc>${page.loc}</loc>
    <priority>${page.priority}</priority>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>monthly</changefreq>
  </url>`
    }).join('\n')}
</urlset>`

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400',
        },
    })
}
