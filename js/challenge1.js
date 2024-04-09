//part 1
window.addEventListener("load", function () {
  var header = document.querySelector("h1");
  header.style.color = "#6E3DFF";
  header.style.fontStyle = "Cursive";
  header.style.textAlign = "center";
});

//part 2
window.addEventListener("dblclick", function () {
  this.alert(new Date());
});

//part 3
document.querySelector("#toggle").addEventListener("change", function () {
  if (this.checked) {
    document.querySelector("#emailBox").classList.remove("hidden");
  } else {
    document.querySelector("#emailBox").classList.add("hidden");
  }
});