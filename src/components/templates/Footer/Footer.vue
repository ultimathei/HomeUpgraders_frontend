<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <p>Designed and Developed by our son, Mate Krisztian @ 2017</p>
    <p>krisztian.mate.design@gmail.com</p>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  color: rgb(var(--hup-color--white));
  padding: 1.5rem;
  background-color: rgb(var(--hup-color--black));

  p {
    font-size: 1rem;
    font-style: italic;
    font-weight: 100;
  }
}
</style>
