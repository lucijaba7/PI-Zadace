<template>
  <div class="card text-center">
    <div class="card-header text-left" style="font-size: 20px">
      {{ info.user }}
    </div>
    <div class="card-body p-0">
      <img class="card-img-top" :src="info.url" alt="neka slika..." />
    </div>
    <div class="card-footer text-muted text-left">
      <div>
        <span style="font-weight: bold">{{ info.user }}</span>
        <span> {{ info.title }}</span>
      </div>
      <div style="font-size: 12px">
        {{ info.time }}
      </div>
    </div>
  </div>
</template>

<script>
//JS kod
export default {
  props: ["info"],
  name: "InstagramCard",
};
</script>

<style lang="scss">
.card {
  margin-bottom: 20px;
}
</style>
