$(function(){
  var Theight = $(window).height() - 260;
  $(".div_any_child").height(Theight);
  totalPage = 1;
  currentPage = 1;
  paging(totalPage,currentPage);
})
