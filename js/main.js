$(window).scroll(function(){
  //Scorll to top button
  var show_topbtn = $('#hero').outerHeight() - $(window).height();
  if( $(this).scrollTop() > show_topbtn ){
    $("#totop").fadeIn("fast");
  }else {
    $("#totop").stop().fadeOut("fast");
  }

  var footer_position = $('footer').offset().top - 70;
  //console.log($("#totop").offset().top,footer_position);
  var scrollTop = $(this).scrollTop() + $(window).height();
  if(scrollTop > footer_position){
    $("#totop").addClass("totop_scroll_bottom");
  }
  else{
    $("#totop").removeClass("totop_scroll_bottom");
  }
});

$(function(){

  // $('#nav .hvr-back-pulse').click(function(){
  //     $(this).removeClass().addClass('magictime puffOut');
  
  //     var wait = window.setTimeout( function(){
  //       $('#nav .magictime.puffOut').removeClass().addClass('hvr-back-pulse')}, 1500 );
  // });

  // scroll to top
  $("#totop").click(function(){
    $("body,html").animate({scrollTop:0},1000);
  });
  //
  $('#nav .nav_list').click(function(event){
    event.preventDefault();
    var id = $(this).find("a[class=scroll]").attr("data-link");
    console.log($(this));
    var scroll_length = $(id).offset().top;
    //console.log(id,scroll_length);
    $("body,html").animate({scrollTop:scroll_length},1000);
  });

  // $('#nav a[class=scroll]').click(function(event){
  //   event.preventDefault()
  //   var id = $(this).attr("data-link");
  //   var scroll_length = $(id).offset().top;
  //   // console.log(id,scroll_length);
  //   $("body,html").animate({scrollTop:scroll_length},1000);
  // });

  $('.hero .rigester').click(function(){
    event.preventDefault()
    var scroll_length = $('#register').offset().top;
    $("body,html").animate({scrollTop:scroll_length},1000);
  });

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
    //console.log(has_active);

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
  });
  //

  // add receipt input
  $('.add_receipt').click(function(){
    var receipt_input = $('<input type="text" class="receipt_input" name="receipt" placeholder="請輸入發票號碼" onfocus=this.placeholder="" onblur=this.placeholder="請輸入發票編號" readonly>');
    $(this).addClass("after_click");
    receipt_input.focus(showerror);
    $('.remove_receipt').addClass("after_click");
    // var receipt_input = $('<input type="text" class="receipt_input" name="receipt" placeholder="請輸入發票號碼">');
    $('.receipt').css('height', 'auto');
    $('.register').css('height', 'auto');
    $('.register_content').css('height', 'auto');
    $('.send_register').css('margin-bottom', '30px');
    $('.receipt_input_group').append(receipt_input);

    console.log($(".receipt_input").length );
    if($(".receipt_input").length > 1){
      $(".receipt_button.remove_receipt").removeClass("remove_receipt_hidden");
    }
  });

  $('.remove_receipt').click(function(){

    // var receipt_input = $('<input type="text" class="receipt_input" name="receipt" placeholder="請輸入發票號碼">');
    var input = $('.receipt_input')
    if(input.length > 1){
      $(this).addClass("after_click");
      input.last().remove();
    }
    if($(".receipt_input").length == 1){
      $(".receipt_button.remove_receipt").addClass("remove_receipt_hidden");
    }
  });

  $('.next_page').click(function(){
    var height = $('#hero').height();
    $('html, body').animate({
        scrollTop: height
    }, 500);
  });
  var heroHeight = $("#hero").height();
  if($(window).width() < 380){

    var lastScrollTop = 0;
    $(window).scroll(function(event){
      var st = $(this).scrollTop();

      if(st < heroHeight){
        return;
      }
      if (st > lastScrollTop){
         // downscroll code
         $('nav').css("transform","translateY(-100%)");
         console.log("downscroll code");
      } else {
        // upscroll code
        $('nav').css("transform","translateY(0%)");
        console.log("upscroll code");
      }
      lastScrollTop = st;
    });
  }

  var clipboard = new Clipboard('#copy_mail');
    clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    $("#copy_mail_finish").removeClass("waiting_copy");
    setTimeout( function(){
      $("#copy_mail_finish").addClass('waiting_copy')
    }, 1500 );
    e.clearSelection();
});

