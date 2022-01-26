document.getElementById('tanggal').valueAsDate = new Date();

//Deklarasi Variable
const kolom = ["nis","nama","kelas","buku","jumlah","tanggal"];

//Deklarasi variable
const judulbuku = ["Matematika","IPA","IPS","PPKN","PJOK","Bahasa Inggris","Bahasa Indonesia","PJOK"];

//Menampilkan daftar buku
for (let index = 0; index < buku.length; index++) {
    document.getElementById('buku').innerHTML += "<option value=" + judulbuku[index] + ">" + judulbuku[index] + "</option>";
}

function kirim(){
    for (let index = 0; index < kolom.length; index++) {
        eval('var ' + kolom[index] + ' = []');

        for (let j = 0; j < kolom[index].length + 1; j++) {
            eval('var ' + kolom[index] + [j] +' = document.getElementById('+ kolom[index] +').value');
        }
        
    }
}
