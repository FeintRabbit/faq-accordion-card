// select the questions
const qtns = document.querySelectorAll(".question");

// expand the question when clicked, hide all others
// close on click again
qtns.forEach(qtn => {
  qtn.addEventListener("click", e => {
    if (!qtn.classList.contains("question--selected")) {
      qtns.forEach(qtn => qtn.classList.remove("question--selected"));
      qtn.classList.add("question--selected");
    } else {
      qtn.classList.remove("question--selected");
    }
  });
});
