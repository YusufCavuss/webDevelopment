function validateForm() {
    const adi = document.getElementById("adi").value;
    const soyadi = document.getElementById("soyadi").value;
    const eposta = document.getElementById("eposta").value;
    const sifre = document.getElementById("sifre").value;
    const tsifre = document.getElementById("tsifre").value;
    const onay = document.getElementById("onay").checked;
    const adres = document.getElementById("adres").value;
    const telefon = document.getElementById("telefon").value;

    const adiError = document.getElementById("adi-error");
    const soyadiError = document.getElementById("soyadi-error");
    const epostaError = document.getElementById( "eposta-error");
    const sifreError = document.getElementById("sifre-error");
    const tsifreError = document.getElementById("tsifre-error"  );
    const onayError = document.getElementById("onay-error");
    const adresError = document.getElementById("adres-error");
    const telefonError = document.getElementById("telefon-error");

adiError.textContent = "";
soyadiError.textContent = "";
sifreError.textContent="";
tsifreError.textContent="";
epostaError.textContent="";
onayError.textContent="";
adresError.textContent="";
telefonError.textContent="";

let isValid = true;

if (adi === "" || /\d/.test(adi)) {
    adiError.textContent =
        "Ad alanını kurallara göre doldurun!";
    isValid = false;
}

if (soyadi === "" || /\d/.test(soyadi)) {
    soyadiError.textContent =
        "Soyad alanını kurallara göre doldurun!";
    isValid = false;
}


if (eposta === "" || !eposta.includes("@")) {
    epostaError.textContent =
        "E-posta alanını kurallara göre doldurun!";
    isValid = false;
}

if (sifre === "" || sifre.length < 6) {
    sifreError.textContent ="Şifreyi en az 6 karakter girin!";
    isValid = false;
}

if (telefon === "" || telefon.length < 12) {
    telefonError.textContent ="Telefonu en az 11 karakter girin!";
    isValid = false;
}

if (sifre!=tsifre){

    tsifreError.textContent="Şifreler uyuşmuyor!"
    isValid=false;
}


if (!onay) {
    onayError.textContent =
        "Onay kutusunu işaretleyiniz!";
    isValid = false;
}

if (adres === "" || /\d/.test(adres)) {
    adresError.textContent =
        "Adres alanını kurallara göre doldurun!";
    isValid = false;
}


return isValid;
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#telefon");
        input.addEventListener('input', (e) => {
            if (e.target.value)
            {
                const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
                e.target.value =  + x[1] + (x[2] ? `-${x[2]}` : '') + (x[3] ? `-${x[3]}` : '')+ (x[4] ? `-${x[4]}` : '')
            }
        });
    });
