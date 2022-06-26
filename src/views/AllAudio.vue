<template>
     <div class="container">
          <h3 class="mt-5">Audio Yang Tersedia </h3>
          <div class="row row-cols-2 ">
          <div v-for="(value, index) in data" class="card col " style="width: 18rem;">
               <img v-bind:src="value.gambar_brg" class="card-img-top img-fluid" alt="...">
               <div class="card-body">
               <h5 class="card-title text-center">{{value.nama_brg}}</h5>
               <h5 class="card-title text-center">{{value.kondisi_brg}}</h5>
               </div>
          </div>
          </div>
     </div>
</template>
<script>
import { nextTick } from "vue";
export default {
     name: "AllLaptop",
     data() {
          return {
               data: [],
               selectedIndex: -1,
               isLoading: false,
          }
     },
     methods: {
          load() {
               this.isLoading = true;
               fetch(`https://backendpinjm.000webhostapp.com/backend_goods_loan/Barang/AllAudio.php`, {
                    method: 'POST',
               })
                    .then(response => {
                         if (response.ok) {
                              return response.json();
                         }
                    })
                    .then(json => {
                         this.data = json.data;
                         console.log(this.data = json.data);
                         console.log(this.data);
                    })
                    .catch(() => {
                         // alert('Terjadi Error');
                    })
                    .finally(() => {
                         this.isLoading = false;
               })
          },
     },
     mounted() {
          this.load();
     }
}
</script>
<style>
</style>