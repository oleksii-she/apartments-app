<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, onBeforeUnmount, watchEffect } from 'vue'

const props = defineProps({
  toggleModal: {
    type: Boolean,
    required: true
  },
  hideDialog: {
    type: Function,
    required: false
  },
  padding: Number
})

watchEffect(() => {
  console.log(props.toggleModal)
  if (props.toggleModal) {
    window.document.querySelector('body').style.overflow = 'hidden'
  }
})

const handleEscKey = (event) => {
  if (event.keyCode === 27) {
    window.document.querySelector('body').style.overflow = ''
    props.hideDialog()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscKey)
  window.document.querySelector('body').style.overflow = ''
})
</script>

<template>
  <div :class="toggleModal ? 'show_modal Overlay' : 'isHidden'" @click.stop="hideDialog">
    <div class="modal" @click.stop>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.Overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  visibility: hidden;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  transition: 0.5s;
  &.isHidden {
    opacity: 0;
  }
  &.show_modal {
    opacity: 1;
    visibility: visible;
  }
}
.modal {
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  transition: 0.4s all;
  margin: auto;

  &.show {
    transform: scale(1);
    max-height: 90%;
    overflow: auto;
  }
  &.show::-webkit-scrollbar {
    display: none;
  }
  &.hidden {
    transform: scale(0.5);
    transition: 0.4s all;
  }
}
</style>
