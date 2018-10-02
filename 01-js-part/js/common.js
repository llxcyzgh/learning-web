function getCurrentFileName() {
    // 获取完整文件名
    var path = window.location.pathname;
    var page = path.split("/").pop();

    // 获取去除后缀的文件名
    var index = page.lastIndexOf('.html');
    page = page.slice(0, index);

    // 把文件名写入到 title 标签中
    document.getElementsByTagName("title")[0].innerHTML = page;

    // console.log(page);
    // console.log(path);
}