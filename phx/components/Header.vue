<template>
  <header
    class="flex items-center justify-between mx-auto py-5 shadow-md bg-quaternary lg:px-desktop top-0 text-primary"
  >
    <nuxt-link to="/" class="text-4xl font-bold hover-all">
      <h1 class="text-secondary">
        P
        <span class="text-tertiary">H</span>
        X
      </h1>
    </nuxt-link>
    <ul class="lg:flex hidden items-center space-x-10">
      <li
        class="group"
        :class="{ 'text-quinary': activeLink != link }"
        v-for="(link, i) in links"
        :key="`navLink${i}`"
      >
        <nuxt-link
          to="#"
          class="font-medium group-hover:text-primary transition-all duration-300"
        >
          {{ link }}
        </nuxt-link>

        <div
          :class="{ 'bg-secondary scale-y-100': activeLink == link }"
          class="h-0.5 mt-0.5 group-hover:scale-y100 group-hover:bg-purple group-hover:block w-[80%] transition-all duration-300"
        ></div>
      </li>
    </ul>
    <div class="flex items-center space-x-10">
      <nuxt-link
        to="https://www.instagram.com/"
        class="hover-all"
        target="_blank"
      >
        <instagram />
      </nuxt-link>
      <nuxt-link to="https://twitter.com/" class="hover-all" target="_blank">
        <twitter />
      </nuxt-link>
      <nuxt-link
        to="https://pt-br.facebook.com/"
        class="hover-all"
        target="_blank"
      >
        <facebook />
      </nuxt-link>
    </div>
  </header>
</template>

<script setup>
const links = ["Início", "Planos", "Apps", "Perguntas Frequentes"];
const activeLink = useState("activeLink", () => "Início");
</script>
