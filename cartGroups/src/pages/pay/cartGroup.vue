<template>
    <div class="cartGroupContainer">
        <section class="food_list">
            <header v-if="cartGroupList.restaurantInfo" align="left">
                <img :src="cartGroupList.restaurantInfo.imgBaseUrl + 
                           cartGroupList.restaurantInfo.imagePath">
                <span>{{cartGroupList.restaurantInfo.restaurantName}}</span>
            </header>
            <ul class="food_list_ul item_distance" v-if="cartGroupList.groups" align="left">
                <li v-for="item in cartGroupList.groups" :key="item.id" class="food_item_style">
                    <p class="food_name ellipsis item_distance">{{item.name}}</p>
                    <div class="num_price" >
                        <span>x {{item.quantity}}</span>
                    </div>
                    <div  align="right">
                        <span>¥ {{item.price}}</span>
                    </div>
                </li>
            </ul>
            <div class="food_item_style" v-if="cartGroupList.extra" align="left">
                <p class="food_name ellipsis item_distance">{{cartGroupList.extra[0].name}}</p>
                <div style="width:402px" align="right">
                    <span>¥ {{cartGroupList.extra[0].price}}</span>
                </div>
                <div style="width:3px" align="right">
                </div>
            </div>
            <div class="food_item_style" align="left">
                <p class="food_name ellipsis item_distance">配送费</p>
                <div style="width:402px" align="right">
                    <span>¥ {{cartGroupList.deliverAmount || 0}}</span>
                </div>
                <div style="width:3px" align="right">
                </div>
            </div>
            <div class="food_item_style total_price" >
                <p class="food_name ellipsis item_distance" align="left">订单 ¥{{cartGroupList.total}}</p>
                <div class="num_price" align="center">
                    <span >待支付<br/> ¥{{cartGroupList.total}}</span>
                </div>
            </div>
        </section>      
     </div>
     
</template>

<script>
import svgIcon from '../../common/svg'

export default {
  name: "cartGroups",
  components: {
      svgIcon
  },
  data () {
    return {
    }

  },
  props: {
    // 传入付款方式数据参数 
    cartGroupList: {
      type: Object,
      required: true,
      default: [{}]
    }
  },
  mounted() {
  },
  methods:{
        
    },
}
</script>

<style lang="scss" scoped>
    @import '../../mixin';
    .cartGroupContainer{
        padding-top: 1.95rem;
        padding-bottom: 3rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .food_list{
        background-color: #fff;
        margin-top: .4rem;
        header{
            padding: .7rem;
            border-bottom: 0.025rem solid #f5f5f5;
            img{
                @include wh(1.2rem, 1.2rem);
                vertical-align: middle;
            }
            span{
                @include sc(.8rem, #333);
            }
        }
        .food_list_ul{
            padding-top: .5rem;
        }
        .food_item_style{
            @include fj;
            line-height: 1.8rem;
            padding: 0 .7rem;
            span,p{
                @include sc(.65rem, #666);
            }
            .food_name{
                width: 11rem;
            }
            .num_price{

                flex: 1;
             
               
                span:nth-of-type(1){
                    color: #f60;
                }
            }
        }
        .total_price{
            border-top: 0.025rem solid #f5f5f5;
        }
    }
    .ellipsis{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .item_distance{
        margin-bottom: 0px;
        margin-top: 0px;
    }
   
</style>