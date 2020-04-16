<template>
  <div id="app">
    <Header>
      <div id="nav" slot="header-routes">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
    </Header>
    <!-- name attr is useful, see css classes -->
    <transition appear name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* <transition> */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
