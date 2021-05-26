<template>
    <div>
        <div class="box">
            <div class="title">DONT WORYY BE HAPPY</div>
            <div class="loginVue">
                <el-form :model="form" >
                    <el-form-item label="user_name">
                        <el-input v-model="form.username" size="mini" style="width: 100%;"></el-input>
                    </el-form-item>
                    <el-form-item label="password">
                        <el-input v-model="form.password" size="mini"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="firstTouch">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                id:'1',
                name:'1',
                username: '1',
                password: '1'
            }
        }
    },
    created(){
    },
    methods:{
        firstTouch(){
             this.$http({
                method: 'post',
                url: '/api/user/loginUser',
                data: this.form
            })
            // this.$http.get('/api/user/loginUser')
        },
        onSubmit(){
            this.$router.push({
                path: '/views/Home'
            })
        }
    }
}
</script>
<style scoped>
    .loginVue {
        display: flex;
        align-items: center;
        margin: 0 auto;
        width: 300px;
    }
    .Box{
        display: flex;
        flex-direction: column;
    }
    .title{
        margin: 0 auto;
        margin-top: 200px;
        text-align: center;
    }
</style>