function input_register(){
  $('.register_content input[type=text]').focus(function(){
    var ele = $(this);
    var placeholder = ele.attr("placeholder");
    ele.data("placeholder",placeholder);
    ele.attr("placeholder","");
    console.log(placeholder);
  });

  $('.register_content input[type=text]').blur(function(){
      var ele = $(this);
      var placeholder = ele.data("placeholder");
      ele.attr("placeholder",placeholder);
      //console.log(placeholder);
  });
}
  
  //pink_color_shadow
  // Change product content
  var product = [];
  // milk 乳霜洗髮乳
  var p1 = {
    'name': 'milk 乳霜洗髮乳',
    'items': {
      'item1':{
        'name': 'milk 乳霜沐浴乳-滋潤型',
        'type_name': '沐浴乳滋潤型',
        'des': '<h2>milk <span class="pink_color_shadow">乳霜沐浴乳-滋潤型<span class="pink_color_shadow"></h2><text_group><h3>全天候的滋養呵護</h3><p>• 告別乾枯、絕對滋潤</p><p>• 讓肌膚凍齡</p><p>• 乳清蛋白+乳霜加倍滋潤</p><p>• 洗後光滑不緊繃</p></text_group><!--<text_group><h3>乳霜洗髮乳 (無矽靈)</h3><p>• 乳清蛋白+乳霜加倍滋潤</p><p>• 洗後光滑不緊繃</p></text_group>-->',
        'img': 'asset/p1-4.png',
        'spec': ['spec1','spec10','spec12','spec6'],
        //'type': ['洗髮乳-清潤型', '沐浴乳-清潤型', '洗髮乳-滋潤型', '沐浴乳-滋潤型']
        'type': ['沐浴乳-滋潤型','沐浴乳-清潤型','洗髮乳-滋潤型','洗髮乳-清潤型']
      },
      'item2':{
        'name': 'milk 乳霜沐浴乳-清潤型',
        'type_name': '沐浴乳清潤型',
        'des': '<h2>milk <span class="pink_color_shadow">乳霜沐浴乳-清潤型</span></span></h2><text_group><h3>全天候的滋養呵護</h3><p>• 告別乾枯、絕對滋潤</p><p>• 讓肌膚凍齡</p></text_group><!--<text_group><h3>乳霜沐浴乳</h3><p>• 乳清蛋白+乳霜加倍滋潤</p><p>• 洗後光滑不緊繃</p></text_group>-->',
        'img': 'asset/p1-2.png',
        'spec': ['spec1','spec10','spec6'],
        //'type': ['洗髮乳-清潤型', '沐浴乳-清潤型', '洗髮乳-滋潤型', '沐浴乳-滋潤型']
        'type': ['沐浴乳-滋潤型','沐浴乳-清潤型','洗髮乳-滋潤型','洗髮乳-清潤型']
      },
      'item3':{
        'name': 'milk 乳霜洗髮乳-滋潤型',
        'type_name': '洗髮乳滋潤型',
        'des': '<h2>milk <span class="pink_color_shadow">乳霜洗髮乳-滋潤型<span></h2><text_group><h3>全天候的滋養呵護</h3><p>• 告別乾枯、絕對滋潤</p><p>• 讓秀髮凍齡</p><p>• 無矽靈</p></text_group><!--<text_group><h3>乳霜洗髮乳 (無矽靈)</h3><p>• 無矽靈讓頭皮及頭髮更健康</p><p>• 柔順亮澤的養髮好產品</p></text_group>-->',
        'img': 'asset/p1-3.png',
        'spec': ['spec1','spec3','spec5','spec4','spec2'],
        //'type': ['洗髮乳-清潤型', '沐浴乳-清潤型', '洗髮乳-滋潤型', '沐浴乳-滋潤型']
        'type': ['沐浴乳-滋潤型','沐浴乳-清潤型','洗髮乳-滋潤型','洗髮乳-清潤型']
      },
      'item4':{
        'name': 'milk 乳霜洗髮乳-清潤型',
        'type_name': '洗髮乳清潤型',
        'des': '<h2>milk <span class="pink_color_shadow">乳霜洗髮乳-清潤型</span></h2><text_group><h3>全天候的滋養呵護</h3><p>• 告別乾枯、絕對滋潤</p><p>• 讓秀髮凍齡</p><p>• 無矽靈</p></text_group><!--<text_group><h3>乳霜洗髮乳 (無矽靈)</h3><p>• 無矽靈讓頭皮及頭髮更健康</p><p>• 柔順亮澤的養髮好產品</p></text_group>-->',
        'img': 'asset/p1-1.png',
        'spec': ['spec1','spec3','spec5','spec4'],
        //'type': ['洗髮乳-清潤型', '沐浴乳-清潤型', '洗髮乳-滋潤型', '沐浴乳-滋潤型']
        'type': ['沐浴乳-滋潤型','沐浴乳-清潤型','洗髮乳-滋潤型','洗髮乳-清潤型']
      }
    }
  };
  // 果酸沐浴乳
  var p2 = {
    'name': '果酸沐浴乳',
    'items': {
      'item1': {
        'name': '果酸沐浴乳',
        'type_name': '果酸沐浴乳',
        'des': '<h2 class="pink_color_shadow">果酸沐浴乳</h2><text_group><h3>真正寵愛的保濕因子</h3><p>• 超優質洗感、好沖不滑溜</p><p>• 保濕成分真正寵愛您</p></text_group><!--<text_group><h3>果酸沐浴乳</h3><p>• 保濕柔膚因子、真正溫柔洗淨</p><p>• 維他命E及金盞花等萃取、細膩呵護肌膚</p></text_group>-->',
        'img': 'asset/p2-1.png',
        'spec': ['spec1','spec6','spec7'],
        'type': ['果酸沐浴乳', '果酸洗髮乳 (無矽靈)']
      },
      'item2': {
        'name': '果酸沐浴乳',
        'type_name': '果酸洗髮乳',
        'des': '<h2 class="pink_color_shadow marB29">果酸洗髮乳</h2><text_group><!--<h3>真正寵愛的保濕因子</h3><p>• 超優質洗感、好沖不滑溜</p><p>• 保濕成分真正寵愛您</p>--><!--</text_group><text_group><h3>果酸沐浴乳</h3>--><p>• 維他命E讓頭皮健康年輕</p><p>• 天然果酸讓頭髮柔順、減少分岔斷裂</p><p>• 無矽靈</p><!--</text_group>-->',
        'img': 'asset/p2-2.png',
        'spec': ['spec2','spec3','spec7'],
        'type': ['果酸沐浴乳', '果酸洗髮乳 (無矽靈)']
      },
    }
  }
  // 保濕化妝水
  var p3 = {
    'name': '保濕化妝水',
    'items': {
      'item1': {
        'name': '保濕化妝水',
        'type_name': '保濕化妝水',
        'des': '<h2 class="pink_color_shadow">保濕化妝水</h2><text_group><h3>超水嫩的保養推薦</h3><p>• 從肌底開始保濕再保濕</p><p>• 保養級玻尿酸補充並鎖住水分</p></text_group><text_group><h3>保濕步驟1~保濕化妝水</h3><p>• 當化妝水或濕敷都超好用</p><p>• 青春又亮白~特選綠茶及蘆薈萃取</p></text_group>',
        'img': 'asset/p3-1.png',
        'spec': ['spec11','spec8','spec9'],
        'type': ['保濕步驟1~保濕化妝水', '保濕步驟2~保濕柔膚乳']
      },
      'item2': {
        'name': '保濕柔膚乳',
        'type_name': '保濕柔膚乳',
        'des': '<h2 class="pink_color_shadow">保濕柔膚乳</h2><text_group><h3>超水嫩的保養推薦</h3><p>• 從肌底開始保濕再保濕</p><p>• 保養級玻尿酸補充並鎖住水分</p></text_group><text_group><h3>保濕步驟2~保濕柔膚乳</h3><p>• 保養級橄欖油、乳木果油好滋潤</p><p>• 豐富膠原蛋白讓肌膚超Q彈</p></text_group>',
        'img': 'asset/p3-2.png',
        'spec': ['spec11','spec9','spec6'],
        'type': ['保濕步驟1~保濕化妝水', '保濕步驟2~保濕柔膚乳']
      },
    }
  }
  // 禪之喜悅沐浴乳
  var p4 = {
    'name': '禪之喜悅沐浴乳',
    'items': {
      'item1': {
        'name': '禪之喜悅沐浴乳',
        'type_name': '禪之喜悅沐浴乳',
        'des': '<h2 class="pink_color_shadow">禪之喜悅沐浴乳</h2><text_group><h3>靜心舒壓的沐浴時光</h3><p>• 舒緩放鬆的植物萃取</p><p>• 親膚保濕成分讓肌膚水嫩健康</p></text_group>',
        'img': 'asset/p4-1.png',
        'spec': ['spec1','spec9','spec6'],
        'type': ['禪之喜悅沐浴乳']
      }
    }
  }
  // 檀香洗髮乳
  var p5 = {
    'name': '檀香洗髮乳',
    'items': {
      'item1': {
        'name': '檀香沐浴乳',
        'type_name': '檀香沐浴乳',
        'des': '<h2 class="pink_color_shadow">檀香沐浴乳</h2><text_group><h3>健康修護的植物油及植萃</h3><p>• 暢銷經典產品、專為東方人設計</p><p>• 修護成分讓肌膚健康</p></text_group><!--<text_group><h3>檀香沐浴乳</h3><p>• 菩提樹、洋甘菊、小黃瓜等植萃，讓肌膚活力Q彈</p><p>• 親膚性配方，減緩肌膚乾裂</p></text_group>-->',
        'img': 'asset/p5-2.png',
        'spec': ['spec9','spec6'],
        'type': ['檀香沐浴乳','檀香洗髮乳', '檀香沐浴乳-乳木果油','檀香洗髮乳-山茶花油']
      },
      'item2': {
        'name': '檀香洗髮乳',
        'type_name': '檀香洗髮乳',
        'des': '<h2 class="pink_color_shadow">檀香洗髮乳</h2><text_group><h3>健康修護的植物油及植萃</h3><p>• 暢銷經典產品、專為東方人設計</p><p>• 修護成分讓頭皮健康</p><p>• 無矽靈</p></text_group><!--<text_group><h3>乳霜洗髮乳 (無矽靈)</h3><p>• 荷荷芭油及當藥等植萃，讓秀髮免於吹風整燙傷害</p><p>• 酪梨油讓頭皮更健康</p></text_group>-->',
        'img': 'asset/p5-1.png',
        'spec': ['spec9','spec6','spec4'],
        'type': ['檀香沐浴乳','檀香洗髮乳', '檀香沐浴乳-乳木果油','檀香洗髮乳-山茶花油']
      },
      
      'item3': {
        'name': '檀香沐浴乳-乳木果油',
        'type_name': '檀香沐浴乳',
        'des': '<h2 class="pink_color_shadow">檀香沐浴乳-乳木果油</h2><text_group><h3>健康修護的植物油及植萃</h3><p>• 暢銷經典產品、專為東方人設計</p><p>• 修護成分讓肌膚及頭皮健康</p><p>• 特別添加乳木果油</p><p>• 菩提樹、洋甘菊、小黃瓜等植萃，讓肌膚活力Q彈</p><p>• 親膚性配方，減緩肌膚乾裂</p></text_group><!--<text_group><h3>乳霜洗髮乳 (無矽靈)</h3><p>• 菩提樹、洋甘菊、小黃瓜等植萃，讓肌膚活力Q彈</p><p>• 親膚性配方，減緩肌膚乾裂</p></text_group>-->',
        'img': 'asset/p5-4.png',
        'spec': ['spec9','spec6','spec12'],
        'type': ['檀香沐浴乳','檀香洗髮乳', '檀香沐浴乳-乳木果油','檀香洗髮乳-山茶花油']
      },
      'item4': {
        'name': '檀香洗髮乳',
        'type_name': '檀香洗髮乳-山茶花油',
        'des': '<h2 class="pink_color_shadow">檀香洗髮乳-山茶花油</h2><text_group><h3>健康修護的植物油及植萃</h3><p>• 暢銷經典產品、專為東方人設計</p><p>• 修護成分讓頭皮健康</p><p>• 無矽靈</p><p>• 特別添加山茶花油</p><p>• 荷荷芭油及當藥等植萃，讓秀髮免於吹風整燙傷害</p><p>• 酪梨油讓頭皮更健康</p></text_group><!--<text_group><h3>乳霜洗髮乳 (無矽靈)</h3><p>• 荷荷芭油及當藥等植萃，讓秀髮免於吹風整燙傷害</p><p>• 酪梨油讓頭皮更健康</p></text_group>-->',
        'img': 'asset/p5-3.png',
        'spec': ['spec9','spec3','spec5','spec4','spec2'],
        'type': ['檀香沐浴乳','檀香洗髮乳', '檀香沐浴乳-乳木果油','檀香洗髮乳-山茶花油']
      }
    }
  }
  product['p1'] = p1;
  product['p2'] = p2;
  product['p3'] = p3;
  product['p4'] = p4;
  product['p5'] = p5;

  var selected_item = "p1";
  var items_length = 4;
  var default_item = 1;
  var hero_selected_item;

  $('.hero_product_item').click(function(){
    $('.item_group .item').removeClass('active');
    hero_selected_item = $(this).attr('data-id');
    var hero_selected_index = $(this).index();
    console.log(hero_selected_item);
    console.log(hero_selected_index);
    changeProduct(hero_selected_item, default_item);
    $('.item_group .item').eq(hero_selected_index).addClass('active');
  })

  $('.item').click(function(){
    $('#next_arrow').css('display', 'block');
    $('#pre_arrow').css('display', 'none');
    selected_item = $(this).attr('id');
    console.log(selected_item);
    if (selected_item == "p4") {
      $('#next_arrow').css('display', 'none');
    }
    $('.item_group .item').removeClass('active');
    $(this).addClass('active');
    default_item = 1;
    if(selected_item != "p4"){
      $('#next_arrow').html('<img src="asset/next@2x.png">'+product[selected_item].items['item'+(default_item+1)].type_name);
    }
    changeProduct(selected_item, default_item);
    console.log(items_length);
  });

  $('.product_type').on('click', '.type_item', function(){
    var selected_item_type = $(this).index();
    selected_item_type+=1;
    console.log(selected_item_type);
    changeProduct(selected_item, selected_item_type);
  })

  $('.arrow').click(function(){
    var selected_product_item = $(this).parents().parents().attr('data-item');
    var click_arrow = $(this).attr('id');

    // detect arrow show or not
    if (default_item == (items_length-1)) {
      console.log("last");
      $('#next_arrow').css('display', 'none');
    }else if (default_item == 2) {
      $('#pre_arrow').css('display', 'none');
    }

    // click arrow to change product content
    if( click_arrow == "next_arrow"){
      $('#pre_arrow').css('display', 'block');
      if(default_item < items_length){
        default_item +=1;
        changeProduct(selected_product_item, default_item);
        $('#pre_arrow').html('<img src="asset/pre@2x.png">'+product[selected_product_item].items['item'+(default_item-1)].type_name);
        $('#next_arrow').html('<img src="asset/next@2x.png">'+product[selected_product_item].items['item'+(default_item+1)].type_name);
        // $('#next_arrow').css('display', 'block');
        console.log(default_item);
      }
    }else if( click_arrow == "pre_arrow"){
      $('#next_arrow').css('display', 'block');
      console.log(default_item);
      if(default_item>1){
        default_item = default_item-1;
        $('#pre_arrow').html('<img src="asset/pre@2x.png">'+product[selected_product_item].items['item'+(default_item)].type_name);
        $('#next_arrow').html('<img src="asset/next@2x.png">'+product[selected_product_item].items['item'+(default_item+1)].type_name);
        changeProduct(selected_product_item, default_item);
      }
      console.log(default_item);
    }

  })

  function changeProduct(selected_item, default_item){
    $('.des_spec').html('');
    $('.product_type').html('');
    $('.product_content').addClass('item'+default_item);
    $('.product_content').attr('data-item', selected_item);
    items_length = Object.keys(product[selected_item].items).length;
    console.log(default_item);
    $('#p_title').html(product[selected_item].items['item'+default_item].name);
    $('.des_text').html(product[selected_item].items['item'+default_item].des);
    $('.product_img').html('<img src='+product[selected_item].items['item'+default_item].img+'>');
    $.each(product[selected_item].items['item'+default_item].spec, function(i,v){
      $('.des_spec').append('<div class="spec_item"><img src=asset/p1_'+v+'.png></div>');
    })
    $.each(product[selected_item].items['item'+default_item].type, function(i,v){
      $('.product_type').append('<div class="type_item">'+v+'</div>');
    })
    $('.type_item').eq((default_item-1)).addClass('chose').siblings().removeClass('chose');
  }
  // Change product content END
})

