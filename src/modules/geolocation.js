export function geoRedirect() {
  const val = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const region = val.split("/")[0];

  const { redirect, redirectActive } = document.querySelector("body").dataset;

  const queryString = window.location.search;

  if (redirectActive === "true" && region === "America") {
    if (queryString === "?noredirect=true") return false;
    window.location.href = redirect || "/geoblock";
    return true;
  }

  return false;
}
