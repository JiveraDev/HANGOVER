const privacyPolicyText = document.getElementById("privacy-policy-text");
const privacyPolicyLink = document.getElementById("privacy-policy-link");
const privlink = document.getElementById("privacyPolicyModal");





fetch("privacy_policy.txt")
  .then(response => response.text())
  .then(text => {
    privacyPolicyText.innerText = text;  
  })
  .catch(err => console.error("Error loading file:", err));


privacyPolicyLink.addEventListener("click", () => {
    privlink.classList.remove("d-none");
  const modal = new bootstrap.Modal(privlink);

  modal.show();
});

