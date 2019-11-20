<template>

    <div>
        <img class="headImg" src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/62719/38/13405/76408/5dae7837E023d08f9/e0a08c6663f757e5.jpg!cr_1125x445_0_171!q70.jpg.dpg"/>
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
        </cube-form>
    </div>

</template>

<script>

export default{
    data(){
        return{
            model: {
                userName: "",
                passWord: ""
            },
            schema: {
                fields: [
                    {
                        type: 'input',
                        modelKey: 'userName',
                        label: '用户名',
                        props: {
                            placeholder: '请输入用户名'
                        },
                        rules: {
                            required: true,
                            type: 'string',
                            min: 3,
                            max: 15,
                        },
                        trigger: 'blur',
                        messages: {
                            required: '用户名不能为空',
                            min: "用户名不能少于3个字符",
                            max: "用户名不能大于15个字符"
                        }
                                    
                    },
                    {
                        type: 'input',
                        modelKey: 'passWord',
                        label: '密码',
                        props: {
                            placeholder: '请输入密码',
                            type: 'password',
                            eye: {
                                open: false
                            }
                        },
                        rules: {
                            required: true
                        }
                    },
                    {
                        type: 'submit',
                        label: '注册'
                    }
                ]
            }
        }
    },
    methods: {
        submitHandler(e){
            e.preventDefault();
            this.$http('/api/register',{params: this.model}).then(res=>{
                alert(res.success)
            }).catch(err=>{
                alert(err.success)
            })
        }
    }
}

</script>

<style lang="stylus" scoped>
.headImg
    height 150px;
    width 100%;

</style>