// Date count
var ONE_DAY = 1000 * 60 * 60 * 24;  // 1天的毫秒數
var ONE_HOUR = 1000 * 60 * 60;  // 1小時的毫秒數
var ONE_MIN = 1000 * 60; // 1分鐘的毫秒數
var ONE_SEC = 1000;   // 1秒的毫秒數
var nowDate = new Date();
//console.log(nowDate.getFullYear()+","+nowDate.getMonth()+","+nowDate.getDate()+","+nowDate.getHours()+","+nowDate.getMinutes());
//var startDate = new Date(2017,5,23,23,59);
//var startDate = new Date(nowDate.getFullYear(),(nowDate.getMonth()+1),nowDate.getDate(),nowDate.getHours(),nowDate.getMinutes(),nowDate.getSeconds());
//console.log(startDate);
var endDate = new Date(2017,7,31,23,59);
//var spantime = (endDate - startDate)/1000;

//var diff = endDate - startDate;
// var leftDays = Math.floor(diff/ONE_DAY);
// if(leftDays > 0) diff = diff - (leftDays * ONE_DAY);

// var leftHours = Math.floor(diff/ONE_HOUR);
// if(leftHours > 0) diff = diff - (leftHours * ONE_HOUR);

// var leftMins = Math.floor(diff/ONE_MIN);
// if(leftMins >0) diff = diff - (leftMins * ONE_MIN);

