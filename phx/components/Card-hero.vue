<template>
  <div class="flex">
    <div
      class="
        animate-fade
        relative
        bg-tertiary
        left-[62%]
        bottom-[130px]
        w-[275px]
        h-[500px]
        rounded-xl
        font-bold
        border-2 border-black
        block
      "
    >
      <div class="flex justify-center p-5 text-2xl text-primary">
        <h2>
          1000 Mega<br />+HBO Max <br />
          Ou 2 Apps
        </h2>
      </div>
      <div class="flex justify-center p-1 text-quaternary">
        <span class="text-2xl text-[35px]">R$</span>
        <span class="text-[44px]"
          >129,90 <span class="text-[14px]">/m</span></span
        >
      </div>
      <div class="flex justify-right pl-6 p-1">
        <ul class="space-y-3">
          <li class="flex">
            <Icon-card />
            <span> Download 1000 Mega </span>
          </li>
          <li class="flex">
            <Icon-card />
            <span>Upload 500 Mega</span>
          </li>
          <li class="flex">
            <Icon-card />
            <span>HBO Max</span>
          </li>
          <li class="flex">
            <Icon-card />
            <span>WiFi 6</span>
          </li>
        </ul>
      </div>
      <div class="flex justify-center p-4">
        <button class="btn hover:bg-secondary hover:scale-110">
          Contratar
        </button>
      </div>
      <div class="font-normal text-sm text-quinary p-3">
        <span>
          *Fidelidade de 12 meses <br />
          *Sujeito a analise de credito</span
        >
      </div>
    </div>
  </div>
</template>