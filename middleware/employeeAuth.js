export default function ({ store, redirect }) {
    if (!store.state.employeeAuth.isAuthenticated) {
        return redirect('/resources/standards-and-procedures');
    }
}
