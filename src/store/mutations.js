import {
ADD_COUNTER,
ADD_TO_CART
}from './mutations-type'

export default{
 // mutations唯一的目的就是修改state中的状态
 // mutations中的每个方法尽可能的完成事情比较单一
 [ADD_COUNTER](state,payload){
  payload.count++
 },
 [ADD_TO_CART](state,payload){
  payload.check=true
  state.cartList.push(payload)
 }
}