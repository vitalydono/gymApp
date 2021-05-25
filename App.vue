<template>
  <div id="app">
    <!--    <div class="">-->
    <!--      <q-toolbar class="bg-black text-blue shadow-2 rounded-borders">-->

    <!--        <div class="btn-wrapper">-->
    <!--          <div class="logOutBtn">-->
    <!--            <q-btn @click="logOut" name="logOut" label="Log Out" />-->
    <!--          </div>-->
    <!--          <div class="homeBtn">-->
    <!--            <q-icon class="home-icon" size="2rem" name="home" @click="switchToHomeComponent" />-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </q-toolbar>-->
    <!--    </div>-->

    <div class="secondPage">
      <q-layout view="hHh Lpr lff" style="height: 300px" class="shadow-2 rounded-borders">
        <q-header elevated class="bg-black">
          <q-toolbar>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu"/>
            <div class="btn-wrapper">
              <div class="logOutBtn">
                <q-btn @click="logOut" name="logOut" label="Log Out"/>
              </div>
              <div class="homeBtn">
                <q-icon class="home-icon" size="2rem" name="home" @click="switchToHomeComponent"/>
              </div>
            </div>
          </q-toolbar>
        </q-header>

        <q-drawer
            v-model="drawer"
            :width="300"
            :breakpoint="500"
            overlay
            bordered
            content-class="bg-grey-3">

          <q-scroll-area class="fit">
            <q-list>

              <template v-for="(menuItem, index) in menuList" style="margin-top: 72px">
                <q-item :key="index" clickable @click="switcher(menuItem.label)" :active="menuItem.label === 'Outbox'"
                        v-ripple

                >
                  <q-item-section avatar>
                    <q-icon :name="menuItem.icon"/>
                  </q-item-section>
                  <q-item-section>
                    {{ menuItem.label }}
                  </q-item-section>
                </q-item>
                <q-separator :key="'sep' + index" v-if="menuItem.separator"/>
              </template>
            </q-list>
          </q-scroll-area>
        </q-drawer>

        <q-page-container>
          <router-view/>
        </q-page-container>

      </q-layout>
    </div>
  </div>

</template>

<script>
import firebaseInstance from "@/middleWare/firebase";

const menuList = [
  {
    label: 'Admin',
  },
  {
    label: 'Worker Management',
  },
  {
    label: 'Trainees Management',
  },
  {
    label: 'Inventory Management',
  },
  {
    label: 'Workers Schedules',
  },
]

export default {
  data() {
    return {
      drawer: false,
      menuList
    }
  },

  methods: {
    switcher(label) {
      switch (label) {
        case 'Admin':
          this.$router.push('/home')
          break;
        case 'Worker Management':
          this.$router.push('/trainees')
          break
        case 'Trainees Management':
          this.$router.push('/Participants')
          break
      }
    },


    switchToHomeComponent() {
      this.$router.push('/mainPage')
    },
    logOut() {
      firebaseInstance.firebase.auth().signOut().then(() => {
        window.user = null
        this.$router.push('/')
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  //overflow-y: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav-bar {
  display: flex;
  justify-content: space-between;

}

.home-icon {
  padding: 20px;
}

.btn-wrapper {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.secondPage {

}
</style>
