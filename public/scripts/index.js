/* **********************************************************************************
*                           Gestion des IMPORTATIONS                                *
*************************************************************************************/
// import { additifsEuropeenDiviseeOrdonneeFiltree } from "./additifsEUROPA.js";
// import { additifsEuropeenDiviseeOrdonneeFiltree } from "./additifsEUROPA.mjs";
// import { translate } from "../../node_modules/google-translate-api/index.js";
const additifsEuropeenDiviseeOrdonneeFiltree = require('./additifsEUROPA');
// const additifsEuropeenDiviseeOrdonneeFiltree = require('./additifsEUROPA.js');
// const translate = require('translate-google');

// console.log(translate);
// console.log(translate);




// const translate = require('google-translate-api');


/* **********************************************************************************
*                           Récupérer les éléments HTML                             *
*************************************************************************************/

/**** BODY ****/
const el_Body = document.querySelector('body');

/***** FORM *****/
const el_Form = document.querySelector('#form');

/** SEARCH SECTION **/
const el_InputSearch = document.querySelector('#searchProduct');
const el_InputSubmit = document.querySelector('#submit');

/** ALLERGEN **/
const el_InputAllergen = document.querySelector('#allergen-checkbox');

/** ADDITIVES   **/
const el_InputAdditive = document.querySelector('#additive-checkbox');

/** NO-HALAL **/
const el_InputNoHalal = document.querySelector('#no-halal-checkbox');


/***** RESULT PRODUCT SECTION *****/
const el_ResultProductSection = document.querySelector('#resultProductSection');

/** H2 **/
const el_ResultProductSectionH2 = document.querySelector('.resultProduct-section-h2');

/** P INTRO **/
const el_PIntroduction = document.querySelector('.resultProduct-section-intro');

/** NAME SECTION **/
const el_ResultNameSection = document.querySelector('#resultNameSection');

/** ALLERGEN SECTION **/
const el_ResultAllergenSection = document.querySelector('#resultAllergenSection');

/** ADDITIVE SECTION **/
const el_ResultAdditiveSection = document.querySelector('#resultAdditiveSection');


/***** CLASSIFICATION SECTION *****/
const el_ResultProductInformationSection = document.querySelector('.resultProduct-information');
const el_ResultProductInformationH3 = document.querySelector('.resultProduct-information-H3')

const el_ResultProductClassification = document.querySelector('.resultProduct-classification');


/* **********************************************************************************
*                                     FUNCTIONS                                     *
*************************************************************************************/

/**
 * @param {string} word The string whose we want the first letter in Uppercase
 * @returns string
 */
  function formatTheWord(word){
  return word = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
};

/** 
 * @param {string} word The string to Uppercase format
 * @returns string
 */
function formatToUppercase(word){
  return word = word.toUpperCase();
};


/**
 * Search an element from the array and separate the two values before and after the separator and collect the value to an other array. Formate the value with {formatTheWord}
 * @param {array} arrayFrom the array whose value we want to retrieve
 * @param {array} arrayTo the array whose value we want to push
 * @param {string} separator the characters that will separate the elements into sub-arrays
 * @param {number} indiceArrayOfValueToCollect the indice of the array that contain the value to collect
 */
function getValueSearchedFromArrayToNewArray(arrayFrom, arrayTo, separator, indiceArrayOfValueToCollect){
  for(let element of arrayFrom){
    arrayTo.push(formatTheWord(element.split(separator)[indiceArrayOfValueToCollect]));
  };
};


/**
 *  Create an HTML element that contains a text and inject it in a parent HTML element
 * @param {string} typeOfElementToCreate The HTML's type to create
 * @param {object} parentToAppend An HTML object to append
 * @param {[string, number]} textValue A value to inject like textContent
 * @returns The element was created
 */
function injectElement(typeOfElementToCreate, parentToAppend, textValue){
  let elementToCreate = document.createElement(typeOfElementToCreate);
  elementToCreate.textContent = textValue;
  parentToAppend.append(elementToCreate);
  console.log(textValue);
  // Return the element was create. This element is attached on the document so we can use the return value like a HTML DOM element
  return elementToCreate;
 };


 /**
  * Remove the childrens of the HTML element
  * @param {object} parentHTMLElement An HTML element which we want remove his childrens
  */
 function removeAllChildrensOfParentElement(parentHTMLElement){
  if(parentHTMLElement.children.length > 0){
    for(let i = 0; i <= parentHTMLElement.children.length; i++){
    parentHTMLElement.children.item(0).remove();
    };
  };
};


