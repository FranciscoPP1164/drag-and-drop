window.onload = () => {
  const form = document.getElementById("sizeForm");

  function handleSubmitForm(event) {
    event.preventDefault();
    const siseX = document.getElementById("sizeX").value || 10;
    const siseY = document.getElementById("sizeY").value || 10;
    console.log(siseX, siseY);
    const target = document.getElementById("target");
    target.style.width = siseX + "%";
    target.style.height = siseY + "%";
    console.log(target.style);
  }

  form.onsubmit = handleSubmitForm;
};
