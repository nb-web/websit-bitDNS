export default ({ isHMR, app, store, error }) => {
    if ( isHMR ) return  //是否是通过模块热替换 webpack hot module replacement (仅在客户端以 dev 模式)
    const locale = store.state.locale || app.i18n.fallbackLocale
    if (!store.state.locales.includes(locale)) {
      return error({ message: 'This page could not be found.', statusCode: 404 })
    }
    store.commit('SET_LANG', locale)
    app.i18n.locale = locale
}