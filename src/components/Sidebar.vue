<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h2>Väderappen</h2>
    </div>
    <nav class="sidebar-nav">
      <ul>
        <li>
          <router-link to="/" class="nav-link">Hem</router-link>
        </li>
        <li>
          <router-link to="/everything" class="nav-link">Om</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 50%;
  background-color: #d51601;
  color: #fff;
  padding: 20px;
  box-sizing: border-box; 
}

.sidebar-header {
  text-align: center;
  margin-bottom: 20px;
}

.sidebar-header h2 {
  font-size: 24px;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
}

.sidebar-nav li {
  margin-bottom: 10px;
}

.nav-link {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #000000; 
}
</style>