/**
 * Create an object by iterating over an array. Each properties of this object contain an HTMLElement. Each textContent of these HTMLElement of these properties contain a text value form the array. And inject all of this elements in a HTMLElement parent.
 * @param {array} arrayFrom The Array where we take the text value (textContent) for the HTMLElement
 * @param {string} nameOfProperties The name for each properties. This name is followed by his presence number in the properties list
 * @param {object} parentToAppend The HTMLElement that we want to inject the HTML list 
 * @returns An object with HTMLElement as properties
 */
function createObjectofAListHTMLElementFromValueofArrayAndInjectThem (arrayFrom, nameOfProperties, typeOfElement, parentToAppend){
  let objectToCreate = {};
   for(let indice in arrayFrom){
     objectToCreate[`${nameOfProperties}${indice}`] = injectElement(typeOfElement, parentToAppend, arrayFrom[indice]);
   };
   return objectToCreate;
 };




/* **********************************************************************************
*                                     CODE                                          *
*************************************************************************************/


             
             
             
             
  
  /***********************************************
 *              RECHERCHE PRODUIT               *
 ************************************************/

/***** Récupérer l'emplacement du titre H2 "RESULTAT" de la section de résultat pour pouvoir faire un scroll lors de la recherche *****/
const verticalResultProductSectionH2Position = el_ResultProductSectionH2.getBoundingClientRect().y;
console.log(verticalResultProductSectionH2Position)



