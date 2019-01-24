const statusDiv = document.querySelectorAll(".commit-build-statuses")

const style = `
  .color-pr-ready { background-color: #D4EE5E !important; }
  .color-pr-not-ready { background-color: #FF4242 !important; }

  .color-pr-ready .muted-link,
  .color-pr-ready .link-gray-dark {
    color: #2A363B !important;
    transition: color .1s ease-in;
  }

  .color-pr-ready .muted-link:hover,
  .color-pr-ready .link-gray-dark:hover,
  .color-pr-not-ready .link-gray-dark:hover,
  .color-pr-not-ready .muted-link:hover {
    color: #556270 !important;
  }


  .color-pr-not-ready .muted-link,
  .color-pr-not-ready .link-gray-dark {
    color: #F2E9E1 !important;
  }

  .color-pr-not-ready .text-gray {
    color: #F2E9E1 !important;
  }
`
const ss =document.createElement('style')
ss.innerHTML = style
document.head.appendChild(ss)

statusDiv.forEach(div => {
  const isReady = div.querySelector('a').classList.contains('text-green')
  const parent = div.parentNode.parentNode.parentNode.parentElement
  parent.classList.add(isReady ? 'color-pr-ready' : 'color-pr-not-ready')
})
