$(function(){
  // scroll to top
  $("#totop").click(function(){
    $("body,html").animate({scrollTop:0},1000);
  });
  //

  // menu btn toggle
  $('nav #open_menu').click(function(){
    $('nav ul').css('display', 'inherit');
  })
  $('nav #close_menu').click(function(){
    $('nav ul').css('display', 'none');
  })
  //

  // toggle time count
  var has_active = false;
  $('#time_count').click(function(){
    has_active = $('#time_count').hasClass('active');
    console.log(has_active);

    if(has_active){
      $('#time_count').removeClass('active');
      $('.time_group').css('display','none');
      $('nav').css('margin-top','0');
      $('.hero .hero_title').css('margin-top','63px');
    }
    if(!has_active) {
      $('#time_count').addClass('active');
      $('.time_group').css('display','block');
      $('nav').css('margin-top','30px');
      $('.hero .hero_title').css('margin-top','33px');
    }
  })
  //

  // add receipt input
  $('.add_receipt').click(function(){
    var receipt_input = $('<input type="text" class="receipt_input" placeholder="請輸入發票號碼">');
    $('.receipt').css('height', 'auto');
    $('.register').css('height', 'auto');
    $('.register_content').css('height', 'auto');
    $('.send_register').css('margin-bottom', '10px');
    $('.receipt_input_group').append(receipt_input);
  })

})

// Date count
var startDate = new Date(2017,5,1,00,00);
var endDate = new Date(2017,6,31,23,59);
var spantime = (endDate - startDate)/1000;
window.onload = function(){
  console.log(getString(startDate));
  console.log(getString(endDate));
  setInterval(cal, 1000);
}

function getString(dt){
  return dt.getFullYear() + "年" + (dt.getMonth()+1) + "月" +    dt.getDate() + "日" + dt.getHours() + "時" + dt.getMinutes() + "分";
}

function cal(){
  spantime --;
  var d = Math.floor(spantime / (24 * 3600));
  var h = Math.floor((spantime % (24*3600))/3600);
  var m = Math.floor((spantime % 3600)/(60));
  var s = Math.floor(spantime%60);
  str = d + "天 " + h + "時 " + m + "分 " + s + "秒 ";

  $('#d_1').html(d.toString()[0]);
  $('#d_2').html(d.toString()[1]);
  $('#h_1').html(h.toString()[0]);
  $('#h_2').html(h.toString()[1]);
  $('#m_1').html(m.toString()[0]);
  $('#m_2').html(m.toString()[1]);
  $('#s_1').html(s.toString()[0]);
  $('#s_2').html(s.toString()[1]);
}
// Date count end
