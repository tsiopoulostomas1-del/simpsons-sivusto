function openGallery() {
    document.getElementById('gallery-popup').classList.add('active')
}

function closeGallery() {
    document.getElementById('gallery-popup').classList.remove('active')
}

function openBigImage(img) {
    window.open(img.src, '_blank')
}

/* 2 */

function openGallery2() {
    document.getElementById('gallery-popup2').classList.add('active')
}

function closeGallery2() {
    document.getElementById('gallery-popup2').classList.remove('active')
}

function openBigImage2(img) {
    window.open(img.src, '_blank')
}

/* 3 */

function openGallery3() {
    document.getElementById('gallery-popup3').classList.add('active')
}

function closeGallery3() {
    document.getElementById('gallery-popup3').classList.remove('active')
}

function openBigImage3(img) {
    window.open(img.src, '_blank')
}

/* hahmosivu */

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}