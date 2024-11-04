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

<style lang="scss" scoped>
$sidebar-bg: #d51601; 
$sidebar-text-color: #fff; 
$sidebar-hover-bg: #a40f00; 
$sidebar-width: 200px; 

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: $sidebar-width;
  height: 100vh; 
  background-color: $sidebar-bg;
  color: $sidebar-text-color;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3); 

  .sidebar-header {
    text-align: center;
    margin-bottom: 20px;

    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      color: lighten($sidebar-text-color, 10%);
    }
  }

  .sidebar-nav {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 10px;
      }
    }

    .nav-link {
      display: block;
      padding: 12px 16px;
      text-decoration: none;
      color: $sidebar-text-color;
      border-radius: 5px;
      transition: background-color 0.3s ease;
      font-size: 1rem;

      &:hover {
        background-color: $sidebar-hover-bg;
      }
    }
  }
}
</style>