// var leftSecs = Math.floor(diff/ONE_SEC);

//console.log("兩個時間差距為%d天%d小時,%d分,%d秒",leftDays,leftHours,leftMins,leftSecs);


window.onload = function(){
  // console.log(getString(startDate));
  // console.log(getString(endDate));
  setInterval(cal, 1000);

  // winners is active 已開獎
  var winners;
  // 如果已經開獎 winners = true
  /*得獎名單得獎名單得獎名單得獎名單得獎名單得獎名單得獎名單得獎名單得獎名單得獎名單*/
  winners = false;
  if(winners){
    $('#winners').addClass('is-active');
    $('.not_open').css('display','none');
    $('.open').css('display','block');
  }
}

function getString(dt){
  return dt.getFullYear() + "年" + (dt.getMonth()+1) + "月" +    dt.getDate() + "日" + dt.getHours() + "時" + dt.getMinutes() + "分";
}

function cal(){
  // spantime --;
  // var d = Math.floor(spantime / (24 * 3600));
  // var h = Math.floor((spantime % (24*3600))/3600);
  // var m = Math.floor((spantime % 3600)/(60));
  // var s = Math.floor(spantime%60);
  //str = d + "天 " + h + "時 " + m + "分 " + s + "秒 ";  
  var nowDate = new Date();
  var startDate = new Date(nowDate.getFullYear(),(nowDate.getMonth()+1),nowDate.getDate(),nowDate.getHours(),nowDate.getMinutes(),nowDate.getSeconds());
  //var startDate = new Date(2017,5,31,21,59)
  //console.log(startDate);
  //var endDate = new Date(2017,5,31,23,59);

  var diff = endDate - startDate;
  //console.log(diff);
  var leftDays = Math.floor(diff/ONE_DAY);
  if(leftDays > 0) diff = diff - (leftDays * ONE_DAY);

  var leftHours = Math.floor(diff/ONE_HOUR);
  if(leftHours > 0) diff = diff - (leftHours * ONE_HOUR);

  var leftMins = Math.floor(diff/ONE_MIN);
  if(leftMins >0) diff = diff - (leftMins * ONE_MIN);

  var leftSecs = Math.floor(diff/ONE_SEC);
  
  leftDays = pad(leftDays,2);
  leftHours = pad(leftHours,2);
  leftMins = pad(leftMins,2);
  leftSecs = pad(leftSecs,2);

  //console.log("兩個時間差距為%d天%s小時,%s分,%s秒",leftDays,leftHours,leftMins,leftSecs);


  // $('#d_1').html(0);
  // $('#d_2').html(leftDays.toString());
  // $('#h_1').html(leftHours.toString()[0]);
  // $('#h_2').html(leftHours.toString()[1]);
  // $('#m_1').html(leftMins.toString()[0]);
  // $('#m_2').html(leftMins.toString()[1]);
  // $('#s_1').html(leftSecs.toString()[0]);
  // $('#s_2').html(leftSecs.toString()[1]);

  // $('#d_1').html(d.toString()[0]);
  // $('#d_2').html(d.toString()[1]);
  // $('#h_1').html(h.toString()[0]);
  // $('#h_2').html(h.toString()[1]);
  // $('#m_1').html(m.toString()[0]);
  // $('#m_2').html(m.toString()[1]);
  // $('#s_1').html(s.toString()[0]);
  // $('#s_2').html(s.toString()[1]);
}
// Date count end
function pad(num, size) {
    var s = num.toString();
    while (s.length < size) s = "0" + s;
    return s;
}
// 登入發票
function showerror() {
  $('.register input').removeClass('error');
  $('.register_content .info .info_group.name').removeClass('showerrow');
  $('.register_content .info .info_group.phone').removeClass('showerrow');
  $('.register_content .info .info_group.email').removeClass('showerrow');
  $('.register_content .receipt_input').removeClass('showerrow');
  $('.register_content .receipt_input_group').removeClass('showerrow');
}
$('.register input').focus(showerror);

