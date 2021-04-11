var kelimeler = ['ALEMŞÜMUL', 'BASÜBADELMEVT ', 'CAMEKAN', 'ÇERAĞ', "DARÜLFÜNUN", "EFKARIUMUMİYE", "FİLHAKİKA", "GAYBUBET", "HAMUŞAN", "HİSSİKABLELVUKU", "HODBEHOD", "ISLAHAT", "İCAZETNAME", "JÜLİDE ", "KADİRŞİNAS ",
    'LALETTAYİN', 'MUZAHRAFAT ', 'MÜŞKÜLPESENT', 'NÜMAYİŞ', "ORDUGAH", "ÖMRÜBİLLAH", "POSTNİŞİN", "RUHİYAT", "SEYRÜSEFER",
    'ŞEBNEM', 'TEKAMÜL ', 'ULUHİYET', 'VELHASIL', "YEKNESAK", "ZAPTURAPT"
];


var anlamlar = ['Evrensel, dünyâya yayılacak ölçüde',
 'Ölümden sonra dirilme, kıyâmet gününde ölülerin dirilmesi',
 'Vitrin, camla çevrili, camla örtülü yer.',
  'Mum, yağa bulanıp yakılan fitil.',
"Üniversite.",
    "Kamuoyu, bir memleket halkının bir mesele üzerindeki görüşü.",
    'Gerçekten, hakîkatte, doğrusu.',
    'Göz önünde olmama, çekilip gitmek',
    'Susmuşlar, vefat edenler.',
    'Önsezi, olacak bir şeyi olmadan önce haber veren duygu.',
    "Kendi başına, kendi kendine.",
    "Reform, bir şeydeki eksiklikleri düzeltmek için yapılan işler.",
    'Diploma, bir kimseye icâzet verildiğini gösteren belge',
    'Karmakarışık, dağınık',
    'Değerli kimselere lâyık oldukları kıymeti veren, kıymetlerini bilen.',
    'Rastgele, gelişigüzel.',
    "Çerçöp, pislik, süprüntü.",
    "Güç beğenen, memnun edilmesi zor olan.",
    "Gösteri, gösteriş..",
    'Ordunun konakladığı yer.',
    'Ömür boyunca, hayat süresince, hiçbir zaman.',
    'Bir tekkede şeyhlik postuna oturan, şeyh makamına geçen kimse.',
    'Psikoloji, ruhla ilgili haller.',
    "Gidiş geliş, trafik",
    "Çiy.",
    "Evrim, olgunlaşma, gelişim.",
    "İlâh olma, ilâhlık, tanrılık..",
    "Sonuç olarak, sözün kısası, kısacası..",
    'Hep aynı şekilde, değişmeden devam eden, tek düze, monoton.',
    'Düzen, intizam, disiplin.'

];
var hangi_dilden_gecti=['Dilimize Arapçadan geçmiştir.',
"Dilimize Arapçadan geçmiştir.",
"Dilimize Farsçadan geçmiştir.",
"Dilimize Farsçadan geçmiştir.",
"Dilimize Arapçadan geçmiştir.",
    "Dilimize Arapçadan geçmiştir.",
    "Dilimize Arapçadan geçmiştir.",
    "Dilimize Arapçadan geçmiştir.",
    "Dilimize Arapçadan geçmiştir.",
    "Dilimize Farsçadan geçmiştir.",
    "Dilimize Arapçadan geçmiştir.",
    "Dilimize Farsçadan geçmiştir.",
    "Dilimize Arapçadan geçmiştir.",
    "Dilimize Farsça ve Arapçadan geçmiştir.",
    "Dilimize Farsçadan geçmiştir.",
    "Dilimize Farsça ve Arapçadan geçmiştir.",
    "Dilimize Arapçadan geçmiştir.",
    "Dilimize Arapçadan geçmiştir.",
    "Dilimize Farsça ve Arapçadan geçmiştir.",
    "Dilimize Arapçadan geçmiştir.",
    "Dilimize Arapçadan geçmiştir.",
    "Dilimize Farsçadan  geçmiştir.",
    "Dilimize Arapçadan geçmiştir.",
    "Dilimize Farsçadan geçmiştir.",
    "Dilimize Farsçadan  geçmiştir.",
    "Dilimize Arapçadan geçmiştir.",
    "Dilimize Arapçadan geçmiştir.",
    "Dilimize Arapçadan geçmiştir.",
    "Dilimize Farsça ve Arapçadan geçmiştir.",
    "Dilimize Farsça ve Arapçadan geçmiştir."

];

