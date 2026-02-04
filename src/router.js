import { ref } from 'vue'

export function useRouter() {
  const route = ref(window.location.pathname || '/')

  // track back/forward navigation
  window.addEventListener('popstate', () => {
    route.value = window.location.pathname
  })

  const push = (path) => {
    if (path !== route.value) {
      history.pushState({}, '', path)
    }
    route.value = path
  }

  return { route, push }
}
