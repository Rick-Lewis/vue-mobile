<template>
  <div>
    <div>
      <van-uploader v-model="fileList" multiple accept="image/*,.pdf,.docx,.pptx,.xlsx,.txt" />
    </div>
    <div>
      <van-button type="default" @click="handleSelectFile">选择文件</van-button>
      <van-button type="default" @click="handleFileDetail('pdf')">pdf文件详情</van-button>
      <van-button type="default" @click="handleFileDetail('word')">word文件详情</van-button>
      <van-button type="default" @click="handleFileDetail('ppt')">ppt文件详情</van-button>
      <van-button type="default" @click="handleFileDetail('excel')">excel文件详情</van-button>
      <van-button type="default" @click="handleFileDetail('text')">text文件详情</van-button>
      <van-button type="default" @click="handleSelectPic">选择图片</van-button>
      <van-button type="default" @click="handleDownload">下载</van-button>
    </div>
  </div>
</template>
<script>
import { Uploader, Button, Dialog } from 'vant'
export default {
  name: '',
  components: {
    [Uploader.name]: Uploader,
    [Button.name]: Button,
    [Dialog.name]: Dialog
  },
  data: function() {
    return {
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true }
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleSelectFile() {
      qing.call('selectFile', {
        success: function(result) {
          Dialog.alert({
            title: '结果',
            message: JSON.stringify(result)
          })
        }
      })
    },
    handleFileDetail(type) {
      let data = null
      switch (type) {
        case 'pdf':
          data = {
            fileName: '云星空&KIS 伙伴数字营销实操手册-在线运营部（确认版）',
            fileExt: 'pdf',
            fileTime: '2020-05-08 17:16:44',
            fileSize: 35500,
            fileDownloadUrl:
              'http://172.18.7.86/download?fileId=447855594544836608',
            success: function(result) {
              Dialog.alert({
                title: '结果',
                message: JSON.stringify(result)
              })
            }
          }
          break
        case 'word':
            data = {
            fileName: '产品需求文档模板',
            fileExt: 'docx',
            fileTime: '2020-05-08 17:06:59',
            fileSize: 59695,
            fileDownloadUrl:
              'http://172.18.7.86/download?fileId=445670931361443840',
            success: function(result) {
              Dialog.alert({
                title: '结果',
                message: JSON.stringify(result)
              })
            }
          }
          break
          case 'ppt':
            data = {
            fileName: '1_国庆阅兵空中梯队飞机',
            fileExt: 'pptx',
            fileTime: '2020-05-08 16:43:36',
            fileSize: 6432831,
            fileDownloadUrl:
              'http://172.18.7.86/download?fileId=456175206814461952',
            success: function(result) {
              Dialog.alert({
                title: '结果',
                message: JSON.stringify(result)
              })
            }
          }
          break
          case 'excel':
            data = {
            fileName: '引出数据_API服务_0408',
            fileExt: 'xlsx',
            fileTime: '2020-04-08 17:05:54',
            fileSize: 8054,
            fileDownloadUrl:
              'http://172.18.7.86/download?fileId=446055724687306752',
            success: function(result) {
              Dialog.alert({
                title: '结果',
                message: JSON.stringify(result)
              })
            }
          }
          break
          case 'text':
            data = {
            fileName: 'download',
            fileExt: 'txt',
            fileTime: '2020-04-08 18:17:20',
            fileSize: 7,
            fileDownloadUrl:
              'http://172.18.7.86/download?fileId=402547426445242368',
            success: function(result) {
              Dialog.alert({
                title: '结果',
                message: JSON.stringify(result)
              })
            }
          }
          break
      }
      qing.call('showFile', data)
    },
    handleSelectPic() {
      qing.call('selectPic', {
        success: function(result) {
          Dialog.alert({
            title: '结果',
            message: JSON.stringify(result)
          })
        }
      })
    },
    handleDownload() {}
  }
}
</script>
<style lang='scss' scoped></style>