$('.send_register').click(function(){
  alert("活動已結束");
  return;
  var receipt_input;
  var receipt_array = [];
  var name = $('#user_name').val();
  var phone = $('#user_tel').val();
  var email = $('#user_mail').val();
  var receipt = $('.receipt_input');//.val();


  if(name!="" && phone!="" && email!="" && receipt!=""){
    receipt_input = $('.receipt_input').each(function(){
      var receipt_obj = {};
      receipt_obj[$(this).attr('name')] = $(this).val();
      receipt_obj['name'] = name;
      receipt_obj['phone'] = phone;
      receipt_obj['email'] = email;
      console.log(receipt_obj);
      receipt_array.push(receipt_obj);
    });
  }

  // }else if (name == "" & phone=="" && email=="" && receipt=="") {
  //   $('#user_mail').addClass('error');
  //   $('#user_name').addClass('error');
  //   $('#user_tel').addClass('error');
  //   $('.receipt_input').addClass('error');
  //   $('.register_content .info .info_group.name').addClass('showerrow');
  //   $('.register_content .info .info_group.phone').addClass('showerrow');
  //   $('.register_content .info .info_group.email').addClass('showerrow');
  //   $('.register_content .receipt_input_group').addClass('showerrow');
  // };
  var isReceiptError,isNameError,isPhoneError,isEmailError = false;
  for(var i=0;i<receipt.length;i++){
    if(receipt.eq(i).val() == ""){
      receipt.eq(i).addClass('error');
      $('.register_content .receipt_input_group').addClass('showerrow');
      isReceiptError = true;
    }
    else {
      receipt.eq(i).removeClass('error');
      isReceiptError = false;
    }
  }

  if (name == "") {
    $('#user_name').addClass('error');
    $('.register_content .info .info_group.name').addClass('showerrow');
    isNameError = true;
  }
  else{   
    isNameError = false;
  }
  if (phone=="") {
    $('#user_tel').addClass('error');
    $('.register_content .info .info_group.phone').addClass('showerrow');
    isPhoneError = true;
  }
  else{   
    isPhoneError = false;
  }
  if (email=="") {
    $('#user_mail').addClass('error');
    $('.register_content .info .info_group.email').addClass('showerrow');
    isEmailError = true;
  }
  else{   
    isEmailError = false;
  }

  if(isReceiptError || isNameError || isEmailError || isPhoneError){
    return;
  }

  var isCheck1 = $(".check>input[type=checkbox]").eq(0).prop('checked');
  var isCheck2 = $(".check>input[type=checkbox]").eq(1).prop('checked');

  if(isCheck1 == false){
    $(".check").eq(0).css("color","#F5515F");
  }

  if(isCheck2 == false){
    $(".check").eq(1).css("color","#F5515F");
  }

  if(!isCheck1 || !isCheck2){
    return;
  }
  
  // if (receipt_input=="") {
  //   console.log("11");
  //   $('.receipt_input').addClass('error');
  //   $('.register_content .receipt_input_group').addClass('showerrow');
  //   if(screenWidth <= 375)
  //     return
  // };
  var receipts = {}
  receipts["receipts"] = receipt_array
  console.log(receipts);
  console.log(JSON.stringify(receipts));
  // post receipt
  $.ajax({
      url: "./ReceiptHandler",
      type: "POST",
      contentType : "application/x-www-form-urlencoded; charset=UTF-8",
			dataType : "json",
      data:"json="+JSON.stringify(receipts),
      success: function(msg) {
        console.log("Success");
        if(msg["status"] == "ok"){
            $('#user_name').val("");
            $('#user_tel').val("");
            $('#user_mail').val("");
            $('.receipt_input').val("");
        }
          // var response = JSON.parse(msg)
          // console.log(response.success);

          if(msg["status"] == "ok"){
            $('#user_name').val("");
            $('#user_tel').val("");
            $('#user_mail').val("");
            $('.receipt_input').val("");//.val();
            alert("抽獎資料已成功送出")
          }
      },
      error: function(xhr, ajaxOptions, thrownError) {
          console.log(xhr.status);
          console.log(thrownError);
      }
  });
  // post receipt End
// 登入發票 End

});
