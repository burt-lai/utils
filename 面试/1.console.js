const obj = {
  name: ' jsCoder',
  skill: ['es6', 'react', 'angular'],
  say: function () {
    for (let i = 1, len = this.skill.length; i <= len; i++) {
      // var --> let
      setTimeout(
        function () {
          console.log('No.' + i + this.name)
          console.log(this.skill[i])
          console.log('--------------------------')
        }.bind(this),
        0
      ) //绑定this bind(this)
      console.log(i)
    }
  }
}

obj.say()
