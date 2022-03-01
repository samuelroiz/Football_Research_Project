class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer class="text-center text-lg-start">
        <!-- Right -->
      </section>
      <!-- Section: Social media -->
    
      <!-- Section: Links  -->
      <section class="">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-12 col-lg-4 col-xl-4 mx-auto mb-4">
              <!-- Content -->
              <h6 style="color:blue" class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Company Message
              </h6>
              <p style="color:blue">
                Hope you enjoyed this information on Futbol/Soccer.Thank you for visiting our website, Please come back soon!.
              </p>
            </div>
            <!-- Grid column -->
    
           
    
            <!-- Grid column -->
            <div class="col-md-12 col-lg-4 col-xl-4 mx-auto mb-4">
              <!-- Links -->
              <h6 style="color:blue" class="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p style="color:blue">
                <a href="/about" class="text-reset">About</a>
              </p>
              <p style="color:blue">
                <a href="/authors" class="text-reset">Authors</a>
              </p>
            </div>
            <!-- Grid column -->
    


            
            <!-- Grid column -->
            <div class="col-md-12 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 style="color:blue" class="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <p style="color:blue" ><i class="fas fa-home me-3"></i> USC Viterbi School of Engineering</p>
              <p style="color:blue">
                <i class="fas fa-envelope me-3"></i>
                <!-- info@example.com -->
              </p>
              <p style="color:blue"><i class="fas fa-phone me-3"></i> 213-740-4530</p>
              <p style="color:blue"><i class="fas fa-print me-3"></i> <a style="color:blue"href="https://viterbischool.usc.edu/">https://viterbischool.usc.edu/</a></p>
              
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->
    </footer>
    <!-- <nav class="navbar navbar-expand-lg footer-nav fixed-bottom"></nav> -->
      <!-- Copyright -->
      <div style="color:#000" class= "text-center p-4"style="background-color: rgba(169,169,169);"><strong>
        © 2022 Copyright: Group 4
      </strong>
        
      </div>
      <!-- Copyright -->
    </footer>`;}   }

customElements.define('footer-component', Footer);