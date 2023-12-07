export default function ({ store, redirect }) {
    if (!store.state.auth.isAuthenticated) {
        console.log('Redirecting to login page');
        return redirect('/resources/social-media-templates');
    }
}
