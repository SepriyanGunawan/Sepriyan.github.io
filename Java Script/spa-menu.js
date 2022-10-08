$(document).ready(function () {
  $('li:eq(0)').click(function () {
    $('#home').slideToggle('slow');
    $('#home').siblings().css('display', 'none');
  });

  $('li:eq(1)').click(function () {
    $('#Project').slideToggle('slow');
    $('#Project').siblings().css('display', 'none');
  });
  $('li:eq(2)').click(function () {
    $('#Contact').slideToggle('slow');
    $('#Contact').siblings().css('display', 'none');
  });
});
