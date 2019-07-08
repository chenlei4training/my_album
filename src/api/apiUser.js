let singIn = (name, password) => {
    return new Promise((resolve)=>{
        if (name == 'chenlei' && password == '123321') {
            saveToLocalStorage(name)
            resolve(true)
        } else {
            resolve(false)
        }
    })
}

//JSON Web Token
//TODO move this funtion to mock folder
//http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html
//https://www.jianshu.com/p/576dbf44b2ae
let saveToLocalStorage = (name) => {

}

export default {
    singIn
}



