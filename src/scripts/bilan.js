export default function() {
    return `
      <div class="container mt-5">
        <h1>Bilan</h1>
        <p>Découvrez le bilan de notre travail et nos réalisations.</p>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Projet</th>
                <th scope="col">Statut</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Projet 1</td>
                <td>Terminé</td>
                <td>01/01/2024</td>
              </tr>
              <tr>
                <td>Projet 2</td>
                <td>En cours</td>
                <td>15/02/2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button type="button" id="homeLink" class="btn btn-primary">Retour à l'accueil</button>
    `;
  }
  