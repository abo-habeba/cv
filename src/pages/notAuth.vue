<template>
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>غير مصرح</h1>
      </div>
      <p> ليس لديك صلاحيات الوصول  <br />
        <router-link to="/"> الرجوع الي الصفحه الرئسية </router-link>
      </p>
    </div>
  </div>
</template>
<script setup>
// definePage({
//     name:'auth'
// });
</script>
<style>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}

#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.notfound {
  max-width: 767px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
  padding: 15px;
}

.notfound .notfound-404 {
  position: relative;
  height: 220px;
}

.notfound .notfound-404 h1 {
  font-family: "Kanit", sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 186px;
  font-weight: 200;
  margin: 0;
  background: linear-gradient(130deg, #ffa34f, #ff6f68);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-transform: uppercase;
}

.notfound h2 {
  font-family: "Kanit", sans-serif;
  font-size: 33px;
  font-weight: 200;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 25px;
  letter-spacing: 3px;
}

.notfound p {
  font-family: "Kanit", sans-serif;
  font-size: 16px;
  font-weight: 200;
  margin-top: 0;
  margin-bottom: 25px;
}

.notfound a {
  font-family: "Kanit", sans-serif;
  color: #ff6f68;
  font-weight: 200;
  text-decoration: none;
  border-bottom: 1px dashed #ff6f68;
  border-radius: 2px;
}
</style>
