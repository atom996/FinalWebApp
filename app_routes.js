//app_routes.js
const express = require('express');
const router = express.Router();

//FileSystem import
const fs = require('fs');
//As seen in the example, rawdata is obtained from the courses.JSON file.
let rawdata = fs.readFileSync('./courses.json');
let course = JSON.parse(rawdata);

//Routes
//Default
router.get('/', (req,res) => {
  //let outputJSON = { courses : course["courses"] };
  //res.json(outputJSON);
  res.sendfile(path.resolve('./front_end/index.html'));
});
//Route for getting information by instructor name
router.get('/byName/:nameInput', (req,res) => {
  let query = req.params['nameInput'];
  filtered_courses = course['courses'].filter(c => c.instructor.includes(query));
  let outputJSON = { courses : filtered_courses };
  res.json(outputJSON);
});
//Route for getting information by course name
router.get('/byCourse/:courseInput', (req,res) => {
  let query = req.params['courseInput'];
  filtered_courses = course['courses'].filter(c => c.title.includes(query));
  let outputJSON = { courses : filtered_courses };
  res.json(outputJSON);
});
//Route for getting information by course Code
router.get('/byCode/:codeInput', (req,res) => {
  let query = req.params['codeInput'];
  filtered_courses = course['courses'].filter(c => c.course_code.includes(query));
  let outputJSON = { courses : filtered_courses };
  res.json(outputJSON);
});
//Route for getting information by course Level
router.get('/byLevel/:levelInput', (req,res) => {
  let query = req.params['levelInput'];
  filtered_courses = course['courses'].filter(c => c.course_level.includes(query));
  let outputJSON = { courses : filtered_courses };
  res.json(outputJSON);
});

module.exports = router;
