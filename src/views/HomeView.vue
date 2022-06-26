<template>
    <div class="container">
    <h3 class="mt-5">Barang Yang Tersedia</h3>
      <div class="row row-cols-2 ">
        <div class="card col" style="width: 18rem;">
          <router-link class="button" to="/AllLaptop">
          <img src="../assets/Laptop.png" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title text-center">Laptop</h5>
          </div>
          </router-link>
        </div>
        <div class="card col" style="width: 18rem;">
          <router-link class="button" to="/AllCamera">
            <img src="../assets/Camera.png" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">Camera</h5>
            </div>
          </router-link>
        </div>
        <div class="card col" style="width: 18rem;">
        <router-link class="button" to="/AllAudio">
          <img src="../assets/Audio.png" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title text-center">Audio</h5>
          </div>
        </router-link>
        </div>
        <div class="card col" style="width: 18rem;">
        <router-link class="button" to="/allProyektor">
          <img src="../assets/Proyektor.png" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title text-center">Proyektor</h5>
          </div>
        </router-link>
        </div>
        <div class="card col" style="width: 18rem;">
        <router-link class="button" to="/allTablet">
          <img src="../assets/Tablet.png" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title text-center">Tablet</h5>
          </div>
        </router-link>
        </div>
      </div>
    </div>
</template>
<style>
.card {
 margin: 40px;
}
.card:hover {
  opacity: 0.5;
}
.button {
  text-decoration: none;
}
</style>


