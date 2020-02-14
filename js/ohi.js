var default_En_type='QWERTY';var default_Ko_type='3m-Semoe';var default_ohi_KBD_type='QWERTY';var default_ohi_KE='Ko';var En_type='QWERTY';var Ko_type='3m-Semoe';var ohi_KBD_type='QWERTY';var ohi_KE='Ko';function option(){var enable_double_final_ext;var enable_sign_ext;var force_normal_typing;var only_NFD_hangeul_encoding;var enable_old_hangeul_input;var enable_Sin3_diphthong_key;var phonemic_writing;var phonemic_writing_in_single_phoneme;var phonemic_writing_in_halfwidth_letter;var phonemic_writing_initial_ieung_ellipsis;var phonemic_writing_adding_space_every_syllable_end;var phonemic_writing_directly;var abbreviation;var convenience_combination;var sunalae;var show_layout;var turn_off_OHI;var square_layout}
function NCR_option(){var enable_NCR;var convert_only_NFD_hangeul_encoding}
function initialize_options(){var default_enable_double_final_ext=0;var default_enable_sign_ext=1;var default_force_normal_typing=0;var default_only_NFD_hangeul_encoding=0;var default_enable_old_hangeul_input=0;var default_enable_Sin3_diphthong_key=1;var default_enable_adding_cheos_with_shift_key=1;var default_phonemic_writing=0;var default_phonemic_writing_in_single_phoneme=1;var default_phonemic_writing_in_halfwidth_letter=0;var default_phonemic_writing_initial_ieung_ellipsis=1;var default_phonemic_writing_adding_space_every_syllable_end=0;var default_phonemic_writing_directly=0;var default_phonemic_writing_NFD_ggeut_to_cheos=1;var default_abbreviation=0;var default_convenience_combination=0;var default_sunalae=0;var default_square_layout=0;if(typeof En_type!='undefined')
default_En_type=En_type;else En_type=default_En_type;if(typeof Ko_type!='undefined')
default_Ko_type=Ko_type;else Ko_type=default_Ko_type;if(typeof ohi_KBD_type!='undefined')
default_ohi_KBD_type=ohi_KBD_type;else ohi_KBD_type=default_ohi_KBD_type;if(typeof ohi_KE!='undefined')
default_ohi_KE=ohi_KE;else ohi_KE=default_ohi_KE;if(typeof enable_sign_ext!='undefined')
default_enable_sign_ext=enable_sign_ext;if(typeof force_normal_typing!='undefined')
default_force_normal_typing=force_normal_typing;if(typeof phonemic_writing!='undefined')
default_phonemic_writing=phonemic_writing;if(typeof phonemic_writing_in_single_phoneme!='undefined')
default_phonemic_writing_in_single_phoneme=phonemic_writing_in_single_phoneme;if(typeof phonemic_writing_in_halfwidth_letter!='undefined')
default_phonemic_writing_in_halfwidth_letter=phonemic_writing_in_halfwidth_letter;if(typeof phonemic_writing_initial_ieung_ellipsis!='undefined')
default_phonemic_writing_initial_ieung_ellipsis=phonemic_writing_initial_ieung_ellipsis;if(typeof phonemic_writing_adding_space_every_syllable_end!='undefined')
default_phonemic_writing_adding_space_every_syllable_end=phonemic_writing_adding_space_every_syllable_end;if(typeof phonemic_writing_directly!='undefined')
default_phonemic_writing_directly=phonemic_writing_directly;if(typeof square_layout!='undefined')
default_square_layout=square_layout;option=new option();option.enable_double_final_ext=default_enable_double_final_ext;option.enable_sign_ext=default_enable_sign_ext;option.force_normal_typing=default_force_normal_typing;option.only_NFD_hangeul_encoding=default_only_NFD_hangeul_encoding;option.enable_old_hangeul_input=default_enable_old_hangeul_input;option.enable_Sin3_diphthong_key=default_enable_Sin3_diphthong_key;option.enable_Sin3_adding_cheos_with_shift_key=default_enable_adding_cheos_with_shift_key;option.phonemic_writing=default_phonemic_writing;option.phonemic_writing_in_single_phoneme=default_phonemic_writing_in_single_phoneme;option.phonemic_writing_in_halfwidth_letter=default_phonemic_writing_in_halfwidth_letter;option.phonemic_writing_initial_ieung_ellipsis=default_phonemic_writing_initial_ieung_ellipsis;option.phonemic_writing_adding_space_every_syllable_end=default_phonemic_writing_adding_space_every_syllable_end;option.phonemic_writing_directly=default_phonemic_writing_directly;option.phonemic_writing_NFD_ggeut_to_cheos=default_phonemic_writing_NFD_ggeut_to_cheos;option.abbreviation=default_abbreviation;option.convenience_combination=default_convenience_combination;option.sunalae=default_sunalae;option.turn_off_OHI=0;option.show_layout=1;option.square_layout=default_square_layout;NCR_option=new NCR_option();NCR_option.enable_NCR=0;NCR_option.convert_only_NFD_hangeul_encoding=0}
initialize_options();var ohiQ=[0,0,0,0,0,0,0,0,0];var ohiRQ=[0,0,0,0,0,0,0,0,0];var prev_ohiQ=[];var prev_ohiRQ=[];var backup_ohiQ=[];var backup_ohiRQ=[];var backspacing_state=0;var prev_cursor_position=-1;var backup_prev_cursor_position=-1;var abbreviation_processing_state=0;var ohiStatus=document.createElement('div');var ohiTimeout=0;var sign_ext_state=0;var bangjeom_input_state=0;var phoneme_input_state=0;var onkeypress_skip=0;var onkeyup_skip=0;var ohiHangeul3_HanExtKey=0;var shift_lock=0;var shift_click=0;var shiftlock_click=0;var browser='',browser_ver=0,nu=navigator.userAgent;var dkey,ukey;var pressed_keys=[];var prev_pressed_keys=[];var prev_class=[];var pressing_keys=0;var double_multikey_abbreviated_state=0;var ohi_menu_num=1;function NFD_stack(){var phoneme=[];var phoneme_R=[];var combined_phoneme=[]}
function initialize_NFD_stack(){NFD_stack.phoneme=[];NFD_stack.phoneme_R=[];NFD_stack.combined_phoneme=[]}
initialize_NFD_stack();var ohi_cheos,ohi_ga,ohi_ggeut,ohi_hotbadchim;var unicode_NFD_hangeul_phoneme=[],unicode_cheos=[],unicode_ga=[],unicode_ggeut=[];var unicode_modern_hangeul_phoneme=[],unicode_modern_cheos=[],unicode_modern_ga=[],unicode_modern_ggeut=[];var compatibility_hangeul_phoneme=[],compatibility_cheos=[],compatibility_ga=[],compatibility_ggeut=[];var halfwidth_cheos=[],halfwidth_ga=[],halfwidth_ggeut=[];var current_layout=[];function browser_detect(){var trident=navigator.userAgent.match(/Trident\/(\d\.\d)/i);var trident_ver=trident===undefined||!trident?0:parseFloat(trident[1]);if(nu.indexOf('MSIE')>=0||trident_ver>=7){browser="MSIE";if(trident_ver<7)
browser_ver=parseFloat(nu.substring(nu.indexOf("MSIE ")+5));else if(trident_ver==7)
browser_ver=11}
else if(nu.indexOf('Firefox')>=0){browser="Firefox";browser_ver=parseFloat(nu.substring(nu.indexOf('Firefox/')+8))}
else if(nu.indexOf('Chrome')>=0){browser="Chrome";browser_ver=parseFloat(nu.substring(nu.indexOf('Chrome/')+7))}}
function ohiBackspace(f){if(document.selection&&browser=='MSIE'&&browser_ver<9){var s=document.selection.createRange();s.moveStart('character',-f.value.length);var pos=s.text.length;if(f.setSelectionRange){f.setSelectionRange(pos-1,pos);f.text=''}
else if(f.createTextRange){var range=f.createTextRange();range.collapse(!0);range.moveEnd('character',pos);range.moveStart('character',pos-length);range.select();range.text='';var scrollTop=f.scrollTop,scrollLeft=f.scrollLeft,selectionStart=f.selectionStart;var endText=f.value.substr(f.selectionEnd,f.value.length);f.value=f.value.substr(0,selectionStart)+String.fromCharCode(c);var scrollHeight=f.scrollHeight,scrollWidth=f.scrollWidth;f.value+=endText;if(c==13&&browser=='MSIE'&&browser_ver==11&&!endText.length){f.value+=String.fromCharCode(32)}
f.scrollTop=(scrollTop>scrollHeight-f.clientHeight)?scrollTop:scrollHeight-f.clientHeight;f.scrollLeft=(scrollLeft>scrollWidth-f.clientWidth)?scrollLeft:scrollWidth-f.clientWidth;f.setSelectionRange(m||c<32?selectionStart:selectionStart+1,selectionStart+1)}}
else{var bs_start=f.selectionStart;var bs_end=f.selectionEnd;if(!bs_end)
return;if(bs_start==bs_end){if(!NFD_stack.phoneme.length&&prev_cursor_position<0){var i=0,ggeut=0,bangjeom=0;do{var code=f.value.substr(bs_start-i-1,1).charCodeAt(0);if(!i&&unicode_NFD_hangeul_sidedot.indexOf(code)>=0){bangjeom=1;continue}
if(bangjeom){if(i==1&&code==0x1160)
continue;if(i==2){if(code==0x115F)
continue;else --i}
break}
if(!i&&unicode_ggeut.indexOf(code)>=0){ggeut=1;continue}
if(i-ggeut==0&&(code==0x1160||unicode_ga.indexOf(code)>=0))
continue;if(i-ggeut==0&&(code==0x1160||unicode_ga.indexOf(code)>=0))
continue;if(i-ggeut==1&&(code==0x115F||unicode_cheos.indexOf(code)>=0))
continue;break}while(bs_start-(++i));}
bs_start-=i?i:1}
f.value=f.value.substr(0,bs_start)+f.value.substr(bs_end);f.selectionStart=f.selectionEnd=bs_start}
ohiInsert(f,0,0)}
function ohiHangeul_moa_backspace(f,e){if(f.selectionEnd){if(prev_cursor_position>=0&&f.selectionEnd>prev_cursor_position){initialize_NFD_stack();while(f.selectionEnd&&f.selectionEnd>prev_cursor_position){if(ohiHangeul_backspace(f,e))
ohiBackspace(f)}}
else if(ohiHangeul_backspace(f,e))
ohiBackspace(f)}
prev_cursor_position=-1;prev_class=[];esc_ext_layout();return 0}
function ohiHangeul_backspace(f,e){var i,j;var KE=ohi_KE;if(e.preventDefault)
e.preventDefault();if(option.enable_sign_ext&&sign_ext_state){if(Ko_type.substr(0,4)=='Sin3')
ohiBackspace(f);esc_ext_layout();return!1}
if(ohiQ[1]||ohiQ[4]||ohiQ[0]&&ohiQ[3]){for(i=8;!ohiQ[i];)
i--;backspacing_state=1;ohiInsert(f,ohiQ[i]=0,ohiQ);backspacing_state=0;ohiRQ[i]=0;esc_ext_layout();return!1}
if(KE=='Ko'&&NFD_stack.phoneme.length){if(!ohiHangeul3_HanExtKey){ohiBackspace(f);if(browser=="MSIE"&&browser_ver<9){i=NFD_stack.combined_phoneme.length-1;while(i--)
ohiBackspace(f);}
var temp_NFD_stack_phoneme=NFD_stack.phoneme.slice();var temp_NFD_stack_phoneme_R=NFD_stack.phoneme_R.slice();initialize_NFD_stack();for(j=0,i=temp_NFD_stack_phoneme.length-1;i>=1;--i)
if(unicode_NFD_hangeul_filler.indexOf(temp_NFD_stack_phoneme[i])>=0)
++j;if(j!=temp_NFD_stack_phoneme.length-1){for(i=temp_NFD_stack_phoneme.length-1;i>=1;--i){NFD_hangeul_input(f,0,(temp_NFD_stack_phoneme_R[i]?-1:1)*temp_NFD_stack_phoneme[i]);NFD_stack.phoneme_R[i-1]=temp_NFD_stack_phoneme_R[i]}}}
if(!is_old_hangeul_input()&&!option.only_NFD_hangeul_encoding){for(i=0;i<NFD_stack.combined_phoneme.length;++i){if(unicode_modern_hangeul_phoneme.indexOf(NFD_stack.combined_phoneme[i])<0&&unicode_NFD_hangeul_filler.indexOf(NFD_stack.combined_phoneme[i])<0)
break}
if(i==NFD_stack.combined_phoneme.length){ohiBackspace(f);if(browser=="MSIE"&&browser_ver<9){i=NFD_stack.combined_phoneme.length-1;while(i--)
ohiBackspace(f);}
initialize_NFD_stack();ohiQ=backup_ohiQ.slice();ohiRQ=backup_ohiRQ.slice();for(i=9;i>=0;--i){if(ohiQ[i]){ohiQ[i]=0;ohiRQ[i]=0;break}}
ohiInsert(f,0,ohiQ)}}
esc_ext_layout();return!1}
return!0}
function ohiDoubleJamo(a,c,d){var i,j=[[[1,7,18,21,24],1,7,18,21,24],[[39,44,49],[31,32,51],[35,36,51],51],[[1,4,9,18,21],[1,21],[24,30],[1,17,18,21,28,29,30],[0,21],21]];a=j[a];for(i=a[0].length;c!=a[0][i-1];i--)
if(!i)
return i;for(a=a[i],i=a.length||1;1;i--)
if(!i||d==a||d==a[i-1])
return i}
function ohiInsert(f,m,q){var a,b,c=q,d=m?1:0,g=0,h=0,i=0,j=0,k=0,u=0;if(!q){ohiQ=ohiRQ=prev_ohiQ=prev_ohiRQ=[0,0,0,0,0,0,0,0,0];return!0}
if(q.length!=9)
ohiQ=ohiRQ=[0,0,0,0,0,0,0,0,0];else{for(a=0;a<9;++a){if(q[a]>0)
++h;if(unicode_NFD_hangeul_phoneme.indexOf(ohiQ[a])>=0)
++u}
if(!u){var m=m||'0,0,0,0,0,0,0,0,0',i=q[0]+q[1]+q[2],j=q[3]+q[4]+q[5],k=q[6]+q[7]+q[8];c=i&&j?0xac00+(i-(i<3?1:i<5?2:i<10?4:i<20?11:12))*588+(j-31)*28+k-(k<8?0:k<19?1:k<25?2:3):0x3130+(i||j||k)}
else if(!NFD_stack.phoneme.length&&!is_old_hangeul_input()){backup_ohiQ=ohiQ.slice();backup_ohiRQ=ohiRQ.slice();if(h>1)
ohiBackspace(f);for(a=0;a<3;++a){c=backup_ohiQ[a*3]+backup_ohiQ[a*3+1]+backup_ohiQ[a*3+2];if(!c)
continue;if(c<158)
c+=!a?127:a==1?35:0;c=convert_into_unicode_hangeul_phoneme(c);if(c)
NFD_hangeul_input(f,0,c)}
return}}
if(!bangjeom_input_state&&unicode_NFD_hangeul_sidedot.indexOf(c)>=0){if(ohiQ[0]+ohiQ[3]+ohiQ[6]+NFD_stack.phoneme.length){complete_hangeul_syllable(f)}
else{ohiInsert(f,0,0x115F);ohiInsert(f,0,0x1160)}
bangjeom_input_state=1;ohiInsert(f,0,c);bangjeom_input_state=0;return}
if((is_phonemic_writing_input()||option.only_NFD_hangeul_encoding&&!is_old_hangeul_input())&&!phoneme_input_state&&!backspacing_state){if(is_phonemic_writing_input()&&option.phonemic_writing_directly&&!option.only_NFD_hangeul_encoding&&i+j+k){if(option.phonemic_writing_in_halfwidth_letter&&!is_old_hangeul_input())
c=convert_into_halfwidth_hangeul_letter(c);else c=convert_into_compatibility_hangeul_letter(c);ohiInsert(f,0,c);return}
else{for(a=0;a<9;++a)
if(prev_ohiQ[a]>0)
++g;if(g>0&&h<2||d){phoneme_input_state=1;ohiQ=prev_ohiQ.slice();if(ohiQ[0]+ohiQ[3]+ohiQ[6]){if(Ko_type.substr(0,2)=='2-'&&h&&i&&j)
for(a=8;a>=0;--a)
if(ohiQ[a]){ohiQ[a]=0;break}
complete_hangeul_syllable(f);if(is_phonemic_writing_input()&&option.phonemic_writing_adding_space_every_syllable_end&&h&&i+j+k)
ohiInsert(f,0,32)}
ohiQ=[h&&i?i:0,0,0,h&&j?j:0,0,0,h&&k?k:0,0,0];phoneme_input_state=0}}}
if(is_moachigi_input()&&NFD_stack.phoneme.length&&unicode_NFD_hangeul_code.indexOf(c)<0)
complete_hangeul_syllable(f);if(document.selection&&browser=="MSIE"&&browser_ver<10){var s=document.selection.createRange(),t=s.text;if(t&&document.selection.clear)
document.selection.clear();s.text=(m=='0,0,0,0,0,0,0,0,0'||c&&t.length>1?'':t.substr(0,t.length))+String.fromCharCode(c);if(!c||!m||s.moveStart('character',-1))
s.select()}
else if(f.selectionEnd+1){if(m!='0,0,0,0,0,0,0,0,0'&&f.selectionEnd-f.selectionStart==1)
f.selectionStart++;var e=document.createEvent('KeyboardEvent');if(e.initKeyEvent&&!(browser=="Firefox"&&browser_ver>=12)&&browser!="Chrome"){e.initKeyEvent('keypress',0,0,null,0,0,0,0,127,c);if(c&&f.dispatchEvent(e)&&m)
f.selectionStart--}
else{var scrollTop=f.scrollTop,scrollLeft=f.scrollLeft,selectionStart=f.selectionStart;var endText=f.value.substr(f.selectionEnd,f.value.length);f.value=f.value.substr(0,selectionStart)+String.fromCharCode(c);var scrollHeight=f.scrollHeight,scrollWidth=f.scrollWidth;f.value+=endText;if(c==13&&browser=='MSIE'&&browser_ver==11&&!endText.length)
f.value+=String.fromCharCode(32);f.scrollTop=(scrollTop>scrollHeight-f.clientHeight)?scrollTop:scrollHeight-f.clientHeight;f.scrollLeft=(scrollLeft>scrollWidth-f.clientWidth)?scrollLeft:scrollWidth-f.clientWidth;f.setSelectionRange(m||c<32?selectionStart:selectionStart+1,selectionStart+1)}}
prev_ohiQ=ohiQ.slice();prev_ohiRQ=ohiRQ.slice()}
function ohiSelection(f,length){if(document.selection&&browser=="MSIE"&&browser_ver<9){}
else if(f.selectionEnd+1){var e=document.createEvent('KeyboardEvent');if(e.initKeyEvent&&!(browser=="Firefox"&&browser_ver>=12)&&browser!="Chrome")
f.selectionStart-=length;else f.selectionStart=f.selectionEnd-length}}
function esc_ext_layout(){var KE=ohi_KE;if(ohiHangeul3_HanExtKey||sign_ext_state){if(KE=='Ko'){sign_ext_state=0;ohiHangeul3_HanExtKey=0;show_keyboard_layout(Ko_type)}}
sign_ext_state=0;ohiHangeul3_HanExtKey=0}
function change_syllable_from_NFC_to_NFD(f){var _ohiQ=ohiQ.slice(),_ohiRQ=ohiRQ.slice();ohiBackspace(f);i=ohi_cheos.indexOf(_ohiQ[0]+_ohiQ[1]+_ohiQ[2]+127);if(i>=0&&_ohiQ[0]+_ohiQ[1]+_ohiQ[2])
ohiInsert(f,0,unicode_cheos[i]);else ohiInsert(f,0,0x115F);i=ohi_ga.indexOf(_ohiQ[3]+_ohiQ[4]+_ohiQ[5]+35);if(i>=0&&_ohiQ[3]+_ohiQ[4]+_ohiQ[5])
ohiInsert(f,0,unicode_ga[i]);else ohiInsert(f,0,0x1160);i=ohi_ggeut.indexOf(_ohiQ[6]+_ohiQ[7]+_ohiQ[8]);if(i>=0&&_ohiQ[6]+_ohiQ[7]+_ohiQ[8])
ohiInsert(f,0,unicode_ggeut[i])}
function change_syllable_from_NFD_to_NFC(f){var i,j;if(unicode_modern_cheos.indexOf(NFD_stack.combined_phoneme[1])>=0&&unicode_modern_ga.indexOf(NFD_stack.combined_phoneme[0])>=0||unicode_modern_cheos.indexOf(NFD_stack.combined_phoneme[2])>=0&&unicode_modern_ga.indexOf(NFD_stack.combined_phoneme[1])>=0&&unicode_modern_ggeut.indexOf(NFD_stack.combined_phoneme[0])>=0){i=NFD_stack.combined_phoneme.length;for(j=0;j<i;++j)
ohiBackspace(f);ohiQ=[NFD_stack.combined_phoneme[i-1]-0x1100+11+(NFD_stack.combined_phoneme[i-1]>0x1108?1:0),0,0,NFD_stack.combined_phoneme[i-2]-0x1161+31,0,0,i==3?(NFD_stack.combined_phoneme[0]-0x11A8+1+(NFD_stack.combined_phoneme[0]>0x11AE?1:0)+(NFD_stack.combined_phoneme[0]>0x11B8?1:0)+(NFD_stack.combined_phoneme[0]>0x11BD?1:0)):0,0,0];ohiInsert(f,0,ohiQ);if(typeof f.selectionEnd!='undefined')
f.selectionStart=f.selectionEnd;return}
if(!is_old_hangeul_input()&&NFD_stack.combined_phoneme.length==2&&(unicode_NFD_hangeul_filler.indexOf(NFD_stack.combined_phoneme[1])>=0^unicode_NFD_hangeul_filler.indexOf(NFD_stack.combined_phoneme[0])>=0)){var NFD_to_compatibility_phoneme_list=[0x119E,0x318D,0x11A1,0x318E];i=NFD_to_compatibility_phoneme_list.indexOf(unicode_NFD_hangeul_filler.indexOf(NFD_stack.combined_phoneme[1])>=0?NFD_stack.combined_phoneme[0]:NFD_stack.combined_phoneme[1]);if(i>=0){for(j=0;j<NFD_stack.combined_phoneme.length;++j)
ohiBackspace(f);ohiInsert(f,0,NFD_to_compatibility_phoneme_list[i+1])}}}
function combine_unicode_NFD_hangeul_phoneme(c1,c2){var i;var combination_table;var combined_phoneme;if(typeof current_layout.moachigi_hangeul_combination_table!='undefined'&&typeof current_layout.hangeul_combination_table=='undefined'){combination_table=current_layout.moachigi_hangeul_combination_table;for(i=0;i<combination_table.length;++i){if(combination_table[i].phonemes.length!=2)
continue;if(combination_table[i].phonemes.indexOf(c1)<0||combination_table[i].phonemes.indexOf(c2)<0)
continue;if(c1==c2&&combination_table[i].phonemes[0]!=combination_table[i].phonemes[1])
continue;combined_phoneme=combination_table[i].char;break}
if(i==combination_table.length)
return 0;return combined_phoneme}
else{combination_table=hangeul_combination_table_default;if(is_old_hangeul_input())
combination_table=hangeul_combination_table_full;if(!option.enable_old_hangeul_input&&typeof current_layout.hangeul_combination_table!='undefined'&&typeof current_layout.hangeul_combination_table.length!='undefined'&&current_layout.hangeul_combination_table.length)
combination_table=current_layout.hangeul_combination_table;if(option.convenience_combination&&typeof current_layout.hangeul_convenience_combination_table!='undefined'&&!is_old_hangeul_input())
combination_table=combination_table.concat(current_layout.hangeul_convenience_combination_table);if(current_layout.type_name.substr(-2)=='-y'&&typeof current_layout.combination_table!='undefined')
combination_table=current_layout.combination_table;else if(option.enable_old_hangeul_input){if(typeof current_layout.old_hangeul_layout_type_name!='undefined'&&typeof find_layout_info('Ko',current_layout.old_hangeul_layout_type_name).combination_table!='undefined')
combination_table=find_layout_info('Ko',current_layout.old_hangeul_layout_type_name).combination_table}
var combined_phoneme=0x10000*c1+c2;for(i=0;i<combination_table.length;++i){if(combined_phoneme==combination_table[i][0]){combined_phoneme=combination_table[i][1];break}}
if(i==combination_table.length)
return 0;return combined_phoneme}}
function complete_hangeul_syllable(f){if(typeof f=='undefined'||!f)
f=document.getElementById('inputText');var c,i,j,k;if(NFD_stack.phoneme.length){for(j=0,i=NFD_stack.phoneme.length-1;i>=0;--i)
if(unicode_NFD_hangeul_filler.indexOf(NFD_stack.phoneme[i])>=0)
++j;if(j==NFD_stack.phoneme.length)
for(i=0;i<NFD_stack.combined_phoneme.length;++i)
ohiBackspace(f);}
if(ohiQ[0]+ohiQ[3]+ohiQ[6]||NFD_stack.phoneme.length)
ohiSelection(f,0);if(is_phonemic_writing_input())
convert_syllable_into_phonemes(f);else if(!option.only_NFD_hangeul_encoding&&NFD_stack.phoneme.length)
change_syllable_from_NFD_to_NFC(f);else if(option.only_NFD_hangeul_encoding&&!is_old_hangeul_input()&&ohiQ[0]+ohiQ[3]+ohiQ[6])
change_syllable_from_NFC_to_NFD(f);ohiInsert(f,0,0);initialize_NFD_stack();if(!abbreviation_processing_state)
prev_cursor_position=-1}
function convert_into_ohi_hangeul_phoneme(c){if(unicode_modern_cheos.indexOf(c)>=0)
c=ohi_cheos[unicode_modern_cheos.indexOf(c)];else if(unicode_modern_ga.indexOf(c)>=0)
c=ohi_ga[unicode_modern_ga.indexOf(c)];else if(unicode_modern_ggeut.indexOf(c)>=0)
c=ohi_ggeut[unicode_modern_ggeut.indexOf(c)];else if(compatibility_ga.indexOf(c)>=0)
c=ohi_ga[compatibility_ga.indexOf(c)];return c}
function convert_into_unicode_hangeul_phoneme(c){if(ohi_cheos.indexOf(c)>=0)
c=unicode_cheos[ohi_cheos.indexOf(c)];else if(ohi_ga.indexOf(c)>=0)
c=unicode_ga[ohi_ga.indexOf(c)];else if(ohi_ggeut.indexOf(c)>=0)
c=unicode_ggeut[ohi_ggeut.indexOf(c)];return c}
function convert_into_compatibility_hangeul_letter(c){c=convert_into_unicode_hangeul_phoneme(c);old_hangeul_cheos=[0x1140,0x114C,0x1159];old_hangeul_ga=[0x119E];old_hangeul_ggeut=[0x11EB,0x11F0,0x11F9];compatibility_yeshangeul_dah=[0x317F,0x3181,0x3186];compatibility_yeshangeul_hol=[0x318D];if(unicode_modern_cheos.indexOf(c)>=0)
c=compatibility_cheos[unicode_modern_cheos.indexOf(c)];else if(unicode_modern_ga.indexOf(c)>=0)
c=compatibility_ga[unicode_modern_ga.indexOf(c)];else if(unicode_modern_ggeut.indexOf(c)>=0)
c=compatibility_ggeut[unicode_modern_ggeut.indexOf(c)];else if(old_hangeul_cheos.indexOf(c)>=0)
c=compatibility_yeshangeul_dah[old_hangeul_cheos.indexOf(c)];else if(old_hangeul_ga.indexOf(c)>=0)
c=compatibility_yeshangeul_hol[old_hangeul_ga.indexOf(c)];else if(old_hangeul_ggeut.indexOf(c)>=0)
c=compatibility_yeshangeul_dah[old_hangeul_ggeut.indexOf(c)];return c}
function convert_into_halfwidth_hangeul_letter(c){c=convert_into_unicode_hangeul_phoneme(c);if(unicode_modern_cheos.indexOf(c)>=0)
c=halfwidth_cheos[unicode_modern_cheos.indexOf(c)];else if(unicode_modern_ga.indexOf(c)>=0)
c=halfwidth_ga[unicode_modern_ga.indexOf(c)];else if(unicode_modern_ggeut.indexOf(c)>=0)
c=halfwidth_ggeut[unicode_modern_ggeut.indexOf(c)];else if(compatibility_cheos.indexOf(c)>=0)
c=halfwidth_cheos[compatibility_cheos.indexOf(c)];else if(compatibility_ga.indexOf(c)>=0)
c=halfwidth_ga[compatibility_ga.indexOf(c)];else if(compatibility_ggeut.indexOf(c)>=0)
c=halfwidth_ggeut[compatibility_ggeut.indexOf(c)];return c}
function convert_into_single_phonemes(combined_phoneme){combined_phoneme=convert_into_unicode_hangeul_phoneme(combined_phoneme);var i,single_phonemes=[combined_phoneme],test_phonemes;var combination_table=hangeul_combination_table_default;if(is_old_hangeul_input())
combination_table=hangeul_combination_table_full;if(unicode_non_combined_phoneme.indexOf(combined_phoneme)>=0)
return single_phonemes;for(i=0;i<combination_table.length;++i){if(combined_phoneme==combination_table[i][1]){single_phonemes.splice(0,1,parseInt(combination_table[i][0]/0x10000),combination_table[i][0]%0x10000);break}}
if(i!=combination_table.length&&is_old_hangeul_input()){for(i=1;i>=0;--i){test_phonemes=convert_into_single_phonemes(single_phonemes[i]);if(test_phonemes.length>1)
single_phonemes.splice(i,1,test_phonemes[0],test_phonemes[1])}}
return single_phonemes}
function convert_NFC_into_NFD(NFC_c){if(NFC_c<0xAC00||NFC_c>0xD7A3)
return!1;var i,j,k;i=parseInt((NFC_c-0xAC00)/588)+0x1100;j=parseInt((NFC_c-0xAC00)%588/28)+0x1161;k=(NFC_c-0xAC00)%588%28+0x11A7;k=k==0x11A7?0:k;return[i,j,k]}
function convert_NFD_into_NFC(NFD_phonemes){var p=[],h,i,j,k;if(NFD_phonemes.length>3||NFD_phonemes.length<2)
return!1;h=unicode_modern_cheos.indexOf(NFD_phonemes[0])<0?0:1;for(i=0;i<NFD_phonemes.length;++i){j=h?i:NFD_phonemes.length-i-1;p[i]=NFD_phonemes[j];if(unicode_modern_hangeul_phoneme.indexOf(p[i])<0)
return!1}
if(unicode_modern_cheos.indexOf(p[0])<0||unicode_modern_ga.indexOf(p[1])<0)
return!1;if(p.length==3&&unicode_modern_ggeut.indexOf(p[2])<0)
return!1;return 0xAC00+(p[0]-0x1100)*588+(p[1]-0x1161)*28+(p[2]-0x11A8)}
function ohiRoman(f,e,key){var c=key;if(En_type!='QWERTY')
c=current_layout.layout[key-33];ohiInsert(f,0,c)}
function ohiHangeul2(f,e,key){if((Ko_type.indexOf('KSX5002')>=0||Ko_type=='2-KPS9256')&&(key<65||(key-1)%32>25)){complete_hangeul_syllable(f);ohiInsert(f,0,key);return}
var c;var layout_info=current_layout;if(is_old_hangeul_input()&&typeof current_layout.old_hangeul_layout_type_name!='undefined')
layout_info=find_layout_info('Ko',current_layout.old_hangeul_layout_type_name);var layout=layout_info.layout;if(typeof layout!='undefined'){c=convert_into_ohi_hangeul_phoneme(layout[key-33]);if(!c||c==0x1B){complete_hangeul_syllable(f);return}
if(is_old_hangeul_input()||option.only_NFD_hangeul_encoding||NFD_stack.phoneme.length){c=NFD_hangeul2_preprocess(f,e,key);if(unicode_NFD_hangeul_code.indexOf(c)>=0){NFD_hangeul_input(f,key,c);return}}
if(c==layout[key-33]){ohiInsert(f,0,c);return}
if(ohi_cheos.indexOf(c)>=0)
c-=127;else if(ohi_ga.indexOf(c)>=0)
c-=35;else if(ohi_ggeut.indexOf(c)>=0)
c-=127}
else{if(Ko_type=='2-KSX5002')
c=[17,48,26,23,7,9,30,39,33,35,31,51,49,44,32,36,18,1,4,21,37,29,24,28,43,27][key%32-1];if(Ko_type=='2-KPS9256')
c=[24,48,26,23,7,4,21,39,35,31,51,49,33,43,32,36,18,9,1,30,44,29,17,28,37,27][key%32-1];if(key>64&&key<91){c+=c==32||c==36?2:c==18||c==7||c==24||c==1||c==21?1:0}}
if(c<31){if((!ohiQ[7]||!(ohiQ[0]=-1))&&ohiQ[3])
ohiQ[7]=ohiDoubleJamo(2,ohiQ[6],c);if(!ohiQ[3]||ohiQ[0]<0||ohiQ[0]&&(!ohiQ[6]||!ohiQ[7])&&(ohiQ[6]||c==8||c==19||c==25))
ohiInsert(f,(ohiQ=ohiQ[1]||ohiQ[3]||!ohiDoubleJamo(0,ohiQ[0],c)?ohiQ:0),ohiQ=[c,ohiQ?0:1,0,0,0,0,0,0,0]);else if(!ohiQ[0]&&ohiQ[3]){complete_hangeul_syllable(f);ohiInsert(f,0,ohiQ=[c,0,0,0,0,0,0,0,0])}
else if(!ohiQ[0]&&(ohiQ[0]=c)||(ohiQ[6]=ohiQ[6]||c))
ohiInsert(f,0,ohiQ);if(ohiQ[7])
ohiQ[7]=c}
else{if(option.sunalae||Ko_type.substr(0,5)=='2-sun'){if(ohiQ[3]==c&&!ohiQ[1]&&!ohiQ[6]&&(ohiQ[0]==1||ohiQ[0]==7||ohiQ[0]==18||ohiQ[0]==21||ohiQ[0]==24)){ohiQ[1]=1;ohiInsert(f,0,ohiQ);return}}
if(option.sunalae||Ko_type=='2-KPS9256'||Ko_type.substr(0,5)=='2-sun'||Ko_type=='2-Gaon26KM'){if((ohiQ[3]==37||ohiQ[3]==33)&&c==51&&!ohiQ[6]){ohiQ[4]=1;ohiInsert(f,0,ohiQ);return}}
if(!option.sunalae&&c==66-35&&ohiQ[3]==c&&!ohiQ[4]&&!ohiQ[6]){ohiQ[4]=0x119E-ohiQ[3];ohiInsert(f,0,ohiQ);return}
if(!option.sunalae&&c==86-35&&ohiQ[3]==c&&!ohiQ[4]&&!ohiQ[6]){ohiQ[4]=0x11A2-ohiQ[3];ohiInsert(f,0,ohiQ);return}
if((!ohiQ[4]||ohiQ[6]||!(ohiQ[3]=-1))&&!ohiQ[6])
ohiQ[4]=ohiDoubleJamo(1,ohiQ[3],c);if((ohiQ[0]&&ohiQ[3]>0&&ohiQ[6])&&(ohiQ[7]||!(ohiQ[7]=ohiQ[6])||!(ohiQ[6]=0))){ohiInsert(f,0,[ohiQ[0],ohiQ[1],0,ohiQ[3],ohiQ[4],0,ohiQ[6],0,0]);ohiInsert(f,ohiQ,ohiQ=[ohiQ[7],0,0,c,0,0,0,0,0])}
else if((!ohiQ[0]||ohiQ[3])&&(!ohiQ[4]||ohiQ[6])||ohiQ[3]<0)
ohiInsert(f,ohiQ,ohiQ=[0,0,0,c,0,0,0,0,0]);else if(ohiQ[3]=ohiQ[3]||c)
ohiInsert(f,0,ohiQ)}}
function NFD_hangeul2_preprocess(f,e,key){var layout_info=current_layout;if(typeof current_layout.old_hangeul_layout_type_name!='undefined')
layout_info=find_layout_info('Ko',current_layout.old_hangeul_layout_type_name);var layout=layout_info.layout;var combined_phoneme,backup_phoneme,backup_phoneme_R;var c=convert_into_unicode_hangeul_phoneme(layout[key-33]);if(unicode_cheos.indexOf(c)>=0){if(unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0){combined_phoneme=combine_unicode_NFD_hangeul_phoneme(NFD_stack.combined_phoneme[0],unicode_cheos_to_ggeut[unicode_cheos.indexOf(c)]);if(combined_phoneme){return unicode_cheos_to_ggeut[unicode_cheos.indexOf(c)]}
else{complete_hangeul_syllable(f);if(is_phonemic_writing_input()&&option.phonemic_writing_adding_space_every_syllable_end)
ohiInsert(f,0,32);if(!is_old_hangeul_input()&&!option.only_NFD_hangeul_encoding){c=convert_into_ohi_hangeul_phoneme(c)}
return c}}
else if(unicode_ga.indexOf(NFD_stack.phoneme[0])>=0||NFD_stack.phoneme[0]==0x1160){if(is_old_hangeul_input()||unicode_modern_hangeul_phoneme.indexOf(unicode_cheos_to_ggeut[unicode_cheos.indexOf(c)])>=0){c=unicode_cheos_to_ggeut[unicode_cheos.indexOf(c)];return c}}
else return c}
else if(unicode_ga.indexOf(c)>=0||c==0x1160){if(unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0){backup_phoneme=unicode_ggeut_to_cheos[unicode_ggeut.indexOf(NFD_stack.phoneme[0])];backup_phoneme_R=NFD_stack.phoneme_R[0];ohiHangeul_backspace(f,e);complete_hangeul_syllable(f);if(is_phonemic_writing_input()&&option.phonemic_writing_adding_space_every_syllable_end)
ohiInsert(f,0,32);if(!is_old_hangeul_input()&&!option.only_NFD_hangeul_encoding&&unicode_modern_hangeul_phoneme.indexOf(backup_phoneme)>=0&&unicode_modern_hangeul_phoneme.indexOf(c)>=0){ohiInsert(f,0,ohiQ=[convert_into_ohi_hangeul_phoneme(backup_phoneme)-127,0,0,0,0,0,0,0,0]);c=convert_into_ohi_hangeul_phoneme(c)}
else{NFD_hangeul_input(f,key,backup_phoneme);NFD_stack.phoneme_R[0]=backup_phoneme_R}}
if(!is_old_hangeul_input()&&!option.only_NFD_hangeul_encoding){if(unicode_ga.indexOf(NFD_stack.phoneme[0])>=0&&!combine_unicode_NFD_hangeul_phoneme(NFD_stack.combined_phoneme[0],c)){complete_hangeul_syllable(f);c=convert_into_ohi_hangeul_phoneme(c)}}
return c}
return c}
function seek_ieochigi_abbreviation(abbreviation_table,c1,c2){var i,chars=null;for(i=0;i<abbreviation_table.length;++i)
if(abbreviation_table[i].phonemes[0]==convert_into_unicode_hangeul_phoneme(c1)&&abbreviation_table[i].phonemes[1]==convert_into_unicode_hangeul_phoneme(c2))
return abbreviation_table[i].chars;return null}
function seek_moachigi_abbreviation(abbreviation_table){var i,j,l=[];for(i=0;i<abbreviation_table.length;++i){if(double_multikey_abbreviated_state){if(typeof abbreviation_table[i].prev_keys!='undefined'&&abbreviation_table[i].prev_keys.length)
continue}
if(pressed_keys.length!=abbreviation_table[i].keys.length)
continue;for(j=0;j<abbreviation_table[i].keys.length;++j)
if(pressed_keys.indexOf(abbreviation_table[i].keys[j].charCodeAt(0))<0)
break;if(j!=abbreviation_table[i].keys.length)
continue;if(abbreviation_table[i].keys.length==1&&abbreviation_table[i].keys[0]<0)
return abbreviation_table[i].chars;if(typeof abbreviation_table[i].prev_class!='undefined'&&abbreviation_table[i].prev_class.length){if(prev_class.length){for(j=0;j<abbreviation_table[i].prev_class.length;++j)
if(prev_class.indexOf(abbreviation_table[i].prev_class[j])>=0)
break;if(j!=abbreviation_table[i].prev_class.length){prev_class=typeof abbreviation_table[i]["class"]!='undefined'?abbreviation_table[i]["class"].slice():[];prev_pressed_keys=[];backup_prev_cursor_position=prev_cursor_position;prev_cursor_position=-1;return abbreviation_table[i].chars}
else continue}
else continue}
if(typeof abbreviation_table[i].prev_keys=='undefined'||!abbreviation_table[i].prev_keys.length){if(double_multikey_abbreviated_state){double_multikey_abbreviated_state=0;return abbreviation_table[i].chars}
if(!prev_pressed_keys.length){prev_class=typeof abbreviation_table[i]["class"]!='undefined'?abbreviation_table[i]["class"].slice():[];return abbreviation_table[i].chars}}
if(!prev_pressed_keys.length&&typeof abbreviation_table[i].prev_keys!='undefined'&&abbreviation_table[i].prev_keys.length)
continue;if(prev_pressed_keys.length&&typeof abbreviation_table[i].prev_keys!='undefined'){if(prev_pressed_keys.length==abbreviation_table[i].prev_keys.length){for(j=0;j<prev_pressed_keys.length;++j)
if(prev_pressed_keys.indexOf(abbreviation_table[i].prev_keys[j].charCodeAt(0))<0)
break;if(j==prev_pressed_keys.length){prev_class=typeof abbreviation_table[i]["class"]!='undefined'?abbreviation_table[i]["class"].slice():[];prev_pressed_keys=[];double_multikey_abbreviated_state=1;return abbreviation_table[i].chars}}}
l.push(i)}
if(l.length){prev_class=typeof abbreviation_table[l[0]]["class"]!='undefined'?abbreviation_table[l[0]]["class"].slice():[];return abbreviation_table[l[0]].chars}
else return[]}
function ohiHangeul3_abbreviation(f,e,key){if(!option.abbreviation||typeof current_layout.ieochigi_hangeul_abbreviation_table=='undefined')
return 0;var i,j;var c=current_layout.layout[key-33];var ch,chars;var ieochigi_hangeul_abbreviation_table=null;abbreviation_table=current_layout.ieochigi_hangeul_abbreviation_table;if(!abbreviation_table||!abbreviation_table.length)
return 0;if(!NFD_stack.phoneme.length){if(ohiQ[6])
ch=ohiQ[6]+ohiQ[7];else if(ohiQ[3])
ch=ohiQ[3]+ohiQ[4]+35;else if(ohiQ[0])
ch=ohiQ[0]+ohiQ[1]+127;chars=seek_ieochigi_abbreviation(abbreviation_table,convert_into_unicode_hangeul_phoneme(ch),convert_into_unicode_hangeul_phoneme(c));if(chars){if(!is_phonemic_writing_input())
ohiBackspace(f);else{complete_hangeul_syllable(f);ohiBackspace(f)}
insert_chars(f,chars);return 1}}
return 0}
function ohiHangeul3(f,e,key){var i,j,c1=0,c2=0;var layout=current_layout.layout;var sublayout=null;var extended_sign_layout=null;if(is_old_hangeul_input()&&typeof current_layout.old_hangeul_layout_type_name!='undefined')
layout=find_layout_info('Ko',current_layout.old_hangeul_layout_type_name).layout;if(!abbreviation_processing_state){if(typeof current_layout.sublayout!='undefined')
sublayout=current_layout.sublayout;if(typeof current_layout.extended_sign_layout!='undefined')
extended_sign_layout=current_layout.extended_sign_layout;prev_cursor_position=-1}
if(unicode_cheos.indexOf(key)>=0||unicode_ga.indexOf(key)>=0||unicode_ggeut.indexOf(key)>=0){c1=key}
else if(layout){c1=layout[key-33]==0x1B?0:layout[key-33];c2=layout[shift_table[key-33]-33]==0x1B?0:layout[shift_table[key-33]-33]}
if((c1>64&&c1<91||c1>96&&c1<123)&&!(option.enable_sign_ext&&sign_ext_state&&extended_sign_layout)){if(NFD_stack.phoneme.length)
complete_hangeul_syllable(f);ohiInsert(f,0,c1);return c1}
if(!is_old_hangeul_input()&&!option.only_NFD_hangeul_encoding){c1=convert_into_ohi_hangeul_phoneme(c1);c2=convert_into_ohi_hangeul_phoneme(c2)}
if(!abbreviation_processing_state||is_moachigi_input()){if(Ko_type.substr(0,1)=='3'){if(sign_layout_input(f,e,key))
return 0;if(c1<0)
return 0}
if(is_old_hangeul_input()||option.only_NFD_hangeul_encoding){if(Ko_type.substr(0,5)=='Sin3-'){c1=NFD_Sin3_preprocess(f,e,key);if(c1==-1)
return 0}
if(c1){NFD_hangeul_input(f,key,c1);return 0}}
if(Ko_type.substr(0,5)=='Sin3-'){c1=NFC_Sin3_preprocess(f,e,key);if(c1==-1)
return 0}
else if(Ko_type.substr(1,2)=='t-'){c1=hangeul_typewriter(f,key);if(c1<=0)
return 0}
if(!is_old_hangeul_input()&&(ohiQ[3]==86-35)&&!ohiQ[4]&&!ohiQ[6]&&!with_shift_key(key)&&c1==67&&c2==69){ohiQ[4]=ohiQ[3]-68;ohiInsert(f,0,ohiQ);return 1}
if(Ko_type.substr(0,5)!='Sin3-'&&is_galmadeuli_input()){c1=hangeul_Gong3_gm(f,key);if(c1<0)
return 0}
if(!is_old_hangeul_input()&&Ko_type.substr(1,2)!='t-'&&!is_moachigi_input()&&(typeof current_layout.hangeul_combination_table!='undefined'||typeof current_layout.moachigi_hangeul_combination_table!='undefined'||typeof current_layout.hangeul_convenience_combination_table!='undefined')){var ch;if(ohiQ[6])
ch=ohiQ[6]+ohiQ[7];else if(ohiQ[3])
ch=ohiQ[3]+ohiQ[4]+35;else if(ohiQ[0])
ch=ohiQ[0]+ohiQ[1]+127;ch=combine_unicode_NFD_hangeul_phoneme(convert_into_unicode_hangeul_phoneme(ch),convert_into_unicode_hangeul_phoneme(c1));if(ch){if(ohiQ[6]){if(!ohiQ[7])
ohiQ[7]=convert_into_ohi_hangeul_phoneme(ch)-ohiQ[6];else{ohiQ[8]=convert_into_ohi_hangeul_phoneme(ch)-(ohiQ[6]+ohiQ[7])}}
else if(ohiQ[3]){if(!ohiQ[4])
ohiQ[4]=convert_into_ohi_hangeul_phoneme(ch)-ohiQ[3]-35;else{ohiQ[5]=convert_into_ohi_hangeul_phoneme(ch)-(ohiQ[3]+ohiQ[4])-35}}
else{if(!ohiQ[1])
ohiQ[1]=convert_into_ohi_hangeul_phoneme(ch)-ohiQ[0]-127;else{ohiQ[2]=convert_into_ohi_hangeul_phoneme(ch)-(ohiQ[0]+ohiQ[1])-127}}
ohiInsert(f,0,ohiQ);return ch}}
if(Ko_type.substr(0,2)=='3-'&&Ko_type!='3-sun1990'&&Ko_type!='3-91_noshift'){if(key==0x5B&&((ohiQ[0]&&!ohiQ[3]&&!ohiQ[6]||unicode_cheos.indexOf(NFD_stack.combined_phoneme[0])>=0)||NFD_stack.combined_phoneme[0]==0x119E)){c1=0x119E}}
if(Ko_type=='3-91_noshift'){if(key==0x5B&&((ohiQ[0]&&ohiQ[3]&&!ohiQ[6]||unicode_ga.indexOf(NFD_stack.combined_phoneme[0])>=0))){c1=0x11ff}}}
if(!c1){complete_hangeul_syllable(f);return}
if(!is_old_hangeul_input()&&(unicode_NFD_hangeul_phoneme.indexOf(convert_into_unicode_hangeul_phoneme(c1))>=0||NFD_stack.phoneme.length)){if(!NFD_stack.phoneme.length&&unicode_NFD_hangeul_phoneme.indexOf(c1)>=0){var unicode_phoneme_list=[unicode_cheos,unicode_ga,unicode_ggeut];for(i=0;i<3;++i){if(unicode_phoneme_list[i].indexOf(c1)>=0){if(!ohiQ[i*3])
ohiQ[i*3]=c1;else if(!combine_unicode_NFD_hangeul_phoneme(convert_into_unicode_hangeul_phoneme(ohiQ[i*3]+ohiQ[i*3+1]),convert_into_unicode_hangeul_phoneme(c1))){complete_hangeul_syllable(f);ohiQ[i*3]=c1}
else if(!ohiQ[i*3+1])
ohiQ[i*3+1]=c1-ohiQ[i*3];else if(!ohiQ[i*3+2])
ohiQ[i*3+2]=c1-ohiQ[i*3]-ohiQ[i*3+1];ohiInsert(f,0,ohiQ);break}}
return 0}
if(!combine_unicode_NFD_hangeul_phoneme(NFD_stack.combined_phoneme[0],convert_into_unicode_hangeul_phoneme(c1))){if((unicode_ga.indexOf(NFD_stack.phoneme[0])>=0||unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0)&&(unicode_cheos.indexOf(convert_into_unicode_hangeul_phoneme(c1))>=0||unicode_ga.indexOf(convert_into_unicode_hangeul_phoneme(c1))>=0)){complete_hangeul_syllable(f);if(unicode_modern_hangeul_phoneme.indexOf(convert_into_unicode_hangeul_phoneme(c1))<0){ohiInsert(f,0,ohiQ=[unicode_cheos.indexOf(c1)>=0?c1:0,0,0,unicode_ga.indexOf(c1)>=0?c1:0,0,0,0,0,0]);return 1}}
else if(unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0&&unicode_ggeut.indexOf(convert_into_unicode_hangeul_phoneme(c1))>=0){complete_hangeul_syllable(f)}}}
if(!NFD_stack.phoneme.length&&c1>127&&c1<158&&c1!=147){if(NFD_stack.phoneme.length)
ohiSelection(f,0);i=ohiQ[1]||ohiQ[3]||!ohiDoubleJamo(0,ohiQ[0],c1-127);if(!i)
ohiQ=0;ohiInsert(f,i,ohiQ=[c1-127,ohiQ?0:1,0,0,0,0,0,0,0]);return i}
else if(!NFD_stack.phoneme.length&&c1>65&&c1<87){if((!ohiQ[4]||!(ohiQ[3]=-1))&&!(Ko_type.substr(1,2)=='t-'&&ohiRQ[3]+ohiRQ[4]>1)){ohiQ[4]=ohiDoubleJamo(1,ohiQ[3],c1-35);i=1}
else i=0;if((!ohiQ[0]||ohiQ[3])&&(!ohiQ[4]||ohiQ[6])||ohiQ[3]<0){ohiInsert(f,ohiQ,ohiQ=[0,0,0,c1-35,0,0,0,0,0]);i=0}
else if(ohiQ[3]=ohiQ[3]||c1-35){ohiInsert(f,0,ohiQ);i=1}
return i}
else if(!NFD_stack.phoneme.length&&c1<31){i=0;if(!current_layout.hangeul_combination_table&&(!ohiQ[7]||!(ohiQ[6]=-1))){ohiQ[7]=ohiDoubleJamo(2,ohiQ[6],c1);if(ohiQ[7])
i=1}
if(!ohiQ[0]||!ohiQ[3]||ohiQ[6]&&!ohiQ[7]||ohiQ[6]<0||(Ko_type.substr(0,3)=='4t-'&&ohiRQ[3]+ohiRQ[4]>0)){ohiInsert(f,ohiQ,ohiQ=[0,0,0,0,0,0,c1,0,0]);i=0}
else if(ohiQ[6]=ohiQ[6]||c1){ohiInsert(f,0,ohiQ);i=1}
return i}
if(NFD_stack.phoneme.length)
NFD_hangeul_input(f,key,c1);else ohiInsert(f,0,c1);return 0}
function convert_syllable_into_phonemes(f){var c,i,j,k,chars=[];var single_phonemes=[],hangeul_conversion_function;if(!(ohiQ[0]+ohiQ[3]+ohiQ[6])&&!NFD_stack.phoneme.length)
return;var _ohiQ=ohiQ.slice();if(option.phonemic_writing_in_halfwidth_letter&&!is_old_hangeul_input())
hangeul_conversion_function=convert_into_halfwidth_hangeul_letter;else hangeul_conversion_function=convert_into_compatibility_hangeul_letter;if(is_old_hangeul_input()||option.only_NFD_hangeul_encoding||NFD_stack.phoneme.length&&!convert_NFD_into_NFC(NFD_stack.phoneme)){var _phoneme=NFD_stack.phoneme.slice();var _combined_phoneme=NFD_stack.combined_phoneme.slice();if(unicode_ggeut.indexOf(_combined_phoneme[0])>=0)
j=3;else if(unicode_ga.indexOf(_combined_phoneme[0])>=0||_combined_phoneme[0]==0x1160)
j=2;for(i=0;i<j;++i)
ohiBackspace(f);for(i=_combined_phoneme.length-1;i>=0;--i){if(option.phonemic_writing_initial_ieung_ellipsis&&_combined_phoneme[i]==0x110B)
continue;if(_combined_phoneme[i]==0x115F||_combined_phoneme[i]==0x1160)
continue;single_phonemes=[];if(option.only_NFD_hangeul_encoding&&!option.phonemic_writing_in_single_phoneme)
single_phonemes.push(_combined_phoneme[i]);else single_phonemes=convert_into_single_phonemes(_combined_phoneme[i]);for(j=0;j<single_phonemes.length;++j){if(option.only_NFD_hangeul_encoding)
NFD_hangeul_single_phoneme_syllable_input(f,single_phonemes[j]);else{c=hangeul_conversion_function(single_phonemes[j]);ohiInsert(f,0,c);if(single_phonemes.length==1&&unicode_NFD_hangeul_phoneme.indexOf(single_phonemes[0]>=0)&&unicode_cheos.indexOf(c)>=0)
ohiInsert(f,0,0x1160)}}
initialize_NFD_stack()}}
else if(!is_old_hangeul_input()&&ohiQ[0]+ohiQ[3]+ohiQ[6]){if(ohiQ[0]+ohiQ[3]+ohiQ[6]){ohiInsert(f,0,0);ohiBackspace(f)}
if(option.phonemic_writing_initial_ieung_ellipsis){if(_ohiQ[0]+_ohiQ[1]+_ohiQ[2]==23)
_ohiQ[0]=_ohiQ[1]=_ohiQ[2]=0}
for(i=0;i<3;++i){if(!_ohiQ[i*3])
continue;k=_ohiQ[i*3]+_ohiQ[i*3+1]+_ohiQ[i*3+2];c=k+(i==0?127:i==1?35:0);if(option.phonemic_writing_in_single_phoneme){single_phonemes=convert_into_single_phonemes(c);if(single_phonemes.length){for(j=0;j<single_phonemes.length;++j){if(option.only_NFD_hangeul_encoding)
NFD_hangeul_single_phoneme_syllable_input(f,single_phonemes[j]);else ohiInsert(f,0,hangeul_conversion_function(single_phonemes[j]))}
continue}}
c=0x3130+_ohiQ[i*3]+_ohiQ[i*3+1]+_ohiQ[i*3+2];if(option.phonemic_writing_in_halfwidth_letter)
c=convert_into_halfwidth_hangeul_letter(c);ohiInsert(f,0,c)}}}
function ohiHangeul3_moa(f,e){var i,j,k,l,m;var c;var layout=current_layout.layout;var extended_sign_layout;var combination_table;var pressed_chars=[];var temp_pressed_chars=[];var backup_prev_pressed_keys=[];var special_keys=[32,13,8];var chars=[];var cheos=[],ga=[],ggeut=[];var front_etc=[],rear_etc=[];var front_special=[],rear_special=[];var necessary_backspaces_cheos=0;var necessary_backspaces_ga=0;var necessary_backspaces_ggeut=0;var necessary_backspaces_sign=0;if(option.enable_sign_ext&&typeof current_layout.extended_sign_layout!='undefined'&&sign_ext_state){if(sign_layout_input(f,e,pressed_keys[0]))
pressed_keys.splice(0,1);if(pressed_keys.length>1)
esc_ext_layout()}
for(i=0;i<pressed_keys.length;++i){if(special_keys.indexOf(pressed_keys[i])>=0){if(!i)
front_special.push(pressed_keys[0]);else rear_special.push(pressed_keys[i]);pressed_keys.splice(i,1)}
else pressed_chars.push(convert_into_unicode_hangeul_phoneme(layout[pressed_keys[i]-33]))}
if(typeof current_layout.moachigi_multikey_abbreviation_table!='undefined'){combination_table=current_layout.moachigi_multikey_abbreviation_table;backup_prev_pressed_keys=prev_pressed_keys.slice();backup_prev_cursor_position=-1;chars=seek_moachigi_abbreviation(combination_table);if(chars.length==1&&combination_table[i].chars[0]<0&&combination_table[i].chars[0]>=-3){sign_layout_input(f,e,combination_table[i].chars[0]);return}
if(chars.length){if(backup_prev_pressed_keys.length&&!prev_pressed_keys.length&&prev_cursor_position>-1)
ohiHangeul_moa_backspace(f,e);insert_chars(f,chars);if(backup_prev_cursor_position>-1)
prev_cursor_position=backup_prev_cursor_position;return}}
if(typeof current_layout.moachigi_hangeul_abbreviation_table!='undefined'){combination_table=current_layout.moachigi_hangeul_abbreviation_table;for(i=0;i<combination_table.length;++i){if(pressed_chars.length!=combination_table[i].phonemes.length)
continue;for(j=0;j<combination_table[i].phonemes.length;++j){if(pressed_chars.indexOf(combination_table[i].phonemes[j])<0)
break}
if(j!=combination_table[i].phonemes.length)
continue;insert_chars(f,combination_table[i].chars);return}}
chars=[];if(typeof current_layout.moachigi_hangeul_combination_table!='undefined'){combination_table=current_layout.moachigi_hangeul_combination_table;for(i=0;i<combination_table.length;++i){temp_pressed_chars=pressed_chars.slice();for(j=0;j<combination_table[i].phonemes.length;++j){k=temp_pressed_chars.indexOf(combination_table[i].phonemes[j]);if(k<0)
break;temp_pressed_chars.splice(k,1)}
if(j!=combination_table[i].phonemes.length)
continue;chars.push(combination_table[i].char);for(j=0;j<combination_table[i].phonemes.length;++j){k=pressed_chars.indexOf(combination_table[i].phonemes[j]);pressed_keys.splice(k,1);pressed_chars.splice(k,1)}}}
for(i=0;i<pressed_keys.length;++i){if(special_keys.indexOf(pressed_keys[i])>=0)
c=pressed_keys[i];else c=convert_into_unicode_hangeul_phoneme(layout[pressed_keys[i]-33]);chars.push(c)}
for(i=0;i<front_special.length;++i){c=front_special[i];if(c==8){if(!ohiHangeul_moa_backspace(f,e))
continue;if(e.preventDefault)
e.preventDefault();ohiBackspace(f)}
else ohiInsert(f,0,c);if(c==13)
complete_hangeul_syllable(f)}
for(i=0;i<chars.length;++i){c=chars[i];if(!i&&special_keys.indexOf(c)>=0){special.push(c);continue}
if(unicode_cheos.indexOf(c)>=0)
cheos.push(c);else if(unicode_ga.indexOf(c)>=0)
ga.push(c);else if(unicode_ggeut.indexOf(c)>=0)
ggeut.push(c);else{if(!cheos.length&&!ga.length&&!ggeut.length)
front_etc.push(c);else rear_etc.push(c)}}
prev_cursor_position=-1;for(i=0;i<front_etc.length;++i)
ohiInsert(f,0,front_etc[i]);insert_chars(f,cheos.concat(ga,ggeut));for(i=0;i<rear_etc.length;++i){prev_cursor_position=-1;ohiInsert(f,0,rear_etc[i])}
for(i=0;i<rear_special.length;++i){c=rear_special[i];prev_cursor_position=-1;if(c==8){if(!ohiHangeul_moa_backspace(f,e))
continue;if(e.preventDefault)
e.preventDefault();ohiBackspace(f)}
else ohiInsert(f,0,c);if(c==13)
complete_hangeul_syllable(f)}
pressed_keys=[];return}
function insert_chars(f,combination_table_chars){if(typeof combination_table_chars=='undefined'||typeof combination_table_chars.length=='undefined')
return;var chars=combination_table_chars.slice();var a=[],h=0,i,j,k,l;abbreviation_processing_state=1;if(is_phonemic_writing_input()&&option.phonemic_writing_in_single_phoneme){for(i=0;i<chars.length;++i){a=convert_into_single_phonemes(chars[i]);if(a.length)
for(j=0;j<a.length;++j)
chars.splice(i+j,!j?1:0,a[j]);}}
for(i=0;i<chars.length;++i){a=convert_NFC_into_NFD(chars[i]);if(a.constructor==Array&&a.length==3&&a[0]+a[1]+a[2]){chars.splice(i,1,a[0],a[1]);if(a[2])
chars.splice(i+2,0,a[2])}}
if(chars.length){prev_cursor_position=f.selectionEnd;if(f.selectionStart!=f.selectionEnd&&is_phonemic_writing_input()){prev_cursor_position+=ohiQ[0]+ohiQ[3]+ohiQ[6]?1:0;if(NFD_stack.phoneme.length)
prev_cursor_position+=NFD_stack.combined_phoneme.length+(NFD_stack.combined_phoneme.length==3&&!option.phonemic_writing_NFD_ggeut_to_cheos?1:0)}
for(i=0;i<chars.length;++i){if(unicode_NFD_hangeul_phoneme.indexOf(chars[i])>=0)
ohiHangeul3(f,0,chars[i]);else ohiInsert(f,0,chars[i])}}
abbreviation_processing_state=0}
function sign_layout_input(f,e,key){var c,i,sign_layout,layout_info;if(is_old_hangeul_input()&&typeof current_layout.old_hangeul_layout_type_name!='undefined'){layout_info=find_layout_info('Ko',current_layout.old_hangeul_layout_type_name);if(layout_info&&typeof layout_info.extended_sign_layout!='undefined')
sign_layout=layout_info.extended_sign_layout}
else if(typeof current_layout.extended_sign_layout!='undefined')
sign_layout=current_layout.extended_sign_layout;if(!option.enable_sign_ext||sign_layout===undefined)
return 0;if(Ko_type.substr(0,3)=='3m-'){if(sign_ext_state>0){c=sign_layout[key-33][sign_ext_state-1];ohiInsert(f,0,c);esc_ext_layout();return 1}
else if(key<0&&key>-4){sign_ext_state=-key;show_keyboard_layout();return 0}
esc_ext_layout();return 0}
if(!is_old_hangeul_input()&&(Ko_type=='3-2011'||Ko_type=='3-2012')){if((key==118||key==56)&&(!NFD_stack.phoneme.length&&(!ohiQ[0]&&!ohiQ[3]||ohiQ[3])||NFD_stack.phoneme.length&&unicode_cheos.indexOf(NFD_stack.combined_phoneme[0])<0&&(unicode_ga.indexOf(NFD_stack.combined_phoneme[0])>=0||unicode_ggeut.indexOf(NFD_stack.combined_phoneme[0])>=0))){i=0;if(key==118&&!sign_layout[key-33][sign_ext_state%10-1]){if(sign_ext_state<10)
++sign_ext_state;else sign_ext_state+=2;i=1}
if(key==56&&!sign_layout[key-33][sign_ext_state%10-1]){if(!sign_ext_state)
sign_ext_state=10;if(sign_ext_state>=10)
++sign_ext_state;else sign_ext_state+=2;i=1}
if(i){if(sign_ext_state%10>3)
sign_ext_state=0;show_keyboard_layout(Ko_type);return 1}}
if(sign_ext_state){if(NFD_stack.phoneme.length)
complete_hangeul_syllable(f);c=sign_layout[key-33][sign_ext_state%10-1];ohiInsert(f,0,c);esc_ext_layout();return 1}}
if(!ohiHangeul3_HanExtKey&&(key==0x2F||key==0x39)&&(((!ohiQ[0]&&!ohiQ[3]||ohiQ[3]||ohiQ[0]&&(key==0x2F||key==0x39)&&sign_ext_state)&&((unicode_cheos.indexOf(NFD_stack.phoneme[0])<0&&unicode_ga.indexOf(NFD_stack.phoneme[0])<0&&unicode_ggeut.indexOf(NFD_stack.phoneme[0])<0)||unicode_ga.indexOf(NFD_stack.phoneme[0])>=0||unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0)))){if(ohiRQ[3]&&!ohiQ[4]&&!ohiQ[6]&&(ohiQ[3]==39||ohiQ[3]==44)){ohiRQ[3]=0;ohiHangeul_backspace(f,e)}
var i,j,k,l,sign_layout_depth=[0,0];if(sign_layout[0].constructor==Array){for(i=0;i<sign_layout.length;++i){for(j=0;j<2;++j){if(sign_layout[i][j].constructor!=Array)
continue;for(k=sign_layout_depth[j];k<sign_layout[i][j].length;++k)
if(sign_layout[i][j][k]&&k+1>sign_layout_depth[j])
sign_layout_depth[j]=k+1}}}
if(key==0x2F&&sign_ext_state%10<sign_layout_depth[0]){if(sign_ext_state>10)
esc_ext_layout();++sign_ext_state;if(sign_ext_state>sign_layout_depth[0])
esc_ext_layout();else show_keyboard_layout(Ko_type);return 1}
if(key==0x39&&sign_ext_state%10<sign_layout_depth[1]){if(sign_ext_state<11){esc_ext_layout();sign_ext_state=10}
++sign_ext_state;if(sign_ext_state%10>sign_layout_depth[1])
esc_ext_layout();else show_keyboard_layout(Ko_type);return 1}}
if(sign_ext_state){if(sign_layout[key-33].constructor==Array){if(sign_ext_state<11)
c=sign_layout[key-33][0][sign_ext_state-1];if(sign_ext_state>10)
c=sign_layout[key-33][1][sign_ext_state%10-1]}
else c=sign_layout[key-33];if(NFD_stack.phoneme.length&&key!=8&&unicode_NFD_hangeul_sidedot.indexOf(c)<0)
complete_hangeul_syllable(f);ohiInsert(f,0,c);esc_ext_layout();return 1}
return 0}
function NFD_hangeul_input(f,key,c){if(c==0x1160&&NFD_stack.phoneme[0]==0x1160)
return;if(unicode_NFD_hangeul_sidedot.indexOf(c)>=0){ohiInsert(f,0,c);return}
ohiSelection(f,0);var diphthong=0;if(c<0){c=-c;diphthong=1}
var type_name='';if(typeof current_layout.type_name!='undefined')
type_name=current_layout.type_name;else if(is_old_hangeul_input()&&typeof current_layout.old_hangeul_layout_type_name!='undefined')
type_name=current_layout.old_hangeul_layout_type_name;if(!is_old_hangeul_input()&&!option.only_NFD_hangeul_encoding)
c=convert_into_unicode_hangeul_phoneme(c);if(is_old_hangeul_input()&&Ko_type.substr(0,2)=='3-'&&Number(type_name.substr(2,4))>=2011&&Number(type_name.substr(2,4))<=2014&&Ko_type!='3-2015'){if(key==55||c==0x1168){if(ohiHangeul3_HanExtKey%0x10==2||ohiHangeul3_HanExtKey==0x11){esc_ext_layout();complete_hangeul_syllable(f);return!1}
if(ohiHangeul3_HanExtKey>0x10){esc_ext_layout();return!1}
ohiHangeul3_HanExtKey=(ohiHangeul3_HanExtKey&&ohiHangeul3_HanExtKey)*0x10+1;show_keyboard_layout('3-2012y_han_ext');return!1}
else if(key==56||c==0x1174){if(ohiHangeul3_HanExtKey%0x10==1||ohiHangeul3_HanExtKey==0x12){esc_ext_layout();complete_hangeul_syllable(f);return!1}
if(ohiHangeul3_HanExtKey>0x10){esc_ext_layout();return!1}
ohiHangeul3_HanExtKey=(ohiHangeul3_HanExtKey&&ohiHangeul3_HanExtKey)*0x10+2;show_keyboard_layout('3-2012y_han_ext');return!1}
if(ohiHangeul3_HanExtKey){layout=K3_2012y_extended_hangeul_layout;c=layout[key-33][ohiHangeul3_HanExtKey%0x10-1][ohiHangeul3_HanExtKey/0x10];c=layout[key-33][ohiHangeul3_HanExtKey%0x10-1][ohiHangeul3_HanExtKey>0x10?1:0]}}
if(Ko_type.substr(0,2)=='3-'&&key==0x5B&&unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0&&!ohiHangeul3_HanExtKey)
c=0x119E;if(NFD_stack.phoneme[0]!=0x1160&&NFD_stack.combined_phoneme[0]==0x1160&&unicode_cheos.indexOf(NFD_stack.combined_phoneme[1])>=0&&(unicode_NFD_hangeul_phoneme.indexOf(c)>=0||c==0x1160)){ohiBackspace(f);NFD_stack.combined_phoneme.splice(0,1)}
if(c==0x1160){if(unicode_ga.indexOf(NFD_stack.phoneme[0])>=0||NFD_stack.phoneme[0]==0x1160){complete_hangeul_syllable(f);if(is_phonemic_writing_input()&&option.phonemic_writing_adding_space_every_syllable_end)
ohiInsert(f,0,32)}
if(!NFD_stack.phoneme.length){NFD_stack.combined_phoneme.unshift(0x115F);ohiInsert(f,0,0x115F)}
if(NFD_stack.combined_phoneme[0]!=0x1160){NFD_stack.phoneme.unshift(c);NFD_stack.phoneme_R.unshift(0);NFD_stack.combined_phoneme.unshift(0x1160);ohiInsert(f,0,0x1160)}
ohiSelection(f,NFD_stack.combined_phoneme.length);return}
var combination_table=hangeul_combination_table_full;if(typeof current_layout.hangeul_combination_table!='undefined')
combination_table=current_layout.hangeul_combination_table;var combined_phoneme=combine_unicode_NFD_hangeul_phoneme(NFD_stack.combined_phoneme[0],c);if(!combined_phoneme&&unicode_cheos.indexOf(c)>=0||unicode_NFD_hangeul_code.indexOf(c)<0){if(unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0&&NFD_stack.combined_phoneme.indexOf(0x1160)<0){ohiInsert(f,0,0x1160);NFD_stack.combined_phoneme.unshift(0x1160)}
i=unicode_NFD_hangeul_code.indexOf(c)>=0&&NFD_stack.phoneme.length?1:0;complete_hangeul_syllable(f);if(i&&is_phonemic_writing_input()&&option.phonemic_writing_adding_space_every_syllable_end)
ohiInsert(f,0,32)}
if(!combined_phoneme&&unicode_ga.indexOf(c)>=0&&unicode_cheos.indexOf(NFD_stack.phoneme[0])<0){i=unicode_NFD_hangeul_code.indexOf(c)>=0&&NFD_stack.phoneme.length?1:0;complete_hangeul_syllable(f);if(i&&option.phonemic_writing_adding_space_every_syllable_end&&is_phonemic_writing_input())
ohiInsert(f,0,32);ohiInsert(f,0,0x115F);NFD_stack.combined_phoneme=[];NFD_stack.combined_phoneme.unshift(0x115F)}
else if(!combined_phoneme&&unicode_ggeut.indexOf(c)>=0){if(!is_old_hangeul_input()&&!option.only_NFD_hangeul_encoding&&NFD_stack.combined_phoneme.length==2&&unicode_ga.indexOf(NFD_stack.combined_phoneme[0])>=0&&unicode_cheos.indexOf(NFD_stack.combined_phoneme[1])<0){complete_hangeul_syllable(f);ohiInsert(f,0,ohiQ=[convert_into_ohi_hangeul_phoneme(c),0,0,0,0,0,0,0,0]);return}
if(unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0&&NFD_stack.combined_phoneme.indexOf(0x1160)<0){ohiInsert(f,0,0x1160);NFD_stack.combined_phoneme.unshift(0x1160)}
else if(unicode_cheos.indexOf(NFD_stack.phoneme[0])<0&&unicode_ga.indexOf(NFD_stack.phoneme[0])<0&&NFD_stack.combined_phoneme.indexOf(0x115F)<0&&NFD_stack.combined_phoneme.indexOf(0x1160)<0){i=unicode_NFD_hangeul_code.indexOf(c)>=0&&NFD_stack.phoneme.length?1:0;complete_hangeul_syllable(f);if(i&&is_phonemic_writing_input()&&option.phonemic_writing_adding_space_every_syllable_end)
ohiInsert(f,0,32);ohiInsert(f,0,0x115F);ohiInsert(f,0,0x1160);NFD_stack.combined_phoneme.unshift(0x1160,0x115F)}}
NFD_stack.phoneme.unshift(c);NFD_stack.phoneme_R.unshift(diphthong);if(combined_phoneme){NFD_stack.combined_phoneme[0]=combined_phoneme;ohiBackspace(f);ohiInsert(f,0,combined_phoneme)}
else{if(unicode_ggeut.indexOf(c)>=0&&unicode_ggeut.indexOf(NFD_stack.combined_phoneme[0])>=0){complete_hangeul_syllable(f);ohiInsert(f,0,0x115F);ohiInsert(f,0,0x1160);NFD_stack.combined_phoneme.unshift(0x1160,0x115F)}
NFD_stack.combined_phoneme.unshift(c);ohiInsert(f,0,c)}
if(unicode_cheos.indexOf(c)>=0){ohiInsert(f,0,0x1160);NFD_stack.combined_phoneme.unshift(0x1160)}
esc_ext_layout();if(NFD_stack.combined_phoneme.length&&unicode_NFD_hangeul_phoneme.indexOf(c)>=0){ohiSelection(f,NFD_stack.combined_phoneme.length)}}
function NFD_hangeul_single_phoneme_syllable_input(f,c){var a=[],i;c=convert_into_unicode_hangeul_phoneme(c);if(is_phonemic_writing_input()&&option.only_NFD_hangeul_encoding&&option.phonemic_writing_in_single_phoneme&&option.phonemic_writing_NFD_ggeut_to_cheos){if(unicode_ggeut.indexOf(c)>=0){a=convert_into_single_phonemes(c);if(a.length>1)
for(i=0;i<a.length;++i)
NFD_hangeul_single_phoneme_syllable_input(f,a[i]);else c=unicode_ggeut_to_cheos[unicode_ggeut.indexOf(c)]}}
if(unicode_cheos.indexOf(c)>=0)
ohiInsert(f,0,c);else if(unicode_ga.indexOf(c)>=0||unicode_ggeut.indexOf(c)>=0)
ohiInsert(f,0,0x115F);if(unicode_ga.indexOf(c)>=0)
ohiInsert(f,0,c);else if(unicode_cheos.indexOf(c)>=0||unicode_ggeut.indexOf(c)>=0)
ohiInsert(f,0,0x1160);if(unicode_ggeut.indexOf(c)>=0)
ohiInsert(f,0,c);initialize_NFD_stack()}
function NFC_Sin3_preprocess(f,e,key){var _a;var i,j,c1,c2;var Sin3_layout=current_layout.layout;var Sin3_sublayout=typeof current_layout.sublayout!='undefined'?current_layout.sublayout:null;var Sin3_extended_sign_layout=typeof current_layout.extended_sign_layout!='undefined'?current_layout.extended_sign_layout:null;var transform=0;c1=convert_into_ohi_hangeul_phoneme(Sin3_layout[key-33]);c2=convert_into_ohi_hangeul_phoneme(Sin3_layout[shift_table[key-33]-33]);if(!with_shift_key(key)&&ohi_ga.indexOf(c1)>=0&&(NFD_stack.phoneme.length||ohiQ[0]&&!ohiQ[3]&&!ohiQ[6]||ohiQ[0]&&ohiQ[3]&&!ohiQ[6]||ohiQ[0]&&ohiQ[3]&&ohiQ[6]&&!ohiQ[7])){transform=1;_a=[c2,c1],c1=_a[0],c2=_a[1]}
if(option.enable_sign_ext&&sign_ext_state&&Sin3_extended_sign_layout){c1=Sin3_extended_sign_layout[key-33][sign_ext_state-1];ohiBackspace(f);ohiInsert(f,0,c1);esc_ext_layout();return-1}
else if(option.enable_sign_ext&&!sign_ext_state&&Sin3_extended_sign_layout&&ohiQ[0]==150-92-35&&(c1==128||c1==151||c1==145)&&!ohiQ[3]&&!ohiQ[6]){if(c1==128)
sign_ext_state=1;else if(c1==151)
sign_ext_state=2;else if(c1==145)
sign_ext_state=3;show_keyboard_layout('Sin3-ext');return-1}
else if(c2<31&&with_shift_key(key)&&!ohiQ[0]&&!ohiQ[3]&&ohiQ[6]&&!ohiQ[7]&&ohiDoubleJamo(2,ohiQ[6],c2)){ohiQ[7]=ohiDoubleJamo(2,ohiQ[6],c2);ohiInsert(f,0,ohiQ);return-1}
else if(option.enable_double_final_ext&&Sin3_sublayout&&with_shift_key(key)&&Sin3_sublayout[key-33]&&Sin3_sublayout[key-33]&&(ohiQ[0]||NFD_stack.phoneme.length&&unicode_cheos.indexOf(NFD_stack.phoneme[NFD_stack.phoneme.length-1])>=0)&&(ohiQ[3]&&!ohiQ[6]||with_shift_key(key)&&NFD_stack.phoneme.length&&unicode_ga.indexOf(NFD_stack.phoneme[0])>=0)){c1=convert_into_ohi_hangeul_phoneme(Sin3_sublayout[key-33])}
else if(!with_shift_key(key)&&ohiQ[0]&&!ohiQ[3]&&unicode_cheos.indexOf(convert_into_unicode_hangeul_phoneme(c1))>=0&&unicode_ga.indexOf(convert_into_unicode_hangeul_phoneme(c2))>=0){c1=c2;ohiRQ[3]=1}
else if(!with_shift_key(key)&&ohiQ[0]&&!ohiQ[3]&&Sin3_sublayout&&unicode_ga.indexOf(convert_into_unicode_hangeul_phoneme(Sin3_sublayout[key-33]))>=0){c1=convert_into_ohi_hangeul_phoneme(Sin3_sublayout[key-33]);ohiRQ[3]=1}
else if(key==47&&ohiQ[0]&&!ohiQ[3]){c1=74;ohiRQ[3]=1}
else if(!ohiQ[3]&&(key==79||key==80||key==73)&&(c1==79||c1==74||c1==84||c1==0x119E)){ohiRQ[3]=1}
else if((ohiRQ[3]||backup_ohiRQ[3])&&c1<31&&NFD_stack.phoneme[0]==0x119E&&!(NFD_stack.phoneme.length>1&&(unicode_ga.indexOf(NFD_stack.phoneme[1])>=0||unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0))){if(key==100)
c1=0x1175;else if(key==122&&NFD_stack.phoneme[1]!=0x119E)
c1=0x119E;NFD_hangeul_input(f,key,c1);return-1}
else if(NFD_stack.phoneme.length&&c1<31&&unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0){if(unicode_ggeut.indexOf(NFD_stack.phoneme[1])<0){if(option.enable_double_final_ext&&NFD_stack.phoneme[0]==convert_into_unicode_hangeul_phoneme(c1)){c1=convert_into_unicode_hangeul_phoneme(c1);NFD_stack.phoneme.unshift(c1);NFD_stack.phoneme_R.unshift(0);NFD_stack.combined_phoneme[0]=convert_into_unicode_hangeul_phoneme(Sin3_sublayout[key-33]);ohiSelection(f,0);ohiBackspace(f);ohiInsert(f,0,convert_into_unicode_hangeul_phoneme(Sin3_sublayout[key-33]));ohiSelection(f,NFD_stack.combined_phoneme.length);return-1}}}
else if(ohiRQ[3]&&c1<31&&(ohiQ[3]==74-35||ohiQ[3]==79-35||ohiQ[3]==84-35)&&!ohiQ[4]){if(ohiQ[3]+35==74&&(c2==66||c2==67||c2==86)){c1=c2}
else if(ohiQ[3]+35==79&&(c2==70||c2==71||c2==86)){c1=c2}
else if(ohiQ[3]+35==84&&c2==86){c1=c2}}
else if(c1<31&&ohiQ[0]&&!ohiQ[3]&&!ohiQ[6]&&(c2>65&&c2<87||key==122)){c1=c2;if(key==122&&(c2==0x119E||c2>157))
c1=0x119E;ohiRQ[3]=0}
else if(option.enable_double_final_ext&&Sin3_sublayout&&!ohiRQ[3]&&ohiQ[0]&&ohiQ[3]&&ohiQ[6]&&!ohiQ[7]&&c1==ohiQ[6]&&(c2=convert_into_ohi_hangeul_phoneme(Sin3_sublayout[key-33]))){ohiQ[7]=c2-ohiQ[6];ohiInsert(f,0,ohiQ);return-1}
else if(transform&&c1<31&&ohiQ[6]&&!ohiQ[7]){i=combine_unicode_NFD_hangeul_phoneme(convert_into_unicode_hangeul_phoneme(ohiQ[6]),convert_into_unicode_hangeul_phoneme(c1));if(!i)
c1=c2}
return c1}
function NFD_Sin3_preprocess(f,e,key){var i,j,c1,c2;var Sin3_layout=current_layout.layout;var Sin3_sublayout=typeof current_layout.sublayout!='undefined'?current_layout.sublayout:null;var Sin3_extended_sign_layout=typeof current_layout.extended_sign_layout!='undefined'?current_layout.extended_sign_layout:null;if(typeof current_layout.old_hangeul_layout_type_name!='undefined'){Sin3_layout=find_layout_info('Ko',current_layout.old_hangeul_layout_type_name).layout}
c1=convert_into_unicode_hangeul_phoneme(Sin3_layout[key-33]);c2=convert_into_unicode_hangeul_phoneme(Sin3_layout[shift_table[key-33]-33]);if(option.enable_sign_ext&&sign_ext_state){c1=Sin3_extended_sign_layout[key-33][sign_ext_state-1];ohiBackspace(f);ohiInsert(f,0,c1);esc_ext_layout();initialize_NFD_stack();return-1}
else if(option.enable_sign_ext&&!sign_ext_state&&NFD_stack.phoneme.length==1&&NFD_stack.phoneme[0]==0x110B&&(c1==0x1100||c1==0x110C||c1==0x1107)){if(c1==0x1100)
sign_ext_state=1;else if(c1==0x110C)
sign_ext_state=2;else if(c1==0x1107)
sign_ext_state=3;show_keyboard_layout('Sin3-ext');return-1}
else if(option.enable_Sin3_diphthong_key&&!with_shift_key(key)&&NFD_stack.phoneme.length&&unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0&&unicode_cheos.indexOf(c1)>=0&&unicode_ga.indexOf(c2)>=0){c1=-c2}
else if(option.enable_Sin3_diphthong_key&&!with_shift_key(key)&&NFD_stack.phoneme.length&&unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0&&Sin3_sublayout&&unicode_ga.indexOf(Sin3_sublayout[key-33])>=0){c1=-Sin3_sublayout[key-33]}
else if(with_shift_key(key)&&NFD_stack.phoneme.length&&unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0&&unicode_ga.indexOf(c1)>=0&&unicode_ggeut.indexOf(c2)>=0){c1=c2}
else if(option.enable_Sin3_adding_cheos_with_shift_key&&(with_shift_key(key)||!c1)&&NFD_stack.phoneme.length&&unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0&&unicode_cheos.indexOf(c2)>=0&&(unicode_ga.indexOf(c1)>=0||unicode_ga.indexOf(Sin3_sublayout[shift_table[key-33]-33])>=0)){c1=c2}
else if(option.enable_Sin3_diphthong_key&&key==47&&NFD_stack.phoneme.length&&unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0){c1=-0x1169}
else if((!NFD_stack.phoneme.length||unicode_ga.indexOf(NFD_stack.phoneme[0])<0)&&(key==79||key==80||key==73)&&(c1==0x1169||c1==0x116E||c1==0x1173||c1==0x119E)){c1=-c1}
else if(NFD_stack.phoneme_R[0]&&unicode_ga.indexOf(c2)>=0){c1=c2}
else if(unicode_ggeut.indexOf(c1)>=0&&unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0&&(unicode_ga.indexOf(c2)>=0||key==122)){c1=c2;if(key==122&&(c2==0x119E||unicode_NFD_hangeul_phoneme.indexOf(c2)<0))
c1=0x119E}
return c1}
function hangeul_Gong3_gm(f,key){var c1,c2;var layout=current_layout.layout;var sublayout=typeof current_layout.sublayout!='undefined'?current_layout.sublayout:null;c1=convert_into_ohi_hangeul_phoneme(layout[key-33]);c2=convert_into_ohi_hangeul_phoneme(layout[key-33-32]);if(!ohiQ[3])
ohiRQ[3]=0;if(ohiQ[3]==c1-35&&!ohiQ[4]&&!ohiQ[6]&&c2>65&&c2<87&&c1!=c2){ohiQ[4]=(c2-35)-ohiQ[3];ohiInsert(f,0,ohiQ);return-1}
if(!ohiRQ[3]&&ohiQ[0]&&!ohiQ[3]&&(key==0x2F&&c1==74||key==0x39&&c1==79||key==0x38&&c1==84)){ohiRQ[3]=key}
else if(with_shift_key(key)&&(NFD_stack.phoneme.length&&unicode_ga.indexOf(NFD_stack.phoneme[0])>=0||ohiQ[0]&&ohiQ[3]&&!ohiQ[6])&&(c1<31||unicode_ggeut.indexOf(sublayout[key-33])>=0)&&sublayout&&sublayout[key-33]){if(option.enable_double_final_ext)
c1=convert_into_ohi_hangeul_phoneme(sublayout[key-33]);else if(Ko_type=='3-18Na')
c1=convert_into_ohi_hangeul_phoneme(sublayout[key-33])}
else if(ohiRQ[3]&&!ohiQ[6]){if(ohiQ[3]+ohiQ[4]+35==74&&(c1==66||c1==67||c1==86)){}
else if(ohiQ[3]+ohiQ[4]+35==79&&(c1==70||c1==71||c1==86)){}
else if(ohiQ[3]+ohiQ[4]+35==84&&c1==86){}
else if(!with_shift_key(key)&&c1<31&&c2<31){}
else if(with_shift_key(key)&&c1<31){c1=c2;if(typeof sublayout[key-33]!='undefined'&&sublayout[key-33])
c1=convert_into_ohi_hangeul_phoneme(sublayout[key-33])}
else if(c1>30&&c2<31){c1=c2}}
else if((NFD_stack.phoneme.length&&unicode_ga.indexOf(NFD_stack.phoneme[0])>=0||ohiQ[0]&&ohiQ[3]&&!ohiQ[6])&&c1>65&&c1<87){if(c2<31){if(!NFD_stack.phoneme.length){c1=c2}
else if(NFD_stack.combined_phoneme[0]==0x11A1||unicode_ggeut.indexOf(NFD_stack.phoneme[1])<0){c1=c2}}}
else if((NFD_stack.phoneme.length&&unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0||ohiQ[0]&&ohiQ[3]&&ohiQ[6])&&c2<31){i=combine_unicode_NFD_hangeul_phoneme(convert_into_unicode_hangeul_phoneme(ohiQ[6]+ohiQ[7]+ohiQ[8]),convert_into_unicode_hangeul_phoneme(c2));if(i)
c1=c2;if((c1==ohiQ[6]||c2==ohiQ[6]||c1==convert_into_ohi_hangeul_phoneme(NFD_stack.phoneme[0])||c2==convert_into_ohi_hangeul_phoneme(NFD_stack.phoneme[0]))&&sublayout&&typeof sublayout[key-33]!='undefined'&&sublayout[key-33]&&Ko_type!='3-2015'){if(NFD_stack.phoneme.length){c2=sublayout[key-33];NFD_stack.phoneme.unshift(c2);NFD_stack.combined_phoneme[0]=c2;ohiBackspace(f);ohiInsert(f,0,c2);return-1}
else if(ohiQ[6]&&!ohiQ[7]){c2=convert_into_ohi_hangeul_phoneme(sublayout[key-33]);ohiQ[7]=c2-ohiQ[6];ohiInsert(f,0,ohiQ);return-1}}
else if(c1>=31&&ohi_hotbadchim.indexOf(ohiQ[6])>=0){if(NFD_stack.phoneme.length>0&&unicode_ggeut.indexOf(NFD_stack.phoneme[1])>=0){initialize_NFD_stack()}}}
return c1}
function hangeul_typewriter(f,key){var layout=current_layout.layout;var ch;var c1=convert_into_ohi_hangeul_phoneme(layout[key-33]);var c2=convert_into_ohi_hangeul_phoneme(layout[ukey[dkey.indexOf(key)]-33]);ch=layout[key-33];if(Ko_type=='4t-1969'){if(ohiQ[3]==68-35&&!ohiQ[4]&&(!ohiRQ[3]&&c1==86||ohiRQ[3]==1&&c1==0x3163)){ohiQ[4]=1;ohiInsert(f,0,ohiQ);return-1}
if(ohiQ[3]==72-35&&!ohiQ[4]&&!ohiRQ[3]&&c1==86){ohiQ[4]=1;ohiInsert(f,0,ohiQ);return-1}}
if(Ko_type=='4t-1985'){if(shift_lock){ch=c2;if(ohi_ga.indexOf(c1)<0||ohi_ga.indexOf(c2)<0)
shift_lock=0}}
if(ohi_cheos.indexOf(convert_into_ohi_hangeul_phoneme(ch))>=0){ohiRQ=[0,0,0,0,0,0,0,0,0]}
if(compatibility_ga.indexOf(ch)>=0){ch=ohi_ga[compatibility_ga.indexOf(ch)];if(Ko_type.substr(-1)=='y')
ch=convert_into_unicode_hangeul_phoneme(ch);if(!ohiQ[3])
ohiRQ[3]=1;else ohiRQ[4]=1}
return convert_into_ohi_hangeul_phoneme(ch)}
function is_galmadeuli_input(){var type_name=current_layout.type_name;if(type_name.substr(0,5)=='Sin3-')
return!0;if(type_name.substr(-3)=='_gm')
return!0;if(type_name.substr(0,3)=='3-20'&&Number(type_name.substr(2,4))>2013)
return!0;if(type_name.substr(0,3)=='3-P')
return!0;var a=['3-18Na'];if(a.indexOf(type_name)>=0)
return!0;return!1}
function is_moachigi_input(){if(current_layout.type_name.substr(0,3)!='3m-')
return!1;if(option.force_normal_typing)
return!1;return!0}
function with_shift_key(key){if(key==0x27)
return 0;else if(key<=0x2B)
return 1;else if(key<=0x39)
return 0;else if(key==0x3b||key==0x3d)
return 0;else if(key<=0x5a)
return 1;else if(key<=0x5d)
return 0;else if(key<=0x5f)
return 1;else if(key<=0x7a)
return 0;else if(key<=0x7e)
return 1;return 1}
function is_old_hangeul_input(){if(current_layout.type_name&&current_layout.type_name.substr(-2)=='-y')
return!0;if(option.enable_old_hangeul_input&&typeof current_layout.old_hangeul_layout_type_name!='undefined')
return!0;return!1}
function is_phonemic_writing_input(){if(option.phonemic_writing)
return!0;return!1}
function push_to_key_table(u,d,t){u.push([t[93],t[0],t[31],t[2],t[3],t[4],t[61],t[5],t[9],t[7],t[8],t[62],t[10],''],['',t[48],t[54],t[36],t[49],t[51],t[56],t[52],t[40],t[46],t[47],t[90],t[92],t[91]],['',t[32],t[50],t[35],t[37],t[38],t[39],t[41],t[42],t[43],t[25],t[1],''],['',t[57],t[55],t[34],t[53],t[33],t[45],t[44],t[27],t[29],t[30],'']);d.push([t[63],t[16],t[17],t[18],t[19],t[20],t[21],t[22],t[23],t[24],t[15],t[12],t[28],''],['',t[80],t[86],t[68],t[81],t[83],t[88],t[84],t[72],t[78],t[79],t[58],t[60],t[59]],['',t[64],t[82],t[67],t[69],t[70],t[71],t[73],t[74],t[75],t[26],t[6],''],['',t[89],t[87],t[66],t[85],t[65],t[77],t[76],t[11],t[13],t[14]],'')}
function push_layout_to_key_table(u,d,b){var c,bas=[];for(var i=0;i<94;++i){c=String.fromCharCode(b[i]);if(b[i]<0)
c=0;bas.push(c)}
push_to_key_table(u,d,bas)}
function push_extended_hangeul_layout_to_key_table(u,d,ext_layout){var i,c,str,charCode;var ext=[];for(i=0;i<94;++i){c=ext_layout[i][ohiHangeul3_HanExtKey%0x10-1][ohiHangeul3_HanExtKey>0x10?1:0];if(c<0)
c=0;ext.push(String.fromCharCode(c))}
push_to_key_table(u,d,ext)}
function push_extended_sign_layout_to_key_table(u,d,e){var ext=[],c,i,j=(sign_ext_state-1)%10;if(j>=0){if(!is_old_hangeul_input()&&(Ko_type=='3-2011'||Ko_type=='3-2012')){if(j<3){for(i=0;i<94;++i){c=e[i][j]>0?e[i][j]:0;ext.push(String.fromCharCode(c))}}}
else if(Ko_type.substr(0,2)=='3-'){if(sign_ext_state<11){for(i=0;i<94;++i){c=e[i][0][j]>0?e[i][0][j]:0;ext.push(String.fromCharCode(c))}}
if(sign_ext_state>10){for(i=0;i<94;++i){c=e[i][1][j]>0?e[i][1][j]:0;ext.push(String.fromCharCode(c))}}}
else{for(i=0;i<94;++i){c=e[i][j]>0?e[i][j]:0;ext.push(String.fromCharCode(c))}}}
push_to_key_table(u,d,ext)}
function insert_sublayout_table(ue,de,uh,dh,sublayout){var u=[],d=[],sub=[],i,j,ds,us;for(i=0;i<94;++i){s=String.fromCharCode(convert_into_unicode_hangeul_phoneme(sublayout[i]));sub.push(s)}
push_to_key_table(u,d,sub);for(i=0;i<de.length;++i){for(j=0;j<de[i].length;++j){if((!u[i][j]||!u[i][j].charCodeAt(0))&&(!d[i][j]||!d[i][j].charCodeAt(0)))
continue;ds=de[i][j];us=ue[i][j];if(u[i][j].charCodeAt(0)){if(d[i][j].charCodeAt(0)){if(d[i][j]!=u[i][j])
us=u[i][j];ds=d[i][j]}
else ds=u[i][j]}
else if(d[i][j].charCodeAt(0))
ds=d[i][j];if(!(us==ue[i][j]||us==uh[i][j]||us==dh[i][j]))
ue[i][j]=us;if(!(ds==ue[i][j]||ds==uh[i][j]||ds==dh[i][j]))
de[i][j]=ds}}}
function show_ohiStatusBar(op){if(typeof op!='undefined'&&(op=='off'||op=='0'||!op))
ohiStatus.style.display='none';else ohiStatus.style.display='block'}
function ohiChange_enable_double_final_ext(op){if(op===undefined||op==1)
option.enable_double_final_ext=1;else option.enable_double_final_ext=0;show_keyboard_layout()}
function show_NCR(op){if(typeof op!='undefined'){if(op)
option.enable_NCR=1;else option.enable_NCR=0}
var f=document.getElementById('inputText');var t=document.getElementById('NCR');if(!f||!t)
return;var opts=document.getElementById('NCR_options');if(opts){if(ohi_menu_num&&ohi_menu_num<3)
opts.style.display='block';else opts.style.display='none';var opt=document.getElementById('option_enable_NCR');if(!opt)
opt=appendChild(opts,'div','option','option_enable_NCR','<div class="option"><input name="enable_NCR" class="checkbox" onclick="show_NCR(this.checked);inputText_focus()" type="checkbox"'+(option.enable_NCR?' checked="checked"':'')+'><label title="&apos;한글&apos;을 &amp;#xD55C;&amp;#xAE00; 꼴로 나타내기">HTML 문자 참조</label></div>');opt=document.getElementById('NCR_option_convert_only_NFD_hangeul_encoding');if(!opt)
opt=appendChild(opts,'div','option','NCR_option_convert_only_NFD_hangeul_encoding','<div class="option"><input name="convert_only_NFD_hangeul_encoding" class="checkbox" onclick="NCR_option.convert_only_NFD_hangeul_encoding=this.checked;show_NCR();inputText_focus()" type="checkbox"'+(NCR_option.convert_only_NFD_hangeul_encoding?' checked="checked"':'')+'><label title="완성형으로 나타낼 수 있는 한글은 바꾸지 않기">첫가끝 조합형만 바꾸기</label></div>')}
if(t&&option.enable_NCR){t.style.display='inline-block';opt.style.display='block'}
else{t.style.display='none';opt.style.display='none';return}
var ref_char,char_code,ref_text='';for(i=0;i<f.value.length;++i){char_code=f.value.charCodeAt(i);ref_char='&amp;#x'+char_code.toString(16).toUpperCase()+';';if(NCR_option.convert_only_NFD_hangeul_encoding){if(unicode_NFD_hangeul_code.indexOf(char_code)<0&&unicode_NFD_hangeul_sidedot.indexOf(char_code)<0)
ref_char=f.value.charAt(i)}
ref_text+=ref_char}
if(ref_text=='')
ref_text='&nbsp;';t.innerHTML=ref_text}
function add_option(opts,opt_name,footer){var opt=document.getElementById('option_'+opt_name);eval('var opt_var = option.'+opt_name);var opt_html='<div class="option"><input name="'+opt_name+'" class="checkbox" type="checkbox"'+(opt_var?' checked="checked"':'')+' onclick="option.'+opt_name+'=this.checked; '+footer;if(!opt)
opt=appendChild(opts,'div','option','option_'+opt_name,opt_html);opt.style.display='block';return opt}
function show_options(){var KE=ohi_KE,opt,opt_name,ft;var opts=document.getElementById('top_options');var type_name=typeof current_layout.type_name!='undefined'?current_layout.type_name:'';if(typeof ohi_menu_num=='undefined')
ohi_menu_num=0;show_NCR();if(opts){if(ohi_menu_num&&ohi_menu_num<3)
opts.style.display='block';else opts.style.display='none';opt_name='only_NFD_hangeul_encoding';ft='show_keyboard_layout(option.show_layout);inputText_focus()"><label title="한글을 모두 첫가끝 조합형으로 넣기">첫가끝 조합</label></div>';add_option(opts,opt_name,ft);opt_name='phonemic_writing';ft='complete_hangeul_syllable();ohiChange_enable_phonemic_writing();inputText_focus()"><label title="한글을 낱자 단위로 풀어서 넣기">풀어쓰기</label></div>';add_option(opts,opt_name,ft);opt_name='phonemic_writing_in_halfwidth_letter';ft='inputText_focus()"><label title="한글을 반각 낱자로 넣기">반각</label></div>';opt=add_option(opts,opt_name,ft);if(is_phonemic_writing_input()&&!is_old_hangeul_input()&&!option.only_NFD_hangeul_encoding)
opt.style.display='block';else opt.style.display='none';opt_name='phonemic_writing_directly';ft='show_options();inputText_focus()"><label title="낱자를 조합하지 않고 바로 넣기">바로 풀기</label></div>';opt=add_option(opts,opt_name,ft);if(is_phonemic_writing_input()&&!is_old_hangeul_input()&&!option.only_NFD_hangeul_encoding)
opt.style.display='block';else opt.style.display='none';opt_name='phonemic_writing_adding_space_every_syllable_end';ft='inputText_focus()"><label title="낱내(음절) 사이에 빈칸 넣기">낱내 띄기</label></div>';opt=add_option(opts,opt_name,ft);if(is_phonemic_writing_input()&&!option.phonemic_writing_directly)
opt.style.display='block';else opt.style.display='none';opt_name='phonemic_writing_in_single_phoneme';ft='show_options();inputText_focus()"><label title="모든 겹낱자를 풀어서 홑낱자로 나타내기">겹낱자 풀기</label></div>';opt=add_option(opts,opt_name,ft);if(is_phonemic_writing_input()&&(!is_old_hangeul_input()||option.only_NFD_hangeul_encoding)&&!option.phonemic_writing_directly)
opt.style.display='block';else opt.style.display='none';opt_name='phonemic_writing_NFD_ggeut_to_cheos';ft='show_options();inputText_focus()"><label title="끝소리를 첫소리로 바꾸어 넣기">끝→첫</label></div>';opt=add_option(opts,opt_name,ft);if(is_phonemic_writing_input()&&option.only_NFD_hangeul_encoding&&option.phonemic_writing_in_single_phoneme)
opt.style.display='block';else opt.style.display='none';opt_name='phonemic_writing_initial_ieung_ellipsis';ft='inputText_focus()"><label title="첫소리 ㅇ(이응) 빼기">첫ㅇ 빼기</label></div>';opt=add_option(opts,opt_name,ft);if(is_phonemic_writing_input()&&!option.phonemic_writing_directly)
opt.style.display='block';else opt.style.display='none'}
opts=document.getElementById('middle_options');if(opts){opts.style.display='block';opt_name='turn_off_OHI';ft='ohiStart();inputText_focus()"><label title="온라인 한글 입력기의 입력 기능 끄기">OHI 끄기</label></div>';opt=add_option(opts,opt_name,ft);if(ohi_menu_num&&ohi_menu_num<3)
opt.style.display='block';else opt.style.display='none';opt_name='sunalae';ft='show_options();inputText_focus()"><label title="두벌식 자판으로 홀소리 글쇠를 거듭 눌러 겹닿소리(된소리) 넣기">순아래 조합 <a href="https://sites.google.com/site/tinyduckn/dubeolsig-sun-alae" target="_blank">ⓘ</a></label></div>';opt=add_option(opts,opt_name,ft);if(!is_old_hangeul_input()&&!is_phonemic_writing_input()&&type_name.substr(0,2)=='2-'&&type_name.substr(0,5)!='2-sun')
opt.style.display='block';else opt.style.display='none';opt_name='enable_sign_ext';ft='inputText_focus()"><label title="기호 확장 배열">기호 확장</label></div>';opt=add_option(opts,opt_name,ft);if(KE=='Ko'&&(typeof current_layout.extended_sign_layout!='undefined'&&current_layout.extended_sign_layout)&&Ko_type!='Sin3-2015')
opt.style.display='block';else opt.style.display='none';opt_name='enable_old_hangeul_input';ft='ohiChange_enable_old_hangeul_input();ohiStart();inputText_focus()"><label title="옛한글 넣기">옛한글</label></div>';opt=add_option(opts,opt_name,ft);if(typeof current_layout.old_hangeul_layout_type_name!='undefined'&&!(Ko_type.substr(0,2)=='2-'&&option.sunalae))
opt.style.display='block';else opt.style.display='none';opt_name='enable_Sin3_diphthong_key';ft='show_keyboard_layout();inputText_focus()"><label title="오른손 쪽에서 ㅗ,ㅜ,ㅡ,ㆍ 넣기">오른쪽 홀소리</label></div>';opt=add_option(opts,opt_name,ft);if(type_name.substr(0,5)=='Sin3-'&&is_old_hangeul_input())
opt.style.display='block';else opt.style.display='none';opt_name='enable_Sin3_adding_cheos_with_shift_key';ft='inputText_focus()"><label title="오른쪽 홀소리 자리에서 윗글쇠 눌러 첫소리 넣기">윗글 첫소리</label></div>';opt=add_option(opts,opt_name,ft);if(type_name.substr(0,5)=='Sin3-'&&is_old_hangeul_input())
opt.style.display='block';else opt.style.display='none';opt_name='abbreviation';ft='inputText_focus()"><label title="이어치기 방식으로 쓰는 줄여넣기">줄임말 조합</label></div>';opt=add_option(opts,opt_name,ft);if(Ko_type.substr(0,3)!='3m-'&&typeof current_layout.ieochigi_hangeul_abbreviation_table!='undefined'&&!is_old_hangeul_input())
opt.style.display='block';else opt.style.display='none';opt_name='force_normal_typing';ft='show_keyboard_layout();inputText_focus()"><label title="한 글쇠씩 이어서 넣는 방식으로 모아치기 자판 쓰기">이어치기</label></div>';opt=add_option(opts,opt_name,ft);if(KE=='Ko'&&Ko_type.substr(0,3)=='3m-')
opt.style.display='block';else opt.style.display='none';opt_name='convenience_combination';ft='inputText_focus()"><label title="입력 편의를 높이기 위한 한글 낱자 조합">편의 낱자 조합</label></div>';opt=add_option(opts,opt_name,ft);if(!is_old_hangeul_input()&&typeof current_layout.hangeul_convenience_combination_table!='undefined')
opt.style.display='block';else opt.style.display='none';opt_name='enable_double_final_ext';ft='ohiChange_enable_double_final_ext(this.checked);inputText_focus()"><label title="윗글쇠를 함께 누르거나 같은 글쇠를 거듭 눌러 겹받침 넣기">겹받침 확장</label></div>';opt=add_option(opts,opt_name,ft);if(Ko_type.substr(0,3)!='3m-'&&typeof current_layout.sublayout!='undefined'&&!is_old_hangeul_input()&&current_layout.sublayout.indexOf(0x11AD)>=0)
opt.style.display='block';else opt.style.display='none'}
opts=document.getElementById('bottom_options');if(opts){opts.style.display='block';opt_name='square_layout';ft='show_keyboard_layout();inputText_focus()"><label>가지런한 배열표</label></div>';opt=add_option(opts,opt_name,ft);if(ohi_menu_num&&ohi_menu_num<3&&option.show_layout)
opt.style.display='block';else opt.style.display='none'}}
function show_keyboard_layout(type){var rows=document.getElementById('keyboardLayout');if(!rows)
return!1;rows.style.position='relative';rows.style.display='block';var inner_html='';shift_click=0;var KE=ohi_KE;if(typeof ohi_menu_num=='undefined')
ohi_menu_num=0;show_options();if(typeof type=='undefined')
type=current_layout.type_name;else if(type==1){option.show_layout=1;type=current_layout.type_name}
else if(!type){option.show_layout=0;rows.innerHTML='<div class="show_layout"><span class="menu" onclick="option.show_layout=1;show_keyboard_layout(1);inputText_focus()">배열표 보이기</span></div>';var opt=document.getElementById('option_square_layout');opt.style.display='none';return!1}
if(!option.show_layout)
return;if(ohi_menu_num&&ohi_menu_num>2){rows.style.display='none';var opts=document.getElementById('middle_options');opts.style.display='none';opts=document.getElementById('bottom_options');opts.style.display='none'}
var layout=[],ue=[],de=[],uh=[],dh=[],l=[];layout=find_layout_info('En',En_type).layout;for(i=0;i<layout.length;++i)
l[i]=String.fromCharCode(layout[i]);push_to_key_table(ue,de,l);ue[0][13]='Back';ue[1][0]='Tab';ue[2][0]=ue[3][0]=ue[3][11]='Shift';de[2][0]='Lock';de[3][0]=de[3][11]=' ';ue[2][12]='Enter';de[0][13]='Space';for(i=0;i<ue.length;++i)
for(j=0;j<ue[i].length;++j)
if(typeof de[i][j]!='undefined'&&ue[i][j].toLowerCase()==de[i][j].toLowerCase())
de[i][j]='　';if(KE=='Ko'){if(sign_ext_state>0){if(typeof current_layout.extended_sign_layout!='undefined')
layout=current_layout.extended_sign_layout;if(!layout)
return;if(is_old_hangeul_input()&&typeof current_layout.old_hangeul_layout_type_name!='undefined')
if(typeof find_layout_info('Ko',current_layout.old_hangeul_layout_type_name).extended_sign_layout!='undefined')
layout=find_layout_info('Ko',current_layout.old_hangeul_layout_type_name).extended_sign_layout;if(layout.length)
push_extended_sign_layout_to_key_table(uh,dh,layout)}
else if(ohiHangeul3_HanExtKey){layout=K3_2012y_extended_hangeul_layout;push_extended_hangeul_layout_to_key_table(uh,dh,layout)}
else if(typeof current_layout!='undefined'&&typeof current_layout.layout!='undefined'){layout=current_layout.layout;if(option.enable_old_hangeul_input&&typeof current_layout.old_hangeul_layout_type_name!='undefined')
layout=find_layout_info(KE,current_layout.old_hangeul_layout_type_name).layout;push_layout_to_key_table(uh,dh,layout)}}
if(typeof current_layout.sublayout!='undefined'&&!is_old_hangeul_input()&&(option.enable_double_final_ext||current_layout.type_name.substr(0,3)=='3m-'||current_layout.type_name=='3-18Na')&&sign_ext_state<=0){insert_sublayout_table(ue,de,uh,dh,current_layout.sublayout)}
ue.push(['기준','영문','한글','Space','한/영','2벌식','3벌식']);de[4]=['자판','바꿈','바꿈','','','바꿈','바꿈'];inner_html+='<div id="keyboardLayoutInfo"></div><span class="menu" onclick="show_keyboard_layout(0);inputText_focus()" onmouseover="this.className=\'menu over\'" onmouseout="this.className=\'menu\'">배열표 숨기기</span>';inner_html+='<div id="keyboardLayoutTable">';for(i=0;i<5;++i)
inner_html+='<div id="row'+i+'" class="row"></div>';inner_html+='</div>';rows.innerHTML=inner_html;char_converting_table_original_code=[0x1B,0x1160];char_converting_table_target_string=['🄴','🄵'];for(i=0,k=-1;ue[i];i++){var row=document.getElementById('row'+i);for(j=0;ue[i][j];j++){var tdclass='e1';var tdid='key'+(++k);var charCode;if(dh[i]&&dh[i][j]){charCode=dh[i][j].charCodeAt(0);if(charCode>128)
dh[i][j]=String.fromCharCode(convert_into_compatibility_hangeul_letter(charCode));if(charCode>0x3130)
tdclass=(type.substr(0,1)=='2'||type.substr(-7)=='2-KSX5002'||type=='2-KPS9256'||j>5&&!(i<2&&j>10||i==3&&j==10&&type.substr(0,5)!='Sin3-'))?'h1':'h3';if(charCode>0x314E)
tdclass='h2';if(i==3&&j==10&&type=='3-sun1990')
tdclass='h3';if(unicode_modern_cheos.indexOf(charCode)>=0)
tdclass='h1';else if(Ko_type.substr(1,2)=='t-'&&charCode>=0x314F&&charCode<0x3164)
tdclass='h2 gin-hol';else if(unicode_modern_ga.indexOf(charCode)>=0)
tdclass='h2';else if(unicode_modern_ggeut.indexOf(charCode)>=0)
tdclass='h3';else if(compatibility_hangeul_phoneme.indexOf(dh[i][j].charCodeAt(0))<0&&unicode_NFD_hangeul_phoneme.indexOf(charCode)>=0)
dh[i][j]=(unicode_ga.indexOf(charCode)>=0?String.fromCharCode(0x115F):'')+(unicode_ggeut.indexOf(charCode)>=0?String.fromCharCode(0x115F)+String.fromCharCode(0x1160):'')+dh[i][j];if(char_converting_table_original_code.indexOf(charCode)>=0)
dh[i][j]=char_converting_table_target_string[char_converting_table_original_code.indexOf(charCode)];if(tdclass.substr(0,1)!='h')
if(unicode_modern_ggeut.indexOf(uh[i][j].charCodeAt(0))>=0)
tdclass='h3'}
charCode=ue[i][j].charCodeAt(0);if(KE=='En'&&ue[i][j].length==1)
if(charCode>64&&charCode<91||charCode>96&&charCode<123)
tdclass='e2';if(unicode_NFD_hangeul_phoneme.indexOf(charCode)>=0){charCode=ue[i][j].charCodeAt(0);ue[i][j]=String.fromCharCode(convert_into_compatibility_hangeul_letter(charCode))}
var col=appendChild(row,'div',tdclass,tdid,'','36px','0 0 0 0');col.onclick=function(e){e=e||window.event;tableKey_clicked(e,this.id.substr(3),dkey[this.id.substr(3)],ukey[this.id.substr(3)])};col.tabindex=0;if(!option.square_layout){if(k==13)
col.style.width='62px';if(k==14)
col.style.width='56px';if(k==27)
col.style.width='42px';if(k==28)
col.style.width='67px';if(k==40)
col.style.width='71px';if(k==41)
col.style.width='87px';if(k==52)
col.style.width='91px'}
else{if(k==0)
col.style.width='69px';if(k==13){col.style.letterSpacing='-2px';col.style.width='33px'}
if(k==12||k==26)
col.style.width='32px';if(k==14)
col.style.width='69px';if(k==27)
col.style.width='33px';if(k==28)
col.style.width='69px';if(k==40)
col.style.width='69px';if(k==41)
col.style.width='69px';if(k==52)
col.style.width='109px'}
if(ue[i][j]=='Back'||ue[i][j]=='Tab'||ue[i][j]=='Enter'||ue[i][j]=='Shift')
col.style.textAlign='center';if(i==4){if(ue[i][j]=='Space')
col.style.width='312px';else col.style.width='41px',col.className='e3 special'}
var up=appendChild(col,'div','up','up'+k);appendChild(up,'div','ue','ue'+k,ue[i][j]);if(uh[i]){if(uh[i][j]){charCode=uh[i][j].charCodeAt(0);if(unicode_NFD_hangeul_phoneme.indexOf(charCode)>=0)
charCode=convert_into_compatibility_hangeul_letter(charCode);uh[i][j]=String.fromCharCode(charCode);if(char_converting_table_original_code.indexOf(charCode)>=0)
uh[i][j]=char_converting_table_target_string[char_converting_table_original_code.indexOf(charCode)];if(compatibility_hangeul_phoneme.indexOf(uh[i][j].charCodeAt(0))<0)
uh[i][j]=(unicode_ga.indexOf(charCode)>=0?String.fromCharCode(0x115F):'')+(unicode_ggeut.indexOf(charCode)>=0?String.fromCharCode(0x115F)+String.fromCharCode(0x1160):'')+uh[i][j];if(uh[i][j]==dh[i][j]&&uh[i][j]!=de[i][j])
uh[i][j]=' ';if((Ko_type.substr(0,2)=='3-'&&is_galmadeuli_input()||typeof current_layout.sublayout!='undefined')&&unicode_modern_ggeut.indexOf(charCode)>=0&&unicode_modern_hotbatchim.indexOf(charCode)<0){uh[i][j]='<span style="color:gray;">'+uh[i][j]+'</span>'}}
if(uh[i][j]==ue[i][j]||uh[i][j]=='&'&&ue[i][j]=='&amp;'||uh[i][j]=='<'&&ue[i][j]=='&lt;'||uh[i][j]=='>'&&ue[i][j]=='&gt;')
uh[i][j]=' ';appendChild(up,'div','uh','uh'+k,uh[i][j])}
if(de[i][j]){var down=appendChild(col,'div','down','down'+k);charCode=de[i][j].charCodeAt(0);if(unicode_NFD_hangeul_phoneme.indexOf(charCode)>=0)
de[i][j]=String.fromCharCode(convert_into_compatibility_hangeul_letter(charCode));appendChild(down,'div','de','de'+k,de[i][j]);if(dh[i]&&(!dh[i][j]||dh[i][j]==de[i][j]))
dh[i][j]=' ';if(dh[i]&&dh[i][j])
appendChild(down,'div','dh','dh'+k,dh[i][j])}}}
var sign_ext_tag='<span style="margin-left:-1px;background:black;color:#fff;letter-spacing:-1px;font-size:8px;">기호</div>';var sign_ext_tag1='<span style="margin:0;padding:0;background:black;color:#fff;letter-spacing:-2px;font-size:0.7em;">기호①</span>';var sign_ext_tag2='<span style="margin:0;padding:0;background:black;color:#fff;letter-spacing:-2px;font-size:0.7em">기호②</span>';var han_ext_tag1='<span style="margin:0;padding:0;background:black;color:#fff;letter-spacing:-2px;font-size:0.7em;">한글①</span>';var han_ext_tag2='<span style="margin:0;padding:0;background:black;color:#fff;letter-spacing:-2px;font-size:0.7em;">한글②</span>';var Moachigi_modifier_tag='<span style="background:black;color:#fff;font-size:1em;">⇦</span>';if(option.enable_sign_ext&&KE=='Ko'&&Ko_type.substr(0,2)=='3-'&&typeof current_layout.extended_sign_layout!='undefined'){if(Ko_type=='3-87'){document.getElementById('ue9').innerHTML='<span style="margin:0;padding:0;background:black;color:#fff;font-size:0.7em;">기호②</span>';document.getElementById('ue51').innerHTML='<span style="margin:0;padding:0;background:black;color:#fff;font-size:0.7em">기호①</span>'}
else if(Ko_type=='3-95'){document.getElementById('de51').innerHTML=sign_ext_tag}
else if(!is_old_hangeul_input()&&(Ko_type=='3-2011'||Ko_type=='3-2012')){document.getElementById('de8').innerHTML=sign_ext_tag;document.getElementById('de45').innerHTML=sign_ext_tag}
else{document.getElementById('uh9').innerHTML=sign_ext_tag2;document.getElementById('uh51').innerHTML=sign_ext_tag1}}
if(KE=='Ko'&&is_old_hangeul_input()&&(Ko_type.substr(0,6)=='3-2011'||Ko_type.substr(0,6)=='3-2012'||Ko_type.substr(0,6)=='3-2014'||Ko_type.substr(0,7)=='3-2015P')){document.getElementById('dh7').innerHTML=han_ext_tag1;document.getElementById('dh8').innerHTML=han_ext_tag2;document.getElementById('uh7').innerHTML='<span style="color:#666;font-size:0.8em">(ㅣ)</span>';document.getElementById('uh8').innerHTML='<span style="color:#666;font-size:0.8em">(ㅡ)</span>'}
if(KE=='Ko'&&Ko_type.substr(0,4)=='Sin3'){if(!sign_ext_state&&!(!option.enable_Sin3_diphthong_key&&is_old_hangeul_input())){if(typeof current_layout.sublayout!='undefined'){if(current_layout.sublayout[14])
document.getElementById('uh51').innerHTML='<font size="1">('+String.fromCharCode(convert_into_compatibility_hangeul_letter(current_layout.sublayout[14]))+')</font>';if(current_layout.sublayout[72])
document.getElementById('de22').innerHTML='<span style="font-size:10px; letter-spacing:-2px;color:#333;">('+String.fromCharCode(convert_into_compatibility_hangeul_letter(current_layout.sublayout[72]))+')</span>';if(current_layout.sublayout[78])
document.getElementById('de23').innerHTML='<span style="font-size:10px; letter-spacing:-2px;color:#333;">('+String.fromCharCode(convert_into_compatibility_hangeul_letter(current_layout.sublayout[78]))+')</span>';if(current_layout.sublayout[79]){if(current_layout.sublayout[79]==0x119E)
document.getElementById('de24').innerHTML='<span style="font-size:10px; letter-spacing:-3px;color:#333;">('+String.fromCharCode(convert_into_compatibility_hangeul_letter(current_layout.sublayout[79]))+')</span>';else document.getElementById('de24').innerHTML='<font size="1">'+String.fromCharCode(convert_into_compatibility_hangeul_letter(current_layout.sublayout[79]))+'</font>'}}
else{if(En_type=='Dvorak')
document.getElementById('de51').innerHTML='<font size="1">(ㅗ)</font>';else if(current_layout.layout==Array&&current_layout.layout[30]==0x3F)
document.getElementById('uh51').innerHTML='<font size="1">(ㅗ)</font>'}}
if(option.enable_sign_ext&&typeof current_layout.extended_sign_layout!='undefined'&&current_layout.extended_sign_layout){document.getElementById('de35').innerHTML=sign_ext_tag;for(i=0;i<3;++i)
document.getElementById('de'+(36+i)).innerHTML='<span style="padding:0 1px;background:black;color:#fff;font-size:10px;">'+String.fromCharCode(0x2460+i)+'</span>'}
if(is_old_hangeul_input()&&!sign_ext_state){document.getElementById('de32').innerHTML='<span style="margin-left:-1px;background:black;color:#fff;letter-spacing:-1px;font-size:8px;">받침</span>';document.getElementById('de15').innerHTML='<span style="color:#666">ㅿ</span>';document.getElementById('de29').innerHTML='<span style="color:#666">ㆁ</span>';document.getElementById('de31').innerHTML='<span style="color:#666">ㆆ</span>';document.getElementById('de31').innerHTML='<span style="color:#666">ㆆ</span>'}}
if(KE=='Ko'&&En_type!='Dvorak'&&!sign_ext_state&&!ohiHangeul3_HanExtKey){if((Ko_type.substr(0,5)=='Sin3-'&&typeof current_layout.sublayout!='undefined'&&current_layout.sublayout[58]==0x119E)||Ko_type.substr(0,3)=='3-P'||Ko_type.substr(0,7)=='3-2015P'||Ko_type.substr(0,6)=='3-2014'||Ko_type.substr(0,6)=='3-2012'||Ko_type=='3-90'){document.getElementById('dh25').innerHTML='<font size="1">(ㆍ)</font>'}}
if(KE=='Ko'&&Ko_type=='3m-Semoe2014')
document.getElementById('uh38').innerHTML+=Moachigi_modifier_tag;if(KE=='Ko'&&Ko_type=='3m-Semoe2015'){document.getElementById('uh24').innerHTML=Moachigi_modifier_tag;document.getElementById('uh38').innerHTML=Moachigi_modifier_tag;document.getElementById('ue45').removeAttribute('class');document.getElementById('ue45').style.float='left';document.getElementById('ue45').innerHTML=Moachigi_modifier_tag}
if(KE=='Ko'&&Ko_type=='3m-Semoe2016'){if(sign_ext_state<=0){document.getElementById('uh25').innerHTML=Moachigi_modifier_tag;document.getElementById('uh38').innerHTML=Moachigi_modifier_tag;document.getElementById('ue45').removeAttribute('class');document.getElementById('ue45').style.float='left';document.getElementById('ue45').innerHTML=Moachigi_modifier_tag}
if(option.enable_sign_ext){document.getElementById('uh35').innerHTML=sign_ext_tag;if(sign_ext_state<0){for(i=0;i<3;++i)
document.getElementById('uh'+(36+i)).innerHTML='<span style="padding:0 1px;background:black;color:#fff;font-size:10px;">'+String.fromCharCode(0x2460+i)+'</span>'}}}
if(KE=='Ko'&&Ko_type.substr(0,8)=='3m-Semoe'&&(!Number(Ko_type.substr(0,8))||Number(Ko_type.substr(0,8))>=2017)){if(sign_ext_state<=0){document.getElementById('uh38').innerHTML=Moachigi_modifier_tag;document.getElementById('ue45').removeAttribute('class');document.getElementById('ue45').style.float='left';document.getElementById('ue45').innerHTML=Moachigi_modifier_tag;document.getElementById('uh50').innerHTML=Moachigi_modifier_tag}
if(option.enable_sign_ext){document.getElementById('de35').innerHTML=sign_ext_tag;for(i=0;i<3;++i)
document.getElementById('de'+(36+i)).innerHTML='<span style="padding:0 1px;background:black;color:#fff;font-size:10px;">'+String.fromCharCode(0x2460+i)+'</span>'}}
if(KE=='Ko'&&(Ko_type=='3t-Oesol'||Ko_type=='4t-1985')){document.getElementById('ue41').innerHTML='Shift';document.getElementById('de41').innerHTML='(받침)';document.getElementById('ue52').innerHTML='Shift';document.getElementById('de52').innerHTML='(받침)';if(Ko_type=='4t-1985'){document.getElementById('key25').className='h3';document.getElementById('key38').className='h3';document.getElementById('key39').className='h3'}}
if(shiftlock_click){var shiftlock=document.getElementById('key28');shiftlock.style.backgroundColor='orange'}
show_keyboard_layout_info()}
function ohiStart(){var i;var textarea=document.getElementById('inputText');var inputs=document.getElementsByTagName("INPUT");complete_hangeul_syllable(this);if(option.turn_off_OHI){show_ohiStatusBar(0);if(textarea)
textarea.style.imeMode='active';if(inputs){for(i=0;i<inputs.length;++i){if(inputs[i].className=='text')
inputs[i].style.imeMode='active'}}
return}
if(typeof current_layout=='undefined'||!current_layout||typeof current_layout.KE=='undefined'||!current_layout.KE){ohiChange(default_ohi_KE,default_ohi_KE=='En'?default_En_type:default_Ko_type)}
ohi_KE=current_layout.KE;ohiStatus.innerHTML='<a href="javascript:ohiChange_KE();" style="color:White;text-decoration:none;">&nbsp;'+ohi_KE.toUpperCase()+' </a>'+' | <a href="javascript:ohiChange_between_same_type(\'Ko\');"><span style="color:yellow">Ko:</span><span style="color:Aquamarine">'+(is_old_hangeul_input()&&typeof current_layout.old_hangeul_layout_type_name!='undefined'?current_layout.old_hangeul_layout_type_name:Ko_type)+'</span></a>'+' / <a href="javascript:ohiChange_between_same_type(\'En\');"><span style="color:LightPink">En:</span><span style="color:Aquamarine">'+En_type+'</span></a>'+' | <a href="javascript:ohiChange_KBD_type();" style="color:WhiteSmoke;text-decoration:none;">'+ohi_KBD_type+'&nbsp;</a>';if(document.body){show_ohiStatusBar(1);var onmousedown=function(e){complete_hangeul_syllable(this);prev_cursor_position=-1};if(textarea){textarea.style.imeMode='disabled';textarea.onmousedown=onmousedown}
if(inputs){for(i=0;i<inputs.length;++i){if(inputs[i].className=='text'){inputs[i].style.imeMode='disabled';inputs[i].onmousedown=onmousedown}}}
if(document.all){ohiStatus.style.position='fixed';ohiStatus.style.right=-(document.body.scrollLeft||document.documentElement.scrollLeft)+'px';ohiStatus.style.bottom=-(document.body.scrollTop||document.documentElement.scrollTop)+'px'}
if(document.body!=ohiStatus.parentNode){if(!ohiStatus.style.position){ohiStatus.style.position='fixed';ohiStatus.style.right='0px';ohiStatus.style.bottom='0px'}
ohiStatus.target='_blank';ohiStatus.style.fontFamily='GulimChe,monospace';ohiStatus.style.fontWeight='normal';ohiStatus.style.color='white';ohiStatus.style.backgroundColor='royalblue';ohiStatus.style.fontSize='13px';ohiStatus.style.lineHeight='13px';ohiStatus.style.zIndex='2550000';document.body.appendChild(ohiStatus);if(document.addEventListener){document.addEventListener('keypress',ohiKeypress,!0);document.addEventListener('keydown',ohiKeydown,!0);document.addEventListener('keyup',ohiKeyup,!0)}
else{document.onkeydown=ohiKeydown;document.onkeypress=ohiKeypress;document.onkeyup=ohiKeyup}
for(var i=0;i<window.frames.length;i++){try{if(typeof(window.frames[i].document)=='unknown')
continue}
catch(e){continue}
var ohi=document.createElement('script');ohi.type='text/javascript';var js_list=['keyboard_layouts','additional_layouts','ohi'];for(var j=0;j<js_list.length;++j){ohi.src='//ohi.pat.im/'+js_list[j]+'.js';window.frames[i].document.body.appendChild(ohi)}}
show_NCR()}}
else ohiTimeout=setTimeout("ohiStart()",100)}
function show_keyboard_layout_info(){var KE=ohi_KE;var kbd=ohi_KBD_type=='QWERTY'?'':':'+ohi_KBD_type;var type_name=typeof current_layout.type_name!='undefined'?current_layout.type_name:'';var name='',link='',keyboardLayoutInfo=document.getElementById('keyboardLayoutInfo');if(keyboardLayoutInfo){if(KE=='En'){name='<strong>[영문'+kbd+']</strong> ';if(En_type=='QWERTY')
name+='쿼티 (QWERTY)';else if(En_type=='Dvorak')
name+='드보락 (Dvorak)';else if(En_type=='Colemak')
name+='콜맥 (Colemak)';else if(En_type=='Workman')
name+='워크맨 (Workman)'}
else{var beol='3';if(type_name.substr(0,1)=='2')
beol='2';else if(type_name.substr(0,1)=='4')
beol='4';name='<strong>[한글 '+beol+'벌식'+kbd+(is_galmadeuli_input()?': 갈마들이':'')+(is_moachigi_input()?': 모아치기':'')+']</strong> ';var full_name=typeof current_layout.full_name!=undefined?current_layout.full_name:'';if(is_old_hangeul_input()){if(typeof find_layout_info('Ko',current_layout.old_hangeul_layout_type_name).full_name!='undefined')
full_name=find_layout_info('Ko',current_layout.old_hangeul_layout_type_name).full_name}
if(typeof current_layout.full_name!='undefined')
name+=full_name;if(is_old_hangeul_input()&&typeof current_layout.old_hangeul_layout_type_name!='undefined'&&typeof find_layout_info('Ko',current_layout.old_hangeul_layout_type_name).link!='undefined'&&find_layout_info('Ko',current_layout.old_hangeul_layout_type_name).link)
link=find_layout_info('Ko',current_layout.old_hangeul_layout_type_name).link;else if(typeof current_layout.link!='undefined'&&current_layout.link)
link=current_layout.link;if(link)
name+=' <a href="'+link+'" target="_blank">ⓘ</a>'}
keyboardLayoutInfo.innerHTML=name}}
function find_layout_info(KE,type_name){if(typeof type_name=='undefined'||!type_name)
return!1;var i,j;var a=[keyboard_layouts];if(typeof additional_layouts!='undefined')
a.push(additional_layouts);if(typeof test_layouts!='undefined')
a.push(test_layouts);for(i=0;i<a.length;++i)
for(j=0;j<a[i].length;++j)
if(KE==a[i][j].KE&&typeof a[i][j].type_name!='undefined'&&type_name.toLowerCase()==a[i][j].type_name.toLowerCase())
return a[i][j];return!1}
function ohiChange(KE,type_name){var f=document.getElementById('inputText');inputText_focus();if(NFD_stack.phoneme.length&&f)
complete_hangeul_syllable(f);esc_ext_layout();var prev_layout=typeof current_layout!='undefined'?current_layout:null;if(KE.toLowerCase()=='en')
KE='En';else if(KE.toLowerCase()=='ko'||KE.toLowerCase()=='k2'||KE.toLowerCase()=='k3')
KE='Ko';ohi_KE=ohi_KE.replace(/(En|Ko)/,KE.substr(0,2));var layout=find_layout_info(KE,type_name);if(layout){current_layout=layout;if(KE=='En')
En_type=current_layout.type_name;else Ko_type=current_layout.type_name}
if(layout!=prev_layout){ohiStart();show_keyboard_layout(KE=='En'?En_type:Ko_type)}}
function ohiChange_between_same_type(type){var i,j=-1;var En_type_array=['QWERTY','Dvorak','Colemak','Workman'];var Ko_type_array=['2-KSX5002','2-KPS9256','Sin3-P2','3m-Semoe','3-P3'];if(type=='En'){for(i=0;i<En_type_array.length;++i)
if(En_type.toLowerCase()==En_type_array[i].toLowerCase())
j=i;En_type=En_type_array[(j+1)%i];ohiChange('En',En_type);return}
var a=[keyboard_layouts];if(typeof additional_layouts!='undefined')
a.push(additional_layouts);if(typeof test_layouts!='undefined')
a.push(test_layouts);for(i=0;i<Ko_type_array.length;++i){if(type=='K2'&&Ko_type_array[i].substr(0,1)!='2'||type=='K3'&&Ko_type_array[i].substr(0,1)=='2'){Ko_type_array.splice(i--,1)}}
if(type!='Ko'){for(i=0;i<a.length;++i)
for(j=0;j<a[i].length;++j)
if(a[i][j].KE=='Ko'&&typeof a[i][j].type_name!='undefined'&&Ko_type_array.indexOf(a[i][j].type_name)<0){if(type=='K2'&&a[i][j].type_name.substr(0,1)=='2')
Ko_type_array.push(a[i][j].type_name);if(type=='K3'&&a[i][j].type_name.substr(0,1)!='2')
Ko_type_array.push(a[i][j].type_name)}}
for(i=0;i<Ko_type_array.length;++i)
if(Ko_type.toLowerCase()==Ko_type_array[i].toLowerCase())
j=i;if(type!='Ko'&&(Ko_type.substr(0,1)=='2'&&Ko_type_array[(j+1)%i].substr(0,1)!='2'||Ko_type.substr(0,1)!='2'&&Ko_type_array[(j+1)%i].substr(0,1)=='2'))
Ko_type=Ko_type_array[0];else Ko_type=Ko_type_array[(j+1)%i];ohiChange('Ko',Ko_type)}
function ohiChange_KE(type){var KE=ohi_KE;if(type===undefined||!type){if(KE=='En')
ohiChange('Ko',Ko_type);else if(KE=='Ko')
ohiChange('En',En_type)}
else if(type=='En')
ohiChange('En',En_type);else if(type=='Ko')
ohiChange('Ko',Ko_type)}
function ohiChange_KBD_type(type){if(type===undefined||!type){ohi_KBD_type=ohi_KBD_type=='QWERTY'?'QWERTZ':ohi_KBD_type=='QWERTZ'?'AZERTY':'QWERTY';ohiStart()}
else{ohi_KBD_type=type;ohiStart()}
show_keyboard_layout(option.show_layout)}
function ohiChange_enable_sign_ext(op){if(op=='off'||op=='0')
option.enable_sign_ext=0;else option.enable_sign_ext=1;show_keyboard_layout(option.show_layout);var checkbox=document.getElementsByName('sign_extension');if(checkbox&&typeof checkbox[0].checked!='undefined')
checkbox[0].checked=option.enable_sign_ext}
function ohiChange_enable_old_hangeul_input(op){if(typeof op!='undefined'){if(op=='off'||op=='0')
option.enable_old_hangeul_input=0;else option.enable_old_hangeul_input=1}
var f=document.getElementById('inputText');if(f)
complete_hangeul_syllable(f);Sin3_hangeul_extension();show_keyboard_layout(option.show_layout)}
function ohiChange_enable_phonemic_writing(op){if(op=='off'||op=='0')
option.enable_phonemic_writing=0;else option.enable_phonemic_writing=1;show_keyboard_layout(option.show_layout)}
function ohiChange_force_normal_typing(op){if(typeof op!='undefined'&&op=='off'||op=='0')
option.force_normal_typing=0;else option.force_normal_typing=1;var checkbox=document.getElementsByName('force_normal_typing');if(checkbox&&typeof checkbox[0].checked!='undefined')
checkbox[0].checked=option.force_normal_typing}
function Sin3_hangeul_extension(){if(Ko_type.substr(0,5)!='Sin3-')
return;var opt=document.getElementById('option_enable_Sin3_diphthong_key');if(opt){if(option.enable_old_hangeul_input&&current_layout.type_name.substr(0,5)=='Sin3-')
opt.style.display='block';else opt.style.display='none'}}
function ohiKeyswap(e,key){var KE=ohi_KE;var i=0,swaped=[];if(ohi_KBD_type=='QWERTZ')
swaped=[89,90,90,89,121,122,122,121];if(ohi_KBD_type=='AZERTY')
swaped=[65,81,81,65,87,90,90,87,97,113,113,97,119,122,122,119,77,58,109,59,44,109,58,46,59,44];while(swaped[i]&&swaped[i]!=key)
i+=2;if(i!=swaped.length)
key=swaped[i+1];if(KE!='En'||En_type!='QWERTY'){if(key>64&&key<91&&!e.shiftKey)
key+=32;if(key>96&&key<123&&e.shiftKey)
key-=32}
return key}
function ohiKeypress(e){if(option.turn_off_OHI)
return!1;if(onkeypress_skip)
return!1;var KE=ohi_KE.substr(0,2);var key_pressed=0;var i,e=e||window.event,f=e.target||e.srcElement,n=f.nodeName||f.tagName,key=e.which||e.which==0?e.which:e.keyCode;key=ohiKeyswap(e,key);i=ohiQ[0]+ohiQ[3]+ohiQ[6]||NFD_stack.phoneme.length?1:0;if(f.type=='text'&&n=='INPUT'||n=='TEXTAREA'){if((key==13||key==32)&&!e.ctrlKey&&!e.shiftKey&&!e.altKey){if(!(browser=="MSIE"&&browser_ver<9)){if(key==32)
if(e.preventDefault)
e.preventDefault();if(!i&&f.selectionEnd!=f.selectionStart)
ohiBackspace(f)}
prev_cursor_position=-1;complete_hangeul_syllable(f);if(i&&key==32&&is_phonemic_writing_input()&&option.phonemic_writing_adding_space_every_syllable_end)
ohiInsert(f,0,32);ohiInsert(f,0,key);esc_ext_layout()}
else if((key==10||key==13||key==32)&&(e.ctrlKey^e.shiftKey)){if(e.preventDefault)
e.preventDefault();if((key==10||key==13)&&e.ctrlKey)
ohiChange_KBD_type();else if(key==32&&(e.ctrlKey||e.shiftKey))
ohiChange_KE();key_pressed=0}
else if(key==49&&e.altKey&&!e.ctrlKey&&!e.shiftKey){ohiChange_between_same_type('En');if(e.preventDefault)
e.preventDefault();key_pressed=0}
else if(key==50&&e.altKey&&!e.ctrlKey&&!e.shiftKey){ohiChange_between_same_type('K2');if(e.preventDefault)
e.preventDefault();key_pressed=0}
else if(key==51&&e.altKey&&!e.ctrlKey&&!e.shiftKey){ohiChange_between_same_type('K3');if(e.preventDefault)
e.preventDefault();key_pressed=0}
else if(ohi_KE.substr(0,2)=='En'&&key>32&&key<127&&e.keyCode<127&&!e.altKey&&!e.ctrlKey){if(e.preventDefault)
e.preventDefault();ohiRoman(f,e,key);key_pressed=1}
else if(ohi_KE.substr(0,2)!='En'&&key>32&&key<127&&e.keyCode<127&&!e.altKey&&!e.ctrlKey){if(e.preventDefault)
e.preventDefault();key_pressed=1;if(is_moachigi_input()){pressed_key_accumulation(f,e,key)}
else{if((document.selection&&document.selection.createRange().text.length!=1)||(f.selectionEnd+1&&f.selectionEnd-f.selectionStart!=1))
ohiInsert(f,0,0);if(ohi_KE.substr(0,2)=='Ko'){if(current_layout.type_name.substr(0,2)=='2-')
ohiHangeul2(f,e,key);else if(!ohiHangeul3_abbreviation(f,e,key))
ohiHangeul3(f,e,key)}}}}
if(key_pressed){tableKey_press(key);if(f.id=='inputText')
show_NCR()}
return!1}
function ohiKeydown(e){if(option.turn_off_OHI){show_NCR();return!1}
onkeypress_skip=0;onkeyup_skip=0;var i=0;var e=e||window.event,f=e.target||e.srcElement,n=f.nodeName||f.tagName,key=e.which||e.which==0?e.which:e.keyCode;var KE=ohi_KE;if(f.type=='text'&&n=='INPUT'||n=='TEXTAREA'){if(e.keyCode>=96&&e.keyCode<=111){onkeypress_skip=1;esc_ext_layout();var c=Array(48,49,50,51,52,53,54,55,56,57,42,43,0,45,46,47)[e.keyCode-96];ohiInsert(f,0,c);if(e.preventDefault)
e.preventDefault();return!1}
if(e.keyCode==8){tableKey_press(e.keyCode);if(is_moachigi_input()){if(e.preventDefault)
e.preventDefault();pressed_key_accumulation(f,e,key);onkeyup_skip=0;return!1}
else if(option.abbreviation&&prev_cursor_position>=0){ohiHangeul_moa_backspace(f,e);return!1}
if(!ohiHangeul_backspace(f,e))
return!1;if(e.preventDefault)
e.preventDefault();ohiBackspace(f);onkeyup_skip=1}
if(e.keyCode==13){tableKey_press(e.keyCode);prev_class=[];if(is_moachigi_input()){if(e.preventDefault)
e.preventDefault();if(!(ohiQ[0]+ohiQ[3]+ohiQ[6])&&!NFD_stack.phoneme.length&&typeof f.selectionEnd!='undefined'&&f.selectionStart!=f.selectionEnd)
ohiBackspace(f);pressed_key_accumulation(f,e,key);esc_ext_layout();return!1}}
if(e.keyCode==32){tableKey_press(e.keyCode);if(NFD_stack.phoneme.length||ohiQ[0]+ohiQ[3]+ohiQ[6])
ohiSelection(f,0);prev_class=[];if(is_moachigi_input()){if(!pressing_keys)
return!1;if(e.preventDefault)
e.preventDefault();pressed_key_accumulation(f,e,key);onkeyup_skip=0;return!1}}
if(e.keyCode==20){}
if((e.keyCode>=35&&e.keyCode<=40)||e.keyCode==45||e.keyCode==46){if(NFD_stack.phoneme.length||ohiQ[0]+ohiQ[3]+ohiQ[6]){complete_hangeul_syllable(f);prev_class=[];prev_cursor_position=-1}
esc_ext_layout()}
if(e.keyCode==17){if(!pressing_keys&&pressed_keys.indexOf(17)<0)
pressed_key_accumulation(f,e,key)}
if(e.keyCode!=17&&pressing_keys&&pressed_keys.indexOf(17)>=0){pressed_keys=[];pressing_keys=0;if(ohiQ[0]+ohiQ[3]+ohiQ[6]||NFD_stack.phoneme.length){if(e.keyCode!=65)
ohiSelection(f,0);if(ohiQ[0]+ohiQ[3]+ohiQ[6])
ohiInsert(f,0,0);initialize_NFD_stack()}}
if(e.keyCode==16){if(KE=='Ko'&&Ko_type=='2-Gaon26KM'){pressed_key_accumulation(f,e,key);tableKey_press(e.keyCode)}
if(KE=='Ko'&&Ko_type=='4t-1985')
tableKey_press(e.keyCode);if(Ko_type.substr(0,3)=='3m-'&&!option.force_normal_typing)
tableKey_press(e.keyCode)}
if(e.keyCode<45&&e.keyCode!=16&&e.keyCode!=17&&e.keyCode!=18&&e.keyCode!=13&&e.keyCode!=32){if(NFD_stack.phoneme.length||ohiQ[0]+ohiQ[3]+ohiQ[6])
complete_hangeul_syllable(f);esc_ext_layout();prev_class=[];prev_cursor_position=-1}}
if(f.id=='inputText')
show_NCR()}
function ohiKeyup(e){var e=e||window.event,f=e.target||e.srcElement;var KE=ohi_KE.substr(0,2);var exceptional_keys=[32,13,8,16];if(onkeyup_skip||option.turn_off_OHI||(e.keyCode<47&&exceptional_keys.indexOf(e.keyCode)<0)){}
else if(!option.force_normal_typing&&KE=='Ko'&&Ko_type.substr(0,3)=='3m-'){if(e.keyCode==16||pressing_keys&&!--pressing_keys){while(pressed_keys.indexOf(16)>=0)
pressed_keys.splice(pressed_keys.indexOf(16),1);if(pressed_keys.length)
ohiHangeul3_moa(f,e);prev_pressed_keys=pressed_keys.slice();pressed_keys=[];pressing_keys=0}}
else if(KE=='Ko'&&Ko_type=='2-Gaon26KM'){if(pressing_keys&&!--pressing_keys){if(pressed_keys.length==1&&pressed_keys[0]==16&&e.keyCode==16)
complete_hangeul_syllable(f);pressed_keys=[]}}
else if(KE=='Ko'&&Ko_type=='4t-1985'){if(e.keyCode==16)
shift_lock=1}
if(e.keyCode==17&&pressing_keys&&pressed_keys.indexOf(17)>=0){--pressing_keys;pressed_keys.splice(pressed_keys.indexOf(17))}
if(f.id=='inputText')
show_NCR()}
function pressed_key_accumulation(f,e,key){if(pressed_keys.length&&pressed_keys[pressed_keys.length-1]==key){ohiHangeul3_moa(f,e);pressed_keys=[];pressing_keys=0;prev_cursor_position=-1;if(key==8){ohiHangeul_moa_backspace(f,e);return}
ohiHangeul3(f,e,key)}
else{++pressing_keys;pressed_keys.push(key)}}
function inputText_focus(){var f=document.getElementById('inputText');if(f)
f.focus()}
function inputText_rows(r){var f=document.getElementById('inputText');if(f)
f.rows=r.toString()}
function url_query(){var field,value,TF;var address=unescape(location.href);var fields=(address.slice(address.indexOf('?')+1,address.length)).split('&');for(var i=0;i<fields.length;++i){field=fields[i].split('=')[0].toLowerCase();value=fields[i].split('=')[1];TF=!value||value=='0'||value.toLowerCase=='f'||value.toLowerCase=='false'?0:1;if(value===undefined||!value)
continue;if(field=='kbd'){if(value.toUpperCase()=='QWERTY'||value.toUpperCase()=='QWERTZ'||value.toUpperCase()=='AZERTY')
ohiChange_KBD_type(value.toUpperCase())}
else if(field=='en'){ohiChange('En',value.toLowerCase())}
else if(field=='ko'||field=='k2'||field=='k3'){ohiChange('Ko',value.toLowerCase())}
else if(field=='statusbar'){setTimeout(function(){show_ohiStatusBar(TF)},250)}
else if(field=='sign_ext'){ohiChange_enable_sign_ext(TF)}
else if(field=='double_final_ext'||field=='df_ext'){ohiChange_enable_double_final_ext(TF)}
else if(field=='sl'||field=='square layout'){option.square_layout=TF}
else if(field=='normal_typing'||field=='nt'){option.force_normal_typing=TF}
else if(field=='ncr'){option.NCR=TF}
else if(field=='ncr_only_cgg'){NCR_option.convert_only_NFD_hangeul_encoding=TF}
else if(field=='y'){option.enable_old_hangeul_input=TF;ohiChange_enable_old_hangeul_input()}
else if(field=='diph'||field=='diphthong'){option.enable_Sin3_diphthong_key=TF}
else if(field=='pw'||field=='phonemic_writing'){option.phonemic_writing=TF}
else if(field=='abbr'||field=='abbreviation'){option.abbreviation=TF}
else if(field=='cc'||field=='convenience_combination'){option.convenience_combination=TF}
else if(field=='sun'||field=='sunalae'){option.sunalae=TF}
else if(field=='row'){setTimeout(function(){inputText_rows(value)},250)}
else if(field=='sq'){option.square_layout=TF}}}
function tableKey_press(key){var shift1=document.getElementById('key41');var shift2=document.getElementById('key52');if(!option.show_layout||!shift1)
return;shift1.className=shift1.className.substr(0,2);shift2.className=shift2.className.substr(0,2);var layout_name=current_layout.type_name;if(key==188)
key=44;if(key==190)
key=46;if(key==222)
key=39;if(key==219)
key=91;if(key==221)
key=93;if(key==220)
key=92;if(key==173)
key=45;if(key==191)
key=47;if(key==192)
key=96;if(key==16||current_layout.type_name=='4t-1985'&&shift_lock){shift1.className+=' pressed';shift2.className+=' pressed'}
var key_td;for(j=0;j<dkey.length;++j){if(j==41||j==52)
continue;key_td=document.getElementById('key'+j);key_td.className=key_td.className.replace(/ clicked| pressed/,'');if(key==dkey[j]||key==ukey[j]||(layout_name.substr(0,3)=='3m-'&&!option.force_normal_typing&&(pressed_keys.indexOf(dkey[j])>=0||pressed_keys.indexOf(ukey[j])>=0))){key_td.className+=' pressed'}
if(key==ukey[j]&&key!=dkey[j]){shift1.className+=' pressed';shift2.className+=' pressed'}}}
function tableKey_clicked(e,key_num,dk,uk){inputText_focus();var key,f=document.getElementById('inputText');var n=f.nodeName||f.tagName;if(!f||n!='TEXTAREA')
return!1;KE=ohi_KE.substr(0,2);var shiftlock=document.getElementById('key28');var shift1=document.getElementById('key41');var shift2=document.getElementById('key52');if(dk==20){if(!shiftlock_click){shiftlock.style.backgroundColor='orange';shiftlock_click=1}
else{shiftlock.style.backgroundColor='';shiftlock_click=0}}
if(dk==16&&!shift_click){shift_click=1;shift1.style.backgroundColor='orange';shift2.style.backgroundColor='orange';return}
if((dk==32||dk==13||dk==9)&&!shift_click){complete_hangeul_syllable(f);esc_ext_layout();ohiInsert(f,0,dk);return}
if(dk==8&&!shift_click){if(option.abbreviation&&prev_cursor_position>=0){ohiHangeul_moa_backspace(f,e);return!1}
if(!ohiHangeul_backspace(f,e))
return;ohiBackspace(f);inputText_focus();esc_ext_layout();return}
if(dk==-1){ohiChange_KBD_type();inputText_focus()}
if(dk==-2){ohiChange_between_same_type('En')}
if(dk==-3){ohiChange_between_same_type('Ko');inputText_focus()}
if(dk==-11){ohiChange_between_same_type('K3');inputText_focus()}
if(dk==-12){ohiChange_between_same_type('K2')}
if(dk==-13){ohiChange_KE();inputText_focus()}
key=(shift_click+shiftlock_click)%2?uk:dk;if(ohi_KE.substr(0,2)=='En'&&key>32&&key<127)
ohiRoman(f,0,key);if(ohi_KE.substr(0,2)!='En'&&key>32&&key<127){if(document.selection&&document.selection.createRange().text.length!=1)
ohiInsert(f,0,0);if(KE=='Ko'){if(current_layout.type_name.substr(0,2)=='2-')
ohiHangeul2(f,e,key);else if(!ohiHangeul3_abbreviation(f,e,key))
ohiHangeul3(f,e,key)}}
for(var j=0;j<dkey.length;++j){var key_td=document.getElementById('key'+j);key_td.className=key_td.className.replace(/ clicked| pressed/g,'')}
if(dk!=16&&dk!=20)
document.getElementById('key'+key_num).className+=' clicked';shift_click=0;shift1.style.backgroundColor='';shift2.style.backgroundColor=''}
function ohi_code_tables(){var i;ohi_cheos=[128,129,131,134,135,136,144,145,146,148,149,150,151,152,153,154,155,156,157];ohi_ga=[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86];ohi_ggeut=[1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30];ohi_hangeul_phoneme=ohi_cheos.concat(ohi_ga,ohi_ggeut);ohi_hotbadchim=[1,4,7,9,17,18,21,23,24,26,27,28,29,30];unicode_modern_hotbatchim=[0x11A8,0x11AB,0x11AE,0x11AF,0x11B7,0x11B8,0x11BA,0x11BC,0x11BD,0x11BE,0x11BF,0x11C0,0x11C1,0x11C2];compatibility_cheos=[0x3131,0x3132,0x3134,0x3137,0x3138,0x3139,0x3141,0x3142,0x3143,0x3145,0x3146,0x3147,0x3148,0x3149,0x314A,0x314B,0x314C,0x314D,0x314E,0x317F,0x3181,0x3186];i=0x314F;while(i<=0x3163)
compatibility_ga.push(i++);compatibility_ga.push(0x318D);compatibility_ggeut=[0x3131,0x3132,0x3133,0x3134,0x3135,0x3136,0x3137,0x3139,0x313A,0x313B,0x313C,0x313D,0x313E,0x313F,0x3140,0x3141,0x3142,0x3144,0x3145,0x3146,0x3147,0x3148,0x314A,0x314B,0x314C,0x314D,0x314E,0x317F,0x3181,0x3186];compatibility_hangeul_phoneme=compatibility_cheos.concat(compatibility_ga,compatibility_ggeut);halfwidth_cheos=[0xFFA1,0xFFA2,0xFFA4,0xFFA7,0xFFA8,0xFFA9,0xFFB1,0xFFB2,0xFFB3,0xFFB5,0xFFB6,0xFFB7,0xFFB8,0xFFB9,0xFFBA,0xFFBB,0xFFBC,0xFFBD,0xFFBE];for(i=0;i<4;++i)
for(j=0;j<(i==3?3:6);++j)
halfwidth_ga.push(0xFFC2+i*8+j);halfwidth_ggeut=[0xFFA1,0xFFA2,0xFFA3,0xFFA4,0xFFA5,0xFFA6,0xFFA7,0xFFA9,0xFFAA,0xFFAB,0xFFAC,0xFFAD,0xFFAE,0xFFAF,0xFFB0,0xFFB1,0xFFB2,0xFFB4,0xFFB5,0xFFB6,0xFFB7,0xFFB8,0xFFBA,0xFFBB,0xFFBC,0xFFBD,0xFFBE];halfwidth_hangeul_phoneme=halfwidth_cheos.concat(halfwidth_ga,halfwidth_ggeut);i=0x1100;while(i<=0x115E)
unicode_cheos.push(i++);i=0xA960;while(i<=0xA97C)
unicode_cheos.push(i++);i=0x1161;while(i<=0x11A7)
unicode_ga.push(i++);i=0xD7B0;while(i<=0xD7C6)
unicode_ga.push(i++);i=0x11A8;while(i<=0x11FF)
unicode_ggeut.push(i++);i=0xD7CB;while(i<=0xD7FB)
unicode_ggeut.push(i++);unicode_ggeut_to_cheos=[0x1100,0x1101,0,0x1102,0,0,0x1103,0x1105,0,0,0,0,0,0,0,0x1106,0x1107,0,0x1109,0x110A,0x110B,0x110C,0x110E,0x110F,0x1110,0x1111,0x1112,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0x111D,0,0,0,0x112B,0,0,0,0,0x1140,0,0,0,0,0x114C,0,0,0,0x1157,0,0,0,0,0x1159,0,0,0,0,0,0,0,0,0x1104,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0x1108,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0x110D,0,0];unicode_cheos_to_ggeut=[0x11A8,0x11A9,0x11AB,0x11AE,0xD7CD,0x11AF,0x11B7,0x11B8,0xD7E6,0x11BA,0x11BB,0x11BC,0x11BD,0xD7F9,0x11BE,0x11BF,0x11C0,0x11C1,0x11C2,0,0,0,0,0,0,0,0,0xD7DD,0,0x11E2,0,0,0,0,0,0,0,0,0,0,0,0,0,0x11E6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0x11EB,0,0,0,0,0,0,0,0,0,0,0,0x11F0,0,0,0,0,0,0,0,0,0,0,0,0,0x11F9];unicode_NFD_hangeul_phoneme=unicode_cheos.concat(unicode_ga,unicode_ggeut);unicode_NFD_hangeul_filler=[0x115F,0x1160];unicode_NFD_hangeul_code=unicode_NFD_hangeul_phoneme.concat(unicode_NFD_hangeul_filler);unicode_NFD_hangeul_sidedot=[0x302E,0x302F];i=0x1100;while(i<=0x1112)
unicode_modern_cheos.push(i++);i=0x1161;while(i<=0x1175)
unicode_modern_ga.push(i++);i=0x11A8;while(i<=0x11C2)
unicode_modern_ggeut.push(i++);unicode_modern_hangeul_phoneme=unicode_modern_cheos.concat(unicode_modern_ga,unicode_modern_ggeut);unicode_non_combined_cheos=[0x1100,0x1102,0x1103,0x1105,0x1106,0x1107,0x1109,0x110B,0x110C,0x110E,0x110F,0x1110,0x1111,0x1112];unicode_non_combined_ga=[0x1161,0x1162,0x1164,0x1165,0x1166,0x1168,0x1169,0x1172,0x1173,0x1175,0x119E];unicode_non_combined_ggeut=[0x11A8,0x11AB,0x11AE,0x11AF,0x11B7,0x11B8,0x11BA,0x11BC,0x11BD,0x11BE,0x11BF,0x11C0,0x11C1,0x11C2];unicode_non_combined_phoneme=unicode_non_combined_cheos.concat(unicode_non_combined_ga,unicode_non_combined_ggeut);dkey=[96,49,50,51,52,53,54,55,56,57,48,45,61,8,9,113,119,101,114,116,121,117,105,111,112,91,93,92,20,97,115,100,102,103,104,106,107,108,59,39,13,16,122,120,99,118,98,110,109,44,46,47,16,-1,-2,-3,32,-13,-12,-11];ukey=[126,33,64,35,36,37,94,38,42,40,41,95,43,8,9,81,87,69,82,84,89,85,73,79,80,123,125,124,20,65,83,68,70,71,72,74,75,76,58,34,13,16,90,88,67,86,66,78,77,60,62,63,16,-1,-2,-3,32,-13,-12,-11];shift_table=[0x31,0x27,0x33,0x34,0x35,0x37,0x22,0x39,0x30,0x38,0x3D,0x3C,0x5F,0x3E,0x3F,0x29,0x21,0x40,0x23,0x24,0x25,0x5E,0x26,0x2A,0x28,0x3B,0x3A,0x2C,0x2B,0x2E,0x2F,0x32,0x61,0x62,0x63,0x64,0x65,0x66,0x67,0x68,0x69,0x6A,0x6B,0x6C,0x6D,0x6E,0x6F,0x70,0x71,0x72,0x73,0x74,0x75,0x76,0x77,0x78,0x79,0x7A,0x7B,0x7C,0x7D,0x36,0x2D,0x7E,0x41,0x42,0x43,0x44,0x45,0x46,0x47,0x48,0x49,0x4A,0x4B,0x4C,0x4D,0x4E,0x4F,0x50,0x51,0x52,0x53,0x54,0x55,0x56,0x57,0x58,0x59,0x5A,0x5B,0x5C,0x5D,0x60]}
if(!Array.prototype.indexOf){Array.prototype.indexOf=function(searchElement,fromIndex){var k;if(!this)
throw new TypeError('"this" is null or not defined');var O=Object(this);var len=O.length>>>0;if(len===0)
return-1;var n=+fromIndex||0;if(Math.abs(n)===Infinity)
n=0;if(n>=len)
return-1;k=Math.max(n>=0?n:len-Math.abs(n),0);while(k<len){var kValue;if(k in O&&O[k]===searchElement)
return k;k++}
return-1}}
if('ab'.substr(-1)!='b'){String.prototype.substr=function(substr){return function(start,length){if(start<0)
start=this.length+start;return substr.call(this,start,length)}}(String.prototype.substr)}
ohi_code_tables();browser_detect();ohiStart();url_query()