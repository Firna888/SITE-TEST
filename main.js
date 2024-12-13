import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>L'HISTOIRE DES JEUX VIDEO</h1>
    
    <div class="timeline">
      <div class="era">
        <h2>Les Années 1970 - Les Débuts</h2>
        <p>L'histoire commence avec Pong (1972), le premier jeu vidéo commercial à succès. 
        Cette période voit aussi la naissance de la première console de salon, la Magnavox Odyssey.</p>
      </div>

      <div class="era">
        <h2>Les Années 1980 - L'Âge d'Or</h2>
        <p>L'ère des salles d'arcade bat son plein avec Pac-Man, Donkey Kong et Space Invaders.
        Nintendo lance la NES en 1985, révolutionnant le jeu à domicile avec Super Mario Bros.</p>
      </div>

      <div class="era">
        <h2>Les Années 1990 - La Révolution 3D</h2>
        <p>L'arrivée de la PlayStation marque le début de l'ère 3D.
        Les jeux comme Sonic the Hedgehog, Final Fantasy VII et Super Mario 64 définissent de nouveaux standards.</p>
      </div>

      <div class="era">
        <h2>Les Années 2000 - L'Explosion</h2>
        <p>Internet transforme le jeu vidéo avec le multijoueur en ligne.
        La Wii de Nintendo rend le jeu accessible à tous, tandis que World of Warcraft conquiert le monde.</p>
      </div>

      <div class="era">
        <h2>Les Années 2010-2020 - L'Ère Moderne</h2>
        <p>Les smartphones révolutionnent le jeu mobile.
        La réalité virtuelle devient accessible au grand public.
        Les jeux deviennent de véritables œuvres d'art interactives.</p>
      </div>
    </div>

    <div class="footer">
      <p>© 1970 - Un voyage dans le temps vidéoludique</p>
    </div>
  </div>
`