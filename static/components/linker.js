class Linker extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
  
    
  
        <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-3 humidity-wobble">
            <div class="thumbnail">
                <a href="/world-cup">
                    <img src="https://vid.alarabiya.net/images/2017/01/15/03b4b624-2e2f-49bc-bb28-176184634d72/03b4b624-2e2f-49bc-bb28-176184634d72_16x9_1200x676.jpg?width=1138" alt="..." class="img-thumbnail">
                </a>                  </div>
            <div class="caption text-center">
                <p>Match Locations</p>
            </div>
          </div>
          
          <div class="col-sm-12 col-md-3 humidity-wobble">
              <div class="thumbnail">
                <a href="/mr">
                    <img src="../static/images/MessiVsRonaldo.jpg" alt="..." class="img-thumbnail">
                </a>                    </div>
            <div class="caption text-center">
                <p>Messi Vs. Ronaldo</p>
          </div>
          </div>
  
          <div class="col-sm-12 col-md-3 humidity-wobble">
              <div class="thumbnail">
                <a href="/league">
                    <img src="https://previews.123rf.com/images/ohmega1982/ohmega19821211/ohmega1982121100293/16394524-le-football-du-football-sur-le-point-de-penalty-pour-penalty.jpg" alt="..." class="img-thumbnail">
                </a>  
              </div>
              <div class="caption text-center">
                  <p>League Formation</p>
                </div>
            </div>
  
            <div class="col-sm-12 col-md-3 humidity-wobble">
              <div class="thumbnail">
                <a href="/transfers">
                    <img src="../static/images/transfers.jpg" alt="..." class="img-thumbnail">
                </a>  
              </div>
              <div class="caption text-center">
                  <p>Transfers</p>        
            </div>
          </div>
      </div>
    </div>

        `;}   }

customElements.define('links-component', Linker);