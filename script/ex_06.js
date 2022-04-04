window.onload = () => {

  let element = document.getElementsByTagName('footer')[0];
  let elements = element.getElementsByTagName('div')[0] ;
  fetch("https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?select=nom_commune%2C%20nom_etablissement%2C%20mail&limit=25&offset=0")

      .then((response) => {  
          return response.json();
      })
      .then((data) =>
      {               
        for(i=0; i<=24; i++){
          let html1 = data.records[i].record.fields.nom_etablissement;
          console.log(html1);
          elements.innerHTML += '<br>' + html1 + '<br>';
          let html = data.records[i].record.fields.nom_commune;
          console.log(html);
          elements.innerHTML += html + '<br>';
          let html2 = data.records[i].record.fields.mail;
          console.log(html2);
          elements.innerHTML += html2 + '<br>';
      };
      })
      .catch((error) => {
          console.log(error);
      });
}
//`