var article = document.querySelector('.resultaat');
var prijs = document.querySelector('.prijs');
var containerResultaat = document.querySelector('div.resultaat-container');
var resultaatInfo = document.querySelector('section.resultaat-info');
var arrow = document.querySelector('.fa-angle-down');
var sectionResultaten = document.querySelector('section.resultaten');
var verborgenInformatie = document.querySelector('.verborgen-informatie');
var img = document.querySelector('img');
var backIcon = document.querySelector('.fa-times');


function toggleArticle(){
  article.classList.toggle('resultaat-clicked');
  // containerResultaat.classList.toggle('resultaat-container-clicked');
  // resultaatInfo.classList.toggle('resultaat-info-clicked');
  // arrow.classList.toggle('fa-angle-down-clicked');
  sectionResultaten.classList.toggle('toggle-detail');
  backIcon.classList.toggle('open-terug');
  verborgenInformatie.classList.toggle('open-informatie');

}


  prijs.addEventListener('click', toggleArticle);
