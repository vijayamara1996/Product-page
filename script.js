document.addEventListener("DOMContentLoaded", () => {
    const productImage = document.getElementById("productImage");
    const colorOptions = document.querySelectorAll(".color-option");
    const sizeOptions = document.querySelectorAll(".size-option");
  
    const colorMap = {
      red: {
        image: "./images/red.png",
        sizes: ["S", "M", "L"]
      },
      green: {
        image: "./images/green.png",
        sizes: ["M", "L", "XL"]
      },
      blue: {
        image: "./images/blue.png",
        sizes: ["L", "XL", "XXL"]
      },
      navy: {
        image: "./images/navy_blue.png",
        sizes: ["S", "M"]
      },
    };
  
    const setSelected = (nodeList, selectedClass, selectedEl) => {
      nodeList.forEach(el => el.classList.remove(selectedClass));
      selectedEl.classList.add(selectedClass);
    };
  
    const updateSizesForColor = (availableSizes) => {
      sizeOptions.forEach(option => {
        const size = option.textContent.trim();
        const isAvailable = availableSizes.includes(size);
  
        option.classList.toggle("disabled", !isAvailable);
        option.classList.toggle("selectable", isAvailable);
  
        if (!isAvailable) option.classList.remove("selected");
      });
    };
  
    colorOptions.forEach(option => {
      option.addEventListener("click", () => {
        setSelected(colorOptions, "selected", option);
  
        const color = option.dataset.color;
        const { image, sizes } = colorMap[color];
  
        productImage.src = image;
        updateSizesForColor(sizes);
      });
    });
  
    sizeOptions.forEach(option => {
      option.addEventListener("click", () => {
        if (!option.classList.contains("disabled")) {
          setSelected(sizeOptions, "selected", option);
        }
      });
    });
  });
  