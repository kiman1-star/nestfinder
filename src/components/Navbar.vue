<template>
  <nav class="navbar">
    <!-- Left side: logo + brand -->
    <div class="navbar-left">
      <div class="logo">
        <i class="fas fa-home"></i>
      </div>
      <span class="brand">Nestfinder</span>
    </div>

    <!-- Center: unified search bar -->
    <div class="navbar-center">
      <input 
        type="text" 
        placeholder="Search by city, address, or ZIP…" 
        class="search-bar"
        v-model="searchQuery"
      />
      <button class="filter-btn" @click="toggleFilters">
        <i class="fas fa-sliders-h"></i>
      </button>
    </div>
  </nav>

  <!-- Advanced filters panel -->
  <div v-if="filtersOpen" class="filters-panel">
    <label>
      Bedrooms:
      <select v-model="filters.bedrooms">
        <option value="">Any</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
      </select>
    </label>
    <label>
      Price Range:
      <select v-model="filters.price">
        <option value="">Any</option>
        <option value="5000000">Up to Ksh 5M</option>
        <option value="10000000">Up to Ksh 10M</option>
        <option value="20000000">Up to Ksh 20M</option>
      </select>
    </label>
    <button @click="applyFilters">Apply</button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      searchQuery: "",
      filtersOpen: false,
      filters: {
        bedrooms: "",
        price: ""
      }
    };
  },
  methods: {
    toggleFilters() {
      this.filtersOpen = !this.filtersOpen;
    },
    applyFilters() {
      console.log("Search:", this.searchQuery, "Filters:", this.filters);
      // Hook this into your property search logic
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo i {
  font-size: 28px;
  color: teal;
}

.brand {
  font-weight: bold;
  font-size: 20px;
  color: #333;
}

.navbar-center {
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 600px;
  margin-left: 24px;
}

.search-bar {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 25px;
  font-size: 15px;
}

.filter-btn {
  background: none;
  border: none;
  margin-left: 8px;
  cursor: pointer;
  font-size: 20px;
  color: #555;
}

.filters-panel {
  margin: 12px auto;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  padding: 16px;
  display: flex;
  gap: 16px;
  border-radius: 8px;
  max-width: 600px;
}

.filters-panel label {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #333;
}

.filters-panel select {
  margin-top: 4px;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>