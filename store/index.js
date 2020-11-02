export const state = () => ({
    locales: ['en-US', 'zh-CN'],
    locale: 'zh-CN'
  })
  
export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    }
}