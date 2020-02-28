<template>
    <div>
      <input type="file" @change="getFile($event)" name="file">
      <button @click="upload">上传</button>
      <div>
        <button @click="getUploadFile">获取上传文件</button>
        <p v-for="item, index in uploads" :key="index">
          <a href="#" @click="download(item.filePath, item.fileName)">{{item.fileName}}</a>
        </p>
      </div>
    </div>
</template>

<script>
  import {uploadMode, getUpload, downloadModel} from '@/network/request/home'
  import {handleDownloadFile} from '@/common/common'
  export default {
    name: "upload",
    data(){
      return  {
        file: null,
        uploads: []
      }
    },
    methods: {
      download(path, filename){
        let formData = new FormData()
        formData.append("path", path)
        formData.append("name", filename)
        downloadModel(formData).then(res => {
          console.log(res)
          handleDownloadFile(res.data, filename)
        }).catch(err => {
          console.log(err)
        })
      },
      getUploadFile(){
        getUpload().then(res => {
          if(res.data.code == 200){
            this.uploads.push(...res.data.body)
          }

        }).catch(err => {
          console.log(err)
        })
      },
      getFile(event){
        this.file = event.target.files[0]
        console.log(this.file)
      },
      upload(){
        let formData = new FormData();
        formData.append("upload", this.file)
        uploadMode(formData).then(res => {
          console.log(res.data.msg)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
