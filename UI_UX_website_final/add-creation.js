const articles = []; // 記事のデータを保存する配列

form.addEventListener('submit', e => {
  e.preventDefault();

  const file = imageInput.files[0];
  const title = titleInput.value.trim();
  const explanation = explanationInput.value.trim();

  if (!file || !title || !explanation) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const imageDataUrl = event.target.result;

    // 記事データを配列に追加
    articles.push({ title, explanation, imageDataUrl });

    // 画面に記事を表示（まとめて表示でもOK）
    renderArticles();
  };
  reader.readAsDataURL(file);

  form.reset();
});

function renderArticles() {
  articleContainer.innerHTML = '';
  articles.forEach(({ title, explanation, imageDataUrl }) => {
    const article = document.createElement('div');
    article.innerHTML = `
      <h2>${title}</h2>
      <img src="${imageDataUrl}" alt="記事画像" style="max-width:300px;">
      <p>${explanation}</p>
      <hr>
    `;
    articleContainer.appendChild(article);
  });
}