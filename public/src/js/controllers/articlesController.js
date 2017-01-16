import requestProviderController from './requestProviderController'
import config from '../config';


class articlesController {
  static loadArticles() {
    return requestProviderController.get(config.url.api + config.url.laodArticles);
  }
  static loadArticle(id) {
    return requestProviderController.get(config.url.api + config.url.loadArticleById + id);
  }
  static deleteArticle(id) {
    return requestProviderController.get(config.url.api + config.url.deleteArticleById + id);
  }
}

export default articlesController;
