<template>
  <RouterLink to="/" class="btn-primary hover:opacity-90">Back to homepage</RouterLink>
</template>

<script setup></script>

<style scoped>
.btn-primary {
  background: rgb(255, 198, 50);
  width: 25rem;
  border-radius: 4px;
  padding-block: 0.75rem;
  margin-top: 1, 5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 4px 4px 4px;
  display: grid;
  place-items: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.125rem;
  color: rgb(54, 54, 54);
  transition: all 0.3s;
}
</style>
