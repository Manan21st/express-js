const express = require('express');
const app = express();

let courses = [
        {id:1, name:'java'},
        {id:2, name:'python'}, 
        {id:3, name:'c++'}
];

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {

});

app.get('/courses', (req, res) => {
    res.json(courses);
});