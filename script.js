// 人物カードをタップしたとき、該当する人物詳細へ移動します。
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#detail-"]').forEach((link) => {
    link.addEventListener('click', () => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'center' }), 0);
    });
  });
});
