<template>
  <div>
    <h1>ログインページ</h1>
    <div><UserProfile /></div>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue"

export default {
  components: { 
      UserProfile, 
      },
}
</script>

