<template>
  <div class="hello">

    <van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-cell-group>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息"  />
</van-cell-group>
  </div>

</template>

<script>

import { Button,Cell, CellGroup } from 'vant';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    [Button.name]:Button,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