var ornek=['Neden maddemle bu kadar meşgulsün, ne ben ne de senin sanatım dediğin şey zannettiğin kadar mühim değildir, elinden gelirse senin de benim de içimizden konuşan sırra, âlemşümul sevgiye yüksel. (Ahmet H. Tanpınar)',
"Klasik ve rûhânî genç kız tipinin bâsübâdelmevte uğramış yeni bir hayâlini canlandırıyordu. (Peyâmi Safâ)",
"Bunu ben, canlı adamlardan fazla camekânlarda duran bal mumu mankenlerden anlıyorum. (Refik H. Karay)",
"Şehîd-i aşkın oldum lâle-zâr-ı dâğdır sinem Çerâğ-ı türbetim şem’-i mezarım varsa sendendir.(Şeyh Galib)",
"Eski Dârülfünun binâsının önünde durdu, ayrılmak arzusuna benzer bir hareket yaptı. (Peyâmi Safâ)",
    "Fransa Katolik olmakla berâber efkârıumûmiye her yerden ziyâde orada Katolik mezhebinin aleyhindedir. (Nâmık Kemal)",
    'Filhakîka Ortaçağ İslâm ülkelerinde târih, sâdece eğitimde değil siyâsî hayatta ve dînî düşüncede de mühim bir yer tutar. (Ümit Meriç)',
    "Bahtiyar addolunmasın mı o insan ki gaybûbeti millettaşı olmayan insanları da müteessir eder. (Muallim Nâci)",
    "Galata Kule Kapısı Mevlevîhânesi, Şeyh Gālib ve çok sevdiği Esrar Dede gibi en büyük iki şâirin yanı sıra 70 kadar dîvan sâhibi şâir ve birçok besteciler, bilginler, mesnevîhanlar yetiştirmiştir. Bunların bir kısmı Mevlevîhâne’nin “Hâmûşan” (Susmuşlar) adı verilen mezarlığında gömülüdür (Ahmet Kabaklı)",
    "Kulağımın tâ dibinden bir öksürük sesi işittim, arkama bakamadım, hissikablelvukūum, dehşetli bir şeyin bir adım geride beni beklediğini söylüyordu. (Fahri Celâl)",
    "Cedlerinizden kalma bir vatanı hodbehod bırakamazsınız. (Yahyâ Kemal)",
    '“Islâhât-ı askeriyye, mâliyye, mülkiyye.” Islâhat hulyâlarının ne çeşitlerini dinlemişti. (Reşat N. Güntekin)',
    "Medresenin tâliye kısmını bitirenlere şahâdetnâme ve âlî kısmını bitirenlere icâzetnâme verilecekti. (İsmâil H. Uzunçarşılı)",
    "Habâb-ı eşk içinde mûy-i jûlîdemle hoş-hâlim (Fuzûlî)",
    "Sen Süleyman gibi bir kadirşinâsın ocağında yetiştiğine hamdet. (Rûşen E. Ünaydın)",
    "Nihâyet dayanamadım, lâlettâyin bir mâzeret uydurarak sokağa fırladım. (Ahmet H. Tanpınar)",
    'Yerde gene bir halı ve uzun tüyleri arasında dünyânın muzahrafâtını taşıyan bir ayı postu vardı. (Reşat N. Güntekin)',
    "Hükemâdan bir fırka vardır ki bunlar cihanda hiçbir şeyi beğenmezler. Bunlara müşkülpesent demek kifâyet etmez. (Ahmed Midhat Efendi)",
    "Fransa ve İsviçre’de İtalyan amele az çok gürültülü nümâyişlerle istiskal ediliyor. (Cenap Şahâbeddin)",
    "Ordugâha yarım saat evvel dört nala gelen bu adam yaşlı, şişman bir askerdi. (Ömer Seyfeddin)",
    "Eli hafifti. Ömrübillâh enjeksiyon yapmış kimse değildi. (Fahri Celâl)",
    "Girişin sol tarafında yan yana iki türbede, dîvan edebiyâtının büyük şâiri ve dergâhın en şöhretli postnişîni Şeyh Galib (Galib Dede) ile Mevlânâ Mesnevîsi’ni şerhedenlerin en büyüğü olarak “Hazret-i Şârih” diye anılan Şeyh İsmâil Ankaravî Dede yatmaktadır. (Ahmet Kabaklı)",
    'Kadın rûhiyâtını tahlilde üstat olan bir edip… (Ahmet Hâşim)',
    "Şüphesiz kafasında garp memleketlerindeki vapur seyrüseferlerinin, girip çıkma usûllerinin mükemmelliği hakkında bir yığın fikir ve kıyasla yürüyordu. (Ahmet H. Tanpınar)",
    "Berg-i hâtırda olan şebnem-i ümmîd gibi. (Nâilî) ",
    "Voltaire’in belki en dikkate lâyık tarafı târihte tekâmülü sezmiş olmasıdır. (Ümit Meriç)",
    "Firavun ulûhiyet dâvâsına kalkışmazdan evvel böyle bir niyette bulunduğunu vezîri Hâmân’a açıp reyini istifsar etmiş. (Fâik Reşat)",
    "Evliyâ Çelebi Bursa çeşmelerinden uzun uzadıya bahsettikten sonra sözü, “Velhâsıl Bursa sudan ibârettir” diyerek bitirir. (Ahmet H. Tanpınar)",
    "Paşanın ağır ve yeknesak sesi kendisine ayırdığım küçük dikkati yormuyor, içimdeki hayallerin serbest uzanışını bozmuyordu. (Peyâmi Safâ)",
    "Bu iki deli hiçbir nizâma, hiçbir kayda, hiçbir zapturapta girmeyen, dünya şerefinde gözleri olmayan Anadolu dervişlerindendi. (Ömer Seyfeddin)"



];
var input;

