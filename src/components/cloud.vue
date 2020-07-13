
<template lang="pug">
  .cloud
    .bubble#bubble-1.bg-english
    .bubble#bubble-2.bg-silver
    .bubble#bubble-3.bg-vanila
</template>

<style lang="stylus" scoped>
random(min,max)
  return math(0, 'random')*(max - min + 1) + min
.cloud
  position absolute
  margin 2rem
  width 14rem
  height 5rem
  border-radius 30rem
  opacity .6
  transition 10s
  .bubble
    position absolute
    height 7rem
    width 21rem
    border-radius 55rem
  #bubble-1
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    background-color rgba(11, 1, 51, 1)
    box-shadow 7px -2px 12rem 12rem rgba(11, 1, 51, 1)
  #bubble-2
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    background-color rgba(11, 29, 81, 1)
    box-shadow 7px -2px 8rem 8rem rgba(11, 29, 81, 1)
  #bubble-3
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    background-color rgba(11, 1, 51, 1)
    box-shadow 7px -2px 8rem 8rem rgba(11, 1, 51, 1)
</style>
