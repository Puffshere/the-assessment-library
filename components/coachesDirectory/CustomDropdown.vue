<template>
  <div :class="['custom-dropdown', customClass]">
    <div class="dropdown-selected" @click="toggleDropdown">
      <span class="dropdown-placeholder">
        <strong>{{ placeholderLabel }}</strong><span class="placeholder-description"> {{ placeholderDescription }}</span>
      </span>
      <span class="dropdown-arrow">&#9660;</span>
    </div>
    <div v-if="isOpen" class="dropdown-menu" @click.stop>
      <input v-if="isSearchable" type="text" v-model="searchQuery" placeholder="Search..." class="search-input" />
      <div v-if="isCheckbox">
        <div v-for="item in filteredItems" :key="item" class="dropdown-item">
          <input type="checkbox" :value="item" v-model="selectedItems" /> {{ item }}
        </div>
        <button @click="applySelection" class="apply-button">Apply</button>
      </div>
      <div v-else>
        <div v-for="item in filteredItems" :key="item" class="dropdown-item" @click="selectItem(item)">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: [Array, String],
      default: () => [],
    },
    customClass: {
      type: String,
      default: '',
    },
    isCheckbox: {
      type: Boolean,
      default: false,
    },
    isSearchable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      searchQuery: '',
      selectedItems: Array.isArray(this.value) ? this.value : [],
      selectedItem: typeof this.value === 'string' ? this.value : '',
    };
  },
  computed: {
    placeholderLabel() {
      if (this.customClass === 'location-dropdown') {
        return 'Location';
      } else if (this.customClass === 'certification-dropdown') {
        return 'Certifications';
      } else if (this.customClass === 'sort-dropdown') {
        return 'Sort By';
      } else {
        return this.placeholder;
      }
    },
    placeholderDescription() {
      if (this.customClass === 'location-dropdown') {
        return '(City, State, Zip, Country)';
      }
      return '';
    },
    filteredItems() {
      if (!this.isSearchable || !this.searchQuery) {
        return this.items;
      }
      return this.items.filter(item => item.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      this.searchQuery = '';
    },
    selectItem(item) {
      this.selectedItem = item;
      this.$emit('input', item);
      this.isOpen = false;
    },
    applySelection() {
      this.$emit('input', this.selectedItems);
      this.isOpen = false;
    },
  },
  watch: {
    value(newValue) {
      if (this.isCheckbox) {
        this.selectedItems = newValue;
      } else {
        this.selectedItem = newValue;
      }
    },
  },
};
</script>

<style scoped>
.custom-dropdown {
  position: relative;
  width: 100%;
  cursor: pointer;
  user-select: none;
}

.dropdown-selected {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}

.dropdown-placeholder {
  display: flex;
  align-items: center;
}

.placeholder-description {
  margin-left: 5px;
  font-weight: normal;
}

.search-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.dropdown-menu {
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  padding: 10px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 5px 0;
}

.dropdown-item input {
  margin-right: 10px;
}

.apply-button {
  display: block;
  width: 90%;
  padding: 10px 0px;
  background-color: #0033c5;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  margin: 10px auto 0 auto;
  font-size: 15px;
}

.apply-button:hover {
  background-color: #002da8;
}

.dropdown-arrow {
  margin-left: 10px;
}

.right-align {
  float: right;
}
</style>
