!<template>
  <header
    class="
      flex
      items-center
      justify-between
      w-full
      mx-auto
      py-5
      shadow-md
      bg-white/80
      lg:px-desktop
      sticky
      test
      top-0
    "
  >
    <nuxt-link to="/" class="text-4xl font-bold">
      <h1 class="text-purple-600">
        P <span class="text-orange-600">H</span> X
      </h1>
    </nuxt-link>
    <ul class="lg:flex hidden items-center space-x-14">
      <li
        class="group"
        :class="{ 'text-gray-500': activeLink != link }"
        v-for="(link, i) in links"
        :key="`navLink${i}`"
      >
        <nuxt-link
          to="#"
          class="font-medium group-hover:text-black transition-all duration-300"
        >
          {{ link }}
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script setup>
const links = ["Início", "Planos", "Link Dedicado", "Sobre"];
const activeLink = useState("activeLink", () => "Início");
</script>