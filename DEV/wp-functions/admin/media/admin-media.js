(function() {
  window.onload = () => {
    const body = document.querySelector("body");
    const rml = document.querySelector(".rml-container");
    if (!body || !rml) throw new Error(body);
    // white list

    if (body.classList.contains("upload-php")) {
      const aiotNode = rml.querySelectorAll(".aiot-node");
      aiotNode.forEach(node =>
        node.addEventListener("click", () => console.log(node))
      );
    }
  };
})();
