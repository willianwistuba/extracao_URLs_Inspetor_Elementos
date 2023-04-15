// 1 - Abra a página em que deseja fazer a extração das URLS e aperte F12 no seu teclado ou clique com o botão direito do mouse e selecione Inspecionar Código Fonte
// 2 - Copie a função abaixo no Console do Navegador e Aperte ENTER

function extractLinks() {
  // Regex para encontrar links na página
  const linkRegex = /href="(https?:\/\/[^"]*)"|href="([^"]*)"|https?:\/\/[^"]*/gmi;

  // Extrai os URLs completos dos links
  const links = [];
  const pageHtml = document.documentElement.outerHTML;
  let match = linkRegex.exec(pageHtml);
  while (match) {
    if (match && match[1]) {
      links.push(match[1]);
    }
    match = linkRegex.exec(pageHtml);
  }

  // Abre uma nova janela com a lista de links
  const linksString = links.join('\n');
  const newWindow = window.open('', '_blank');
  newWindow.document.write('<pre>' + linksString + '</pre>');
  newWindow.document.close();
}

extractLinks();