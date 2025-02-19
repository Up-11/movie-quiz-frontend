import { UButton } from '../../.nuxt/components';
<template>
  <head>
    <meta charset="UTF-8">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    >
    <meta
      name="description"
      content="Испытай свои знания о культовых фильмах! Увлекательные викторины по популярным кинолентам."
    >
    <meta
      name="keywords"
      content="викторина, фильмы, кино, тесты, угадай фильм, киноигра"
    >
    <meta
      name="author"
      content="MovieQuiz Team"
    >
    <meta
      property="og:title"
      content="Викторина по фильмам"
    >
    <meta
      property="og:description"
      content="Сможешь угадать фильм по кадру или цитате? Проверь себя в нашей увлекательной кино-викторине!"
    >
    <meta
      property="og:image"
      content="https://yourwebsite.com/preview.jpg"
    >
    <meta
      property="og:url"
      content="https://yourwebsite.com"
    >
    <meta
      property="og:type"
      content="website"
    >
    <meta
      name="twitter:card"
      content="summary_large_image"
    >
    <meta
      name="twitter:title"
      content="Викторина по фильмам"
    >
    <meta
      name="twitter:description"
      content="Проверь свои знания о кино в нашей викторине!"
    >
    <meta
      name="twitter:image"
      content="https://yourwebsite.com/preview.jpg"
    >
    <link
      rel="icon"
      href="/favicon.ico"
      type="image/x-icon"
    >
    <title>Фильмонафт</title>
  </head>
  <div>
    <main>
      <slot class="container" />
    </main>
  </div>
</template>
