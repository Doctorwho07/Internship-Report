export default function () {
  return `
      <div class="container mt-5">
        <h1>Articles</h1>
        <p>Explorez nos derniers articles et mises à jour.</p>
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4">
              <img src="path/to/image1.jpg" class="card-img-top" alt="Image 1">
              <div class="card-body">
                <h5 class="card-title">Article 1</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" class="btn btn-primary">Lire plus</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <img src="path/to/image2.jpg" class="card-img-top" alt="Image 2">
              <div class="card-body">
                <h5 class="card-title">Article 2</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" class="btn btn-primary">Lire plus</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
}
