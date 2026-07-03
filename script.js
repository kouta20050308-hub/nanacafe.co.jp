document.addEventListener('DOMContentLoaded', () => {
    // タブボタンとコンテンツを取得
    const tabBtns = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.menu-content');

    // 各ボタンにクリックイベントを設定
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. 全てのボタンからactiveクラスを削除
            tabBtns.forEach(b => b.classList.remove('active'));
            // 2. クリックされたボタンにactiveクラスを追加
            btn.classList.add('active');

            // 3. 全てのコンテンツを非表示にする（activeクラス削除）
            contents.forEach(content => content.classList.remove('active'));
            
            // 4. クリックされたボタンのdata-targetに対応するIDを持つコンテンツを表示
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});
