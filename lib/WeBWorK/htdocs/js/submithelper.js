window.addEventListener('load', () => {
  let problemForm = document.getElementById('problemMainForm')
  if (!problemForm) {console.log("could not find form!"); return;}
  problemForm.querySelectorAll('.btn-primary').forEach( button => {
    button.addEventListener('click', () => {
      // debounce means we need to keep ONLY the last button clicked
      problemForm.querySelectorAll('.btn-primary').forEach( clean => {
        clean.classList.remove('btn-clicked');
      }); // clear all clicks
      button.classList.add("btn-clicked");
      alert("clicked: ", button);
    })
  })
})
document.getElementById("button1").addEventListener("click", (e) => {
  /** @type HTMLInputElement */
  const input1 = document.getElementById("input1");
  window.parent.postMessage(
    {
      type: "button-click",
      message: input1.value
    },
    "*"
  );
  input1.value = "";
});

