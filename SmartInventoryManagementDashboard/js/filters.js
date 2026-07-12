const searchProduct = document.getElementById("search-product");
const categoryFilter = document.getElementById("category-filter");

function search_Product() {
  const searchProduct_val = searchProduct.value.trim().toLowerCase();

  const search = products.filter((product) => {
    return product.name.toLowerCase().includes(searchProduct_val);
  });

  renderingProducts(search);
};

searchProduct.addEventListener("input", search_Product);

function All_Categories() {
  categoryFilter.innerHTML = `<option value="all">All Products</option>`;

  const allCategories = [...new Set(products.map(product => product.category))];

  allCategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
};

function filter_Categories() {
  const categoryFilter_val = categoryFilter.value;

  const filterAll = products.filter((product) => {
    return categoryFilter_val === "all" || product.category === categoryFilter_val;
  });

  renderingProducts(filterAll);
};

categoryFilter.addEventListener("change", filter_Categories);