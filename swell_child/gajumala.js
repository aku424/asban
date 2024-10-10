/**
 * アーカイブページのタイトルをセットする
 */
function setArchiveTitle() {
    const targetEl = document.querySelector("#header");
    const setTitleEl = '<div id="top_title_area" class="l-topTitleArea c-filterLayer -texture-dot"><div class="l-topTitleArea__body l-container"><h1 class="c-pageTitle">制作実績<small class="c-pageTitle__subTitle u-fz-14">– WORKS –</small></h1></div></div>'

    targetEl.insertAdjacentHTML('afterend', setTitleEl);
}

(() => {
    const archivePage = document.querySelector('#body_wrap.post-type-archive');

    if(!archivePage) {
        return;
    }

    setArchiveTitle();
})();

/**
 * お問い合わせが入った後のサンクスページへのリダイレクト
 */
(() => {
    document.addEventListener('wpcf7mailsent', () => {
        location.href = '/thanks/';
    }); 
})();

/**
 * サンクスページに直接アクセスした場合のTOPページへのリダイレクト
 */
(() => {
    const thanksPageUrl = '/thanks/';
    const currentUrl = window.location.pathname;

    if(thanksPageUrl !== currentUrl) {
        return;
    }

    if(!document.referrer) {
        location.href = '/';
    }
})();


