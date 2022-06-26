<template>
  <div class="container mt-5">
    <h2>Input Barang</h2>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Tambah Data </button>
    <br>
    <br>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Kode Barang</th>
      <th scope="col">Nama Barang</th>
      <th scope="col">Kondisi Barang</th>
      <th scope="col">Category Barang</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>

    </tr>
    <tr>
      <th scope="row">4</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>

    </tr>
  </tbody>
</table>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labellebdy="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Tambah Barang</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addData" autocomplete="off">
              <div class="form-group">
                <label for="kode_brg">Kode Barang</label>
                <input type="number" name="kode_brg" placeholder="masukkan kode barang" class="form-control" autofocus required>
              </div>
              <br>
              <div class="form-group">
                <label for="nama_barang">Nama Barang</label>
                <input type="text" name="nama_barang" placeholder="masukkan nama barang" class="form-control" autofocus required>
              </div>
              <br>
              <div class="form-group">
                <label for="kondisi">Kondisi</label>
                <select name="kondisi_brg" id="level" class="form-control">
                  <option value="3">--Kondisi--</option>
                  <option value="2">Tersedia</option>
                  <option value="1">Tidak Tersedia</option>
                </select>
              </div>
              <br>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Deskripsi Barang</label>
                <textarea name="deskripsi_brg" class="form-control" id="message-text"></textarea>
              </div>
              <br>
              <div class="form-group">
                <label for="kategori">Kategori</label>
                  <select name="category_brg" id="level" class="form-control">
                      <option value="">-- Kategori --</option>
                      <option value="5">Speaker</option>
                      <option value="4">Proyektor</option>
                      <option value="3">Kamera</option>
                      <option value="2">Tablet</option>
                      <option value="1">Laptop</option>
                  </select>
              </div>
              <br>
              <div class="form-group">
                <label for="exampleFormControlFile1">Example file input</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1">
              </div>
              <br>
              <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "Footer.vue",
  methods: {
    addData(e) {
      const getPic = e.target[5].files;
      console.log(getPic[0]);
      const formData = new FormData(e.target);
      formData.append('gambar_brg', getPic[0])
      for (const [key, value] of formData) {
        console.log(key, value);
      }
      this.isLoading = true;
      fetch('http://localhost/backend_goods_loan/Barang/insertBarang.php', {
        method: 'POST', body: formData
      })
        .then(response => {
          console.log(response);
          if (response.ok) {
            return response.json();
        }
        })
        .then(json => {
          console.log(json);
        })
        .catch(() => {

        })
        .finally(() => {
          this.isLoading = false;
      })
    },
  },
}
</script>