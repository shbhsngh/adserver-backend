var express = require('express');
var router = express.Router();

/* GET JS */
router.get('/getJS', function(req, res, next) {

  let scriptCode = `var request=new XMLHttpRequest;request.open("GET","https://warm-wave-66224.herokuapp.com/render/get-image",!0),request.onload=function(){if(request.status>=200&&request.status<400){var e=document.getElementById("some_random_id"),t=document.createElement("img");t.alt="Ad Server Image",t.style="width:400px",t.src=JSON.parse(this.response).data,e.innerHTML="",e.appendChild(t)}else console.log("error")},request.send();` 

  res.send(scriptCode);
});

/* GET image. */
router.get('/get-image', function(req, res, next) {
  let data = "https://i.postimg.cc/3wbMCy02/250x250.png";
 
  res.send({status:"OK",data}); 
});

module.exports = router;
