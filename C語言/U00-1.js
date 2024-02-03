function clicked() {
    // 從<pre>元素中獲取文本內容
    var textToCopy = document.getElementById("word").innerText;

    // 創建一個textarea元素來複製文本
    var textarea = document.createElement("textarea");
    textarea.value = textToCopy;

    // 附加textarea到文檔中
    document.body.appendChild(textarea);

    // 選擇textarea中的文本
    textarea.select();

    // 將所選文本複製到剪貼板
    document.execCommand("copy");

    // 從文檔中刪除textarea
    document.body.removeChild(textarea);

    // 取得元素並交換其id
    const success1 = document.getElementById('success1');
    const fail2 = document.getElementById('fail2');
    success1.id = 'fail1';
    fail2.id = 'success2';

    // 設定一個延遲，再次交換id，以示成功/失敗的效果
    setTimeout(function() {
        const fail1 = document.getElementById('fail1');
        const success2 = document.getElementById('success2');
        fail1.id = 'success1';
        success2.id = 'fail2';
    }, 1000);
}
