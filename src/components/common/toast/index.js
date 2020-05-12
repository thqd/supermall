import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
 // 1.创建组建构造器
 const toastContrustor = Vue.extend(Toast)
 console.log(Toast);
 console.log("完成");
 
 
 //2.new的方式，根据组建构造器，可以创建出一个组建对象
 const toast = new toastContrustor()
 // 3.将组建对象手动挂载到某一个函数
 toast.$mount(document.createElement('div'))
 // 4.toast.$el对应的就是div
 document.body.appendChild(toast.$el)

 Vue.prototype.$toast = toast;
}

export default obj
