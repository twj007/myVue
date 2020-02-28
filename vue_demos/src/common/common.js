
export function getCookie(name){
  const cookies = window.document.cookie.split(';');
  for(let cookie of cookies){
    if (cookie.match(name)){
      return cookie
    }
  }
  return '';
}

export function handleDownloadFile(data, fileName){
  if(!data instanceof Blob){
    console.warn("传入参数类型不为Blob类型")
  }if(fileName == '' || fileName == undefined){
    console.warn("文件名不为空")
  }else{
    const blob = new Blob([data], {type:'text/plain,charset=UTF-8'})
    const downloadElement = document.createElement('a');
    const href = window.URL.createObjectURL(blob); //创建下载的链接
    downloadElement.href = href;
    downloadElement.download = fileName; //下载后文件名
    document.body.appendChild(downloadElement);
    downloadElement.click(); //点击下载
    document.body.removeChild(downloadElement); //下载完成移除元素
    window.URL.revokeObjectURL(href); //释放掉blob对象
  }
}

export const BASEURL_DEV = "http://localhost:8081"
