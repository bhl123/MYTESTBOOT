<template>
    <div class="main">
        <div>
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="1" @click="LinkToFirstVue">XXXXXXX</el-menu-item>
              <el-menu-item index="2">XXXXXXX</el-menu-item>
              <el-menu-item index="3">XXXXXXX</el-menu-item>
              <el-menu-item index="4">XXXXXXX</el-menu-item>
              <el-menu-item index="5">XXXXXXX</el-menu-item>
          </el-menu>
        </div>

        <div class="PIC">
            <el-carousel :interval="2000" type="card" height="600px">
                <el-carousel-item v-for="item in this.test" :key="item.index">
                <h3 class="medium" style="text-align:center">
                  <!-- <el-image
                    :src="item"
                    fit="contain"/> -->
                    {{item.src}}
                </h3>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div style="margin:0 auto">
          <div class="middle">

                <div class="box1">
                  <img :src="a"/>
                </div>

                <div class="box2">
                  <div class="box3">
                    <div class="box5">
                      <div class="content1">
                        这里是内容1
                      </div>
                      <div class="content2">
                        这里是内容2
                      </div>
                    </div>
                    <div class="box6">
                      这里是内容3
                    </div>
                  </div>
                  <div class="box4">
                    这里是内容4
                  </div>
                </div>

                <div class="box7">
                  这里是内容5
                </div>

          </div>
        </div>
    </div>
</template>
<script>
import aaa from '@/components/imgs/1.jpg'
export default {
    data(){
        return{
            activeIndex: '1',
            activeIndex2: '1',
            imgs:'@/components/imgs/1.jpg',
            test: [
              {'index':1,'src':'imgs'},
              {'index':2,'src':'imgs'}
            ],
            a:''
        }
    },
    mounted(){
      this.getPicture();
    },
    methods:{
      //获取图片地址
      getPicture(){
        this.$http({
            method: 'get',
            url: '/api/minio/url',
        }).then(response =>{
          this.a=response.data
          console.log("~~",this.a.data)
        })
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      LinkToFirstVue(){
        let TZ = this.$router.resolve({
          name: "TZ",
          query:{id:'bhl'}
        });
        window.open(TZ.href, "_blank")
      }
    }
}
</script>
<style>
  .main{
    display: flex;
    flex-direction: column;
  }
  .el-menu-demo{
    height: 30px;
    /* border-bottom-color:none!important; */
    background-color:rgba(0,0,0,0);
  }
  /* 点击出来的下划线进行隐藏 */
  .el-menu-item.is-active {
      border-bottom: none!important;
      color: rgba(0,0,0,0);
  }
  /* 导航栏的间距等样式 */
  .el-menu-item {
    padding: 0 22px;
    font-size: 10px;
    font-family: "微软雅黑"
  }
  /* 轮播图DIV样式 */
  .PIC{
    width: 80%;
    margin: 20px auto 0 auto;
  }
  .el-menu--horizontal>.el-menu-item {
    height: 30px;
    line-height: 30px;
  }
  /* .el-carousel__item h3 {
    color: #475669;
    font-size: 16px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  } */

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .box1{
    height:350px;
    width:600px;
    padding:10px;
    border: 2px solid grey;
    border-radius:15px;
    margin: 0 30px 0 auto;
  }
  .box2{
    height:350px;
    width:350px;
    padding:10px;
    border: 2px solid grey;
    border-radius:15px;
    display: flex;
    flex-direction: column;
  }
  .box3{
    height:250px;
    width:350px;

    border: 2px solid grey;
    border-radius:15px;
    display: flex;
    flex-direction: row;
  }
  .box4{
    height:100px;
    width:350px;
    border: 2px solid grey;
    border-radius:15px;
  }
  .box5{
    height:250px;
    width:200px;
    border: 2px solid grey;
    border-radius:15px;
    display: flex;
    flex-direction: column;
  }
  .box6{
    height:250px;
    width:150px;
    border: 2px solid grey;
    border-radius:15px;
  }
  .box7{
    height:350px;
    width:350px;
    padding:10px;
    margin-left: 20px;
    border: 2px solid grey;
    border-radius:15px;
  }
  .content1{
    height:50%;
    width:200px;
    border: 2px solid grey;
    border-radius:15px;
  }
  .content2{
    height:50%;
    width:200px;
    border: 2px solid grey;
    border-radius:15px;
  }
  .middle{

    display: flex;
    flex-direction: row;

  }
</style>
