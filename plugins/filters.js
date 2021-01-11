import Vue from 'vue'

Vue.filter('currencyFromCents', val => {
    const dollars = val / 100;
    return dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
});