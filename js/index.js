import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


const link = document.querySelector('.universe')
const link2 = document.querySelector('.exploracao')
const button = document.querySelector('#body');

link.addEventListener('click', function () {
    button.style.backgroundImage = "url('https://s3-alpha-sig.figma.com/img/2e2b/8098/b7b10afed26c82d93e56927ec4682681?Expires=1693180800&Signature=bgZIclBgmVNO86f34RgjPqtZ5nxuYc9jdEUcOtX4iv5GNI1sxnOSbE0wkLzCjTZEOKtKaDPI5T3x4o67MU1fFsoMwkG1T21LaeWfG9K0DFYQHRWFlYXi7swwO1aMQtL9t3rDC-C21XJ8RtEifLMPs2LkVOLLh6fznrJbr1066VGsvMFt-yVPooVaxwu-GOBB1aSNWwkDD5H-sPFh8ESqiV90LT0jVfV52Sc~J91XXSX4Yj5nxcWCyUCjqLUDv8zMC3WVeyDr2EWf1vhEthQO8M8lKcR-O8fugyEGfg4ooaiSKJgGQVUebYXoMhQjQwO8TRCWluH4XDfd1eS0feIp4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')";
});

link2.addEventListener('click', function () {
    button.style.backgroundImage = "url('https://s3-alpha-sig.figma.com/img/bf07/212e/8dcef677dc5b6fa04a95c2a36ba6fd2a?Expires=1693180800&Signature=KCLzdkc~qk-P5ayOj~apVeXhCGjNY~BE7xU39sd9Jfeure23NRR-IRhElJheck3L0OcgU4GYm5pzKPPXMhrTJFnZicSnHYVKdQBUuBacK8XMniXHasjOc6T777tx7zhszKXsx0Htn7NGPrQ4DLbxn7TCkGmFfhXuqNEJik4eysJriVu5CbqRYxtv6NOmOUszUZrnkFCsA8L5HhdCljZBJlGuXVWy1cc1iRlAxKmnPTq-raEs7qf~bRd2PAkacF5hNeCptoWkJr4GPexGGoUIYCf6AGUm1ZW82uj4cN1DHKHNpa5i0TS3cdR-RLkQ8M3FmfRlBbi7ieuk99Jd-ocVhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
})