$(function () {
    /* 初始化后台iframe */
    $('a',$('#menuSideBar')).on('click', function(e) {
        e.stopPropagation();
        var li = $(this).closest('li');
        var menuId = $(li).attr('mid');
        var url = $(li).attr('funurl');
        var title = $(this).text();
        $('#mainFrameTabs').bTabsAdd(menuId,title,url);
        // $('#mainFrameTabs').bTabsAdd(123,'用户管理','http://www.kgc.cn/');
    });
    $('#mainFrameTabs').bTabs({
    });
});