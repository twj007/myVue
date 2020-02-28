import {getFiles, requestDEV} from '../../request'

export function download(type){
  return getFiles({
    url: '/static/'+type,
    responseType: 'blob',
  })
}

export function pageActivityPlan(){
  return requestDEV({
    url: '/static/json/page.json',
    dataType: 'json'
  })
}
