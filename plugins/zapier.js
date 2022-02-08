export default function({ $axios }, inject) {
    const zapier = $axios.create();

    zapier.setBaseURL('https://hooks.zapier.com');

    inject('zapier', zapier);
};
