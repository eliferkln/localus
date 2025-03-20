# Vue 3 + Vite + PrimeVue Projesi

Bu projeyi, **Vue 3** ve **Vite** kullanılarak oluşturdum. **PrimeVue**, **Axios** ve **Vuex** gibi kütüphaneler ile geliştirdim. 

## 🚀 Proje Kurulumu

### 1️⃣ Projeyi Oluşturma
```sh
npm create vite@latest
```
Vite ile Vue 3 tabanlı bir proje oluşturdum. Daha sonra aşağıdaki bağımlılıkları ekledim:

### 2️⃣ Gerekli Paketlerin Kurulumu
```sh
npm install primevue @primeuix/themes
npm install axios
npm install vuex
```
**PrimeVue** ve temalarını yükleyip, **Axios** ve **Vuex** ile API isteklerini yönetmek için gerekli kurulumları yaptım.

### 3️⃣ PrimeVue Entegrasyonu
[PrimeVue Vite Kurulumu](https://primevue.org/vite) sayfasındaki adımları takip ederek **main.js** dosyasında tema ayarlarını yaptım.

Ayrıca **style.css** dosyasında **Tailwind CSS** ve **ikon paketlerini** tanımladım.

---

## 📂 Proje Yapısı

```
📁 src
 ├── 📂 assets
 ├── 📂 components
 │    ├── DataTable.vue
 │    ├── EditItem.vue
 ├── 📂 utils
 │    ├── axiosInstance.js
 ├── 📂 stores
 │    ├── apiStore.js
 ├── App.vue
 ├── main.js
 ├── style.css
```

## ⚙️ Axios Instance ve Store Yönetimi

- **axiosInstance.js** dosyasında bir Axios instance'ı oluşturdum.
- **apiStore.js** içinde bu instance'ı kullanarak API isteklerini yönettim.
- **DataTable.vue** bileşeninde gelen API verilerini listeledim.
- **EditItem.vue** bileşeni, **Dialog** şeklinde açılarak iki aşamalı bir güncelleme süreci sağlıyor:
  1. Kullanıcı bilgileri güncellenir.
  2. Kullanıcının adres bilgileri güncellenir.
- Güncelleme işlemi başarıyla tamamlandığında veya hata oluştuğunda **Toast mesajı** ile kullanıcıya geri bildirim sağlanır.
- Güncelleme tamamlandıktan sonra, **DataTable.vue** bileşeni içerisindeki tablo verileri otomatik olarak yenilenir.

## 🛠 Teknolojiler ve Kütüphaneler
Bu projede kullanılan başlıca teknolojiler:
- **Vue 3** (Composition API ile birlikte)
- **Vite** (Hızlı geliştirme ortamı)
- **PrimeVue** (Bileşen kütüphanesi)
- **Vuex** (Durum yönetimi)
- **Axios** (HTTP istekleri için)
- **Tailwind CSS** (Stil yönetimi)
- **Prime Icons** (İkon kütüphanesi)

---

## 🎯 Öne Çıkan Özellikler
- **Axios instance ile API isteklerinin merkezi yönetimi**
- **Vuex Store kullanarak global veri yönetimi**
- **DataTable.vue içinde dinamik tablo ve veri listeleme**
- **EditItem.vue içinde kullanıcı ve adres bilgileri için iki aşamalı güncelleme süreci**
- **Toast mesajları ile işlem geri bildirimleri**
- **Güncellenen verilerin anlık olarak tabloya yansıtılması**

---

## ▶️ Projeyi Çalıştırma

Öncelikle bağımlılıkları yükleyin:
```sh
npm install
```
Daha sonra projeyi başlatın:
```sh
npm run dev
```
Artık proje **http://localhost:5173/** adresinde çalışacaktır.

---

🎯 **Hazır!** 

