# MAUQUTA

> Jam waktu sholat untuk Masjid.

## Deployed in: https://mauquta.vercel.app/

## Stacks
- ReactJS
- Tailwind
## Build Setup
1. Clone repository
`$ git clone https://github.com/alisholihindev/mauquta.git`

2. Install depedencies
```bash
# with npm
$ npm install
# or with yarn
$ yarn install
```

3. Edit data.json
```json
{
    "profile" : {
        "nama" : "Masjid Nurul Yaqin",
        "alamat" : "Jl. Gama Rt.02 Kel.Sesumpu",
        "kota" : "Penajam Paser Utara",
        "kota_id" : "2307"
    },
    "timer_iqomah" : {
        "subuh" : 1200,
        "dzuhur" : 600,
        "ashar" : 600,
        "maghrib" : 700,
        "isya" : 700
    },
    "images" : [
        {
            "original": "https://picsum.photos/id/1018/1000/600/",
            "thumbnail": "https://picsum.photos/id/1018/250/150/"
          },
          {
            "original": "https://picsum.photos/id/1015/1000/600/",
            "thumbnail": "https://picsum.photos/id/1015/250/150/"
          },
          {
            "original": "https://picsum.photos/id/1019/1000/600/",
            "thumbnail": "https://picsum.photos/id/1019/250/150/"
          }
    ]
}
```
>-Penentuan timer iqomah mengugunakan satuan detik dan untuk mendapatkan kota_id silahkan buka `https://api.myquran.com/v1/sholat/kota/cari/nama_kotamu`

4. Available scripts
```bash
# start development server
$ npm run dev
# built to production mode
$ npm run build
```
### LICENSE
MIT

---
Copyright © 2023 by Ali Sholihin