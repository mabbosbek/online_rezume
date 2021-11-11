// Salomlashuv xabarini chiqarish
alert("Assalomu alaykum. Onlayn rezyume yaratish sahifasiga xush kelibsiz! Berilgan barcha savollarga javob bering.")

// O'zgaruvchilarni aniqlash va olingan ma'lumotni ekranga chiqarish
// prompt operatori 2 ta qiymat qabul qiladi: `string` yoki `null`
let first_name = prompt("Ismingizni kiriting:");
document.getElementById("first_name").innerHTML = first_name;

let last_name = prompt("Familiyangizni kiriting:");
document.getElementById("last_name").innerHTML = last_name;

let age = prompt("Yoshingizni kiriting:");
document.getElementById("age").innerHTML = age;

let address = prompt("Yashash manzilingizni kiriting:");
document.getElementById("address").innerHTML = address;

let phoneNumber = prompt("Telefon raqamingizni kiriting:");
document.getElementById("phoneNumber").innerHTML = phoneNumber;

// Jadvalga rang berish
let colorTable = prompt("Telefon raqamingizni kiriting:","white");
document.getElementById("table").style.backgroundColor = colorTable;

// Barcha ma'lumotlarni to'g'riligini tasdiqlash
let confirmInfo = confirm("Kiritgan ma'lumotlaringiz to'g'riligini tasdiqlang.");
if(confirmInfo == true) {
    document.getElementById("msg").innerHTML = "Tabriklayman!!! Siz o'z rezyumingizni muvaffaqiyatli yaratdingiz.";
} else {
    document.getElementById("msg").innerHTML = "Siz kiritgan ma'lumotlaringiz to'g'riligini tasdiqlamadingiz. Iltimos sahifani qayta yuklab, barcha savollarga javob bering.";
}