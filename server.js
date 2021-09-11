const express = require('express')
const compression = require('compression')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

app.use(compression())

app.use(express.static('./dist'))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
