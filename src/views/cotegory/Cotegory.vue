<template>
  <div class="wrapper" ref="aaa">
    <div class="content">
      <li>分类裂表格1</li>
      <li>分类裂表格2</li>
      <li>分类裂表格3</li>
      <li>分类裂表格4</li>
      <li>分类裂表格5</li>
      <li>分类裂表格6</li>
      <li>分类裂表格7</li>
      <li>分类裂表格8</li>
      <li>分类裂表格9</li>
      <li>分类裂表格10</li>
      <li>分类裂表格11</li>
      <li>分类裂表格12</li>
      <li>分类裂表格13</li>
      <li>分类裂表格14</li>
      <li>分类裂表格15</li>
      <li>分类裂表格16</li>
      <li>分类裂表格17</li>
      <li>分类裂表格18</li>
      <li>分类裂表格19</li>
      <li>分类裂表格20</li>
      <li>分类裂表格21</li>
      <li>分类裂表格22</li>
      <li>分类裂表格23</li>
      <li>分类裂表格24</li>
      <li>分类裂表格25</li>
      <li>分类裂表格26</li>
      <li>分类裂表格27</li>
      <li>分类裂表格28</li>
      <li>分类裂表格29</li>
      <li>分类裂表格30</li>
      <li>分类裂表格31</li>
      <li>分类裂表格32</li>
      <li>分类裂表格33</li>
      <li>分类裂表格34</li>
      <li>分类裂表格35</li>
      <li>分类裂表格36</li>
      <li>分类裂表格37</li>
      <li>分类裂表格38</li>
      <li>分类裂表格39</li>
      <li>分类裂表格40</li>
      <li>分类裂表格41</li>
      <li>分类裂表格42</li>
      <li>分类裂表格43</li>
      <li>分类裂表格44</li>
      <li>分类裂表格45</li>
      <li>分类裂表格46</li>
      <li>分类裂表格47</li>
      <li>分类裂表格48</li>
      <li>分类裂表格49</li>
      <li>分类裂表格50</li>
      <li>分类裂表格51</li>
      <li>分类裂表格52</li>
      <li>分类裂表格53</li>
      <li>分类裂表格54</li>
      <li>分类裂表格55</li>
      <li>分类裂表格56</li>
      <li>分类裂表格57</li>
      <li>分类裂表格58</li>
      <li>分类裂表格59</li>
      <li>分类裂表格60</li>
      <li>分类裂表格61</li>
      <li>分类裂表格62</li>
      <li>分类裂表格63</li>
      <li>分类裂表格64</li>
      <li>分类裂表格65</li>
      <li>分类裂表格66</li>
      <li>分类裂表格67</li>
      <li>分类裂表格68</li>
      <li>分类裂表格69</li>
      <li>分类裂表格70</li>
      <li>分类裂表格71</li>
      <li>分类裂表格72</li>
      <li>分类裂表格73</li>
      <li>分类裂表格74</li>
      <li>分类裂表格75</li>
      <li>分类裂表格76</li>
      <li>分类裂表格77</li>
      <li>分类裂表格78</li>
      <li>分类裂表格79</li>
      <li>分类裂表格80</li>
      <li>分类裂表格81</li>
      <li>分类裂表格82</li>
      <li>分类裂表格83</li>
      <li>分类裂表格84</li>
      <li>分类裂表格85</li>
      <li>分类裂表格86</li>
      <li>分类裂表格87</li>
      <li>分类裂表格88</li>
      <li>分类裂表格89</li>
      <li>分类裂表格90</li>
      <li>分类裂表格91</li>
      <li>分类裂表格92</li>
      <li>分类裂表格93</li>
      <li>分类裂表格94</li>
      <li>分类裂表格95</li>
      <li>分类裂表格96</li>
      <li>分类裂表格97</li>
      <li>分类裂表格98</li>
      <li>分类裂表格99</li>
      <li>分类裂表格100</li>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)

export default {
  name: "Cotegory",
  // data() {},
  mounted() {
    // probeType设置监听滚动 值为0,1,2,3
    // pullUpLoad 下拉加载更多
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper,{
      probeType:3,
      // scrollY: true,
      pullUpLoad:true,
    });

    //监听滚动
    scroll.on('scroll',(position) =>{
      // console.log(position)
    })

    // 下拉加载更多
    scroll.on('pullingUp',()=>{
      console.log('上拉加载更多')
      scroll.finishPullUp()
    })
  }
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
  overflow: hidden;
}
</style>