(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){(function (){
(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?module.exports=factory():typeof define==="function"&&define.amd?define(factory):global.translate=factory()})(this,function(){"use strict";var iso=["aa","ab","ae","af","ak","am","an","ar","as","av","ay","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lu","lv","mg","mh","mi","mk","ml","mn","mr","ms","mt","my","na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","uk","ur","uz","ve","vi","vo","wa","wo","xh","yi","yo","za","zh","zu"];var iso2={aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",cha:"ch",che:"ce",chi:"zh",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cze:"cs",dan:"da",div:"dv",dut:"nl",dzo:"dz",eng:"en",epo:"eo",est:"et",ewe:"ee",fao:"fo",fij:"fj",fin:"fi",fre:"fr",fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mlg:"mg",mlt:"mt",mon:"mn",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zul:"zu"};var map={afar:"aa",abkhazian:"ab",afrikaans:"af",akan:"ak",albanian:"sq",amharic:"am",arabic:"ar",aragonese:"an",armenian:"hy",assamese:"as",avaric:"av",avestan:"ae",aymara:"ay",azerbaijani:"az",bashkir:"ba",bambara:"bm",basque:"eu",belarusian:"be",bengali:"bn","bihari languages":"bh",bislama:"bi",tibetan:"bo",bosnian:"bs",breton:"br",bulgarian:"bg",burmese:"my",catalan:"ca",valencian:"ca",czech:"cs",chamorro:"ch",chechen:"ce",chinese:"zh","church slavic":"cu","old slavonic":"cu","church slavonic":"cu","old bulgarian":"cu","old church slavonic":"cu",chuvash:"cv",cornish:"kw",corsican:"co",cree:"cr",welsh:"cy",danish:"da",german:"de",divehi:"dv",dhivehi:"dv",maldivian:"dv",dutch:"nl",flemish:"nl",dzongkha:"dz",greek:"el",english:"en",esperanto:"eo",estonian:"et",ewe:"ee",faroese:"fo",persian:"fa",fijian:"fj",finnish:"fi",french:"fr","western frisian":"fy",fulah:"ff",georgian:"ka",gaelic:"gd","scottish gaelic":"gd",irish:"ga",galician:"gl",manx:"gv",guarani:"gn",gujarati:"gu",haitian:"ht","haitian creole":"ht",hausa:"ha",hebrew:"he",herero:"hz",hindi:"hi","hiri motu":"ho",croatian:"hr",hungarian:"hu",igbo:"ig",icelandic:"is",ido:"io","sichuan yi":"ii",nuosu:"ii",inuktitut:"iu",interlingue:"ie",occidental:"ie",interlingua:"ia",indonesian:"id",inupiaq:"ik",italian:"it",javanese:"jv",japanese:"ja",kalaallisut:"kl",greenlandic:"kl",kannada:"kn",kashmiri:"ks",kanuri:"kr",kazakh:"kk","central khmer":"km",kikuyu:"ki",gikuyu:"ki",kinyarwanda:"rw",kirghiz:"ky",kyrgyz:"ky",komi:"kv",kongo:"kg",korean:"ko",kuanyama:"kj",kwanyama:"kj",kurdish:"ku",lao:"lo",latin:"la",latvian:"lv",limburgan:"li",limburger:"li",limburgish:"li",lingala:"ln",lithuanian:"lt",luxembourgish:"lb",letzeburgesch:"lb","luba-katanga":"lu",ganda:"lg",macedonian:"mk",marshallese:"mh",malayalam:"ml",maori:"mi",marathi:"mr",malay:"ms",malagasy:"mg",maltese:"mt",mongolian:"mn",nauru:"na",navajo:"nv",navaho:"nv","ndebele, south":"nr","south ndebele":"nr","ndebele, north":"nd","north ndebele":"nd",ndonga:"ng",nepali:"ne","norwegian nynorsk":"nn","nynorsk, norwegian":"nn","norwegian bokm??l":"nb","bokm??l, norwegian":"nb",norwegian:"no",chichewa:"ny",chewa:"ny",nyanja:"ny",occitan:"oc",ojibwa:"oj",oriya:"or",oromo:"om",ossetian:"os",ossetic:"os",panjabi:"pa",punjabi:"pa",pali:"pi",polish:"pl",portuguese:"pt",pushto:"ps",pashto:"ps",quechua:"qu",romansh:"rm",romanian:"ro",moldavian:"ro",moldovan:"ro",rundi:"rn",russian:"ru",sango:"sg",sanskrit:"sa",sinhala:"si",sinhalese:"si",slovak:"sk",slovenian:"sl","northern sami":"se",samoan:"sm",shona:"sn",sindhi:"sd",somali:"so","sotho, southern":"st",spanish:"es",castilian:"es",sardinian:"sc",serbian:"sr",swati:"ss",sundanese:"su",swahili:"sw",swedish:"sv",tahitian:"ty",tamil:"ta",tatar:"tt",telugu:"te",tajik:"tg",tagalog:"tl",thai:"th",tigrinya:"ti",tonga:"to",tswana:"tn",tsonga:"ts",turkmen:"tk",turkish:"tr",twi:"tw",uighur:"ug",uyghur:"ug",ukrainian:"uk",urdu:"ur",uzbek:"uz",venda:"ve",vietnamese:"vi","volap??k":"vo",walloon:"wa",wolof:"wo",xhosa:"xh",yiddish:"yi",yoruba:"yo",zhuang:"za",chuang:"za",zulu:"zu"};var languages=name=>{if(typeof name!=="string"){throw new Error(`The "language" must be a string, received ${typeof name}`)}if(name.length>100){throw new Error(`The "language" is too long at ${name.length} characters`)}name=name.toLowerCase();name=map[name]||iso2[name]||name;if(!iso.includes(name)){throw new Error(`The language "${name}" is not part of the ISO 639-1`)}return name};function Cache(){var _cache=Object.create(null);this.put=function(key,value,time,timeoutCallback){if(typeof time!=="undefined"&&(typeof time!=="number"||isNaN(time)||time<=0)){throw new Error("Cache timeout must be a positive number")}else if(typeof timeoutCallback!=="undefined"&&typeof timeoutCallback!=="function"){throw new Error("Cache timeout callback must be a function")}var oldRecord=_cache[key];if(oldRecord){clearTimeout(oldRecord.timeout)}else{}var record={value:value,expire:time+Date.now()};if(!isNaN(record.expire)){record.timeout=setTimeout(function(){_del(key);if(timeoutCallback){timeoutCallback(key,value)}}.bind(this),time)}_cache[key]=record;return value};this.del=function(key){var canDelete=true;var oldRecord=_cache[key];if(oldRecord){clearTimeout(oldRecord.timeout);if(!isNaN(oldRecord.expire)&&oldRecord.expire<Date.now()){canDelete=false}}else{canDelete=false}if(canDelete){_del(key)}return canDelete};function _del(key){delete _cache[key]}this.clear=function(){for(var key in _cache){clearTimeout(_cache[key].timeout)}_cache=Object.create(null)};this.get=function(key){var data=_cache[key];if(typeof data!="undefined"){if(isNaN(data.expire)||data.expire>=Date.now()){return data.value}else{delete _cache[key]}}return null}}const exp$2=new Cache;exp$2.Cache=Cache;const base="https://translate.googleapis.com/translate_a/single";var google={fetch:({key:key,from:from,to:to,text:text})=>[`${base}?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURI(text)}`],parse:res=>res.json().then(body=>{body=body&&body[0]&&body[0][0]&&body[0].map(s=>s[0]).join("");if(!body)throw new Error("Translation not found");return body})};var yandex={needkey:true,fetch:({key:key,from:from,to:to,text:text})=>[`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&lang=${from}-${to}&text=${encodeURIComponent(text)}`,{method:"POST",body:""}],parse:res=>res.json().then(body=>{if(body.code!==200){throw new Error(body.message)}return body.text[0]})};const libreUrl="https://libretranslate.com/translate";var libre={needkey:false,fetch:({url:url=libreUrl,key:key,from:from,to:to,text:text})=>{const body=JSON.stringify({q:text,source:from,target:to,api_key:key});const headers={"Content-Type":"application/json"};return[url,{method:"POST",body:body,headers:headers}]},parse:res=>res.json().then(body=>{if(!body){throw new Error("No response found")}if(body.error){throw new Error(body.error)}if(!body.translatedText){throw new Error("No response found")}return body.translatedText})};var deepl={needkey:true,fetch:({key:key,from:from,to:to,text:text})=>{const suffix=/:fx$/.test(key)?"-free":"";text=encodeURIComponent(text);return[`https://api${suffix}.deepl.com/v2/translate?auth_key=${key}&source_lang=${from}&target_lang=${to}&text=${text}`,{method:"POST",body:""}]},parse:async res=>{if(!res.ok){if(res.status===403){throw new Error("Auth Error, please review the key for DeepL")}throw new Error(`Error ${res.status}`)}return res.json().then(body=>body.translations[0].text)}};var engines={google:google,yandex:yandex,libre:libre,deepl:deepl};if(typeof fetch==="undefined"){try{global.fetch=require("node-fetch")}catch(error){console.warn("Please make sure node-fetch is available")}}const Translate=function(options={}){if(!(this instanceof Translate)){return new Translate(options)}const defaults={from:"en",to:"en",cache:undefined,languages:languages,engines:engines,engine:"google",keys:{}};const translate=async(text,opts={})=>{if(typeof opts==="string")opts={to:opts};opts.text=text;opts.from=languages(opts.from||translate.from);opts.to=languages(opts.to||translate.to);opts.cache=opts.cache||translate.cache;opts.engines=opts.engines||{};opts.engine=opts.engine||translate.engine;opts.url=opts.url||translate.url;opts.id=opts.id||`${opts.url}:${opts.from}:${opts.to}:${opts.engine}:${opts.text}`;opts.keys=opts.keys||translate.keys||{};for(let name in translate.keys){opts.keys[name]=opts.keys[name]||translate.keys[name]}opts.key=opts.key||translate.key||opts.keys[opts.engine];const engine=opts.engines[opts.engine]||translate.engines[opts.engine];const cached=exp$2.get(opts.id);if(cached)return Promise.resolve(cached);if(opts.to===opts.from){return Promise.resolve(opts.text)}if(engine.needkey&&!opts.key){throw new Error(`The engine "${opts.engine}" needs a key, please provide it`)}const fetchOpts=engine.fetch(opts);return fetch(...fetchOpts).then(engine.parse).then(translated=>exp$2.put(opts.id,translated,opts.cache))};for(let key in defaults){translate[key]=typeof options[key]==="undefined"?defaults[key]:options[key]}return translate};const exp=new Translate;exp.Translate=Translate;return exp});
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"node-fetch":1}],3:[function(require,module,exports){
let additifsEuropeen = [
  ["E220%Anhydride sulfureux"],
  ["E221%Sulfite de sodium"],
  ["E222%Sulfite acide de sodium"],
  ["E223%Disulfite de sodium"],
  ["E224%Disulfite de potassium"],
  ["E226%Sulfite de calcium"],
  ["E227%Sulfite acide de calcium"],
  ["E228%Sulfite acide de potassium"],
  ["E432%Monolaurate de polyoxy??thyl??ne de sorbitane (polysorbate 20)"],
  ["E433%Monool??ate de polyoxy??thyl??ne de sorbitane (polysorbate 80)"],
  ["E434%Monopalmitate de polyoxy??thyl??ne de sorbitane (polysorbate 40)"],
  ["E435%Monost??arate de polyoxy??thyl??ne de sorbitane (polysorbate 60)"],
  ["E436%Trist??arate de polyoxy??thyl??ne de sorbitane (polysorbate 65)"],
  ["E491%Monost??arate de sorbitane"],
  ["E492%Trist??arate de sorbitane"],
  ["E493%Monolaurate de sorbitane"],
  ["E494%Monool??ate de sorbitane"],
  ["E495%Monopalmitate de sorbitane"],
  ["E338%Acide phosphorique"],
  ["E339%Phosphates de sodium"],
  ["E340%Phosphates de potassium"],
  ["E341%Phosphates de calcium"],
  ["E343%Phosphates de magn??sium"],
  ["E450%Diphosphates"],
  ["E451%Triphosphates"],
  ["E452%Polyphosphates"],
  ["E400%Acide alginique"],
  ["E401%Alginate de sodium"],
  ["E402%Alginate de potassium"],
  ["E403%Alginate d???ammonium"],
  ["E404%Alginate de calcium"],
  ["E170%Carbonate de calcium"],
  ["E260%Acide ac??tique"],
  ["E261%Ac??tates de potassium"],
  ["E262%Ac??tates de sodium"],
  ["E263%Ac??tate de calcium"],
  ["E270%Acide lactique"],
  ["E290%Dioxyde de carbone"],
  ["E296%Acide malique"],
  ["E300%Acide ascorbique"],
  ["E301%Ascorbate de sodium"],
  ["E302%Ascorbate de calcium"],
  ["E304%Esters d???acides gras de l???acide ascorbique"],
  ["E306%Extrait riche en tocoph??rols"],
  ["E307%Alpha-tocoph??rol"],
  ["E308%Gamma-tocoph??rol"],
  ["E309%Delta-tocoph??rol"],
  ["E322%L??cithines"],
  ["E325%Lactate de sodium"],
  ["E326%Lactate de potassium"],
  ["E327%Lactate de calcium"],
  ["E330%Acide citrique"],
  ["E331%Citrates de sodium"],
  ["E332%Citrates de potassium"],
  ["E333%Citrates de calcium"],
  ["E334%Acide tartrique [L(+)]"],
  ["E335%Tartrates de sodium"],
  ["E336%Tartrates de potassium"],
  ["E337%Tartrate double de sodium et de potassium"],
  ["E350%Malates de sodium"],
  ["E351%Malate de potassium"],
  ["E352%Malates de calcium"],
  ["E354%Tartrate de calcium"],
  ["E380%Citrate de triammonium"],
  ["E400%Acide alginique"],
  ["E401%Alginate de sodium"],
  ["E402%Alginate de potassium"],
  ["E403%Alginate d???ammonium"],
  ["E404%Alginate de calcium"],
  ["E406%Agar-agar"],
  ["E407%Carragh??nanes"],
  ["E407a%Algues Euchema transform??es"],
  ["E410%Farine de graines de caroube"],
  ["E412%Gomme guar"],
  ["E413%Gomme adragante"],
  ["E414%Gomme arabique ou gomme d???acacia"],
  ["E415%Gomme xanthane"],
  ["E417%Gomme Tara"],
  ["E418%Gomme Gellane"],
  ["E422%Glyc??rol"],
  ["E440%Pectines"],
  ["E460%Cellulose"],
  ["E461%M??thylcellulose"],
  ["E462%??thylcellulose"],
  ["E463%Hydroxypropylcellulose"],
  ["E464%Hydroxypropylm??thylcellulose"],
  ["E465%??thylm??thylcellulose"],
  ["E466%Carboxym??thyl-cellulose sodique, gomme cellulosique"],
  ["E469%Carboxym??thylcellulose hydrolys??e de mani??re enzymatique, gomme de cellulose hydrolys??e de mani??re enzymatique"],
  ["E470a%Sels de sodium, de potassium et de calcium d???acides gras"],
  ["E470b%Sels de magn??sium d???acides gras"],
  ["E471%Mono- et diglyc??rides d???acides gras"],
  ["E472a%Esters ac??tiques des mono- et diglyc??rides d???acides gras"],
  ["E472b%Esters lactiques des mono- et diglyc??rides d???acides gras"],
  ["E472c%Esters citriques des mono- et diglyc??rides d???acides gras"],
  ["E472d%Esters tartriques des mono- et diglyc??rides d???acides gras"],
  ["E472e%Esters monoac??tyltartriques et diac??tyltartriques des mono- et diglyc??rides d???acides gras"],
  ["E472f%Esters mixtes ac??tiques et tartriques des mono- et diglyc??rides d???acides gras"],
  ["E500%Carbonates de sodium"],
  ["E501%Carbonates de potassium"],
  ["E503%Carbonates d???ammonium"],
  ["E504%Carbonates de magn??sium"],
  ["E507%Acide chlorhydrique"],
  ["E508%Chlorure de potassium"],
  ["E509%Chlorure de calcium"],
  ["E511%Chlorure de magn??sium"],
  ["E513%Acide sulfurique"],
  ["E514%Sulfates de sodium"],
  ["E515%Sulfates de potassium"],
  ["E516%Sulfate de calcium"],
  ["E524%Hydroxyde de sodium"],
  ["E525%Hydroxyde de potassium"],
  ["E526%Hydroxyde de calcium"],
  ["E527%Hydroxyde d???ammonium"],
  ["E528%Hydroxyde de magn??sium"],
  ["E529%Oxyde de calcium"],
  ["E530%Oxyde de magn??sium"],
  ["E570%Acides gras"],
  ["E574%Acide gluconique"],
  ["E575%Glucono-delta-lactone"],
  ["E576%Gluconate de sodium"],
  ["E577%Gluconate de potassium"],
  ["E578%Gluconate de calcium"],
  ["E640%Glycine et son sel de sodium"],
  ["E938%Argon"],
  ["E939%H??lium"],
  ["E941%Azote"],
  ["E942%Protoxyde d???azote"],
  ["E948%Oxyg??ne"],
  ["E949%Hydrog??ne"],
  ["E1103%Invertase"],
  ["E1200%Polydextrose"],
  ["E1404%Amidon oxyd??"],
  ["E1410%Phosphate de monoamidon"],
  ["E1412%Phosphate de diamidon"],
  ["E1413%Phosphate de diamidon phosphat??"],
  ["E1414%Phosphate de diamidon ac??tyl??"],
  ["E1420%Amidon ac??tyl??"],
  ["E1422%Adipate de diamidon ac??tyl??"],
  ["E1440%Amidon hydroxypropyl??"],
  ["E1442%Phosphate de diamidon hydroxypropyl??"],
  ["E1450%Oct??nyle succinate d???amidon sodique"],
  ["E1451%Amidon oxyd?? ac??tyl??"],
  ["E200%Acide sorbique"],
  ["E202%Sorbate de potassium"],
  ["E100%Curcumine"],
  ["E101%Riboflavines"],
  ["E102%Tartrazine"],
  ["E104%Jaune de quinol??ine"],
  ["E110%Sunset Yellow FCF/Jaune orange S"],
  ["E120%Acide carminique, carmins"],
  ["E122%Azorubine, carmoisine"],
  ["E123%Amarante"],
  ["E124%Ponceau 4R, rouge cochenille A"],
  ["E127%Erythrosine"],
  ["E129%Rouge allura AC"],
  ["E131%Bleu patent?? V"],
  ["E132%Indigotine, carmin d???indigo"],
  ["E133%Bleu brillant FCF"],
  ["E140%Chlorophylles et chlorophyllines"],
  ["E141%Complexes cuivre-chlorophylles et cuivre-chlorophyllines"],
  ["E142%Vert S"],
  ["E150a%Caramel ordinaire (1)"],
  ["E150b%Caramel de sulfite caustique"],
  ["E150c%Caramel ammoniacal"],
  ["E150d%Caramel au sulfite d???ammonium"],
  ["E151%Noir brillant PN"],
  ["E153%Charbon v??g??tal m??dicinal"],
  ["E155%Brun HT"],
  ["E160a%Carot??no??des"],
  ["E160b%i)	Bixine de rocou"],
  ["E160b%ii)	Norbixine de rocou"],
  ["E160c%Extrait de paprika, capsanthine, capsorubine"],
  ["E160d%Lycop??ne"],
  ["E160e%??-apocarot??nal-8' (C 30)"],
  ["E161b%Lut??ine"],
  ["E161g%Canthaxanthine (*1)"],
  ["E162%Rouge de betterave, b??tanine"],
  ["E163%Anthocyanes"],
  ["E170%Carbonate de calcium"],
  ["E171%Dioxyde de titane"],
  ["E172%Oxyde et hydroxyde de fer"],
  ["E173%Aluminium"],
  ["E174%Argent"],
  ["E175%Or"],
  ["E180%Lithol-rubine BK"],
  ["E420%Sorbitols"],
  ["E421%Mannitol"],
  ["E950%Ac??sulfame-K"],
  ["E951%Aspartame"],
  ["E952%Cyclamates"],
  ["E953%Isomalt"],
  ["E954%Saccharines"],
  ["E955%Sucralose"],
  ["E957%Thaumatine"],
  ["E959%N??ohesp??ridine DC"],
  ["E960%Glycosides de st??viol"],
  ["E961%N??otame"],
  ["E962%Sel d???aspartame-ac??sulfame"],
  ["E964%Sirop de polyglycitol"],
  ["E965%Maltitols"],
  ["E966%Lactitol"],
  ["E967%Xylitol"],
  ["E968%??rythritol"],
  ["E969%Advantame"],
  ["E170%Carbonate de calcium"],
  ["E172%Oxydes et hydroxydes de fer"],
  ["E200%Acide sorbique"],
  ["E202%Sorbate de potassium"],
  ["E210%Acide benzo??que (1)"],
  ["E211%Benzoate de sodium (1)"],
  ["E212%Benzoate de potassium (1)"],
  ["E213%Benzoate de calcium (1)"],
  ["E214%P-hydroxybenzoate d?????thyle"],
  ["E215%D??riv?? sodique de l???ester ??thylique de l???acide p-hydroxybenzo??que"],
  ["E218%P-hydroxybenzoate de m??thyle"],
  ["E219%D??riv?? sodique de l???ester m??thylique de l???acide p-hydroxybenzo??que"],
  ["E220%Anhydride sulfureux"],
  ["E221%Sulfite de sodium"],
  ["E222%Sulfite acide de sodium"],
  ["E223%Disulfite de sodium"],
  ["E224%Disulfite de potassium"],
  ["E226%Sulfite de calcium"],
  ["E227%Sulfite acide de calcium"],
  ["E228%Sulfite acide de potassium"],
  ["E234%Nisine"],
  ["E235%Natamycine"],
  ["E239%Hexam??thyl??net??tramine"],
  ["E242%Dicarbonate de dim??thyle"],
  ["E243%??thyl Lauroyl Arginate"],
  ["E249%Nitrite de potassium"],
  ["E250%Nitrite de sodium"],
  ["E251%Nitrate de sodium"],
  ["E252%Nitrate de potassium"],
  ["E260%Acide ac??tique"],
  ["E261%Ac??tates de potassium (4)"],
  ["E262%Ac??tates de sodium"],
  ["E263%Ac??tate de calcium"],
  ["E270%Acide lactique"],
  ["E280%Acide propionique"],
  ["E281%Propionate de sodium"],
  ["E282%Propionate de calcium"],
  ["E283%Propionate de potassium"],
  ["E284%Acide borique"],
  ["E285%T??traborate de sodium (borax)"],
  ["E290%Dioxyde de carbone"],
  ["E296%Acide malique"],
  ["E297%Acide fumarique"],
  ["E300%Acide ascorbique"],
  ["E301%Ascorbate de sodium"],
  ["E302%Ascorbate de calcium"],
  ["E304%Esters d???acides gras de l???acide ascorbique"],
  ["E306%Extrait riche en tocoph??rols"],
  ["E307%Alpha-tocoph??rol"],
  ["E308%Gamma-tocoph??rol"],
  ["E309%Delta-tocoph??rol"],
  ["E310%Gallate de propyle"],
  ["E315%Acide ??rythorbique"],
  ["E316%??rythorbate de sodium"],
  ["E319%Butylhydro-quinone tertiaire (BHQT)"],
  ["E320%Butylhydroxy-anisol (BHA)"],
  ["E321%Butylhydroxy-tolu??ne (BHT)"],
  ["E322%L??cithines"],
  ["E325%Lactate de sodium"],
  ["E326%Lactate de potassium"],
  ["E327%Lactate de calcium"],
  ["E330%Acide citrique"],
  ["E331%Citrates de sodium"],
  ["E332%Citrates de potassium"],
  ["E333%Citrates de calcium"],
  ["E334%Acide tartrique [L (+)]"],
  ["E335%Tartrates de sodium"],
  ["E336%Tartrates de potassium"],
  ["E337%Tartrate double de sodium et de potassium"],
  ["E338%Acide phosphorique"],
  ["E339%Phosphates de sodium"],
  ["E340%Phosphates de potassium"],
  ["E341%Phosphates de calcium"],
  ["E343%Phosphates de magn??sium"],
  ["E350%Malates de sodium"],
  ["E351%Malate de potassium"],
  ["E352%Malates de calcium"],
  ["E353%Acide m??tatartrique"],
  ["E354%Tartrate de calcium"],
  ["E355%Acide adipique"],
  ["E356%Adipate de sodium"],
  ["E357%Adipate de potassium"],
  ["E363%Acide succinique"],
  ["E380%Citrate de triammonium"],
  ["E385%??thyl??ne-diamine-t??tra-ac??tate de calcium disodium (calcium disodium EDTA)"],
  ["E392%Extraits de romarin"],
  ["E400%Acide alginique"],
  ["E401%Alginate de sodium"],
  ["E402%Alginate de potassium"],
  ["E403%Alginate d???ammonium"],
  ["E404%Alginate de calcium"],
  ["E405%Alginate de propane-1,2-diol"],
  ["E406%Agar-agar"],
  ["E407a%Algues Euchema transform??es"],
  ["E407%Carragh??nanes"],
  ["E410%Farine de graines de caroube"],
  ["E412%Gomme guar"],
  ["E413%Gomme adragante"],
  ["E414%Gomme arabique ou gomme d???acacia"],
  ["E415%Gomme xanthane"],
  ["E416%Gomme Karaya"],
  ["E417%Gomme Tara"],
  ["E418%Gomme Gellane"],
  ["E422%Glyc??rol"],
  ["E423%Gomme arabique modifi??e ?? l???acide oct??nylsuccinique (OSA)"],
  ["E425%Konjac"],
  ["E426%H??micellulose de soja"],
  ["E427%Gomme cassia"],
  ["E431%St??arate de polyoxy??thyl??ne (40)"],
  ["E432%Monolaurate de polyoxy??thyl??ne de sorbitane (polysorbate 20)"],
  ["E433%Monool??ate de polyoxy??thyl??ne de sorbitane (polysorbate 80)"],
  ["E434%Monopalmitate de polyoxy??thyl??ne de sorbitane (polysorbate 40)"],
  ["E435%Monost??arate de polyoxy??thyl??ne de sorbitane (polysorbate 60)"],
  ["E436%Trist??arate de polyoxy??thyl??ne de sorbitane (polysorbate 65)"],
  ["E440%Pectines"],
  ["E442%Phosphatides d???ammonium"],
  ["E444%Ac??tate isobutyrate de saccharose"],
  ["E445%Esters glyc??riques de r??sine de bois"],
  ["E450%Diphosphates"],
  ["E451%Triphosphates"],
  ["E452%Polyphosphates"],
  ["E456%Polyaspartate de potassium"],
  ["E459%B??ta-cyclodextrine"],
  ["E460%Cellulose"],
  ["E461%M??thylcellulose"],
  ["E462%??thylcellulose"],
  ["E463%Hydroxypropylcellulose"],
  ["E463a%Hydroxypropylcellulose faiblement substitu??e (L-HPC)"],
  ["E464%Hydroxypropylm??thylcellulose"],
  ["E465%M??thyl??thylcellulose"],
  ["E466%Carboxym??thyl-cellulose sodique, gomme cellulosique"],
  ["E468%Carboxym??thylcellulose de sodium r??ticul??e, gomme de cellulose r??ticul??e"],
  ["E469%Carboxym??thylcellulose hydrolys??e de mani??re enzymatique, gomme de cellulose hydrolys??e de mani??re enzymatique"],
  ["E470a%Sels de sodium, de potassium et de calcium d???acides gras"],
  ["E470b%Sels de magn??sium d???acides gras"],
  ["E471%Mono- et diglyc??rides d???acides gras"],
  ["E472a%Esters ac??tiques des mono- et diglyc??rides d???acides gras"],
  ["E472b%Esters lactiques des mono- et diglyc??rides d???acides gras"],
  ["E472c%Esters citriques des mono- et diglyc??rides d???acides gras"],
  ["E472d%Esters tartriques des mono- et diglyc??rides d???acides gras"],
  ["E472e%Esters monoac??tyltartriques et diac??tyltartriques des mono- et diglyc??rides d???acides gras"],
  ["E472f%Esters mixtes ac??tiques et tartriques des mono- et diglyc??rides d???acides gras"],
  ["E473%Sucroesters d???acides gras"],
  ["E474%Sucroglyc??rides"],
  ["E475%Esters polyglyc??riques d???acides gras"],
  ["E476%Polyricinol??ate de polyglyc??rol"],
  ["E477%Esters de propane-1,2-diol d???acides gras"],
  ["E479b%Huile de soja oxyd??e par chauffage ayant r??agi avec des mono- et diglyc??rides d???acides gras"],
  ["E481%St??aroyl-2-lactylate de sodium"],
  ["E482%St??aroyl-2-lactylate de calcium"],
  ["E483%Tartrate de st??aryle"],
  ["E491%Monost??arate de sorbitane"],
  ["E492%Trist??arate de sorbitane"],
  ["E493%Monolaurate de sorbitane"],
  ["E494%Monool??ate de sorbitane"],
  ["E495%Monopalmitate de sorbitane"],
  ["E499%Phytost??rols riches en stigmast??rol"],
  ["E500%Carbonates de sodium"],
  ["E501%Carbonates de potassium"],
  ["E503%Carbonates d???ammonium"],
  ["E504%Carbonates de magn??sium"],
  ["E507%Acide chlorhydrique"],
  ["E508%Chlorure de potassium"],
  ["E509%Chlorure de calcium"],
  ["E511%Chlorure de magn??sium"],
  ["E512%Chlorure d?????tain"],
  ["E513%Acide sulfurique"],
  ["E514%Sulfates de sodium"],
  ["E515%Sulfates de potassium"],
  ["E516%Sulfate de calcium"],
  ["E517%Sulfate d???ammonium"],
  ["E520%Sulfate d???aluminium"],
  ["E521%Sulfate d???aluminium sodique"],
  ["E522%Sulfate d???aluminium potassique"],
  ["E523%Sulfate d???aluminium ammonique"],
  ["E524%Hydroxyde de sodium"],
  ["E525%Hydroxyde de potassium"],
  ["E526%Hydroxyde de calcium"],
  ["E527%Hydroxyde d???ammonium"],
  ["E528%Hydroxyde de magn??sium"],
  ["E529%Oxyde de calcium"],
  ["E530%Oxyde de magn??sium"],
  ["E534%Tartrate de fer"],
  ["E535%Ferrocyanure de sodium"],
  ["E536%Ferrocyanure de potassium"],
  ["E538%Ferrocyanure de calcium"],
  ["E541%Phosphate d???aluminium sodique acide"],
  ["E551%Dioxyde de silicium"],
  ["E552%Silicate de calcium"],
  ["E553a%Silicate de magn??sium"],
  ["E553b%Talc"],
  ["E554%Silicate alumino-sodique"],
  ["E555%Silicate alumino-potassique"],
  ["E556%Silicate alumino-calcique (2)"],
  ["E558%Bentonite (3)"],
  ["E559%Silicate d???aluminium (kaolin) (2)"],
  ["E570%Acides gras"],
  ["E574%Acide gluconique"],
  ["E575%Glucono-delta-lactone"],
  ["E576%Gluconate de sodium"],
  ["E577%Gluconate de potassium"],
  ["E578%Gluconate de calcium"],
  ["E579%Gluconate ferreux"],
  ["E585%Lactate ferreux"],
  ["E586%4-Hexylr??sorcinol"],
  ["E620%Acide glutamique"],
  ["E621%Glutamate monosodique"],
  ["E622%Glutamate monopotassique"],
  ["E623%Diglutamate de calcium"],
  ["E624%Glutamate d???ammonium"],
  ["E625%Diglutamate de magn??sium"],
  ["E626%Acide guanylique"],
  ["E627%Guanylate disodique"],
  ["E628%Guanylate dipotassique"],
  ["E629%Guanylate de calcium"],
  ["E630%Acide inosinique"],
  ["E631%Inosinate disodique"],
  ["E632%Inosinate dipotassique"],
  ["E633%Inosinate de calcium"],
  ["E634%5???-ribonucl??otide calcique"],
  ["E635%5???-ribonucl??otide disodique"],
  ["E640%Glycine et son sel de sodium"],
  ["E641%L-leucine"],
  ["E650%Ac??tate de zinc"],
  ["E900%Dim??thylpolysiloxane"],
  ["E901%Cire d???abeille blanche et jaune"],
  ["E902%Cire de candelilla"],
  ["E903%Cire de carnauba"],
  ["E904%Shellac"],
  ["E905%Cire microcristalline"],
  ["E907%Poly-1-d??c??ne hydrog??n??"],
  ["E914%Cire de poly??thyl??ne oxyd??e"],
  ["E920%L-cyst??ine"],
  ["E927b%Carbamide"],
  ["E938%Argon"],
  ["E939%H??lium"],
  ["E941%Azote"],
  ["E942%Protoxyde d???azote"],
  ["E943a%Butane"],
  ["E943b%Isobutane"],
  ["E944%Propane"],
  ["E948%Oxyg??ne"],
  ["E949%Hydrog??ne"],
  ["E999%Extraits de quillaia"],
  ["E1103%Invertase"],
  ["E1105%Lysozyme"],
  ["E1200%Polydextrose"],
  ["E1201%Polyvinylpyrrolidone"],
  ["E1202%Polyvinylpolypyrrolidone"],
  ["E1203%Alcool polyvinylique (APV)"],
  ["E1204%Pullulan"],
  ["E1205%Copolym??re m??thacrylate basique"],
  ["E1206%Copolym??re de m??thacrylate neutre"],
  ["E1207%Copolym??re de m??thacrylate anionique"],
  ["E1208%Copolym??re d???ac??tate de vinyle et de polyvinylpyrrolidone"],
  ["E1209%Copolym??re greff?? d'alcool polyvinylique et de poly??thyl??neglycol"],
  ["E1404%Amidon oxyd??"],
  ["E1410%Phosphate de monoamidon"],
  ["E1412%Phosphate de diamidon"],
  ["E1413%Phosphate de diamidon phosphat??"],
  ["E1414%Phosphate de diamidon ac??tyl??"],
  ["E1420%Amidon ac??tyl??"],
  ["E1422%Adipate de diamidon ac??tyl??"],
  ["E1440%Amidon hydroxypropyl??"],
  ["E1442%Phosphate de diamidon hydroxypropyl??"],
  ["E1450%Oct??nyle succinate d???amidon sodique"],
  ["E1451%Amidon oxyd?? ac??tyl??"],
  ["E1452%Oct??nyl succinate d???amidon d???aluminium"],
  ["E1505%Citrate de tri??thyle"],
  ["E1517%Diac??tate de glyc??ryle (diac??tine)"],
  ["E1518%Triac??tate de glyc??ryle (triac??tine)"],
  ["E1519%Alcool benzylique"],
  ["E1520%Propanediol-1,2 (propyl??ne glycol)"],
  ["E1521%Poly??thyl??ne glycol"],
  ["E170%Carbonate de calcium"],
  ["E260%Acide ac??tique"],
  ["E261%Ac??tates de potassium (4)"],
  ["E262%Ac??tates de sodium"],
  ["E263%Ac??tate de calcium"],
  ["E270%Acide lactique"],
  ["E290%Dioxyde de carbone"],
  ["E296%Acide malique"],
  ["E300%Acide ascorbique"],
  ["E301%Ascorbate de sodium"],
  ["E302%Ascorbate de calcium"],
  ["E304%Esters d???acides gras de l???acide ascorbique"],
  ["E306%Extrait riche en tocoph??rols"],
  ["E307%Alpha-tocoph??rol"],
  ["E308%Gamma-tocoph??rol"],
  ["E309%Delta-tocoph??rol"],
  ["E322%L??cithines"],
  ["E325%Lactate de sodium"],
  ["E326%Lactate de potassium"],
  ["E327%Lactate de calcium"],
  ["E330%Acide citrique"],
  ["E331%Citrates de sodium"],
  ["E332%Citrates de potassium"],
  ["E333%Citrates de calcium"],
  ["E334%Acide tartrique [L (+)]"],
  ["E322i%L??cithine"],
  ["E322ii%L??cithine partiellement hydrolys??e"],
  ["E307c%DL-Alpha-tocoph??rol"],
  ["E503i%Carbonate d'ammonium"],
  ["E500ii%Bicarbonate de sodium"],
  ["E500iii%Sesquicarbonate de sodium"],
];


  /* Divise le tableau d'origine en sous tableau pour s??parer le code de sa d??nomination */
let additifsEuropeenDivisee = [];
for(let element of additifsEuropeen){
  additifsEuropeenDivisee.push(element[0].split('%'));
}
// console.log(additifsEuropeenDivisee);


  /* Ordonne le tableau divis?? de mani??re croissante */
let additifsEuropeenDiviseeOrdonnee = [];
additifsEuropeenDiviseeOrdonnee = additifsEuropeenDivisee.sort();


  /* Filtre le tableau ordonn??e pour supprimmer les occurences */
  let additifsEuropeenDiviseeOrdonneeFiltree = [];

// Lors de la premi??re it??ration car le tableau est vide
additifsEuropeenDiviseeOrdonneeFiltree.push(additifsEuropeenDiviseeOrdonnee[0]);

// It??re sur le tableau ordonn?? et r??cup??re la valeur ?? comparer pour voir s'il est pr??sent dans le tableau filtr??
for(let i = 1; i < additifsEuropeenDiviseeOrdonnee.length; i++){
  let trouvee = false;
  // On r??cup??re la valeur de comparaison pr??sent dans le tableau ordonn??
  let elementDeRecherche = additifsEuropeenDiviseeOrdonnee[i][0];

  // On compare avec la derni??re valeur inject?? du tableau filtr?? (la comparaison est n??cessaire seulement pour le dernier ??l??ment du tableau filtr?? ??tant donn?? que les valeurs sont dans l'ordre, la seul occurence possible sera sur la derni??re valeur)
  for(let x = additifsEuropeenDiviseeOrdonneeFiltree.length - 1; x < additifsEuropeenDiviseeOrdonneeFiltree.length; x++){  
    if(elementDeRecherche === additifsEuropeenDiviseeOrdonneeFiltree[additifsEuropeenDiviseeOrdonneeFiltree.length - 1][0]){
      // Si oui, on sort de la boucle et on injecte pas cet ??l??ment
      trouvee = true;
      break;
    };
  };
  if(trouvee === false){
    // Sinon, on injecte l'??l??ment car il n'est pas pr??sent dans le tableau
    additifsEuropeenDiviseeOrdonneeFiltree.push(additifsEuropeenDiviseeOrdonnee[i]);
  };
};

// console.log(additifsEuropeenDiviseeOrdonneeFiltree);

let additifsListJSON = JSON.stringify(additifsEuropeenDiviseeOrdonneeFiltree);
// console.log(additifsListJSON);



// console.log('fin');


module.exports = additifsEuropeenDiviseeOrdonneeFiltree;
},{}],4:[function(require,module,exports){
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

const translate = require('translate');

translate.engine = 'libre';

const text =  translate("Hello world", "es");
console.log(text); 


// const translate = require('google-translate-api');


/* **********************************************************************************
*                           R??cup??rer les ??l??ments HTML                             *
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

/***** R??cup??rer l'emplacement du titre H2 "RESULTAT" de la section de r??sultat pour pouvoir faire un scroll lors de la recherche *****/
const verticalResultProductSectionH2Position = el_ResultProductSectionH2.getBoundingClientRect().y;
console.log(verticalResultProductSectionH2Position)



/***** R??cup??rer le code-Barre ?? la soumission du formulaire *****/
el_Form.addEventListener('submit', function(e){
  e.preventDefault();
  const codeBarre = el_InputSearch.value;
  const entreeValide = /^([0-9]{8}|[0-9]{13})$/g;

  // Si l'utilisateur n'a pas entr?? un texte valide
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
    
    /***** Effacer l'??l??ment anciennement chercher lors d'une nouvelle recherche *****/
    removeAllChildrensOfParentElement(el_ResultNameSection);
    removeAllChildrensOfParentElement(el_ResultAllergenSection);
    removeAllChildrensOfParentElement(el_ResultAdditiveSection);
    removeAllChildrensOfParentElement(el_ResultProductInformationH3);
    removeAllChildrensOfParentElement(el_ResultProductClassification);
  
  
    /***** Ouvrir une requ??te pour r??cup??rer des donn??es sur OpenFoodFact *****/
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', `https://world.openfoodfacts.org/api/v0/product/${codeBarre}.json`);
    xhr.send();
    
  
    /***** Agir lorsque la r??ponse est arriv??e *****/
    xhr.addEventListener('loadend', () => {
      console.log(xhr.status);
  
      // V??rifier le retour du serveur ET d'une requ??te sans erreur (200)
      if(xhr.status === 200){

        // V??rifier si le produit est pr??sent dans la base de donn??es, si oui effectuer toutes les actions d'affichage
        const xhrResponse = JSON.parse(xhr.response);

        if(xhrResponse.status === 1){

            /***** R??cup??rer la r??ponse *****/
          // R??cup??rer la r??ponse
          let responseRequest = xhr.response;
      
          // Parser en objet JS
          let responseRequestObject = JSON.parse(responseRequest);
      
          console.log(responseRequestObject);
          // console.log(responseRequestObject.product.generic_name);
    
          /***** R??cup??rer le nom de la marque et du produit *****/
          // D??clarer les valeurs r??cup??rant les diff??rents nom du produits selon leur disponibilit??
          let nameProduct = null;
          
          // On remplace les ',' par ', ' si il y en a
          let brands = responseRequestObject.product.brands.replaceAll(',', ', ');
          let abbreviatedProductName = responseRequestObject.product.abbreviated_product_name;
          let productName = responseRequestObject.product.product_name;
          let productNameFr = responseRequestObject.product.product_name_fr;
          let genericName = responseRequestObject.product.generic_name;
      
          // Regarder si les ??l??ments du nom du produit r??cup??r??s sont pr??sents en tant que propri??t?? et si ils ne sont pas vide (on r??cup??re dans l'ordre donn?? sinon)
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
      
          
          /***** R??cup??rer le nom de la marque: le formater ou texte par defaut sinon *****/
          let resultProduct = null;
          if(brands){
            brands = formatToUppercase(brands);
            resultProduct = `${brands} - ${nameProduct}`;
          }else{
            resultProduct = `Marque inconnue - ${nameProduct}`
          };
      
    
          /***** R??cup??rer les allergenes *****/
          let allergenArray = responseRequestObject.product.allergens_hierarchy;
          let traceArray = responseRequestObject.product.traces_hierarchy;
          let resultAllergenAndTraceArrayOrdonned = [];
          let resultAllergenAndTraceArrayFiltered = [];
          let resultAllergenAndTraceABSENT = false;
          
          if(el_InputAllergen.checked === true){
            console.log(allergenArray, traceArray);
    
            // Si les tableaux d'allergenes et de traces r??cup??r??s sont vides
            if(allergenArray.length < 1 && traceArray.length < 1){
              resultAllergenAndTraceABSENT = true;

            }else{

              // R??cup??rer les ??l??ments du tableau allergenArray
              let allergenArrayFormate = [];
              getValueSearchedFromArrayToNewArray(allergenArray, allergenArrayFormate, ':', 1);
              console.log(allergenArrayFormate)

      
              // R??cup??rer les ??l??ments du tableau allergenArray
              let traceArrayFormate = [];
              getValueSearchedFromArrayToNewArray(traceArray, traceArrayFormate, ':', 1);
              console.log(traceArrayFormate)
              

              // Concat??ner les deux tableaux pour former le tableau total d'allerg??nes
              resultAllergenAndTraceArrayOrdonned = allergenArrayFormate.concat(traceArrayFormate).sort();
              console.log(resultAllergenAndTraceArrayOrdonned);


              /* Filtre le tableau ordonn?? pour supprimmer les occurences */
              // Lors de la premi??re it??ration car le tableau est vide
              resultAllergenAndTraceArrayFiltered.push(resultAllergenAndTraceArrayOrdonned[0]);
              
              // It??re sur le tableau ordonn?? et r??cup??re la valeur ?? comparer pour voir s'il est pr??sent dans le tableau filtr??
              for(let i = 1; i < resultAllergenAndTraceArrayOrdonned.length; i++){
                let trouvee = false;
                // On r??cup??re la valeur de comparaison pr??sent dans le tableau ordonn??
                let elementDeRecherche = resultAllergenAndTraceArrayOrdonned[i];

                // On compare elementDeRecherche avec la derni??re valeur inject?? du tableau filtr?? (la comparaison est n??cessaire seulement pour le dernier ??l??ment du tableau filtr?? ??tant donn?? que les valeurs sont dans l'ordre, la seul occurence possible sera sur la derni??re valeur qu'on vient d'injecter)
                for(let x = resultAllergenAndTraceArrayFiltered.length - 1; x < resultAllergenAndTraceArrayFiltered.length; x++){  
                  if(elementDeRecherche === resultAllergenAndTraceArrayFiltered[resultAllergenAndTraceArrayFiltered.length - 1]){
                    // Si oui, on sort de la boucle et on injecte pas cet ??l??ment
                    trouvee = true;
                    break;
                  };
                };
                if(trouvee === false){
                  // Sinon, on injecte l'??l??ment car il n'est pas pr??sent dans le tableau
                  resultAllergenAndTraceArrayFiltered.push(resultAllergenAndTraceArrayOrdonned[i]);
         



                };
              };

              console.log('resultAllergenAndTraceArrayFiltered : ', resultAllergenAndTraceArrayFiltered )
            };  
          };
    
    
          /***** R??cup??rer les additifs *****/
          let additifArray = responseRequestObject.product.additives_original_tags;
          let resultAdditifABSENT = false;
          let additifArrayFormate = [];
          let resultAdditif = "";
          let additifArrayFormateWithNameGrouped = [];

    
          if(el_InputAdditive.checked === true){
            console.log(additifArray);
    
            // Si le tableau d'additifs est vide
            if(additifArray.length < 1){
            // resultAdditif = "Aucuns additifs ne semblent ??tre pr??sents"
              resultAdditifABSENT = true;

            }else{

              // R??cup??rer les ??l??ments du tableau additifArray
              getValueSearchedFromArrayToNewArray(additifArray, additifArrayFormate, ':', 1);
              console.log(additifArrayFormate)
              resultAdditif = additifArrayFormate.join(', ');
              console.log(resultAdditif);

              
              /*** R??cup??rer le nom additif correspondant au code additif (dans le module additifsEUROPA.js) ***/
              // Rechercher si l'??l??ment est pr??sent dans la liste des additifs et les extraire dans un tableau
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


              // Regrouper les codes repsectivement avec leur d??nomination
              for(let numberOfSubArray = 0; numberOfSubArray < additifArrayFormateWithNameSeparated.length; numberOfSubArray++){
                additifArrayFormateWithNameGrouped.push(additifArrayFormateWithNameSeparated[numberOfSubArray].join(': '));
              };

              console.log(additifArrayFormateWithNameGrouped);

            };
          };
    

        







          /***** R??cup??rer les ingr??dients non halal *****/
    
          
    
    
    
    
          /***** Injecter les resultats dans le DOM *****/

          /*** Supprimer l'??l??ment <p> d'intro ***/
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
          // Les allerg??nes
          if(el_InputAllergen.checked){
            // Le <h2>
            const injectedH3Allergen = injectElement('h3', el_ResultAllergenSection, 'Allerg??nes');
            injectedH3Allergen.classList.add('resultProduct-section-h3');

            if(resultAllergenAndTraceABSENT){
              const injectedPAllergen = injectElement('p', el_ResultAllergenSection, 'Aucun allerg??ne semble ??tre pr??sent');
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
              const injectedPAdditive = injectElement('p', el_ResultAdditiveSection, 'Aucun additif semble ??tre pr??sent');
              injectedPAdditive.classList.add('resultProduct-section-default');

            }else{

              // La liste <ul>
              const injectedUlAdditive = injectElement('ul', el_ResultAdditiveSection);
    
              // Les items <li>
              /* Cr??er un objet contenant dynamiquement des propri??t??s 'injectedAdditive${N}' o?? chacune de ces propri??t?? contient l'objet HTML <li> cr????. Je peux donc acc??der ?? l'objet HTML DOM en passant par l'objet puis la propri??t?? pour manipuler cet HTMLElement avec les m??thodes du DOM.
              EX: itemsListAdditiveObject.injectedAdditive0.style.color = "red";
              J'acc??de ?? l'objet puis ?? la propri??t?? injectedAdditive0 qui ?? pour valeur un <li>. Puis je le manipule avec les m??thodes du DOM. Cela ne cr???? pas des sous propri??t??s mais utilise l'objet li est acc??de ?? ses m??thodes et propri??t??s.
              Si je veux ajouter une classe ou autre sur l'ensemble des <li>, je n'ai qu'?? it??rer sur les propri??t??s de l'objets qui sont les <li> cr??es. */    
              const itemsListAdditiveObject = createObjectofAListHTMLElementFromValueofArrayAndInjectThem(additifArrayFormateWithNameGrouped, 'injectedLIAdditive', 'li', injectedUlAdditive);
             
              let itemsListAdditiveObjectKeyArray = Object.keys(itemsListAdditiveObject);

              for(let li of itemsListAdditiveObjectKeyArray){
                itemsListAdditiveObject[li].classList.add('resultProduct-section-list-item');
              };
            };
          };


          
          /*** Injecter les informations compl??mentaires (Nutriscore et Nova) ***/
          /* Injecter le svg au sein de la balise h3'*/
          el_ResultProductInformationH3.innerHTML = `<svg class="resultProduct-information-H3-svg" xmlns="http://www.w3.org/2000/svg" width="498" height="94" viewBox="0 0 498 94">
          <g id="Groupe_27" data-name="Groupe 27" transform="translate(-634 -1177)">
            <path id="Rectangle_11" data-name="Rectangle 11" d="M7.333,0h404A86.667,86.667,0,0,1,498,86.667v0A7.333,7.333,0,0,1,490.667,94h-404A86.667,86.667,0,0,1,0,7.333v0A7.333,7.333,0,0,1,7.333,0Z" transform="translate(634 1177)" fill="#a9de81"/>
            <text id="Classification" transform="translate(687 1244)" fill="#f8f8f8" font-size="48" font-family="Comfortaa" font-weight="300" letter-spacing="-0.03em"><tspan x="0" y="0">CLASSIFICATION</tspan></text>
          </g>
        </svg>`


          /* Ajouter la classe pour les styles lorsque cette section appara??t */
          el_ResultProductInformationSection.classList.add('resultProduct-information-actif');

          /* Ajouter les deux ??l??ments graphique pour l'effet de vague */
          const injectedImgWaveInformation = injectElement('img', el_ResultProductInformationSection);
          injectedImgWaveInformation.setAttribute('src', 'assets/icon/Wave.png');
          injectedImgWaveInformation.setAttribute('alt', 'Image utilis?? pour le graphisme de la page');
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
            injectedNutriscore.setAttribute('alt', 'Image nutriscore ind??fini');
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




          // Sinon (repsonse.status != 1), le produit n'est pas pr??sent dans la base de donn??es
        }else{
          let unknownProductText = "D??sol??, nous ne connaissons pas ce produit :("
          const unknownProduct = injectElement('h3', el_ResultNameSection, unknownProductText);

          el_InputSearch.value = "";
          el_InputAdditive.checked = false;
          el_InputAllergen.checked = false;
        };



        /** Faire d??filer la page jusqu'?? la section de r??sultat **/
        // R??cup??rer l'emplacement Y de la page actuelle (dans le cas o?? la page ?? ??t?? scroll??e)
        const actuallyVerticalPagePosition = window.scrollY;

        // Scroller vars le titre en soustrayant la hauteur de scroll actuelle en enlevant qque pixel pour ??carter le titre du haut du window (question d'ergonomie)
        window.scrollBy(0, verticalResultProductSectionH2Position - actuallyVerticalPagePosition - 20);

  
      }else{
        // Cas erreur de retour non 200
        let errorServerResponseText = `${xhr.statusText} : Une erreur est survenue, impossible d'afficher le produit`
        const errorServerResponse = injectElement('h3', el_ResultNameSection, errorServerResponseText)
      };
      
    });
    
  };

});

},{"./additifsEUROPA":3,"translate":2}]},{},[4]);
