<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <NameDropdown :items="coaches.map(coach => coach.Name)" v-model="internalSelectedName"
          placeholder="Search for a name..." customClass="search-dropdown" />
      </div>
      <div class="col">
        <CustomDropdown v-model="location" :items="locations" placeholder="Location (City, State, Zip, Country)"
          customClass="location-dropdown" />
      </div>
      <div class="col">
        <CustomDropdown v-model="selectedCertifications" :items="certifications" placeholder="Certifications"
          customClass="certification-dropdown" :isCheckbox="true" />
      </div>
      <div class="col">
        <CustomDropdown v-model="sortBy" :items="sortOptions" placeholder="Sort By" customClass="sort-dropdown" />
      </div>
    </div>
  </div>
</template>

<script>
import NameDropdown from '@/components/coachesDirectory/NameDropdown';
import CustomDropdown from '@/components/coachesDirectory/CustomDropdown';

export default {
  components: {
    NameDropdown,
    CustomDropdown,
  },
  props: {
    coaches: Array,
    value: String,
  },
  data() {
    return {
      internalSelectedName: this.value,
      location: '',
      selectedCertifications: [], // Tracks the selected certifications
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
        'MCP',
        'ACP',
        'Most Certifications',
        'Least Certifications',
        'A-Z',
        'Z-A',
      ],
    };
  },
  watch: {
    internalSelectedName(newVal) {
      this.$emit('input', newVal);
    },
    value(newVal) {
      this.internalSelectedName = newVal;
    },
    selectedCertifications(newCertifications) {
      this.$emit('certifications-filter', newCertifications);
    },
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
