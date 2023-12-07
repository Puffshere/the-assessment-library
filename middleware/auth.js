export default function ({ store, redirect }) {
    if (!store.state.auth.isAuthenticated) {
        return redirect('/resources/social-media-templates');
    }
}
