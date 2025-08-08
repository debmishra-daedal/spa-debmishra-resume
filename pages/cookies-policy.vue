<template>
  <div class="policy-page">
    <div class="container">
      <header class="policy-header">
        <h1>Cookie Policy</h1>
        <p class="last-updated">Last updated: [Date to be added]</p>
      </header>

      <div class="policy-content">
        <section class="policy-section">
          <h2>What Are Cookies</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </section>

        <section class="policy-section">
          <h2>How We Use Cookies</h2>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          
          <h3>Essential Cookies</h3>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          
          <h3>Analytics Cookies</h3>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </section>

        <section class="policy-section">
          <h2>Managing Your Cookie Preferences</h2>
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
        </section>

        <section class="policy-section">
          <h2>Contact Information</h2>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        </section>
      </div>

      <div class="policy-actions">
        <NuxtLink to="/" class="back-button">← Back to Home</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Cookie Policy - Deb Mishra Portfolio',
  meta: [
    { name: 'description', content: 'Cookie Policy for Deb Mishra\'s professional portfolio website.' }
  ]
})
</script>

<style scoped>
.policy-page {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 2rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.policy-header {
  background: #5199AB;
  color: white;
  padding: 3rem 2rem 2rem;
  margin: 0 -2rem 2rem -2rem;
  text-align: center;
}

.policy-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.last-updated {
  opacity: 0.9;
  font-size: 0.9rem;
}

.policy-content {
  padding: 0 2rem 2rem;
}

.policy-section {
  margin-bottom: 3rem;
}

.policy-section h2 {
  color: #5199AB;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.policy-section h3 {
  color: #333;
  font-size: 1.4rem;
  margin: 1.5rem 0 1rem;
  font-weight: 600;
}

.policy-section p {
  line-height: 1.7;
  color: #636e72;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.policy-actions {
  padding: 2rem;
  border-top: 1px solid #e9ecef;
  text-align: center;
}

.back-button {
  display: inline-flex;
  align-items: center;
  background: #5199AB;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: #4a8a9a;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .policy-page {
    padding: 1rem 0;
  }
  
  .container {
    margin: 0 1rem;
    padding: 0;
  }
  
  .policy-header {
    padding: 2rem 1rem 1.5rem;
  }
  
  .policy-header h1 {
    font-size: 2rem;
  }
  
  .policy-content {
    padding: 0 1rem 1rem;
  }
  
  .policy-actions {
    padding: 1rem;
  }
}
</style>