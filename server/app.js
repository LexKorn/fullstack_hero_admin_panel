require('colors');

const express = require('express'),
      config = require('config'),
      mongoose = require('mongoose'),
      path = require('path'),
      cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); 

app.use('/api/heroes', require('./routes/heroes.routes'));


const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('MongoUri'));

        app.listen(PORT, () => {
            console.log(`Server has started on port ${PORT}`.bgCyan);
        });

    } catch(err) {
        console.log('Oops, error...', err.message);
        process.exit(1);
    }
}
start();