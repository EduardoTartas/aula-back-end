import app from './src/app.js'
import * as dotenv from 'dotenv'; 


const port = process.env.PORT || 3003; 

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
  })

