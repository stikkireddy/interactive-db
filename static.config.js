import path from 'path'
import axios from 'axios'

export default {
  // siteRoot: "https://stikkireddy.github.io/",
  // basePath: "interactive-db",
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    return [
      {
        path: '/',
        component: 'src/containers/autoloader',
      },
      {
        path: '/autoloader',
        component: 'src/pages/autoloader',
      },
      {
        path: '/404',
        is404: true,
        component: 'src/containers/404',
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
