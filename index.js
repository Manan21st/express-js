const express = require('express');
const app = express();

app.use(express.json()); // Add this line to parse JSON data in the request body
app.use(middleware);
app.use(logger);
function middleware(req, res, next) {
    console.log('Logging');
    next();
}
function logger(req, res, next) {
    console.log(req.method, req.ip, req.hostname, new Date());
    next();
}

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

app.post('/courses', (req, res) => {
    let newCourse = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(newCourse);
    res.json(courses);
});

app.put('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);
    if (!course) {
        return res.status(404).send('Course not found');
    }
    course.name = req.body.name;
    res.json(courses);
});

app.delete('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(c => c.id === courseId);
    if (courseIndex === -1) {
        return res.status(404).send('Course not found');
    }
    courses.splice(courseIndex, 1);
    res.json(courses);
});
