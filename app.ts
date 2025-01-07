const express = require('express');
const db = require('./models');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/books', bookRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
})