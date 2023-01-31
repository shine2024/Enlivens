function navBar(active){
    return ` <!-- NarBar -->
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand ms-3 me-5" href="#">
          <img
            src="images/My project.png"
            alt="Bootstrap"
            width="50"
            height="50"
          />
        </a>
        <a class="navbar-brand ms-2 me-5" style="font-size: xxx-large" href="#"
          >ENLIVENS</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarNav"
          style="font-size: x-large"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
            <li class="nav-item">
              <a class="nav-link ${active === 'Home' ?'active': ''}" aria-current="page" href="/index.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link ${active === 'Work' ?'active': ''}" href="/work.html">Work</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${active === 'Services' ?'active': ''}" href="/services.html">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${active === 'About' ?'active': ''}" href="/about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${active === 'Contact' ?'active': ''}" href="/contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`
}