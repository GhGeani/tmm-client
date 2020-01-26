<template lang="pug">
  .cloud
    .bubble#thirteenth.bg-english
    .bubble#first.bg-silver
    .bubble#second.bg-vanila
    .bubble#third.bg-silver
    .bubble#fourth.bg-vanila
    .bubble#fifth.bg-english
    .bubble#sixth.bg-vanila
    .bubble#seventh.bg-silver
    .bubble#eighth.bg-silver
    .bubble#ninth.bg-english
    .bubble#tenth.bg-vanila
    .bubble#eleventh.bg-silver
    .bubble#twelfth.bg-silver
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
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    box-shadow .5rem .2rem 2rem 1rem rgba(187, 173, 160, 1)
  #second
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    box-shadow .5rem .2rem 2rem 1rem rgba(209, 198, 173, 1)
  #third
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    box-shadow .5rem .2rem 2rem 1rem rgba(187, 173, 160, 1)
  #fourth
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    box-shadow .5rem .2rem 2rem 1rem rgba(209, 198, 173, 1)
  #fifth
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    box-shadow .5rem .2rem 2rem 1rem rgba(161, 134, 158, 1)
  #sixth
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    box-shadow .5rem .2rem 2rem 1rem rgba(209, 198, 173, 1)
  #seventh
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    box-shadow .5rem .2rem 2rem 1rem rgba(187, 173, 160, 1)
  #eighth
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    box-shadow .5rem .2rem 2rem 1rem rgba(187, 173, 160, 1)
  #ninth
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    box-shadow .5rem .2rem 2rem 1rem rgba(161, 134, 158, 1)
  #tenth
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    box-shadow .5rem .2rem 2rem 1rem rgba(209, 198, 173, 1)
  #eleventh
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    box-shadow .5rem .2rem 2rem 1rem rgba(187, 173, 160, 1)
  #twelfth
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    box-shadow .5rem .2rem 2rem 1rem rgba(187, 173, 160, 1)
  #thirteenth
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    box-shadow .5rem .2rem 2rem 1rem rgba(209, 198, 173, 1)
  #fourteenth
    margin-left random(-2, 25)rem
    margin-top random(-4, 2)rem
    box-shadow .5rem .2rem 2rem 1rem rgba(161, 134, 158, 1)
</style>
