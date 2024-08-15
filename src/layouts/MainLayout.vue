<template>
  <q-layout view="hHh LpR fff">
    <q-header elevated class="bg-white">
      <q-toolbar class="flex flex-center">
        <img
          src="icons/sahas-logo.jpg"
          style="height: 4rem; padding: 4px 0 4px 0"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-footer-bg text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
