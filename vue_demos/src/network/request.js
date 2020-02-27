import axios from 'axios'

export function request(config, success, fail){
  const instance = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 5000
  })

  instance(config).then(res => {
    success(res)
  }).catch(err => {
    fail(err)
  })
}

export function requestPromise(config){
  const instance = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 5000
  })
  instance.interceptors.request.use(res => {
    // 添加请求头，验证token
    console.log(res)
    return res
  }, err => {
    return err
  });
  instance.interceptors.response.use(res => {
    console.log(res)
    //处理封装数据
    return res;
  }, err => {
    if(err && err.response){
      switch (err.response.status) {
        case 404:
          err.msg = '请求地址不存在'
          break;
        case 401:
          err.msg = '无授权'
          break;
        case 500:
          err.msg = '服务器异常'
        default:
          break;
      }
    }
    return err
  })
  return new Promise((resolve, reject) => {
    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function requestInstance(config){
  const instance = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 5000
  })
  return instance(config)
}



