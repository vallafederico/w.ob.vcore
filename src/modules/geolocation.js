export function geoRedirect() {
  const val = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const region = val.split("/")[0];

  const { redirect, redirectActive } = document.querySelector("body").dataset;
  console.log("detected region: ", region, redirectActive);

  if (redirectActive === "true" && region === "America") {
    window.location.href = redirect || "/geoblock";
    return true;
  }

  return false;
}
