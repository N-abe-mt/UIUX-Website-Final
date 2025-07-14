const articleContainer = document.getElementById('articleContainer');

function renderArticles() {
  articleContainer.innerHTML = ''; // 既存の表示をリセット

  articles.forEach(article => {
    const { title, explanation, imageDataUrl } = article;

    const articleElement = document.createElement('div');
    articleElement.classList.add('article');
    articleElement.innerHTML = `
      <h2>${title}</h2>
      <img src="${imageDataUrl}" alt="記事画像" style="max-width: 300px;">
      <p>${explanation}</p>
      <hr>
    `;
    articleContainer.appendChild(articleElement);
  });
}

// ページ読み込み時に表示
renderArticles();