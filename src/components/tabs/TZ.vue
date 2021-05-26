<template>
<!--    <div>{{this.$route.query.id}}</div> -->
    <div style="width: 300px;">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="http://localhost:8080/api/upload/Images"
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
</template>
<script>
export default {
    data(){
      return{
        fileList: [],
        imgList: []
       }
    },
    created(){

    },
    methods: {
      submitUpload(fileList) {
        // this.$http({
        //     method: 'post',
        //     url: '/api/upload/Images',
        //     data: this.form
        // })
        this.$refs.upload.submit();
      },
    }
}
</script>
