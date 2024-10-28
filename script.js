document.getElementById('scan-button').addEventListener('click', function() {
    // ここにバーコードリーダーを呼び出すロジックを追加
    alert('バーコードリーダーを起動します。');
});

document.getElementById('storage-form').addEventListener('submit', function(event) {
    const category = document.getElementById('category').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const expiry = document.getElementById('expiry').value;

    if (!category || !product || quantity <= 0 || !expiry) {
        alert('すべての必須フィールドを正しく入力してください。');
        event.preventDefault(); // フォーム送信を中止
    }
});
