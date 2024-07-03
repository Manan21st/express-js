const express = require('express');
const app = express();

app.use(express.json()); // Add this line to parse JSON data in the request body

let courses = [
        {id:1, name:'java'},
        {id:2, name:'python'}, 
        {id:3, name:'c++'}
];

let instructors = [
    {id:1, name:'Siddharth'},
    {id:2, name:'Kshitij'},
    {id:3, name:'Dhruv'}
];

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.get('/instructors', (req, res) => {
    res.json(instructors);
});

app.post('/courses', (req, res) => {
    const newCourse = req.body;
    courses.push(newCourse);
    res.json(courses);
});