function myFunction() {
  var  filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');

  filter = input.value.toUpperCase();
  ul = document.getElementById('myUL');
    li = ul.getElementsByTagName('li');
 for (i = 0; i < li.length; i++) {
    li[i].style.display =kelimeler[i];
   // alert("aluuu");
 }
 //alert(li);
  //alert(input.value);
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0];
    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}


function getir(indis) {
  alert("geldim");
    document.getElementById("anlam_b").innerHTML = "Anlamı:";
    document.getElementById("dil_b").innerHTML = "Dilimize geçtiği köken:";
    document.getElementById("ornek_b").innerHTML = "Örnek Cümle:";
    document.getElementById("kelime").innerHTML = kelimeler[indis];
    document.getElementById("anlam").innerHTML = anlamlar[indis];
    document.getElementById("dil").innerHTML = hangi_dilden_gecti[indis];
    document.getElementById("ornek").innerHTML = ornek[indis];
}
function gel_yeni(indis) {
  alert("geldim");
    document.getElementById("anlam_b").innerHTML = "Anlamı:";
    document.getElementById("dil_b").innerHTML = "Dilimize geçtiği köken:";
    document.getElementById("ornek_b").innerHTML = "Örnek Cümle:";
    document.getElementById("kelime").innerHTML = kelimeler[indis];
    document.getElementById("anlam").innerHTML = anlamlar[indis];
    document.getElementById("dil").innerHTML = hangi_dilden_gecti[indis];
    document.getElementById("ornek").innerHTML = ornek[indis];
}



function ara() {

    var indis=0;
    input = document.getElementById('myInput');
    indis = kelimeler.indexOf(input.value);
    //alert(indis);
    if(indis==-1){
        alert("aranan bulunamadı");
    }
    else{
        if(indis){
        
           // alert(indis);
        document.getElementById("anlam_b").innerHTML="Anlamı:";
        document.getElementById("dil_b").innerHTML="Dilimize geçtiği köken:";
        document.getElementById("ornek_b").innerHTML="Örnek Cümle:";


        document.getElementById("kelime").innerHTML=kelimeler[indis];
        document.getElementById("anlam").innerHTML=anlamlar[indis];
        document.getElementById("dil").innerHTML=hangi_dilden_gecti[indis];
        document.getElementById("ornek").innerHTML=ornek[indis];
        
       
        }
        else{
            document.getElementById("kelime").innerHTML="Bulunamadı";
        }
    }
    document.getElementById('myInput').value=" ";
}

