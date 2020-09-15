const neatCsv = require('neat-csv')

const fs = require('fs')

fs.read('./data/Relacao+de+Servidores.csv', async (err, data)=>{
  if(err){
    console.log(err)

    return
  }
  console.log(await neatCsv(data))
})