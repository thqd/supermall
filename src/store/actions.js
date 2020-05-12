import {
 ADD_COUNTER,
 ADD_TO_CART
} from './mutations-type'


export default {
 addCart(content, payload) {
  return new Promise((resolve, reject) => {
   // 查找之前数组中是否含有该商品
   let oldProduct = content.state.cartList.find(item => item.iid === payload.iid)

   // 判断oldProduct 
   if (oldProduct) {
    // oldProduct.count += 1;
    content.commit(ADD_COUNTER, oldProduct)
    resolve("商品数量加1")
   } else {
    payload.count = 1
    // state.cartList.push(payload)
    content.commit(ADD_TO_CART, payload)
    resolve("添加了新的商品")
   }
  })
 }
}