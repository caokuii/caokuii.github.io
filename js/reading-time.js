<script src="/path/to/reading-time.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById('post-content').textContent; // 获取文章内容
    var wordsPerMinute = 200; // 设置每分钟阅读字数
    var readingTime = readingTime(content, wordsPerMinute);
    document.getElementById('word-count').textContent = readingTime.words; // 显示字数
    document.getElementById('reading-time').textContent = readingTime.text; // 显示阅读时间
  });
</script>
