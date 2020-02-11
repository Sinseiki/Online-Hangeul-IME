var ohi_menu_num = 1;
function gotoTab(n) {
    ohi_menu_num = n;
    for(var i=1; i<=3; i++) {
        $('#menu'+i).addClass((i===n) ? 'this' : 'menu');
        $('#tab'+i).css('height',(i===n) ? 'auto' : '1px');
        //$('#tab'+i).css('position',(i==n) ? '' : 'absolute');
        $('#tab'+i).css('overflow',(i===n) ? 'visible' : 'hidden');
        $('#tab'+i).css('visibility',(i===n) ? 'visible' : 'hidden');
    }
    $('#manual').css('display',(n!=3) ? 'block' : 'none');
    show_keyboard_layout();
}

show_keyboard_layout(1);inputText_focus()

//$('#menu'+i).click(gotoTab(i)).hover(function(){$(this).addClass('over')})
