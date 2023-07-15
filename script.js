const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const products = document.querySelectorAll(".product");
  
    products.forEach((product) => {
      const productName = product.querySelector(".p-details h2").textContent.toUpperCase();
  
      if (productName.includes(searchbox)) {
        product.style.display = "flex";
      } else {
        product.style.display = "none";
      }
    });
  };
  