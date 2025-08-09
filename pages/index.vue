<template>
  <div class="portfolio">
    <!-- Main Grid Layout -->
    <div class="main-grid">
      <!-- Left Sidebar -->
      <aside class="left-sidebar">
        <!-- Profile Section -->
        <section id="home" class="profile-section">
          <div class="profile-image-placeholder">
            <div class="profile-img"></div>
          </div>
          <h1 class="name">Deb Mishra</h1>
          <p class="tagline">An Ardent Entrepreneur With A<br>Penchant For Technology</p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/whoisdebmishra/" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn</a>
          </div>
          <a href="/mycv.pdf" download="Deb_Mishra_CV.pdf" class="download-cv">Download CV</a>
          
          <div class="company-logos">
            <a href="https://www.nionjord.com" target="_blank" rel="noopener noreferrer" class="company-logo-link">
              <div class="small-logo ni"></div>
            </a>
            <a href="https://www.lonecypress.nl" target="_blank" rel="noopener noreferrer" class="company-logo-link">
              <div class="small-logo lsh"></div>
            </a>
          </div>
        </section>

        <!-- Education Section -->
        <section id="education" class="education-section">
          <h2 class="sidebar-title">Education</h2>
          <div class="education-list">
            <div class="education-item">
              <a href="https://www.cam.ac.uk" target="_blank" rel="noopener noreferrer" class="cambridge"></a>
              <div class="education-content">
                <h3>MST in Entrepreneurship</h3>
                <p class="university">UK, Graduation year: Ongoing</p>
              </div>
            </div>
            
            <div class="education-item">
              <a href="https://www.garp.org" target="_blank" rel="noopener noreferrer" class="frm"></a>
              <div class="education-content">
                <h3>Financial Risk manager (FRM)</h3>
                <p class="university">USA, Graduation year: 2019</p>
              </div>
            </div>

            <div class="education-item">
              <a href="https://www.nism.ac.in" target="_blank" rel="noopener noreferrer" class="nism"></a>
              <div class="education-content">
                <h3>PG program in securities markets</h3>
                <p class="university">India, Graduation year: 2011</p>
              </div>
            </div>

            <div class="education-item">
              <a href="https://www.kiit.ac.in" target="_blank" rel="noopener noreferrer" class="kiit"></a>
              <div class="education-content">
                <h3>B.Tech in Civil Engineering</h3>
                <p class="university">India, Graduation year: 2007</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Companies Section -->
        <section class="companies-section">
          <h2 class="sidebar-title">Companies I worked for</h2>
          <div class="companies-list">
            <a href="https://www.shell.com" target="_blank" rel="noopener noreferrer" class="company-link">
              <div class="company-item">
                <div class="company-logo shell"></div>
                <div class="company-content">
                  <h3>Shell</h3>
                  <p class="company-years">2021 - 2025</p>
                </div>
              </div>
            </a>
            <a href="https://www.nn.nl" target="_blank" rel="noopener noreferrer" class="company-link">
              <div class="company-item">
                <div class="company-logo nn"></div>
                <div class="company-content">
                  <h3>Nationale Nederlanden</h3>
                  <p class="company-years">2018 - 2021</p>
                </div>
              </div>
            </a>
            <a href="https://www.am.gs.com" target="_blank" rel="noopener noreferrer" class="company-link">
              <div class="company-item">
                <div class="company-logo gsam"></div>
                <div class="company-content">
                  <h3>Goldman Sachs Asset Management</h3>
                  <p class="company-years">2017 - 2018</p>
                </div>
              </div>
            </a>
            <a href="https://www.apg-am.nl" target="_blank" rel="noopener noreferrer" class="company-link">
              <div class="company-item">
                <div class="company-logo apg"></div>
                <div class="company-content">
                  <h3>APG Asset Management</h3>
                  <p class="company-years">2016 - 2017</p>
                </div>
              </div>
            </a>
            <a href="https://www.ubs.com" target="_blank" rel="noopener noreferrer" class="company-link">
              <div class="company-item">
                <div class="company-logo ubs"></div>
                <div class="company-content">
                  <h3>UBS</h3>
                  <p class="company-years">2014 - 2016</p>
                </div>
              </div>
            </a>
            <a href="https://www.capgemini.com" target="_blank" rel="noopener noreferrer" class="company-link">
              <div class="company-item">
                <div class="company-logo capgemini"></div>
                <div class="company-content">
                  <h3>Capgemini</h3>
                  <p class="company-years">2013 - 2016</p>
                </div>
              </div>
            </a>
            <a href="https://www.goldensource.com" target="_blank" rel="noopener noreferrer" class="company-link">
              <div class="company-item">
                <div class="company-logo gs"></div>
                <div class="company-content">
                  <h3>Goldensource</h3>
                  <p class="company-years">2012 - 2013</p>
                </div>
              </div>
            </a>
            <a href="https://www.careratings.com" target="_blank" rel="noopener noreferrer" class="company-link">
              <div class="company-item">
                <div class="company-logo care"></div>
                <div class="company-content">
                  <h3>CARE Ratings</h3>
                  <p class="company-years">2011 - 2012</p>
                </div>
              </div>
            </a>
            <a href="https://www.cognizant.com" target="_blank" rel="noopener noreferrer" class="company-link">
              <div class="company-item">
                <div class="company-logo cts"></div>
                <div class="company-content">
                  <h3>Cognizant</h3>
                  <p class="company-years">2007 - 2010</p>
                </div>
              </div>
            </a>
          </div>
        </section>

      </aside>

      <!-- Right Main Content -->
      <main class="right-content">
        <!-- Navigation -->
        <nav class="navbar">
          <div class="nav-container">
            <div class="nav-links">
              <a href="#home" class="nav-link active">Home</a>
              <a href="#education" class="nav-link">Education</a>
              <a href="#work" class="nav-link">Work</a>
              <a href="#contact" class="nav-link">Contact</a>
            </div>
          </div>
        </nav>

        <!-- My Story Section -->
        <section class="story-section">
          <h2 class="section-title">My Story</h2>
          <div class="story-content">
            <h3>Experienced Financial Technology Professional</h3>
            <p>Having spent over 15 years working in financial technology sector, I have worked extensively in managing existing data management platforms, migration of data management platforms, maintaining various enterprise data management system and providing techno-functional assistance in overall management of reference data management.</p>
            <p>Having delivered more than a few large projects across both buy-side and sell-side financial entities, I have garnered a well formed acumen of various financial entities e.g. instrument static data, price management, legal entities, ratings etc.</p>
          </div>
        </section>

        <!-- Company Section -->
        <section class="company-section">
          <h2>Daedal</h2>
          <p>We provide both software development and IT consulting services to our clients. In addition, we have also built a few in-house products; some of which help make day to day functioning of businesses less cumbersome and some help the average individuals in their decision making process. While we offer services globally, we especially have a strong foothold in Europe and America, operating out of our HQ in The Hague, Netherlands and Americas-HQ in Charlotte, North Carolina.</p>
          <a href="https://daedal.org" target="_blank" rel="noopener noreferrer" class="learn-more">Learn more</a>
        </section>

        <!-- Work Experience Section -->
        <section id="work" class="work-section">
          <h2 class="section-title">Work experience</h2>
          <div class="work-timeline">
            <div class="work-item">
              <div class="work-icon">🏢</div>
              <div class="work-content">
                <h3>Start-up set up</h3>
                <p class="work-company">Lone Cypress Holdings & subsidiaries</p>
                <p class="work-location">Netherlands</p>
                <p>Managing a 3 company holding structure in the Netherlands. Promoting company product and services to various clients. Understanding the corporate tax structure in Netherlands and hiring appropriate staff to manage the same.</p>
              </div>
            </div>
            
            <div class="work-item">
              <div class="work-icon">👥</div>
              <div class="work-content">
                <h3>Leadership and team management</h3>
                <p class="work-company">NN & Capgemini/UBS</p>
                <p class="work-location">Netherlands, Switzerland, UK & India</p>
                <p>Was leading the IT team that was in charge of NNs RTB data management platform (Markit EDM). Was one of NN counterparts running NN-Cognizant...</p>
              </div>
            </div>

            <div class="work-item">
              <div class="work-icon">🤝</div>
              <div class="work-content">
                <h3>Client and vendor management</h3>
                <p class="work-company">NN, Capgemini/UBS, Goldensource & CARE Ratings</p>
                <p class="work-location">Netherlands, Switzerland, UK & India</p>
                <p>Served as Bloombergs counterpart in NN for functional scope and product design. Was the SPOC for all vendor communication between UBS and its data vendors.</p>
              </div>
            </div>

            <div class="work-item">
              <div class="work-icon">📋</div>
              <div class="work-content">
                <h3>Project Management</h3>
                <p class="work-company">SAMCo & NN</p>
                <p class="work-location">Netherlands</p>
                <p>Currently part of the project team that is working on migrating the legacy data management setup with SAMCo to a managed service provider RIMES.</p>
              </div>
            </div>

            <div class="work-item">
              <div class="work-icon">📊</div>
              <div class="work-content">
                <h3>Reference data management and price process</h3>
                <p class="work-company">SAMCo, NN, APG, Capgemini/UBS & Goldensource</p>
                <p class="work-location">Netherlands, Switzerland, & UK</p>
                <p>Re-designed the price master process and built the security master framework from ground up for SAMCo.</p>
              </div>
            </div>

            <div class="work-item">
              <div class="work-icon">🔍</div>
              <div class="work-content">
                <h3>Functional and business analysis</h3>
                <p class="work-company">SAMCo, NN, APG & CARE Ratings</p>
                <p>Working as a lead business analyst driving the security master/issuer master implementation within SAMCo.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title">Contact Me</h2>
        <div class="contact-content">
          <div class="contact-info">
            <h3>Get in Touch</h3>
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>Lone Cypress Holdings B.V, Rode Olifant, Zuid hollandlaan 7, 2596 AL, Den Haag, The Netherlands.</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>email@debmishra.me</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+31-638 723 699</p>
              </div>
            </div>
          </div>
          
          <div class="inspiration-section">
            <div class="inspiration-image-placeholder">
              <!-- Inspirational image placeholder -->
              <div class="inspiration-img"></div>
            </div>
            <div class="inspiration-quote">
              <p class="catchphrase">Experiencing life rather than just living it</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>©Daedal. All rights reserved. <NuxtLink to="/cookies-policy">Cookies Policy</NuxtLink> <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink></p>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'Deb Mishra - Portfolio',
  meta: [
    { name: 'description', content: 'Professional portfolio of Deb Mishra - An Ardent Entrepreneur With A Penchant For Technology' }
  ]
})
</script>
 