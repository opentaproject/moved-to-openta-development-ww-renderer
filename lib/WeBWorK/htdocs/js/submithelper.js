window.addEventListener('load', () => {
  let problemForm = document.getElementById('problemMainForm')
  console.log("PROBLEM_FORM" );
  var tables  = document.getElementsByTagName("table")
  var inputs  = document.getElementsByName("identifier")
  if ( inputs.length  >0 ) {
    let input = inputs[0];
    identifier = input.getAttribute('value')  
     }  else {
    let identifier = 'no-identifier'
     }
  var correct_or_not = 'not graded';
  var corrects  = problemForm.getElementsByClassName("ResultsWithoutError");
  var incorrects  = problemForm.getElementsByClassName("ResultsWithError");
    if ( corrects.length > 0 ){
      alert("CORRECT")
      correct_or_not = 'correct';
    } else if ( incorrects.length > 0  ) {
      alert("INCORRECT")
      correct_or_not = 'incorrect';
    } else {
    }

  // let corrects = document.getElementByClassName(" correct")
  //console.log("CORRECTS = ", corrects)
  //let incorrects = problemForm.getElementByClassName("incorrect") 
  if (!problemForm) {console.log("could not find form!"); return;}
  var msg = identifier.substr(0,7);
  problemForm.querySelectorAll('.btn-primary').forEach( button => {
    button.addEventListener('click', () => {
      // debounce means we need to keep ONLY the last button clicked
      problemForm.querySelectorAll('.btn-primary').forEach( clean => {
        clean.classList.remove('btn-clicked');
      }); // clear all clicks
      button.classList.add("btn-clicked");
      // alert("clicked: ", button);
      window.parent.postMessage( {
        type: "button-click",
        message: msg 
      },
    "*"
  );
    })
  })
})
