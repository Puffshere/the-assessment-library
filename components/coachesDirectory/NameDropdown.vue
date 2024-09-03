<template>
    <div :class="['custom-dropdown', customClass]">
    <div class="dropdown-selected" @click="toggleDropdown">
        <input v-model="searchQuery" @focus="openDropdown" @input="filterItems" class="dropdown-input"
            :placeholder="placeholder" />
        <span class="dropdown-arrow">&#9660;</span>
    </div>
    <div v-if="isOpen && filteredItems.length" class="dropdown-menu">
        <div class="dropdown-item" @click="selectAll">All</div>
        <div v-for="item in filteredItems" :key="item" class="dropdown-item" @click="selectItem(item)">
            {{ item }}
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
        value: {
            type: String,
            default: '',
        },
        customClass: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: 'Search...',
        },
    },
    data() {
        return {
            isOpen: false,
            searchQuery: this.value,
            filteredItems: this.items,
        };
    },
    watch: {
        value(newValue) {
            this.searchQuery = newValue;
        },
        items(newItems) {
            this.filteredItems = newItems;
        },
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        openDropdown() {
            this.isOpen = true;
        },
        closeDropdown() {
            setTimeout(() => {
                this.isOpen = false;
            }, 200);
        },
        selectItem(item) {
            this.searchQuery = item;
            this.$emit('input', item);
            this.closeDropdown();
        },
        selectAll() {
            this.searchQuery = '';
            this.$emit('input', '');
            this.closeDropdown();
        },
        filterItems() {
            this.filteredItems = this.items.filter(item =>
                item.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            this.openDropdown();
        },
    },
};
</script>

<style scoped>
.custom-dropdown {
    position: relative;
    width: 100%;
    user-select: none;
}

.dropdown-selected {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    padding: 10px;
}

.dropdown-input {
    width: 100%;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    font-size: 14px;
}

.dropdown-arrow {
    margin-left: auto;
    cursor: pointer;
}

.dropdown-menu {
    position: absolute;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
    margin-top: 2px;
    box-sizing: border-box;
}

.dropdown-item {
    padding: 10px;
    cursor: pointer;
}

.dropdown-item:hover {
    background-color: #f0f0f0;
}
</style>