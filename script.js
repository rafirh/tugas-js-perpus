document.getElementById('tanggal').valueAsDate = new Date();
const kolom = ["nis","nama","kelas","buku","jumlah","tanggal"];
const judulbuku = ["Matematika","IPA","IPS","PPKN","PJOK","Bahasa Inggris","Bahasa Indonesia","PJOK"];

for (let i = 0; i < judulbuku.length; i++) {
    document.getElementById('buku').innerHTML += "<option value=" + judulbuku[i] + ">" + judulbuku[i] + "</option>";
}

function simpan(){
    for (let index = 0; index < kolom.length; index++) {
        eval('var ' + kolom[index] + ' = []');
        for (let j = 0; j < 1; j++) {
            eval(kolom[index]+'['+ j +']'+' = document.getElementById("'+kolom[index]+'").value');
        }
    }
    
    for (let index = 0; index < kolom.length; index++) {
        for (let j = 0; j < 1; j++) {
            document.getElementById("tbody").innerHTML += "<td>"+eval(kolom[index]+'['+ j +']')+"</td>";
        }
    }
}
for (let k = 0; k < kolom.length; k++) {
    document.getElementById("thead").innerHTML += "<th>" + kolom[k].toUpperCase() + "</th>";
}


