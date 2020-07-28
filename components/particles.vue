<template>
  <div class="particles">
    <div id="particles-js"></div>
  </div>
</template>

<script>
export default {
  name: "particles",
  data() { 
    return { 
        windowWidth: process.client ? window.innerWidth : 1920
    } 
  },
  mounted() {
    this.initParticles()

    if (process.client) {
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
    }
  },
  computed: {
    particleAmount() {
      if (this.windowWidth <= 768) {
          return 25
      } else {
          return 80
      }
    }
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": this.particleAmount,
                        "density": {
                            "enable": true,
                            "value_area": 700
                        }
                    },
                    // "color": {
                    //     "value": "#ffee00"
                    // },
                    "color": {
                        "value": "#aa2545"
                    },
                    "shape": {
                        "type": "polygon",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 3
                        },
                    },
                    // "shape": {
                    //     "type": "circle",
                    //     "stroke": {
                    //         "width": 0,
                    //         "color": "#000000"
                    //     },
                    //     "polygon": {
                    //         "nb_sides": 5
                    //     },
                    // },
                    // "opacity": {
                    //     "value": 0.5,
                    //     "random": false,
                    //     "anim": {
                    //         "enable": true,
                    //         "speed": 1,
                    //         "opacity_min": 0.1,
                    //         "sync": false
                    //     }
                    // },
                    // "size": {
                    //     "value": 3,
                    //     "random": true,
                    //     "anim": {
                    //         "enable": false,
                    //         "speed": 5,
                    //         "size_min": 0.1,
                    //         "sync": false
                    //     }
                    // },
                     "size": {
                        "value": 4,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 5,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ed8367",
                        "opacity": 0.2,
                        "width": 0.6
                    },
                    // "move": {
                    //     "enable": true,
                    //     "speed": 3,
                    //     "direction": "top",
                    //     "random": false,
                    //     "straight": false,
                    //     "out_mode": "out",
                    //     "bounce": false,
                    //     "attract": {
                    //         "enable": false,
                    //         "rotateX": 600,
                    //         "rotateY": 1200
                    //     }
                    // }
                    "move": {
                        "enable": true,
                        "speed": 10,
                        "direction": "bottom",
                        "random": true,
                        "straight": true,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                                "enable": false,
                                "mode": "grab"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "resize": false
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            })
    }
  }
};
</script>

<style scoped>
#particles-js {
  /* background: black; */
  /* height: 100%; */
  position: fixed;
  height: 100%;
  width: 100%;
}
</style>
