// slide nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  // transition vertical
  const ratio =.1
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }

  const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry)  {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible')
      
      observer.unobserve(entry.target)
    } 
    
    })
  }
  
  
  const observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll('[class*="reveal-"]').forEach(function (r) { 
    observer.observe(r)
  })







// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: ratio
// }

// const handleIntersect = function (entries, observer)  {
//  entries.forEach(function (entry) {

//   if (entry.IntersectionObserver > threshold) {
//     entry.target.classList.add('reveal-visible')
//     observer.unobserve(entry.target)
//   }
//  })
 
// }

// const observer = new IntersectionObserver(handleIntersect, options);
// observer.observe(document.querySelector('.reveal'))
