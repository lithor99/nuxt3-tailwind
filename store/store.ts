// store/filters.ts
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('themeStore', () => {
    const darkTheme = ref(true);

  function switchTheme() {
      darkTheme.value = !darkTheme.value;
      alert(darkTheme.value)
  }
  return { switchTheme, darkTheme }
})
