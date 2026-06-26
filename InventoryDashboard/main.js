      // Add Product
      const productName = document.getElementById("product-name");
      const productCategory = document.getElementById("product-category");
      const productPrice = document.getElementById("product-price");
      const productStock = document.getElementById("product-stock");
      const productForm = document.getElementById("product-form");

      // Product Table
      const productTableBody = document.getElementById("product-table-body");

      // Dashboard Summary
      const totalProducts = document.getElementById("total-products");
      const totalValue = document.getElementById("total-value");
      const lowstockAccount = document.getElementById("low-stock-count");
      const mostExpensive = document.getElementById("most-expensive");

      // Search and Filter
      const searchProduct = document.getElementById("search-product");
      const categoryFilter = document.getElementById("category-filter");
      

      // storing array of Products
      const products = [];

      function renderProducts(productsToRender = products) {
        productTableBody.innerHTML = "";

        productsToRender.forEach((product) => {
          const row = document.createElement("tr");
          row.innerHTML = `
          <td>${product.name}</td>
          <td>${product.category}</td>
          <td>${product.price}</td>
          <td>${product.stock}</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
          `;

          productTableBody.appendChild(row);
        });
      }

      // Total Products
      function totalproductsCount() {
        totalProducts.textContent = products.length;
      }

      // Total inventory Value
      function totalinventoryValue() {
        let totalInventory = 0;

        for (let i = 0; i < products.length; i++) {
          totalInventory += products[i].price * products[i].stock;
        }
        totalValue.textContent = totalInventory;
      }

      // Low stock items
      function lowstockItems() {
        const lowstockItems = products.filter(low => {
          return low.stock <= 5;
        });

        lowstockAccount.textContent = lowstockItems.length;
      }

      // Most expensive products
      function mostexpensiveProducts() {
        let expensive = products[0];

        for (let i = 0; i < products.length; i++) {

          if (products[i].price > expensive.price) {
            expensive = products[i];
          }
        }
        mostExpensive.textContent = expensive.name;
      }

      // Search
      function searchProducts() {
        const get_search_val = searchProduct.value.trim().toLowerCase();;

        const searching = products.filter(product => {
          return product.name.toLowerCase().includes(get_search_val);
        });

        renderProducts(searching);
      }

      searchProduct.addEventListener("input", searchProducts);

      // Filter Category
      function populateCategories() {
        categoryFilter.innerHTML = `
          <option value="all">All Categories</option>
        `;

        const categories = [...new Set(products.map(product => product.category))];

        categories.forEach(category => {
          const option = document.createElement("option");

          option.value = category;
          option.textContent = category;

          categoryFilter.appendChild(option);
        });
      }

      productForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // add product value
        const get_productName_val = productName.value.trim();
        const get_productCategory_val = productCategory.value.trim();
        const get_productPrice_val = productPrice.value.trim();
        const get_productStock_val = productStock.value.trim();

        if (
          get_productName_val === "" || 
          get_productCategory_val === "" || 
          get_productPrice_val === "" ||  
          get_productStock_val === "") {
          alert("Please fill in all fields.");
          return;
        };

        const newProduct = {
          name: get_productName_val,
          category: get_productCategory_val,
          price: Number(get_productPrice_val),
          stock: Number(get_productStock_val)
        };

        products.push(newProduct);
        renderProducts();
        totalproductsCount();
        totalinventoryValue();
        lowstockItems();
        mostexpensiveProducts();
        populateCategories();

        productForm.reset();
        console.log("Submitted");
      });