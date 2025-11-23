export interface Berita {
    id: string;
    nama: string;
    tanggal: string;
    isi: string;
}

export const beritaList: Berita[] = [
    {
        id: '1',
        nama: 'Berita Pertama',
        tanggal: '2023-02-01',
        isi: 'Ini adalah isi dari berita pertama.'
    },

    {
        id: '2',
        nama: 'berita Kedua',
        tanggal: '2023-02-01',
        isi: 'Ini adalah isi dari berita kedua'
    },
]