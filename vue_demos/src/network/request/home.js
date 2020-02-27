import {request, requestInstance, requestPromise} from '../request'

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
