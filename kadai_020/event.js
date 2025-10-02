const btn = document.getElementById('btn');
const h2 = document.createElement('h2');
const text = document.getElementById('text');
// 作成したh2要素にテキストを追加する
h2.textContent = 'ボタンをクリックしました';
btn.addEventListener('click', () => {
  text.style.display = 'none';
  btn.parentNode.insertBefore(h2, btn); // ボタンの前にh2を挿入
});