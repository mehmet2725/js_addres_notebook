// Ad, Soyad, Adres, Telefon, E-posta dizileri olsun. 
// Kullanıcıdan kayıt etmek istediğimiz bilgileri alalım. 
// Aldığımız bilgileri ilgili diziye pushlayalım. 
// localStorage'a kayıt edelim. 
// Eğer daha önceden kayıtlı bilgimiz var ise dizide önce
//  onları yazdıralım ki aynı bilgileri tekrar tekrar girmeyelim



// Şimdi burada sesli düşünüyorum kullanıcıdan bilgileri alacağım ve bu 
// bilgileri ilgili dizilere pushlayacağım. Tüm bunlar olurken ls ye de kayıt edecek
// Ama şöyle bir durum var önce bütün girilen bilgileri listeleyeceğim ki kullanıcı
// aynı bilgileri tekrar girmesin nihat hocam bunun için bir kontrol mekanizması 
// istememiş zaten içerisini okumak ve karşılaştırmayı öğrenmedik öğrendiysek de ben 
// bilmiyorm o yüzden bu gereksiz detayı atlıyorum. Yani sadece listeleyecek
// son ettiğimiz tekrardaaki gibi hepsi için yeni bir metot oluşturarak 
// olabildiğince clean kod yazarak ilerleyeceğim.


let namee = [];
let lastName = [];
let addres = [];
let tel = [];
let eposta = [];

if(localStorage.namee){
        namee = JSON.parse(localStorage.namee);
        lastName = JSON.parse(localStorage.lastName);
        addres = JSON.parse(localStorage.addres);
        tel = JSON.parse(localStorage.tel);
        eposta = JSON.parse(localStorage.eposta);

        for(let i = 0; i < namee.length; i++){
        console.log(`${i + 1}.İsim: ${namee[i]}`);
        console.log(`${i + 1}.:Soyisim ${lastName[i]}`);
        console.log(`${i + 1}.:Adres ${addres[i]}`);
        console.log(`${i + 1}.Telefon: ${tel[i]}`);
        console.log(`${i + 1}.E-posta: ${eposta[i]}`);
        }
    }
    else{
        console.log(`Listenelecek Kullanıcı bulunamadı.`);
    }

const hasNewUser = confirm(`Eklemek istediğiniz yeni kullanıcı bilgileri var mı`);
if(hasNewUser){

const newName = prompt(`Lütfen Eklemek istediğiniz ismi giriniz.`);
namee.push(newName);
const nameStr = JSON.stringify(namee);
localStorage.namee = nameStr;

const newLastName = prompt(`Lütfen Eklemek İstediğiniz Soyismi Giriniz.`);
lastName.push(newLastName);
const lastNameStr = JSON.stringify(lastName);
localStorage.lastName = lastNameStr;

const newAddres = prompt(`Lütfen adresi giriniz.`);
addres.push(newAddres);
const addresStr = JSON.stringify(addres);
localStorage.addres = addresStr;

const newTel = Number(prompt(`Lütfen Telefon numarasını giriniz.`));
tel.push(newTel);
const telStr = JSON.stringify(tel);
localStorage.tel = telStr;

const neweposta = prompt(`Lütfen eposta adresini giriniz.`);
eposta.push(neweposta);
const epostaStr = JSON.stringify(eposta);
localStorage.eposta = epostaStr;

for(let i = 0; i < namee.length; i++){
        console.log(`${i + 1}.İsim: ${namee[i]}`);
        console.log(`${i + 1}.:Soyisim ${lastName[i]}`);
        console.log(`${i + 1}.:Adres ${addres[i]}`);
        console.log(`${i + 1}.Telefon: ${tel[i]}`);
        console.log(`${i + 1}.E-posta: ${eposta[i]}`);
    }

}else{
    if(localStorage.namee){
        namee = JSON.parse(localStorage.namee);
        lastName = JSON.parse(localStorage.lastName);
        addres = JSON.parse(localStorage.addres);
        tel = JSON.parse(localStorage.tel);
        eposta = JSON.parse(localStorage.eposta);

        for(let i = 0; i < namee.length; i++){
        console.log(`${i + 1}.İsim: ${namee[i]}`);
        console.log(`${i + 1}.:Soyisim ${lastName[i]}`);
        console.log(`${i + 1}.:Adres ${addres[i]}`);
        console.log(`${i + 1}.Telefon: ${tel[i]}`);
        console.log(`${i + 1}.E-posta: ${eposta[i]}`);
        }
    }
    else{
        console.log(`Listenelecek Kullanıcı bulunamadı.`);
    }
}