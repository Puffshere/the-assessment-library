export default function ({ $axios, $cookies }) {
  $axios.onRequest((config) => {
    const stateChangingMethods = ['post', 'put', 'patch', 'delete'];
    const method = (config.method || 'get').toLowerCase();

    if (stateChangingMethods.includes(method)) {
      const csrfToken = $cookies.get('tal_csrf');
      if (csrfToken) {
        config.headers = config.headers || {};
        config.headers['X-CSRF-Token'] = csrfToken;
      }
    }

    return config;
  });
}
