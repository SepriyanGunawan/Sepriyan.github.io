$(document).ready(function () {
  $('li:eq(0)').click(function () {
    $('#home').addClass('muncul').removeClass('hilang').slideToggle('slow');
    $('#home').siblings().css('display', 'none');
  });
  $('li:eq(1)').click(function () {
    $('#About').addClass('muncul').removeClass('hilang').slideToggle('slow');
    $('#About').siblings().css('display', 'none');
  });
  $('li:eq(2)').click(function () {
    $('#Project').addClass('muncul').removeClass('hilang').slideToggle('slow');
    $('#Project').siblings().css('display', 'none');
  });
  $('li:eq(3)').click(function () {
    $('#Contact').addClass('muncul').removeClass('hilang').slideToggle('slow');
    $('#Contact').siblings().css('display', 'none');
  });
});
