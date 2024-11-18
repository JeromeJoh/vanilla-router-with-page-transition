const siteTitle = 'JRM'

const routes = {
  '/404': {
    page: '/pages/404.html',
    title: '404 | ' + siteTitle,
    description: 'Page not found'
  },
  '/': {
    page: '/pages/home.html',
    title: 'Home | ' + siteTitle,
    description: 'Home Page'
  },
  '/index.html': {
    page: '/pages/home.html',
    title: 'Home | ' + siteTitle,
    description: 'Home Page'
  },
  '/about': {
    page: '/pages/about.html',
    title: 'About | ' + siteTitle,
    description: 'About Us'
  },
  '/services': {
    page: '/pages/services.html',
    title: 'Services | ' + siteTitle,
    description: 'Services Page'
  },
  '/contact': {
    page: '/pages/contact.html',
    title: 'Contact | ' + siteTitle,
    description: 'Contact Page'
  },
}

document.querySelector('nav').addEventListener('click', (e) => {
  if (e.target.matches('a')) {
    e.preventDefault()
    useRoute(e)
  }
})

const useRoute = async (e) => {
  e = e || window.event
  e.preventDefault()
  window.history.pushState({}, '', e.target.href)
  renderPage()
}

const renderPage = async () => {
  const path = window.location.pathname
  console.log(path)
  const route = routes[path] || routes['/404']
  const page = await fetch(route.page)
  const html = await page.text()
  document.title = route.title
  document.querySelector('meta[name="description"]').setAttribute('content', route.description)
  document.querySelector('#root').innerHTML = html
}

window.onpopstate = renderPage
window.useRoute = useRoute
renderPage()