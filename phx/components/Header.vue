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
    <ul class="lg:flex hidden items-center space-x-10">
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

        <div
          :class="{ 'bg-black scale-y-100': activeLink == link }"
          class="
            h-0.5
            mt-0.5
            group-hover:scale-y100 group-hover:bg-black group-hover:block
            w-[80%]
            transition-all
            duration-300
          "
        ></div>
      </li>
    </ul>
    <div class="flex items-center space-x-10">
      <nuxt-link to="https://www.instagram.com/" target="_blank">
        <instagram />
      </nuxt-link>
      <nuxt-link to="https://twitter.com/" target="_blank">
        <twitter />
      </nuxt-link>
      <nuxt-link to="https://pt-br.facebook.com/" target="_blank">
        <facebook />
      </nuxt-link>
    </div>
  </header>
</template>

<script setup>
const links = ["Início", "Planos", "Link Dedicado", "Sobre"];
const activeLink = useState("activeLink", () => "Início");
</script>