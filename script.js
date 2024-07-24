const input = document.getElementById("input");
const btn = document.getElementById("button");

let showPassword = false;

function render() {
  if (showPassword) {
    input.setAttribute("type", "text");
    btn.textContent = "Hide Password";
  } else {
    input.setAttribute("type", "password");
    btn.textContent = "Show Password";
  }
}

btn.addEventListener("click", () => {
  showPassword = !showPassword;
  render();
});