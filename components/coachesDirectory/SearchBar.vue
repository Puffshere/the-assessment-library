<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <input
            v-model="searchQuery"
            type="text"
            class="form-control"
            placeholder="Jane Doe"
            aria-label="Search"
          />
        </div>
        <div class="col">
          <select v-model="location" class="form-control">
            <option disabled value="">City, State, Zip, Country</option>
            <option v-for="loc in locations" :key="loc" :value="loc">{{ loc }}</option>
          </select>
        </div>
        <div class="col">
          <select v-model="certification" class="form-control">
            <option disabled value="">Certifications</option>
            <option v-for="cert in certifications" :key="cert" :value="cert">{{ cert }}</option>
          </select>
        </div>
        <div class="col">
          <select v-model="sortBy" class="form-control">
            <option disabled value="">Sort By</option>
            <option v-for="option in sortOptions" :key="option" :value="option">{{ option }}</option>
          </select>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        location: '',
        certification: '',
        sortBy: '',
        locations: [
          'New York, NY, USA',
          'Los Angeles, CA, USA',
          'Chicago, IL, USA',
          'Houston, TX, USA',
          'Phoenix, AZ, USA',
        ],
        certifications: [
          'Master Certified Practitioner (MCP)',
          'Advanced Certified Practitioner (ACP)',
          'Certified Practitioner (CP)',
        ],
        sortOptions: [
          'Name',
          'Location',
          'Certifications',
          'Date Added',
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
    max-width: 100%;
    padding: 0;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center; /* Ensures the input fields are vertically aligned */
    width: 100%;
    margin: 0;
  }
  
  .col {
    flex: 1;
    padding: 0 5px; /* Reduce padding between columns */
  }
  
  .form-control {
    width: 100%;
    padding: 8px 10px; /* Adjust padding to reduce overall height */
    margin-bottom: 0;
    border-radius: 4px; /* Adjust border radius for a sleeker look */
    border: 1px solid #ccc;
    background-color: #fff;
    box-sizing: border-box;
  }
  
  input.form-control, select.form-control {
    border: 1px solid #ccc;
    background-color: #fff;
    color: #333;
  }
  
  input.form-control:focus, select.form-control:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25); /* Adjust shadow for focus */
  }
  
  .col:not(:last-child) {
    margin-right: 0; /* Ensure no additional margins */
  }
  </style>
  