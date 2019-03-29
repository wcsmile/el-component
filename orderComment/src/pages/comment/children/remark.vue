 <template>
    <div class="rating_page">
        <section v-if="!showLoading">
            <head-top head-title="订单备注" go-back='true'></head-top>
            <section class="quick_remark" v-if="positions.length">
                <header class="header_style">快速备注{{positionID}}</header>
                <mu-row>
                    <mu-col class="demo-snackbar-radio" :key="item.id" v-for="item in positions" span="6" md="4">
                        <mu-checkbox v-model="positionID" :value="item.id" :label="item.name"></mu-checkbox>
                    </mu-col>
                </mu-row>
            </section>
            <section class="input_remark quick_remark">
                <header class="header_style">其他备注</header>
                <textarea class="input_text" v-model="inputText" placeholder="请输入备注内容(可不填)"></textarea>
            </section>
            <section align="center" style="">
                <mu-button round color="primary" @click="confirmRemark">确 定</mu-button>
            </section>
        </section>
        <!-- <loading v-if="showLoading"></loading> -->
    </div>
</template>

<script>
import headTop from '../head'

export default {
        components: {
            headTop,
        },
        data(){
            return{
                positions: [{id:0,name:'淘宝'}, {id:1,name:'天猫'}, 
                            {id:2,name:'京东'}, {id:3,name:'苏宁'},
                            {id:4,name:'中国石油'}, {id:5,name:'中国石化'}],
                showLoading: true,
                positionID: [],
                positionName: [],
                inputText:"",
            }
        },
        created(){
            this.id = this.$route.query.id;
            this.sig = this.$route.query.sig;
        },
        mounted(){
            this.initData();
        },
        methods: {
            //初始化信息
            initData(){
                this.showLoading = false;
            },
            //确认选择
            confirmRemark(){
                // 初始化
                this.positionName = []

                // 备注名字
                this.positionID.forEach(item1 => {
                    this.positions.forEach(item2 => {
                        if(item1 == item2.id){
                            this.positionName.push(item2.name)
                        }
                    })
                    
                });

                // 返回数据
                this.$store.state.remarkText = this.positionName
                this.$store.state.inputText = this.inputText
                this.$router.back(-1);
            },
        }
    }
</script>
  
<style lang="scss" scoped>
    @import '../../../mixin';
  
    .rating_page{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f5f5f5;
        z-index: 204;
        padding-top: 1.95rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .header_style{
        @include sc(.65rem, #333);
        line-height: 2rem;
    }
    .quick_remark{
        background-color: #fff;
        margin-top: .4rem;
        padding: 0 .6rem 1rem;
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                margin-right: .6rem;
                margin-bottom: .6rem;
                span{
                    @include sc(.6rem, #333);
                    padding: .3rem .6rem;
                    border: 0.025rem solid #3190e8;
                    border-left: 0;
                }
                .first{
                    border-left: 0.025rem solid #3190e8;
                    border-top-left-radius: .2rem;
                    border-bottom-left-radius: .2rem;
                }
                .last{
                    border-top-right-radius: .2rem;
                    border-bottom-right-radius: .2rem;
                }
                .choosed{
                    color: #fff;
                    background-color: #3190e8;
                }
            }
        }
    }
    .input_remark{
        background-color: #fff;
        .input_text{
            width: 100%;
            background-color: #f9f9f9;
            border: 0.025rem solid #eee;
            resize: none;
            min-height: 4.5rem;
            border-radius: .2rem;
            @include sc(.6rem, #666);
            padding: .5rem;
        }
    }
    .determine{
        background-color: #4cd964;
        @include sc(.7rem, #fff);
        text-align: center;
        margin: 0 .7rem;
        line-height: 1.8rem;
        border-radius: 0.2rem;
    }
    .button-wrapper {
        text-align: center;
        .mu-button{
            margin: 8px;
            vertical-align: middle;
        }
        a.mu-button {
            text-decoration: none;
        }
    }
    
        
</style>
<style lang="scss">
body {
    font-family: Roboto,Lato,sans-serif;
    font-size: 35px;
    font-weight: 400;
    width: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    background-color: #fafafa;
}
.mu-checkbox-svg-icon {
    display: inline-block;
    fill: currentColor;
    height: 40px;
    width: 60px;
    user-select: none;
}
.mu-checkbox-icon {
    width: 45px;
    height: 45px;
    vertical-align: middle;
    position: relative;
    margin-right: 8px;
}
.mu-checkbox-ripple-wrapper {
        width: 70px;
        height: 70px;
        top: -14px;
        left: -7px;
        position: absolute;
}
.mu-button {
    user-select: none;
    outline: none;
    -webkit-appearance: none;
    width: 1124px;
    height: 66px;
    font-size: 45px;
    margin-top:20px;
}
.header_style[data-v-097a010c] {
    font-size: 0.75rem;
    color: #333;
    line-height: 2rem;
}
</style>
