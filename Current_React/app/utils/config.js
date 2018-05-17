const CONFIG = {
  url : 'https://conduit.productionready.io/api',
  article : {
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    com : 'articles',
    params : {
      limit : 10,
      offset : 0
    }
  },
  limit: 10,
  offset : 0
};
export {
  CONFIG
}