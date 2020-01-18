<template>
  <nav class="navbar is-transparent is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1 class="navbar-item has-text-danger has-text-weight-bold is-family-monospace">
            A Software Crafter's Journey
          </h1>
        </a>


      <a class="navbar-burger burger" aria-label="menu" aria-expanded="false" v-on:click="openMenu()" v-bind:class="{ 'is-active': isNavbarMenuOpened }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" v-bind:class="{ 'is-active': isNavbarMenuOpened }">
      <div class="navbar-start">
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-danger" :href="aboutUsLink" target="_blank">
              <strong>&Agrave; propos de nous</strong>
            </a>
            <a class="button is-light" :href="contributionLink" target="_blank">
              Contribuer
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        isNavbarMenuOpened: false,
        aboutUsLink: 'http://la-combe-du-lion-vert.fr/',
        contributionLink: 'https://github.com/lelionvert/a-software-crafter-s-journey/'
      }
    },
    methods: {
      openMenu: function () {
          this.isNavbarMenuOpened = !this.isNavbarMenuOpened;
      }
    }
  }
</script>
