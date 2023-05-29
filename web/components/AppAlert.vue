<template>
  <transition name="fade">
    <div :class="alertClasses" class="alertClasses whitespace-nowrap text-lg flex justify-between shadow" v-if="show">
      {{ message }}
      <button @click="dismissAlert" class=" ml-4 text-white whitespace-nowrap">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info' // 可以根据需要设置默认类型
    },
    time: {
      type: Number,
      default: 10000 // 默认显示时间,单位秒
    }
  },
  computed: {
    alertClasses() {
      return {
        'bg-blue-500': this.type === 'info',
        'bg-green-500': this.type === 'success',
        'bg-yellow-500': this.type === 'warning',
        'bg-red-500': this.type === 'error',
        'p-4': true,
        'text-white': true
      };
    }
  },
  methods: {
    dismissAlert() {
      this.show = false;
    },
  },
  mounted() {
    setTimeout(() => {
      this.dismissAlert();
    }, this.time);
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>