/***** Récupérer le code-Barre à la soumission du formulaire *****/
el_Form.addEventListener('submit', function(e){
  e.preventDefault();
  const codeBarre = el_InputSearch.value;
  const entreeValide = /^([0-9]{8}|[0-9]{13})$/g;

  // Si l'utilisateur n'a pas entré un texte valide
  if(!entreeValide.test(codeBarre)){
    alert('Veuillez entrer un code barre valide');
    el_InputAllergen.checked = false;
    el_InputNoHalal.checked = false;
    el_InputAdditive.checked = false;
    removeAllChildrensOfParentElement(el_ResultNameSection);
    removeAllChildrensOfParentElement(el_ResultAllergenSection);
    removeAllChildrensOfParentElement(el_ResultAdditiveSection);
    
    
  }else{
    
    console.dir(el_ResultNameSection)
    
    /***** Effacer l'élément anciennement chercher lors d'une nouvelle recherche *****/
    removeAllChildrensOfParentElement(el_ResultNameSection);
    removeAllChildrensOfParentElement(el_ResultAllergenSection);
    removeAllChildrensOfParentElement(el_ResultAdditiveSection);
    removeAllChildrensOfParentElement(el_ResultProductInformationH3);
    removeAllChildrensOfParentElement(el_ResultProductClassification);
  
  
    /***** Ouvrir une requête pour récupérer des données sur OpenFoodFact *****/
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', `https://world.openfoodfacts.org/api/v0/product/${codeBarre}.json`);
    xhr.send();
    
  
    /***** Agir lorsque la réponse est arrivée *****/
    xhr.addEventListener('loadend', () => {
      console.log(xhr.status);
  
      // Vérifier le retour du serveur ET d'une requête sans erreur (200)
      if(xhr.status === 200){

        // Vérifier si le produit est présent dans la base de données, si oui effectuer toutes les actions d'affichage
        const xhrResponse = JSON.parse(xhr.response);

        if(xhrResponse.status === 1){

            /***** Récupérer la réponse *****/
          // Récupérer la réponse
          let responseRequest = xhr.response;
      
          // Parser en objet JS
          let responseRequestObject = JSON.parse(responseRequest);
      
          console.log(responseRequestObject);
          // console.log(responseRequestObject.product.generic_name);
    
          /***** Récupérer le nom de la marque et du produit *****/
          // Déclarer les valeurs récupérant les différents nom du produits selon leur disponibilité
          let nameProduct = null;
          
          // On remplace les ',' par ', ' si il y en a
          let brands = responseRequestObject.product.brands.replaceAll(',', ', ');
          let abbreviatedProductName = responseRequestObject.product.abbreviated_product_name;
          let productName = responseRequestObject.product.product_name;
          let productNameFr = responseRequestObject.product.product_name_fr;
          let genericName = responseRequestObject.product.generic_name;
      
          // Regarder si les éléments du nom du produit récupérés sont présents en tant que propriété et si ils ne sont pas vide (on récupère dans l'ordre donné sinon)
          if(productNameFr){
            nameProduct = formatTheWord(productNameFr);
          }else if(productName){
            nameProduct = formatTheWord(productName);
          }else if(abbreviatedProductName){
            nameProduct = formatTheWord(abbreviatedProductName);
          }else if(genericName){
            nameProduct = formatTheWord(genericName);
          }else{
            nameProduct = "Nom du produit inconnu"
          };
      
          
          /***** Récupérer le nom de la marque: le formater ou texte par defaut sinon *****/
          let resultProduct = null;
          if(brands){
            brands = formatToUppercase(brands);
            resultProduct = `${brands} - ${nameProduct}`;
          }else{
            resultProduct = `Marque inconnue - ${nameProduct}`
          };
      
    
          /***** Récupérer les allergenes *****/
          let allergenArray = responseRequestObject.product.allergens_hierarchy;
          let traceArray = responseRequestObject.product.traces_hierarchy;
          let resultAllergenAndTraceArrayOrdonned = [];
          let resultAllergenAndTraceArrayFiltered = [];
          let resultAllergenAndTraceABSENT = false;
          
          if(el_InputAllergen.checked === true){
            console.log(allergenArray, traceArray);
    
            // Si les tableaux d'allergenes et de traces récupérés sont vides
            if(allergenArray.length < 1 && traceArray.length < 1){
              resultAllergenAndTraceABSENT = true;

            }else{

              // Récupérer les éléments du tableau allergenArray
              let allergenArrayFormate = [];
              getValueSearchedFromArrayToNewArray(allergenArray, allergenArrayFormate, ':', 1);
              console.log(allergenArrayFormate)

      
              // Récupérer les éléments du tableau allergenArray
              let traceArrayFormate = [];
              getValueSearchedFromArrayToNewArray(traceArray, traceArrayFormate, ':', 1);
              console.log(traceArrayFormate)
              

              // Concaténer les deux tableaux pour former le tableau total d'allergènes
              resultAllergenAndTraceArrayOrdonned = allergenArrayFormate.concat(traceArrayFormate).sort();
              console.log(resultAllergenAndTraceArrayOrdonned);


              /* Filtre le tableau ordonné pour supprimmer les occurences */
              // Lors de la première itération car le tableau est vide
              resultAllergenAndTraceArrayFiltered.push(resultAllergenAndTraceArrayOrdonned[0]);
              
              // Itère sur le tableau ordonné et récupère la valeur à comparer pour voir s'il est présent dans le tableau filtré
              for(let i = 1; i < resultAllergenAndTraceArrayOrdonned.length; i++){
                let trouvee = false;
                // On récupère la valeur de comparaison présent dans le tableau ordonné
                let elementDeRecherche = resultAllergenAndTraceArrayOrdonned[i];

                // On compare elementDeRecherche avec la dernière valeur injecté du tableau filtré (la comparaison est nécessaire seulement pour le dernier élément du tableau filtré étant donné que les valeurs sont dans l'ordre, la seul occurence possible sera sur la dernière valeur qu'on vient d'injecter)
                for(let x = resultAllergenAndTraceArrayFiltered.length - 1; x < resultAllergenAndTraceArrayFiltered.length; x++){  
                  if(elementDeRecherche === resultAllergenAndTraceArrayFiltered[resultAllergenAndTraceArrayFiltered.length - 1]){
                    // Si oui, on sort de la boucle et on injecte pas cet élément
                    trouvee = true;
                    break;
                  };
                };
                if(trouvee === false){
                  // Sinon, on injecte l'élément car il n'est pas présent dans le tableau
                  resultAllergenAndTraceArrayFiltered.push(resultAllergenAndTraceArrayOrdonned[i]);
         



                };
              };

              console.log('resultAllergenAndTraceArrayFiltered : ', resultAllergenAndTraceArrayFiltered )
            };  
          };
    
    
          /***** Récupérer les additifs *****/
          let additifArray = responseRequestObject.product.additives_original_tags;
          let resultAdditifABSENT = false;
          let additifArrayFormate = [];
          let resultAdditif = "";
          let additifArrayFormateWithNameGrouped = [];

    
          if(el_InputAdditive.checked === true){
            console.log(additifArray);
    
            // Si le tableau d'additifs est vide
            if(additifArray.length < 1){
            // resultAdditif = "Aucuns additifs ne semblent être présents"
              resultAdditifABSENT = true;

            }else{

              // Récupérer les éléments du tableau additifArray
              getValueSearchedFromArrayToNewArray(additifArray, additifArrayFormate, ':', 1);
              console.log(additifArrayFormate)
              resultAdditif = additifArrayFormate.join(', ');
              console.log(resultAdditif);

              
              /*** Récupérer le nom additif correspondant au code additif (dans le module additifsEUROPA.js) ***/
              // Rechercher si l'élément est présent dans la liste des additifs et les extraire dans un tableau
              let additifArrayFormateWithNameSeparated = [];
              for(let numberOfPresentAdditives = 0; numberOfPresentAdditives < additifArrayFormate.length; numberOfPresentAdditives++){
                let trouvee = false;

                for(let i = 0; i < additifsEuropeenDiviseeOrdonneeFiltree.length; i++){
                  if(additifsEuropeenDiviseeOrdonneeFiltree[i][0] === additifArrayFormate[numberOfPresentAdditives]){
                    additifArrayFormateWithNameSeparated.push(additifsEuropeenDiviseeOrdonneeFiltree[i]);
                    trouvee = true;
                    break;
                  };
                };

                if(!trouvee){
                  additifArrayFormateWithNameSeparated.push([additifArrayFormate[numberOfPresentAdditives], "Oups! Additif inconnu"]);
                };

                console.log(additifArrayFormateWithNameSeparated);
              };


              // Regrouper les codes repsectivement avec leur dénomination
              for(let numberOfSubArray = 0; numberOfSubArray < additifArrayFormateWithNameSeparated.length; numberOfSubArray++){
                additifArrayFormateWithNameGrouped.push(additifArrayFormateWithNameSeparated[numberOfSubArray].join(': '));
              };

              console.log(additifArrayFormateWithNameGrouped);

            };
          };
    

        







          /***** Récupérer les ingrédients non halal *****/
    
          
    
    
    
    
          /***** Injecter les resultats dans le DOM *****/

          /*** Supprimer l'élément <p> d'intro ***/
          el_PIntroduction.remove();

          /*** Injecter le NOM du produit ***/
          // Injecter le H2
          const injectedH3Name = injectElement('h3', el_ResultNameSection, 'Produit');
          injectedH3Name.classList.add('resultProduct-section-h3');
          // Le nom du produit
          const injectedProduct = injectElement('p', el_ResultNameSection, resultProduct);
          injectedProduct.classList.add('resultName-section-product');
          console.log(injectedProduct)
    

          /*** Injecter les ALLERGENES ***/
          // Les allergènes
          if(el_InputAllergen.checked){
            // Le <h2>
            const injectedH3Allergen = injectElement('h3', el_ResultAllergenSection, 'Allergènes');
            injectedH3Allergen.classList.add('resultProduct-section-h3');

            if(resultAllergenAndTraceABSENT){
              const injectedPAllergen = injectElement('p', el_ResultAllergenSection, 'Aucun allergène semble être présent');
              injectedPAllergen.classList.add('resultProduct-section-default');

            }else{           
              // La liste <ul>
              const injectedUlAllergen = injectElement('ul', el_ResultAllergenSection);
    
              // Les items <li>
              /* Voir explication dans additifs pour la logique de ce code */
              const itemsListAllergenObject = createObjectofAListHTMLElementFromValueofArrayAndInjectThem(resultAllergenAndTraceArrayFiltered, 'injectedLIAllergen', 'li', injectedUlAllergen);

              let itemsListAllergenObjectKeyArray = Object.keys(itemsListAllergenObject);

              for(let li of itemsListAllergenObjectKeyArray){
                itemsListAllergenObject[li].classList.add('resultProduct-section-list-item');
              };
            };

          };


          /*** Injecter les ADDITIFS ***/  
          // Les additifs
          if(el_InputAdditive.checked){
            // Le <h2>
            const injectedH3Additive = injectElement('h3', el_ResultAdditiveSection, 'Additifs');
            injectedH3Additive.classList.add('resultProduct-section-h3')

            if(resultAdditifABSENT){
              const injectedPAdditive = injectElement('p', el_ResultAdditiveSection, 'Aucun additif semble être présent');
              injectedPAdditive.classList.add('resultProduct-section-default');

            }else{

              // La liste <ul>
              const injectedUlAdditive = injectElement('ul', el_ResultAdditiveSection);
    
              // Les items <li>
              /* Créer un objet contenant dynamiquement des propriétés 'injectedAdditive${N}' où chacune de ces propriété contient l'objet HTML <li> créé. Je peux donc accéder à l'objet HTML DOM en passant par l'objet puis la propriété pour manipuler cet HTMLElement avec les méthodes du DOM.
              EX: itemsListAdditiveObject.injectedAdditive0.style.color = "red";
              J'accède à l'objet puis à la propriété injectedAdditive0 qui à pour valeur un <li>. Puis je le manipule avec les méthodes du DOM. Cela ne créé pas des sous propriétés mais utilise l'objet li est accède à ses méthodes et propriétés.
              Si je veux ajouter une classe ou autre sur l'ensemble des <li>, je n'ai qu'à itérer sur les propriétés de l'objets qui sont les <li> crées. */    
              const itemsListAdditiveObject = createObjectofAListHTMLElementFromValueofArrayAndInjectThem(additifArrayFormateWithNameGrouped, 'injectedLIAdditive', 'li', injectedUlAdditive);
             
              let itemsListAdditiveObjectKeyArray = Object.keys(itemsListAdditiveObject);

              for(let li of itemsListAdditiveObjectKeyArray){
                itemsListAdditiveObject[li].classList.add('resultProduct-section-list-item');
              };
            };
          };


          
          /*** Injecter les informations complémentaires (Nutriscore et Nova) ***/
          /* Injecter le svg au sein de la balise h3'*/
          el_ResultProductInformationH3.innerHTML = `<svg class="resultProduct-information-H3-svg" xmlns="http://www.w3.org/2000/svg" width="498" height="94" viewBox="0 0 498 94">
          <g id="Groupe_27" data-name="Groupe 27" transform="translate(-634 -1177)">
            <path id="Rectangle_11" data-name="Rectangle 11" d="M7.333,0h404A86.667,86.667,0,0,1,498,86.667v0A7.333,7.333,0,0,1,490.667,94h-404A86.667,86.667,0,0,1,0,7.333v0A7.333,7.333,0,0,1,7.333,0Z" transform="translate(634 1177)" fill="#a9de81"/>
            <text id="Classification" transform="translate(687 1244)" fill="#f8f8f8" font-size="48" font-family="Comfortaa" font-weight="300" letter-spacing="-0.03em"><tspan x="0" y="0">CLASSIFICATION</tspan></text>
          </g>
        </svg>`


          /* Ajouter la classe pour les styles lorsque cette section apparaît */
          el_ResultProductInformationSection.classList.add('resultProduct-information-actif');

          /* Ajouter les deux éléments graphique pour l'effet de vague */
          const injectedImgWaveInformation = injectElement('img', el_ResultProductInformationSection);
          injectedImgWaveInformation.setAttribute('src', 'assets/icon/Wave.png');
          injectedImgWaveInformation.setAttribute('alt', 'Image utilisé pour le graphisme de la page');
          injectedImgWaveInformation.classList.add('wave');


          /* Injecter l'image du nutriscore */          
          let nutriScore = responseRequestObject.product.nutriscore_grade;
          let injectedNutriscore = null;

          injectedNutriscore = injectElement('img', el_ResultProductClassification);
          injectedNutriscore.classList.add('resultProduct-nutriscore', 'resultProduct-classification-childrens');

          switch (nutriScore) {
            case 'a':
            injectedNutriscore.setAttribute('src', 'assets/images/NutriScore/NutriScore A.png');
            injectedNutriscore.setAttribute('alt', 'Image nutriscore classement A');
            break;
            
            case 'b':
              injectedNutriscore.setAttribute('src', 'assets/images/NutriScore/NutriScore B.png');
            injectedNutriscore.setAttribute('alt', 'Image nutriscore classement B');
            break;

            case 'c':
            injectedNutriscore.setAttribute('src', 'assets/images/NutriScore/NutriScore C.png');
            injectedNutriscore.setAttribute('alt', 'Image nutriscore classement C');
            break;
            
            case 'd':
            injectedNutriscore.setAttribute('src', 'assets/images/NutriScore/NutriScore D.png');
            injectedNutriscore.setAttribute('alt', 'Image nutriscore classement D');
            break;

            case 'e':
            injectedNutriscore.setAttribute('src', 'assets/images/NutriScore/NutriScore E.png');
            injectedNutriscore.setAttribute('alt', 'Image nutriscore classement E');
            break;
            
            default:
            injectedNutriscore.setAttribute('src', 'assets/images/NutriScore/NutriScore - Undefined.png');
            injectedNutriscore.setAttribute('alt', 'Image nutriscore indéfini');
          };
        
          
          
          /* Injecter l'image du NOVA score */
          let novaScore = responseRequestObject.product.nova_group;
          let injectedNovascore = null;

            injectedNovascore = injectElement('img', el_ResultProductClassification);
            injectedNovascore.classList.add('resultProduct-novascore', 'resultProduct-classification-childrens');

          switch (novaScore) {
            case 1:
            injectedNovascore.setAttribute('src', 'assets/images/NovaScore/NovaScore 1_1.png');
            injectedNovascore.setAttribute('alt', 'Image novascore classement 1');
            break;
            
            case 2:
            injectedNovascore.setAttribute('src', 'assets/images/NovaScore/NovaScore 2_1.png');
            injectedNovascore.setAttribute('alt', 'Image novascore classement 2');
            break;
            
            case 3:
            injectedNovascore.setAttribute('src', 'assets/images/NovaScore/NovaScore 3_1.png');
            injectedNovascore.setAttribute('alt', 'Image novascore classement 3');
            break;
            
            case 4:
            injectedNovascore.setAttribute('src', 'assets/images/NovaScore/NovaScore 4_2.png');
            injectedNovascore.setAttribute('alt', 'Image novascore classement 4');
            break;
            
            default:
            injectedNovascore.setAttribute('src', 'assets/images/NovaScore/NovaScore Inconnu.png');
            injectedNovascore.setAttribute('alt', 'Image novascore inconnu');
          };




          // Sinon (repsonse.status != 1), le produit n'est pas présent dans la base de données
        }else{
          let unknownProductText = "Désolé, nous ne connaissons pas ce produit :("
          const unknownProduct = injectElement('h3', el_ResultNameSection, unknownProductText);

          el_InputSearch.value = "";
          el_InputAdditive.checked = false;
          el_InputAllergen.checked = false;
        };



        /** Faire défiler la page jusqu'à la section de résultat **/
        // Récupérer l'emplacement Y de la page actuelle (dans le cas où la page à été scrollée)
        const actuallyVerticalPagePosition = window.scrollY;

        // Scroller vars le titre en soustrayant la hauteur de scroll actuelle en enlevant qque pixel pour écarter le titre du haut du window (question d'ergonomie)
        window.scrollBy(0, verticalResultProductSectionH2Position - actuallyVerticalPagePosition - 20);

  
      }else{
        // Cas erreur de retour non 200
        let errorServerResponseText = `${xhr.statusText} : Une erreur est survenue, impossible d'afficher le produit`
        const errorServerResponse = injectElement('h3', el_ResultNameSection, errorServerResponseText)
      };
      
    });
    
  };

});
