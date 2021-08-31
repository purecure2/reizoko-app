<template>
  <div>
    {{ user.displayName }}
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$auth.currentUser
    },
  },
}
</script>
