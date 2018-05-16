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
    const options = defaultCfgOpts;
    return axios(options)
  }
};

const Tags = {
  getData: (opt) => {
    const options = Object.assign({},defaultCfgOpts, {
      url: '/tags',
      params: {}
    });
    return axios(options)
  }
};

export {
  Article,
  Tags
};