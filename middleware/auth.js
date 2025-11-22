export default function ({ store, redirect, route }) {
  if (!store.state.loggedIn) {
    return redirect('/auth/login?next=' + encodeURIComponent(route.fullPath))
  }
}