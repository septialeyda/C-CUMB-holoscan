/**
* Template Name: MyResume - v4.7.0
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

Highcharts.chart('container', {
  chart: {
      type: 'spline',
      backgroundColor: '#ffa500',
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
          load: function () {
          function between(min, max) {  
              return Math.floor(
                Math.random() * (max - min) + min
              )
            }

              // set up the updating of the chart each second
              var series = this.series[0];
              setInterval(function () {
                  var x = (new Date()).getTime(), // current time
                      y = between(230, 910);
                  series.addPoint([x, y], true, true);
              }, 1000);
          }
      }
  },

  time: {
      useUTC: false
  },

  title: {
      style: {
        color: '#ffffff',
              fontFamily: 'Poppins'
      },
      text: 'Hasil Tangkapan Ikan Tongkol'
  },

  accessibility: {
      announceNewData: {
          enabled: true,
          minAnnounceInterval: 15000,
          announcementFormatter: function (allSeries, newSeries, newPoint) {
              if (newPoint) {
                  return 'New point added. Value: ' + newPoint.y;
              }
              return false;
          }
      }
  },

  xAxis: {
      title: {
          text: 'Waktu',
          style: {
            color: '#ffffff',
            fontFamily: 'Poppins'
          },
      },
      type: 'datetime',
      tickPixelInterval: 150
  },

  yAxis: {
      title: {
          text: 'Berat (gr)',
          style: {
            color: '#ffffff',
            fontFamily: 'Poppins'
          },
      },
      plotLines: [{
          value: 0,
          width: 1,
          color: '#ffffff'
      }]
  },

  tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  },

  legend: {
      enabled: false
  },

  exporting: {
      enabled: false
  },

  series: [{
      name: 'Hasil Tangkapan Ikan Tongkol',
      color: '#02507e',
      data: (function () {
      function between(min, max) {  
        return Math.floor(
          Math.random() * (max - min) + min)
      }
          // generate an array of random data
          var data = [],
              time = (new Date()).getTime(),
              i;

          for (i = -19; i <= 0; i += 1) {
              data.push({
                  x: time + i * 1000,
                  y: between(230, 910)
              });
          }
          return data;
      }())
  }]
});

Highcharts.chart('container2', {
  chart: {
      type: 'spline',
      backgroundColor: '#ffa500',
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
          load: function () {
          function between(min, max) {  
              return Math.floor(
                Math.random() * (max - min) + min
              )
            }

              // set up the updating of the chart each second
              var series = this.series[0];
              setInterval(function () {
                  var x = (new Date()).getTime(), // current time
                      y = between(300, 1500);
                  series.addPoint([x, y], true, true);
              }, 1000);
          }
      }
  },

  time: {
      useUTC: false
  },

  title: {
      style: {
        color: '#ffffff',
        fontFamily: 'Poppins'
      },
      text: 'Hasil Tangkapan Ikan Cakalang'
  },

  accessibility: {
      announceNewData: {
          enabled: true,
          minAnnounceInterval: 15000,
          announcementFormatter: function (allSeries, newSeries, newPoint) {
              if (newPoint) {
                  return 'New point added. Value: ' + newPoint.y;
              }
              return false;
          }
      }
  },

  xAxis: {
      title: {
          text: 'Waktu',
          style: {
            color: '#ffffff',
            fontFamily: 'Poppins'
          },
      },
      type: 'datetime',
      tickPixelInterval: 150
  },

  yAxis: {
      title: {
          text: 'Berat (gr)',
          style: {
            color: '#ffffff',
            fontFamily: 'Poppins'
          },
      },
      plotLines: [{
          value: 0,
          width: 1,
          color: '#ffffff'
      }]
  },

  tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  },

  legend: {
      enabled: false
  },

  exporting: {
      enabled: false
  },

  series: [{
      name: 'Hasil Tangkapan Ikan Cakalang',
      color: '#02507e',
      data: (function () {
      function between(min, max) {  
        return Math.floor(
          Math.random() * (max - min) + min)
      }
          // generate an array of random data
          var data = [],
              time = (new Date()).getTime(),
              i;

          for (i = -19; i <= 0; i += 1) {
              data.push({
                  x: time + i * 1000,
                  y: between(300, 1500)
              });
          }
          return data;
      }())
  }]
});

Highcharts.chart('container3', {
  chart: {
      backgroundColor: '#ffa500',
      type: 'column'
  },
  title: {
      style: {
            color: '#ffffff',
            fontFamily: 'Poppins'
          },
      text: 'Hasil Tangkapan Ikan Tongkol dan Cakalang'
  },
  xAxis: {
      categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'Mei',
          'Jun',
          'Jul',
          'Ag',
          'Sep',
          'Okt',
          'Nov',
          'Des'
      ],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          style: {
            color: '#ffffff',
            fontFamily: 'Poppins'
          },
          text: 'Jumlah Tangkapan (ton)'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} ton</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
      color: '#ffffff',
      name: 'Tongkol',
      data: [0.1770, 0.0758, 0.2678, 0.1605, 0.1290, 2.1623, 0.5610, 0.4493, 3.1845, 2.7465, 0.1935, 0.8933]

  }, {
      color: '#02507e',
      name: 'Cakalang',
      data: [2.8777, 3.9388, 3.5467, 4.5998, 4.3663, 3.8798, 4.7680, 5.1233, 4.6788, 4.0085, 3.7877, 4.0450]

  }]
});