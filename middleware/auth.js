export default function ({ store, redirect }) {
    if (!store.state.auth.isAuthenticated1) {
        return redirect('/resources/social-media-templates');
    }
}
