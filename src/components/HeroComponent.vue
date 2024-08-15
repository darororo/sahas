<template>
  <section class="flex flex-center">
    <div class="flex flex-center main">
      <img
        alt="Quasar logo"
        src="icons/magic-cat.png"
        style="width: 560px; height: 430px"
      />
      <div class="description">
        <span class="header">Hello erbody</span>
        <div class="subtitle">
          <span class="sub-subtitle">Black </span>
          <span class="sub-subtitle">Balls</span>
        </div>
      </div>
    </div>

    <div class="blob1"></div>
    <div class="blob2"></div>
  </section>
</template>

<style scoped>
section {
  width: 100vw;
  height: 800px;
  overflow: hidden;
}

.main {
  column-gap: 200px;
}

img {
  position: relative;
  /* left: -10px; */
  top: 50px;
  border-radius: 132px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
  z-index: 200;
}

.description {
  position: relative;
  font-family: sans-serif;
  /* right: -800px; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  font-weight: bold;
  font-size: 100px;
}

.subtitle {
  display: flex;
  flex-direction: column;
}
.sub-subtitle {
  font-size: 36px;
}

.blob1 {
  position: relative;
  width: 830px;
  height: 420px;
  border-radius: 50%;
  background: hsla(327, 39%, 39%, 0.2);
  transform: translate(-280px, -600px);
}

.blob2 {
  position: relative;
  width: 830px;
  height: 420px;
  border-radius: 50%;
  background: #8a3d6733;
  transform: translate(300px, 50px);
}
</style>
