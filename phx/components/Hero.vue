<template>
  <section
    class="
      lg:mx-desktop
      bg-secondary
      rounded-3xl
      mt-4
      relative
      text-primary
      border-2 border-black
    "
  >
    <div class="flex">
      <div class="basis-1/2 pl-20 pt-24 relative">
        <h1
          class="font-bold text-6xl leading-[1.15] relative z-40 animate-fade"
        >
          Bem-vindo a Phx<br />
          Internet Fibra óptica<br />
        </h1>
        <p class="mt-3 text-quinary font-medium text-xl animate-fade">
          A melhor experiencia em internet
        </p>
      </div>
    </div>
    <div class="">
      <img
        class="
          flex
          absolute
          right-[700px]
          top-[150px]
          rounded-full
          h-[100px]
          hover:scale-150
          animate-fade
          transition-all
          duration-500
        "
        src="https://masmorracine.com.br/wp-content/uploads/2022/10/62850747_101.jpg"
        alt="hbo"
      />
    </div>
    <Card-hero />
  </section>
</template>

<script>
export default {};
</script>
