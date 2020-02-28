import {request, requestInstance, requestPromise, upload, getUploads} from '../request'

export function getHomeMultiData(){

  return requestPromise({
    url: '/home'
  })
}

export function getHomeGoodMock(){

  return requestPromise({
    url: 'static/json/HomGoodsData.json',
    method: 'get',
    dataType: "json",
    crossDomain: true,
    cache: false
  })
}

// axios 下载
export function downloadModel(formData){
  return getUploads({
    url: '/download',
    method: 'post',
    data: formData,
    responseType: 'blob',
    crossDomain: true,
    cache: false
  })

}

// axios 上传
export function uploadMode(formData){
  return upload({
    url: '/upload',
    method: 'post',
    data: formData,
    dataType: "json",
    crossDomain: true,
    cache: false
  })
}

export function getUpload() {
  return getUploads({
    url: '/getUploads',
    method: 'post',
    dataType: 'json',
    crossDomain: true,
    cache: false
  })
}
