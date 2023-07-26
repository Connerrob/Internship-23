function toggleDropdown(className) {
    var dropdowns = document.getElementsByClassName('dropdown');
    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i];
      if (dropdown.id === className) {
        if (dropdown.style.display === "none") {
          dropdown.style.display = "block";
        } else {
          dropdown.style.display = "none";
        }
      } else {
        dropdown.style.display = "none";
      }
    }
  }
  