let bouton = document.querySelector(".rond-rouge");

bouton.addEventListener("click", () => {
      // Si la couleur est rouge, on la met en bleu
      if (bouton.style.backgroundColor === "red") {
        bouton.style.backgroundColor = "blue";
        bouton.textContent = "Je suis bleu";
      } 
      // Sinon, on la remet rouge
      else {
        bouton.style.backgroundColor = "red";
        bouton.textContent = "Je suis rouge";
      }
    });

