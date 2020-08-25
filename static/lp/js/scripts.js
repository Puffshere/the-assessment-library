function pre() {
  document.write(
    '<form name="go_to" method="post" action="/goto"><input name="website" type="hidden" value=""/></form>');
}

function goTo(id) {
    document.go_to.website.value = id;
    document.go_to.submit();
}

