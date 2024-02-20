function toggleMenu() {
    
    //seleziono gli oggetti che sono quelli dell'hamberger menu
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    //abilito o disabilito la classe CSS "open" applicata agli oggetti
    //ed essendo una funzione toggle, se già presente si occupa di rimuoverla
    //dandoci cosi entrambe le funzioni di entrata ed uscita del pulsante
    //con un unica funzione
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }