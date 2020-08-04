module.exports = app => {
    const {router,controller}=app
    router.get('/default/index',controller.default.home.index)
    router.get('/default/getArticleList',controller.default.home.getArticleList)
    router.get('/default/getCssList',controller.default.home.getCssList)
    router.get('/default/getHtmlList',controller.default.home.getHtmlList)
    router.get('/default/getJsList',controller.default.home.getJsList)
    router.get('/default/getReactList',controller.default.home.getReactList)
    router.get('/default/getHttpList',controller.default.home.getHttpList)
    router.get('/default/getOtherList',controller.default.home.getOtherList)
    router.get('/default/getArticleById/:id',controller.default.home.getArticleById)
    router.get('/default/getTypeInfo',controller.default.home.getTypeInfo)
    router.get('/default/getListByid/:id',controller.default.home.getListByid)
    router.post('/default/updateViewCount',controller.default.home.updateViewCount)
}