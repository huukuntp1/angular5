import axios from 'axios'

const config = {
  url : 'https://conduit.productionready.io/api',
  article : {
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    com : 'articles',
    params : {
      limit : 10,
      offset : 0
    }
  }
};

axios.defaults.baseURL = config.url

const defaultCfgOpts = {
  method: config.article.methods[0],
  url: `/${config.article.com}`,
  params: config.article.params,
  data: {}
};

const Article = {
  getData: (opt) => {
    const options = JSON.parse(JSON.stringify(defaultCfgOpts));
    return axios(options)
  }
};

export {
  Article
};