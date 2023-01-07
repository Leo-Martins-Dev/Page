<template>
  <section
    class="flex w-auto h-auto lg:mx-desktop bg-secondary rounded-3xl mt-5 text-quaternary animate-fade"
  >
    <div class="basis-1/2 pl-20 pt-24">
      <h1 class="font-bold text-6xl leading-[1.15] z-40">
        Bem-vindo a Phx<br />
        Internet Fibra óptica<br />
      </h1>
      <p class="mt-3 text-quinary font-medium text-xl">
        A melhor experiencia em internet
      </p>
    </div>
    <div class="flex flex-col pt-[105px] pr-14 gap-8 justify-center">
      <img class="hover-all icon-apps" src="/looke.png" alt="hbo" />
      <img class="hover-all icon-apps" src="/deezer.png" alt="deezer" />
      <img class="hover-all icon-apps" src="/kids.png" alt="kids" />
      <img class="hover-all icon-apps" src="/galinha.png" alt="news" />
      <div class="flex justify-center pb-8">
        <nuxt-link to="#">
          <button
            class="hover-all bg-quaternary text-primary rounded-2xl py-2 px-5 font-semibold"
          >
            + Apps
          </button>
        </nuxt-link>
      </div>
    </div>
    <Card-hero />
  </section>
</template>

<script>
export default {};
</script>
