import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://espacoinvisivel.com.br'

  return [
    // MAIN PAGES
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sobre-nos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified: new Date(),
    },

    // BLOG POSTS 👇 (ADD ALL YOUR POSTS HERE)
    {
      url: `${baseUrl}/criar-nome-de-usuario-do-discord`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/letras-diferentes`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/espacos-invisiveis-desaparecem`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/espacos-invisiveis-para-whatsapp`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/biografias-do-instagram-espacos-invisiveis`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/diferentes-tipos-de-caracteres-invisiveis`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/espacos-invisiveis-em-nomes-de-usuario`,
      lastModified: new Date(),
    },
  ]
}