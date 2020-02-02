<template lang="pug">
  .cloud
    .bubble#first.bg-silver
    .bubble#second.bg-vanila
    .bubble#third.bg-silver
    .bubble#fourth.bg-vanila
    .bubble#fifth.bg-silver
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
    height 10rem
    width 11rem
    border-radius 100rem
  #first
    margin-left random(-2, 40)rem
    margin-top random(-4, 2)rem
    box-shadow .1rem .1rem 3rem 3rem rgba(187, 173, 160, 1)
  #second
    margin-left random(-2, 40)rem
    margin-top random(-4, 2)rem
    box-shadow .1rem .1rem 3rem 3rem rgba(209, 198, 173, 1)
  #third
    margin-left random(-2, 40)rem
    margin-top random(-4, 2)rem
    box-shadow .1rem .1rem 3rem 3rem rgba(187, 173, 160, 1)
  #fourth
    margin-left random(-2, 40)rem
    margin-top random(-4, 2)rem
    box-shadow .1rem .1rem 3rem 3rem rgba(209, 198, 173, 1)
  #fifth
    margin-left random(-2, 40)rem
    margin-top random(-4, 2)rem
    box-shadow .1rem .1rem 3rem 3rem rgba(187, 173, 160, 1)
</style>
