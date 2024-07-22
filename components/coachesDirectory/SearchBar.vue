<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <CustomDropdown
            v-model="name"
            :items="names"
            placeholder="Name"
            customClass="search-dropdown"
            :isSearchable="true"
          />
        </div>
        <div class="col">
          <CustomDropdown
            v-model="location"
            :items="locations"
            placeholder="Location (City, State, Zip, Country)"
            customClass="location-dropdown"
          />
        </div>
        <div class="col">
          <CustomDropdown
            v-model="certification"
            :items="certifications"
            placeholder="Certifications"
            customClass="certification-dropdown"
            :isCheckbox="true"
          />
        </div>
        <div class="col">
          <CustomDropdown
            v-model="sortBy"
            :items="sortOptions"
            placeholder="Sort By"
            customClass="sort-dropdown"
            :isCheckbox="true"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CustomDropdown from '@/components/coachesDirectory/CustomDropdown';
  
  export default {
    components: {
      CustomDropdown,
    },
    data() {
      return {
        name: '',
        names: [
          'Shawn Taylor',
          'Miranda Sanders',
          'Amy Lewis',
          'Brandon Parker',
          'Tony Alessandra',
          'Cristina Moore',
        ],
        location: '',
        certification: [],
        sortBy: [],
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
          'MCP',
          'ACP',
          'Most Certifications',
          'Least Certifications',
          'A-Z',
          'Z-A',
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
    align-items: center; 
    width: 100%;
    margin: 0;
  }
  
  .col {
    flex: 1;
    padding: 0 5px;
  }
  
  .col:not(:last-child) {
    margin-right: 0;
  }
  </style>
  