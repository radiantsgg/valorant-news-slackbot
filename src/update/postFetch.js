const axios = require('axios');

/**
 * @description Fetches the latest post from playvalorant.com
 * @returns {Object} Article
 */
module.exports = async function fetchLatestPost () {
  try {
    let { data: { result: { data: { allContentstackArticles: { nodes: [post] }} } } } = await axios.get('https://playvalorant.com/page-data/en-us/news/page-data.json')
    
    // Empty or null
    if (!Object.keys(post).length) {
      return []
    }

    return [{
      id: post.id,
      title: post.title,
      description: post.description,
      url: 'https://playvalorant.com/en-us' + post.url.url,
      bannerUrl: post.banner.url,
      tags: 'offical, valorant'
    }]

  } catch (error) {
    console.error('Failed to fetch news from playvalorant.com. ' + error.message)
    return []
  }
}