//统一管理接口
import ajaxCore from '../utils/ajaxBase'
const api = {
    tryGetAnyDataApi:()=>ajaxCore.get('/zzz110',"{a:1}")
}

export default api