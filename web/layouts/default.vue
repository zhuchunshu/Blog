<template>
  <AppHeader />
  <main>
    <AppAlert message="This is an info alert" type="info" />
    <AppAlert message="This is an info success" type="success" />
    <AppAlert message="This is an info warning" type="warning" />
    <AppAlert message="This is an info error" type="error" />
    <slot />
  </main>
  <AppFooter />
</template>

