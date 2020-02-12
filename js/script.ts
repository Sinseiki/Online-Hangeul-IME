show_keyboard_layout(1);inputText_focus()

// 탭 제어부
function gotoTab(n) {
    ohi_menu_num = n;
    for(var i=1; i<=3; i++) {
        $('#menu'+i)[0].className=((i===n) ? 'this' : 'menu');
        $('#tab'+i).css('height',(i===n) ? 'auto' : '1px');
        //$('#tab'+i).css('position',(i==n) ? 'static' : 'absolute');
        $('#tab'+i).css('overflow',(i===n) ? 'visible' : 'hidden');
        $('#tab'+i).css('visibility',(i===n) ? 'visible' : 'hidden');
    }
    $('#manual').css('display',(n!=3) ? 'block' : 'none');
    show_keyboard_layout();
}

function menTab(n){
    $('#menu'+n).click(function(){gotoTab(n)});
}

    menTab(1);menTab(2);menTab(3)

// 한·영 상태 제어부

$('.korEngStatus').click(function(){ohiChange_KE();inputText_focus()})

// 기준 자판 제어부
function ruleKBD(x){
    $('.ruleKBD'+x).click(function(){ohiChange_KBD_type(x);inputText_focus()})
}

    ruleKBD('');ruleKBD('QWERTY');ruleKBD('QWERTZ');ruleKBD('AZERTY')
