module.export = {
    decServer: {
      proxy: {
          '/api' : {
              target: 'http://localhost:8081'
          }
      }  
    }
}