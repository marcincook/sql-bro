import Vue from 'vue'
import db from './db'

export default new Vue({
  data: {
    dbConnection: null,
    currentResults: null,
    currentSchema: null,
    currentObjects: null
  },
  methods: {
    setConnection (con) {
      db.createConnection(con)
      this.dbConnection = db
    },
    setCurrentResults (results) {
      this.currentResults = results
    },
    setCurrentSchema (schema){
      this.currentProject = schema;
    }
  }
})
