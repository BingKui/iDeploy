<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, ref, toRefs } from 'vue';
import { checkUpdate, installUpdate, UpdateManifest } from '@tauri-apps/api/updater'
import { relaunch } from '@tauri-apps/api/process';
import { listen } from '@tauri-apps/api/event'

import Greet from "./components/Greet.vue";
onMounted(async () => {
  listen('tauri://update-status', function (res) {
    console.log('New status: ', res)
  })
  // 检查更新
  try {
    const { shouldUpdate, manifest } = await checkUpdate();
    console.log('检查更新', shouldUpdate);
    if (shouldUpdate) {
      // updateVisible.value = true;
      // updateInfo.value = manifest;
      console.log('manifest ->', manifest);
      // // display dialog
      await installUpdate()
      // install complete, restart app
      await relaunch()
    }
  } catch (error) {
    console.error('错误信息 ->', error)
  }
});
</script>

<template>
  <div class="container">
    <h1>Welcome to Tauri!</h1>

    <div class="row">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank">
        <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <p>
      Click on the Tauri, Vite, and Vue logos to learn more about each
      framework.
    </p>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      +
      <a href="https://github.com/tauri-apps/tauri-vscode" target="_blank">Tauri</a>
      +
      <a href="https://github.com/rust-lang/rust-analyzer" target="_blank">rust-analyzer</a>
    </p>

    <Greet />
  </div>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
