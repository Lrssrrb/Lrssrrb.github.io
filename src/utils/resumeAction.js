export function openAndDownloadResume(e, resumePath) {
  if (e) e.preventDefault();

  // 1. Open in a new tab
  window.open(resumePath, "_blank", "noopener,noreferrer");

  // 2. Trigger automatic download
  const link = document.createElement("a");
  link.href = resumePath;
  link.setAttribute("download", "Luckiraj_Sisodiya_Java_Backend_Resume.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
