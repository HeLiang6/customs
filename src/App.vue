<template>
  <div id="app">
    <transition name="fade">
      <router-view class="child-view" />
    </transition>
  </div>
</template>

<style lang="scss">
@import "~assets/styles/common.scss";
@import "~assets/styles/popup.scss";
.child-view {
  position: absolute;
  min-height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 0.5;
  transition: all 0.5s ease;
}

.fade-enter {
  transform: translateX(-50px);
  -webkit-transform: translateX(-50px);
  opacity: 0;
}

.fade-leave-active {
  transform: translateX(50px);
  -webkit-transform: translateX(50px);
  opacity: 0;
}
</style>
