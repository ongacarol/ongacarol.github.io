function mudaTema() {
    document.body.classList.toggle("dark");
}

//agora vamos fazer accordion list no FAQ

    let accordionList = document.getElementsByClassName("js-accordion");
    let i;

    for (i = 0; i < accordionList.length; i++) {
        accordionList[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }