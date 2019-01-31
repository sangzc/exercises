/* Is size a valid integer 2-50? */

function validateEdge(size) {
  return (Number.isInteger(size) &&
      size >= 2 &&
      size <= 50);
}


/* Calculate area of triangle */

function calcArea(a, b) {
  return a * b / 2;
}


/* Calculate hypotenuse: h = sqrt(a^2 * b^2); return rounded result */

function calcHypotenuse(a, b) {
  let hypot = Math.sqrt(a * a + b * b);
  return Math.round(hypot);
}


/* Create result msg */

function getMessage(area, hypot) {
  let msg = `Hypotenuse is ${hypot} and area is ${area}.`;
  if (area > 50) {
    msg += ` That's a really big triangle!`;
  }
  return msg;
}


/* Get results: validate, calculate & get message.
 * returns {aMsg, bMsg, msg}
 */

function getResults(a, b) {
  let aOk = validateEdge(a);
  let bOk = validateEdge(b);

  let aMsg = aOk ? "" : "Invalid!";
  let bMsg = bOk ? "" : "Invalid!";

  let msg;

  if (aOk && bOk) {
    let area = calcArea(a, b);
    let hypot = calcHypotenuse(a, b);
    msg = getMessage(area, hypot);
  } else {
    msg = "";
  }

  return {aMsg, bMsg, msg}
}


/* Handle UI: get form data & update HTML */

function processForm(evt) {
  evt.preventDefault();
  let a = +document.getElementById("side-a").value;
  let b = +document.getElementById("side-b").value;

  let res = getResults(a, b);

  document.getElementById("a-msg").innerHTML = res.aMsg;
  document.getElementById("b-msg").innerHTML = res.bMsg;
  document.getElementById("msg").innerHTML = res.msg;
}
