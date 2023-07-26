// Function to toggle the theme
function toggleTheme() {
    const header = document.querySelector('header');
    const aside = document.querySelector('aside');
    const button = document.querySelector('.dropdown-button');
    const main = document.querySelector('main');
    const learned = document.querySelector('.learned');
    const footer = document.querySelector('footer');


    if (header.classList.contains('light-mode')) {
      header.classList.remove('light-mode');
      header.classList.add('dark-mode');
      aside.classList.remove('light-mode');
      aside.classList.add('dark-mode');
      button.classList.remove('light-mode');
      button.classList.add('dark-mode');
      main.classList.remove('light-mode');
      main.classList.add('dark-mode');
      learned.classList.remove('light-mode');
      learned.classList.add('dark-mode');
      footer.classList.remove('light-mode');
      footer.classList.add('dark-mode');
    } else {
      header.classList.remove('dark-mode');
      header.classList.add('light-mode');
      aside.classList.remove('dark-mode');
      aside.classList.add('light-mode');
      button.classList.remove('dark-mode');
      button.classList.add('light-mode');
      main.classList.remove('dark-mode');
      main.classList.add('light-mode');
      learned.classList.remove('dark-mode');
      learned.classList.add('light-mode');
      footer.classList.remove('dark-mode');
      footer.classList.add('light-mode');
    }
   }
   