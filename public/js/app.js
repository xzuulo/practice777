// Получаем элементы со страницы
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const newsContainer = document.getElementById("newsContainer");
const savedContainer = document.getElementById("savedContainer");

function getSavedNews() {
  return JSON.parse(localStorage.getItem("savedNews")) || [];
}

function saveNews(article) {
  const saved = getSavedNews();

  saved.push(article);

  localStorage.setItem("savedNews", JSON.stringify(saved));

  renderSavedNews();
}

function renderSavedNews() {
  const saved = getSavedNews();

  savedContainer.innerHTML = saved
    .map(
      (article) => `
      <div class="article">
        <h3>${article.title}</h3>
        <p>${article.description || ""}</p>
      </div>
    `,
    )
    .join("");
}

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value;

  const res = await fetch(`/api/news?q=${query}`);

  const articles = await res.json();

  newsContainer.innerHTML = articles
    .map(
      (article) => `
      <div class="article">
        <h3>${article.title}</h3>
        <p>${article.description || ""}</p>
        <button onclick='saveNews(${JSON.stringify(article)})'>Save</button>
      </div>
    `,
    )
    .join("");
});

renderSavedNews();