const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/TeamManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log('Established connection to database'))
    .catch(()=> console.log('Problem with connection to database', err));