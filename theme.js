// Function to toggle the theme
function toggleTheme() {
    const header = document.querySelector('header');
    const aside = document.querySelector('aside');
    const buttons = document.querySelectorAll('.dropdown-button');
    const main = document.querySelector('main');
    const learned = document.querySelector('.learned');
    const footer = document.querySelector('footer');
    const learnedItems = document.querySelectorAll('.learned-items');
    const project = document.querySelector('.projects-container');
    const gitbutton = document.querySelector('.git-button');
    const topbutton = document.querySelector('.up-button');

    if (header.classList.contains('light-mode')) {
      header.classList.remove('light-mode');
      header.classList.add('dark-mode');
      aside.classList.remove('light-mode');
      aside.classList.add('dark-mode');
      buttons.forEach(button => {
        button.classList.remove('light-mode');
        button.classList.add('dark-mode');
      });
      main.classList.remove('light-mode');
      main.classList.add('dark-mode');
      learned.classList.remove('light-mode');
      learned.classList.add('dark-mode');
      learnedItems.forEach(learnedItem => {
        learnedItem.classList.remove('light-mode');
        learnedItem.classList.add('dark-mode');
      });
      footer.classList.remove('light-mode');
      footer.classList.add('dark-mode');
      project.classList.remove('light-mode');
      project.classList.add('dark-mode');
      gitbutton.classList.remove('light-mode');
      gitbutton.classList.add('dark-mode');
      topbutton.classList.remove('light-mode');
      topbutton.classList.add('dark-mode');
    } else {
      header.classList.remove('dark-mode');
      header.classList.add('light-mode');
      aside.classList.remove('dark-mode');
      aside.classList.add('light-mode');
      buttons.forEach(button => {
        button.classList.remove('dark-mode');
        button.classList.add('light-mode');
      });
      main.classList.remove('dark-mode');
      main.classList.add('light-mode');
      learned.classList.remove('dark-mode');
      learned.classList.add('light-mode');
      learnedItems.forEach(learnedItem => {
        learnedItem.classList.remove('dark-mode');
        learnedItem.classList.add('light-mode');
      });
      footer.classList.remove('dark-mode');
      footer.classList.add('light-mode');
      project.classList.remove('dark-mode');
      project.classList.add('light-mode');
      gitbutton.classList.remove('dark-mode');
      gitbutton.classList.add('light-mode');
      topbutton.classList.remove('dark-mode');
      topbutton.classList.add('light-mode');
    }
   }
   
