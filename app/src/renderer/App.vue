<template>
  <div id="app" class="flex-container vertical">
    <!-- <router-view></router-view> -->
    <app-header></app-header>
    <main class="flex-container horizontal"
        v-if="connection">
      <schema-list class="frame schema-list"></schema-list>
      <div class="flex-container vertical" @drag="log">
        <query-pane class="frame query-pane"  id="query-pane">
        </query-pane>
        <results class="frame results"></results>
      </div>
    </main>
    <main v-else>
      <connection-list></connection-list>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store';
  import 'font-awesome/css/font-awesome.min.css'
  import 'purecss/build/pure-min.css'
  import ConnectionList from './components/ConnectionList'
  import Footer from './components/Footer'
  import Hello from './components/Hello'
  import Header from './components/Header'
  import SchemaList from './components/SchemaList'
  import QueryPane from './components/QueryPane'
  import Results from './components/Results'
  import bus from './bus'

  export default {
    store,
    components: {
      appFooter: Footer,
      ConnectionList,
      Hello,
      appHeader: Header,
      SchemaList,
      QueryPane,
      Results
    },
    computed: {
      connection () {
        return bus.dbConnection
      }
    },
    methods: {
      log (event) {
        console.log("hi", event)
      }
    }
  }
</script>

<style>

  html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    --frame-color: grey;
    --scrollbar-thumb-color: #21BB9A;
    --scrollbar-background: #CCF6ED;

    --curve-size: .5em;

    --background: #f2f2f2;

    --info: #00429b;
    --info-background: #bde5f8;
    --success: #4f8a10;
    --success-background: #dff2bf;
    --warning: #9f6000;
    --warning-background: #feefb3;
    --error: #d8000c;
    --error-background: #ffbaba;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font: menu;
  }
  #app {
    /*max-width: 600px;
    font-family: Helvetica, sans-serif;
    text-align: center;*/
    position: absolute;
    height: 100%;
    width: 100%;
  }
  main {
      flex: 1;
      background-color: var(--background);
  }

  .success {
    color: var(--success);
    background-color: var(--success-background);
  }
  .flex-container {
      display: flex;
      flex-wrap: nowrap;;
      flex: 1;
      width: 100%;
      overflow: auto;
  }
  .vertical {
      flex-direction: column;
      flex: 1;
  }
  .horizontal {
      flex-direction: row;
  }

  .frame {
    border: 1px solid var(--frame-color);
    border-radius: var(--curve-size);
    margin: .5em;
    overflow: auto;
    background-color: #fff;
  }
  .frame::-webkit-scrollbar {
    border-radius: var(--curve-size);
  }
  .frame::-webkit-scrollbar {
    background: var(--scrollbar-background);
    border-radius: var(--curve-size);
    height: .75em;
    width: .75em;
  }

  .frame::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb-color);
    border-radius: var(--curve-size);
  }

  .schema-list {
      min-width: 150px;
      width: 200px;
      resize: horizontal;
  }
  .query-pane {
    height: 100px;
    resize: vertical;
  }
  .results {
    flex: 1;
  }


  .Local {
  color: var(--info);
  background-color: var(--info-background);
}
.Testing {
  color: var(--warning);
  background-color: var(--warning-background);
}
.Production {
  color: var(--error);
  background-color: var(--error-background);
}

.button-warning {
  background-color: var(--error);
  color: white;
}
</style>
