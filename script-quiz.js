document.getElementById("quizForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const gastronomia = Array.from(
    document.querySelectorAll("input[name='gastronomia']:checked")
  ).map((i) => i.value);
  const preferencia =
    document.querySelector("input[name='preferencia']:checked")?.value || "";
  const artesanato = Array.from(
    document.querySelectorAll("input[name='artesanato']:checked")
  ).map((i) => i.value);
  const filmes = Array.from(
    document.querySelectorAll("input[name='filmes']:checked")
  ).map((i) => i.value);
  const livros = Array.from(
    document.querySelectorAll("input[name='livros']:checked")
  ).map((i) => i.value);
  const musicas = Array.from(
    document.querySelectorAll("input[name='musicas']:checked")
  ).map((i) => i.value);

  const respostas = {
    gastronomia,
    preferencia,
    artesanato,
    filmes,
    livros,
    musicas,
  };

  localStorage.setItem("respostasQuiz", JSON.stringify(respostas));

  window.location.href = "../recomendacoes/recomendacoes.html";
});
