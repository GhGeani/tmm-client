<template lang="pug">
  main.conainer.h-100#landing
</template>

<style lang="stylus" scoped>
#landing
  position fixed
  width  100%
  height 100%
  left  0
  top 0
  z-index 10
  background-image radial-gradient(
    circle,
    alpha(black, 0.4),
    alpha(black, 0.9),
    alpha(black, 1))
</style>
