import {request, requestInstance, requestPromise} from '../request'

export function getHomeMultiData(){

  return requestPromise({
    url: '/home'
  })
}
