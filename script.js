
function addRecommendation() {
  const input = document.getElementById("newRec");
  const recText = input.value;

  if (window.confirm("Are you sure you want to submit this recommendation?")) {
    const li = document.createElement("li");
    li.textContent = recText;
    document.getElementById("rec-list").appendChild(li);
    input.value = "";
  }

  return false;
}
