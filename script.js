document.getElementById('tanggal').valueAsDate = new Date();

//Deklarasi Variable
const kolom = ["nis","nama","kelas","buku","jumlah","tanggal"];

//Deklarasi variable
const buku = ["Matematika","IPA","IPS","PPKN","PJOK","Bahasa Inggris","Bahasa Indonesia","PJOK"];

//Menampilkan daftar buku
for (let index = 0; index < buku.length; index++) {
    document.getElementById('buku').innerHTML += "<option value=" + buku[index] + ">" + buku[index] + "</option>";
}