export default function ({ store, redirect, route }) {
  if (route.query.guest === 'true' || route.query.childParticipant) {
    return
  }
  if (!store.state.loggedIn) {
    return redirect('/auth/login?next=' + encodeURIComponent(route.fullPath))
  }
}