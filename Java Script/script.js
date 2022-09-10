$(document).ready(function () {
  //alert(0)
  $('.nama').click(function () {
    //alert(3)
    let penyebut = $(this).text();
    // alert(isi);
    let hasil = prompt('Anda yakin mau mengganti Nama ini?', penyebut);
    if (!hasil) return;
    {
      //alert(hasil)
      $(this).text(hasil);
    }
  });

  $('.alamat').click(function () {
    //alert(3)
    let penyebut = $(this).text();
    // alert(isi);
    let hasil = prompt('Anda yakin mau mengganti Alamat ini?', penyebut);
    if (!hasil) return;
    {
      //alert(hasil)
      $(this).text(hasil);
    }
  });
  $('.delete').click(function () {
    // alert(1)
    let serius = confirm('Anda yakin mau menghapus baris ini ?');
    if (!serius) return;
    let id = $(this).prop('id');
    //alert(id);

    let rid = id.split('__');
    let baris_ke = rid[1];
    //alert(baris__ke)
    $('#baris__' + baris_ke).slideUp();
  });
});
