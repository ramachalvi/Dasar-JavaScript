let siswa = [
    {nama_depan: "Jack", nama_belakang: "ma"},
    {nama_depan: "Jhonny", nama_belakang: "English"},
    {nama_depan: "Jhon", nama_belakang: "Cena"}
]

    siswa.map(
        (sis, index ) => {
            console.log(sis.nama_depan + " " + sis.nama_belakang)
        }
    )