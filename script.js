const contract = "3gmDYUsZLn8yBnj1GoMKwNqd5GnjL65DkeeqovGLpump";

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

async function copyContract() {
  try {
    await navigator.clipboard.writeText(contract);
  } catch (err) {
    const input = document.createElement("textarea");
    input.value = contract;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }

  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

document.getElementById("copyContract").addEventListener("click", copyContract);
document.getElementById("copyContract2").addEventListener("click", copyContract);
