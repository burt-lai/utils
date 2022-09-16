<template>
  <div class="demo">
    <ul>
      <li v-for="item in items" :key="item.id">
        <input type="text" v-model="item.quantity" />
        <span>{{ item.name }}</span>
        <span v-if="item.quantity === 0"> - OUT OF STOCK</span>
        <button v-on="add(item)">add</button>
      </li>
    </ul>
    <h2>Total Inventory:{{ total }}</h2>
  </div>
</template>

<script>
const url = 'https://common-75845.gzc.vod.tencent-cloud.com/app/logo/test/data.json' // 题目的url
export default {
  name: 'Demo',
  data () {
    return {
      items: []
    }
  },
  computed: {
    total () {
      return this.items.reduce((acc, cur) => ((acc += cur.quantity), acc), 0)
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      fetch(url)
        .then(res => res.json())
        .then(res => (this.items = res))
    },
    add (item) {
      item.quantity++
    }
  }
}
</script>
