<template>
  <div>
    <form
      :action="`https://formspree.io/f/${useRuntimeConfig().public.formspree_id}`"
      method="POST"
      class="w-full max-w-2xl bg-tertiary text-black p-6 rounded-lg shadow-2xl"
    >
      <h2 class="text-2xl font-bold mb-6 text-center">Contattami</h2>

      <div class="mb-4">
        <label for="name" class="block mb-2">Nome *</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          class="w-full px-4 py-2 rounded bg-white shadow-md focus:ring focus:ring-dark"
        />
      </div>

      <div class="mb-4">
        <label for="email" class="block mb-2">Email *</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          class="w-full px-4 py-2 rounded bg-white shadow-md focus:ring focus:ring-dark"
        />
      </div>

      <div class="mb-4">
        <label for="phone" class="block mb-2">Telefono</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          class="w-full px-4 py-2 rounded bg-white shadow-md focus:ring focus:ring-dark"
        />
      </div>

      <div class="mb-6">
        <label for="message" class="block mb-2">Messaggio *</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          class="w-full px-4 py-2 rounded bg-white shadow-md focus:ring focus:ring-dark resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-primary text-white font-bold py-2 px-4 rounded cursor-pointer hover:scale-102 hover:shadow-md transition-all"
      >
        Invia
      </button>
    </form>
  </div>
</template>
