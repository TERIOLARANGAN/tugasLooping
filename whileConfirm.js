let ulangi = confirm("Apakah anda mau mengulang?");
let hitung = 0;

while(ulangi){
hitung++;
ulangi = confirm("Apakah anda mau mengulang?");
}
document.write("Anda sudah mengulang sebanyak "+hitung+" kali");