//app_front.js
//
/*Function that updates the query results based on what is
currently in the text box after button is pressed.*/
var updateView = async (button) => {
  if(document.getElementById('dropSelect').value == 'opOne') {
    let queryValue = document.querySelector("#usrSpecific").value;
    apiLink = `http://localhost:3000/api/byCourse/${queryValue}`;
  } else if (document.getElementById('dropSelect').value == 'opTwo') {
    let queryValue = document.querySelector("#usrSpecific").value;
    apiLink = `http://localhost:3000/api/byCode/${queryValue}`;
  } else if (document.getElementById('dropSelect').value == 'opThree') {
    let queryValue = document.querySelector("#usrSpecific").value;
    apiLink = `http://localhost:3000/api/byName/${queryValue}`;
  } else if (document.getElementById('dropSelect').value == 'opFour') {
    let queryValue = document.querySelector("#usrSpecific").value;
    apiLink = `http://localhost:3000/api/byLevel/${queryValue}`;
  } else {
    let queryValue = document.querySelector("#usrSpecific").value;
    apiLink = `http://localhost:3000/api/`;
  }

  const data = await fetch(apiLink);
  const model = await data.json();

  render_results(model);
}

//Function for rendering handlebars template.
var render_results = (model) => {
  var source = document.querySelector("#show_results").innerHTML;
  var template = Handlebars.compile(source);
  var html = template(model);

  document.querySelector("#results").innerHTML = html;
}
