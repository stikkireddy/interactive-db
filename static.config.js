import path from 'path'
import axios from 'axios'

export default {
  siteRoot: "https://stikkireddy.github.io/",
  basePath: "interactive-db",
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    return [
      {
        path: '/',
        component: 'src/pages/autoloader',
      },
      {
        path: '/autoloader',
        component: 'src/pages/autoloader',
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
