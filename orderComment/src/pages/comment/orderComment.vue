<template>
    <div class="orderCommentContainer">
        <section class="pay_way container_style">
            <router-link :to='{path: "/comment/remark", query: {id: 12, sig: 2}}' class="header_style router-link-active">
                <span>订单备注</span>
                <div class="more_type">
                    <span class="ellipsis">{{remarkText||inputText? remarklist: '口味、偏好等'}}</span>
                    <svg class="address_empty_right">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                    </svg>
                </div>
            </router-link>
        </section>
        <svg-icon></svg-icon>
     </div>
     
</template>

<script>
import svgIcon from '../../common/svg';

export default {
  name: "orderComment",
  components: {
      svgIcon
  },
  data () {
    return {
        remarkText:[],
        inputText:'',
    }
  },
  props: {
    // 传入付款方式数据参数 
    // payMethodList: {
    //   type: Array,
    //   required: true,
    //   default: [{}]
    // }
  },
  mounted() {
      // 默认传值 第一种付款方式
    //   this.initData()
  },
  computed: {
        //备注页返回的信息进行处理
        remarklist: function (){
            this.remarkText = []
            this.inputText = ""

            this.remarkText = this.$store.state.remarkText
            this.inputText = this.$store.state.inputText

            let str = new String;
            if (this.remarkText) {
                Object.values(this.remarkText).forEach(item => {
                    str += item + '，';
                })
            }

            //是否有自定义备注，分开处理
            if (this.inputText) {
                return str + this.inputText;
            }else{
                return str.substr(0, str.lastIndexOf('，')) ;
            }
           
        },
    },
  methods:{
      
        // initData(){
        //     this.$emit("payWayId",this.payWayId)
        // },
        // // 显示付款方式
        // showPayWayFun(){
        //     this.showPayWay = !this.showPayWay
        // },
        // // 点击选择付款方式
        // choosePayWay(item){
        //     this.payWayName = item.name
        //     this.payWayId = item.id
        //     this.showPayWay = !this.showPayWay

        //     // 返回数据
        //     this.$emit("payWayId",this.payWayId)
        // },
    },
}
</script>

<style lang="scss" scoped>
    @import '../../mixin';

    .orderCommentContainer{
        padding-top: 1.95rem;
        padding-bottom: 3rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .container_style{
        background-color: #fff;
        margin-top: .4rem;
        padding: 0 .7rem;
    }
    .slid_up-enter-active, .slid_up-leave-active {
        transition: all .3s;
    }
    .slid_up-enter, .slid_up-leave-active {
        transform: translate3d(0,10rem,0)
    }
    .pay_way{
        .header_style{
            @include fj;
            line-height: 2rem;
            span:nth-of-type(1){
                @include sc(.7rem, #666);
            }
            .more_type{
                span:nth-of-type(1){
                    @include sc(.6rem, #aaa);
                    width: 10rem;
                    display: inline-block;
                    text-align: right;
                    vertical-align: middle;
                }
                svg{
                    @include wh(.5rem, .5rem);
                    fill: #ccc;
                }
            }
        }
        .support_is_available{
            span{
                color: #666;
            }
        }
    }
    .address_empty_right{
        @include wh(.6rem, .6rem);
        fill: #999;
    }
    .address_empty_right{
        @include wh(.6rem, .6rem);
        fill: #999;
    }
    .choose_type_Container{
        min-height: 10rem;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 204;
        header{
            background-color: #fafafa;
            @include sc(.7rem, #333);
            text-align: center;
            line-height: 2rem;
        }
        ul{
            li{
                @include fj;
                padding: 0 .7rem;
                line-height: 2.5rem;
                align-items: center;
                span{
                    @include sc(.7rem, #ccc);
                }
                svg{
                    @include wh(.8rem, .8rem);
                    fill: #eee;
                }
            }
            .choose{
                span{
                    color: #333;
                }
                svg{
                    fill: #4cd964;
                }
            }
        }
    }
    .ellipsis{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .router-link-active {
    text-decoration: none;
  }
</style>