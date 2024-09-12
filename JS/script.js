function changeGreeting (){
    document.getElementById('text').innerHTML='Bonjour Urelle';
    alert("Tu viens de changer le contenu de la boite");
    return
}

function gestionnaireEvenement1() {
    const textElement = document.getElementById("text");
    textElement.addEventListener('dblclick', () => {
       
        textElement.style.transform = 'translateX(100px)';
    });
}
// Ajoute un écouteur d'événements pour le double clic
document.getElementById('box').addEventListener('dblclick', () => {
    
    anime({
        targets: '#box',
        translateX: [
            { value: 450, duration: 1000 }, // Déplace à droite
            { value: 0, duration: 1000 }     // Ramène à gauche
        ],
        easing: 'easeInOutQuad', 
    });
});
// Sélectionne l'élément de la boîte
const boxElement = document.getElementById('box');

// Ajoute un écouteur d'événements pour le survol
boxElement.addEventListener('mouseover', () => {
    // Anime la rotation de la boîte
    anime({
        targets: '#box',
        rotate: '2turn', // Fait tourner la boîte de 360 degrés
        duration: 1000, // Durée de l'animation en millisecondes
        easing: 'linear' // Type d'accélération
    });
});

// Ajoute un écouteur d'événements pour la fin du survol
boxElement.addEventListener('mouseleave', () => {
    // Arrête l'animation
    anime.remove('#box');
});
window.addEventListener('scroll', function() {
    console.log('L\'utilisateur a fait défiler la page.');
  });
  window.addEventListener('resize', function() {
    console.log('La fenêtre a été redimensionnée.');
  });
