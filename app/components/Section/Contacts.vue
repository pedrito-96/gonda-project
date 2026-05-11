<template>
  <section id="contacts" class="min-h-dvh bg-secondary-dark px-3 md:px-5 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-(--header-height)">
      <div class="cols-span-1 text-white">
        <div>
          <h2 class="text-section-title mb-4">{{ $t("contacts.title") }}</h2>
          <p>{{ $t("contacts.intro1") }}</p>
          <p>{{ $t("contacts.intro2") }}</p>
        </div>
      </div>
      <OrganismsContactForm
        class="cols-span-1 flex justify-center items-center"
      />
    </div>
  </section>
</template>
