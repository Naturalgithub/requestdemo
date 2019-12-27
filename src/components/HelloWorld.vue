<template>
  <div>
    <p>request demo</p>
    <div>{{res}}</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      res: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.res = '未返回数据' || undefined
    }
  }
}
</script>

<style>
</style>
