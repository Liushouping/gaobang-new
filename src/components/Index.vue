<script>
import { ref, reactive, onBeforeMount, computed, onMounted, onUnmounted } from "vue";
import _ from 'underscore';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default{
  name: "Index",
  setup() {
    const triggers = ScrollTrigger.getAll();
    // 
    const bg_one = ref(null);
    const logo = ref(null);
    const logotxt= ref(null);
    const lineone =ref(null);
    // 
    const txtone = ref(null);
    const titleone = ref(null);
    // 
    const bg_two = ref(null);
    const titletwo = ref(null);
    // 
    const bg_end = ref(null);
    const titlethree = ref(null);
    //
    const bg_index_1title = ref(null);
    const bg_index_2title = ref(null);
    const bg_index_3title = ref(null);
    const bg_index_4title = ref(null);
    //
    const bg_index_1 = ref(null);
    const bg_index_2 = ref(null);
    const bg_index_3 = ref(null);
    const bg_index_4 = ref(null);
    // 
    const txt = ref(null);
    const topbgtxt = ref(null);
    const bgtxt = ref(null);
    // 
    const topl = ref(null);
    // 
    const lefta = ref(null);
    const lefto = ref(null);
    const leftb = ref(null);
    const leftaa = ref(null);
    const leftn = ref(null);
    const leftg = ref(null);

    const leftc = ref(null);
    const leftr = ref(null);
    const lefte = ref(null);
    const leftaaa = ref(null);
    const leftt = ref(null);
    const lefti = ref(null);
    const leftv = ref(null);
    const leftii = ref(null);
    const lefttt = ref(null);
    const lefty = ref(null);
    // 
    const rightg = ref(null);
    const righta = ref(null);
    const righto = ref(null);
    const rightb = ref(null);
    const rightaa = ref(null);
    const rightn = ref(null);
    const rightgg = ref(null);
    const rightc = ref(null);
    const rightr = ref(null);
    const righte = ref(null);
    const rightaaa = ref(null);
    const rightt = ref(null);
    const righti = ref(null);
    const rightv = ref(null);
    const rightii = ref(null);
    const righttt = ref(null);
    const righty = ref(null);
    
    // 
    const Bottomdata = reactive({
      info : 'Copyright © 2023 GAO BANG CREATIVITY All Rights Reserved',
      year: new Date().getFullYear(),
      updatedInfo: computed(() => `Copyright © ${Bottomdata.year} GAO BANG CREATIVITY All Rights Reserved`)
    });

    const debounceFunc = (func, delay) => {
       let timer;
        return function(...args) {
           const context = this;
           clearTimeOut(timer);
           timer = setTimeOut(() => {
               func.apply(context, args);
           }, delay)
         }
    };

    // 
    const formResult = ref('');
    const isSubmitting = ref(false);

    const form = reactive({
      name: '',
      company: '',
      email: '',
      category: '',
      message: ''
    });

    const isValid = computed(() => {
      return form.name && form.company && form.email && form.category && form.message;
    });

    const validateEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const validateField = (field) => {
      if (field === 'email') {
        return form[field] !== '' && validateEmail(form[field]);
      }
      return form[field] !== '';
    };

    // 
    const submitForm = async (event) => {
      event.preventDefault();
      isSubmitting.value = true;
      formResult.value = "請稍等...";

      const form = event.target;
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: json
        });

        const result = await response.json();
        if (response.status === 200) {
          formResult.value = "表單已成功送出！";
        } else {
          console.log(response);
          formResult.value = result.message;
        }
      } catch (error) {
        console.log(error);
        formResult.value = "出現錯誤!";
      } finally {
        isSubmitting.value = false;
        form.reset();
        setTimeout(() => {
          formResult.value = "";
        }, 3000);
      }
    };

    // pc
    const scrollToForm = () => {
      window.scrollTo({
        top: 5850,
        behavior: 'smooth'
      });
    };
    // mobile
    const mbscrollToForm = () => {
      window.scrollTo({
        top: 4890,
        behavior: 'smooth'
      });
    };

    function gsapSet() {
      ScrollTrigger.matchMedia({
        "(min-width: 368px) and (max-width: 479px)": () => {
          //
          gsap.from(logo.value, {
            y: 4000,
            opacity: 0,
            scale: 0,
            duration: 0.75,
          });
          gsap.to(logo.value, {
           scrollTrigger: {
            start: "top -80",
            end: "bottom 1000", 
            toggleClass: {
              className: 'logo-to', 
              targets: logo.value
            },
           },
           opacity: 1,
           scale: 1
          });
          //
          gsap.from(logotxt.value, {
            y: 2000,
            opacity: 0,
            scale: 0,
            delay: 1,
            duration: 0.5,
          });
          gsap.to(logotxt.value, {
           scrollTrigger: {
            start: "top -10",
            end: "bottom 1000",
            toggleClass: {
              className: 'logotxt-to', 
              targets: logotxt.value
            },

           },
           scale: 1,
          });
          //
          gsap.set(topbgtxt.value, {
            opacity: 0,
          });

          gsap.to(topbgtxt.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=600px",
            end: "100",
            scrub: true,
            toggleClass: "active",
            markers: false,
            toggleClass: {
              className: 'topbgtxt-to', 
              targets: topbgtxt.value
            },
           },
           opacity:1,
          });
          //
          gsap.set(bgtxt.value, {
            opacity:0,
          });

          gsap.to(bgtxt.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=600px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity:1,
          });
          //
          gsap.set(titleone.value, {
            y: 300,
            opacity: 0,
            scale: 3,
          });

          gsap.to(titleone.value, {
           scrollTrigger: {
            trigger: bg_one.value,
            start: "top -30",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           onEnter() {
              async function play() {
                const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

                // 过渡动画的时间间隔和延迟时间
                const intervalTime = 1000;
                const delayTime = 2000;

                // 设置文字的初始状态
                document.querySelector('.center').classList.remove('hidden');
                document.querySelector('.blurtext span:nth-child(1)').classList.add('active');

                // 使用防抖函数控制 play 函数的执行次数
                const debouncedPlay = _.debounce(play, delayTime + 2 * intervalTime);

                // 隐藏第一个单字，并等待 0.5 秒后执行下一步动作
                document.querySelector('.t').classList.add('hidden');
                await sleep(3500);

                // 过渡动画
                const blurtextSpans = document.querySelectorAll('.blurtext span');
                for (let i = 1; i < blurtextSpans.length; i++) {
                  // 移除透明滤镜动画
                  document.querySelectorAll('.blurtext span.past').forEach(el => el.classList.remove('past'));
                  // 新增 past class, 移除 active class
                  document.querySelector('.blurtext span.active').classList.add('past');
                  document.querySelector('.blurtext span.active').classList.remove('active');
                  // 新增 active class，清除滤镜动画
                  const nextActiveSpan = document.querySelector('.blurtext span.past + span');
                  if (nextActiveSpan) {
                    nextActiveSpan.classList.add('active');
                  }

                  // 如果所有单字都已经过渡完成，则跳出循环
                  if (!document.querySelector('.blurtext span.active')) {
                    break;
                  }

                  // 等待一段时间后继续下一步动作
                  await sleep(intervalTime);
                }

                // 隐藏第一个单字，并等待 2 秒后执行下一步动作
                document.querySelector('.t').classList.add('hidden');
                await sleep(delayTime);

                // 使用防抖函数来控制函数的执行次数
                debouncedPlay();
              }

              play();

          },
           y: 200,
           scale: 1,
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.from(lineone.value, {
            y: 200,
            opacity: 0,
            scale: 0,
            delay: 1,
            duration: 0.5,
          });
          gsap.to(lineone.value, {
           scrollTrigger: {
            start: "top -10",
            end: "99999",
            toggleClass: {
              className: 'line-to', 
              targets: lineone.value
            },
           },
           scale: 1,
          });
          //
          gsap.set(titletwo.value, {
            y: 40,
            filter: "blur(16px)",
            opacity: 0,
            scale: 3,
          });

          gsap.to(titletwo.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           y: 0,
           scale: 1,
           opacity: 1,
           filter: "blur(0px)",
           duration: 0.25,
          });
          //
          gsap.set(titlethree.value, {
            y: 40,
            filter: "blur(16px)",
            opacity: 0,
            scale: 3,
          });

          gsap.to(titlethree.value, {
           scrollTrigger: {
            trigger: bg_end.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           y: 0,
           scale: 1,
           opacity: 1,
           filter: "blur(0px)",
           duration: 0.25,
          });
          // bg_index_1title
          gsap.set(bg_index_1title.value, {
            y: 40,
            filter: "blur(16px)",
            opacity: 0,
            scale: 3,
          });

          gsap.to(bg_index_1title.value, {
           scrollTrigger: {
            trigger: bg_index_1.value,
            start: "top +=900px",
            end: "+=600",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           y: 0,
           scale: 1,
           opacity: 1,
           filter: "blur(0px)",
           duration: 0.25,
          });
          // bg_index_2title
          gsap.set(bg_index_2title.value, {
            y: 40,
            filter: "blur(16px)",
            opacity: 0,
            scale: 3,
          });

          gsap.to(bg_index_2title.value, {
           scrollTrigger: {
            trigger: bg_index_2.value,
            start: "top +=900px",
            end: "+=600",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           y: 0,
           scale: 1,
           opacity: 1,
           filter: "blur(0px)",
           duration: 0.25,
          });
          // bg_index_3title
          gsap.set(bg_index_3title.value, {
            y: 40,
            filter: "blur(16px)",
            opacity: 0,
            scale: 3,
          });

          gsap.to(bg_index_3title.value, {
           scrollTrigger: {
            trigger: bg_index_3.value,
            start: "top +=900px",
            end: "+=600",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           y: 0,
           scale: 1,
           opacity: 1,
           filter: "blur(0px)",
           duration: 0.25,
          });
          // bg_index_4title
          gsap.set(bg_index_4title.value, {
            y: 40,
            filter: "blur(16px)",
            opacity: 0,
            scale: 3,
          });

          gsap.to(bg_index_4title.value, {
           scrollTrigger: {
            trigger: bg_index_4.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           y: 0,
           scale: 1,
           opacity: 1,
           filter: "blur(0px)",
           duration: 0.25,
          });
          // new left
          gsap.set(lefta.value, {
            opacity: 0.1,
          });

          gsap.to(lefta.value, {
           scrollTrigger: {
            trigger: txtone.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(lefto.value, {
            opacity: 0.1,
          });

          gsap.to(lefto.value, {
           scrollTrigger: {
            trigger: txtone.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftb.value, {
            opacity: 0.1,
          });

          gsap.to(leftb.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftaa.value, {
            opacity: 0.1,
          });

          gsap.to(leftaa.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftn.value, {
            opacity: 0.1,
          });

          gsap.to(leftn.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftg.value, {
            opacity: 0.1,
          });

          gsap.to(leftg.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftc.value, {
            opacity: 0.1,
          });

          gsap.to(leftc.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftr.value, {
            opacity: 0.1,
          });

          gsap.to(leftr.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(lefte.value, {
            opacity: 0.1,
          });

          gsap.to(lefte.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftaaa.value, {
            opacity: 0.1,
          });

          gsap.to(leftaaa.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftt.value, {
            opacity: 0.1,
          });

          gsap.to(leftt.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(lefti.value, {
            opacity: 0.1,
          });

          gsap.to(lefti.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftv.value, {
            opacity: 0.1,
          });

          gsap.to(leftv.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftii.value, {
            opacity: 0.1,
          });

          gsap.to(leftii.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(lefttt.value, {
            opacity: 0.1,
          });

          gsap.to(lefttt.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(lefty.value, {
            opacity: 0.1,
          });

          gsap.to(lefty.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          // new right
          gsap.set(rightg.value, {
            opacity: 0.1,
          });

          gsap.to(rightg.value, {
           scrollTrigger: {
            trigger: txtone.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(righta.value, {
            opacity: 0.1,
          });

          gsap.to(righta.value, {
           scrollTrigger: {
            trigger: txtone.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(righto.value, {
            opacity: 0.1,
          });

          gsap.to(righto.value, {
           scrollTrigger: {
            trigger: txtone.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightb.value, {
            opacity: 0.1,
          });

          gsap.to(rightb.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightaa.value, {
            opacity: 0.1,
          });

          gsap.to(rightaa.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightn.value, {
            opacity: 0.1,
          });

          gsap.to(rightn.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightgg.value, {
            opacity: 0.1,
          });

          gsap.to(rightgg.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightc.value, {
            opacity: 0.1,
          });

          gsap.to(rightc.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightr.value, {
            opacity: 0.1,
          });

          gsap.to(rightr.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(righte.value, {
            opacity: 0.1,
          });

          gsap.to(righte.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightaaa.value, {
            opacity: 0.1,
          });

          gsap.to(rightaaa.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightt.value, {
            opacity: 0.1,
          });

          gsap.to(rightt.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(righti.value, {
            opacity: 0.1,
          });

          gsap.to(righti.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightv.value, {
            opacity: 0.1,
          });

          gsap.to(rightv.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightii.value, {
            opacity: 0.1,
          });

          gsap.to(rightii.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(righttt.value, {
            opacity: 0.1,
          });

          gsap.to(righttt.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(righty.value, {
            opacity: 0.1,
          });

          gsap.to(righty.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.to("body", {
            scrollTrigger: {
              trigger: bg_index_1.value,
              start: "top center",
              end: "bottom center",
              toggleClass: {targets: "body", className: "bg-color-white"},
              onEnter: () => document.body.classList.remove("bg-color-yellow"),
              onLeaveBack: () => document.body.classList.remove("bg-color-white"),
            }
          });

          gsap.to("body", {
            scrollTrigger: {
              trigger: bg_index_3.value,
              start: "bottom center",
              end: "bottom top",
              toggleClass: {targets: "body", className: "bg-color-yellow"},
              onEnter: () => document.body.classList.remove("bg-color-white"),
              onLeaveBack: () => document.body.classList.add("bg-color-white"),
            }
          });
          //
          gsap.to(txt.value, {
            scrollTrigger: {
              trigger: bg_index_1.value,
              start: "top center",
              end: "bottom center",
              onEnter: () => {
                txt.value.classList.remove("text-white");
                document.querySelectorAll('.text_body').forEach(el => el.classList.add("txt-gradient"));
                document.querySelectorAll('.text_body_bl').forEach(el => el.classList.add("txt-gradient-bl"));
                document.querySelectorAll('.text_body_br').forEach(el => el.classList.add("txt-gradient-br"));
              },
              onLeaveBack: () => {
                txt.value.classList.add("text-white");
                document.querySelectorAll('.text_body').forEach(el => el.classList.remove("txt-gradient"));
                document.querySelectorAll('.text_body_bl').forEach(el => el.classList.remove("txt-gradient-bl"));
                document.querySelectorAll('.text_body_br').forEach(el => el.classList.remove("txt-gradient-br"));
              },
            }
          });

          gsap.to(txt.value, {
            scrollTrigger: {
              trigger: bg_index_4.value,
              start: "top center",
              end: "bottom center",
              onEnter: () => {
                txt.value.classList.add("text-white");
                document.querySelectorAll('.text_body').forEach(el => el.classList.remove("txt-gradient"));
                document.querySelectorAll('.text_body_bl').forEach(el => el.classList.remove("txt-gradient-bl"));
                document.querySelectorAll('.text_body_br').forEach(el => el.classList.remove("txt-gradient-br"));
              },
              onLeaveBack: () => {
                txt.value.classList.remove("text-white");
                document.querySelectorAll('.text_body').forEach(el => el.classList.add("txt-gradient"));
                document.querySelectorAll('.text_body_bl').forEach(el => el.classList.add("txt-gradient-bl"));
                document.querySelectorAll('.text_body_br').forEach(el => el.classList.add("txt-gradient-br"));
              },
            }
          });
          //

        },
        "(min-width: 480px)": () => {
          //
          gsap.from(logo.value, {
            y: 4000,
            opacity: 0,
            scale: 0,
            duration: 0.75,
          });
          gsap.to(logo.value, {
           scrollTrigger: {
            start: "top -80",
            end: "bottom 1000", 
            toggleClass: {
              className: 'logo-to', 
              targets: logo.value
            },
           },
           opacity: 1,
           scale: 1
          });
          //
          gsap.from(logotxt.value, {
            y: 2000,
            opacity: 0,
            scale: 0,
            delay: 1,
            duration: 0.5,
          });
          gsap.to(logotxt.value, {
           scrollTrigger: {
            start: "top -10",
            end: "bottom 1000",
            toggleClass: {
              className: 'logotxt-to', 
              targets: logotxt.value
            },

           },
           scale: 1,
          });
          //
          gsap.set(topbgtxt.value, {
            opacity: 0,
          });

          gsap.to(topbgtxt.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=600px",
            end: "100",
            scrub: true,
            toggleClass: "active",
            markers: false,
            toggleClass: {
              className: 'topbgtxt-to', 
              targets: topbgtxt.value
            },
           },
           opacity:1,
          });
          //
          gsap.set(bgtxt.value, {
            opacity:0,
          });

          gsap.to(bgtxt.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=600px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity:1,
          });
          //
          gsap.set(titleone.value, {
            y: 300,
            opacity: 0,
            scale: 3,
          });

          gsap.to(titleone.value, {
           scrollTrigger: {
            trigger: bg_one.value,
            start: "top -30",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           onEnter() {
              async function play() {
                const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

                // 过渡动画的时间间隔和延迟时间
                const intervalTime = 1000;
                const delayTime = 2000;

                // 设置文字的初始状态
                document.querySelector('.center').classList.remove('hidden');
                document.querySelector('.blurtext span:nth-child(1)').classList.add('active');

                // 使用防抖函数控制 play 函数的执行次数
                const debouncedPlay = _.debounce(play, delayTime + 2 * intervalTime);

                // 隐藏第一个单字，并等待 0.5 秒后执行下一步动作
                document.querySelector('.t').classList.add('hidden');
                await sleep(3500);

                // 过渡动画
                const blurtextSpans = document.querySelectorAll('.blurtext span');
                for (let i = 1; i < blurtextSpans.length; i++) {
                  // 移除透明滤镜动画
                  document.querySelectorAll('.blurtext span.past').forEach(el => el.classList.remove('past'));
                  // 新增 past class, 移除 active class
                  document.querySelector('.blurtext span.active').classList.add('past');
                  document.querySelector('.blurtext span.active').classList.remove('active');
                  // 新增 active class，清除滤镜动画
                  const nextActiveSpan = document.querySelector('.blurtext span.past + span');
                  if (nextActiveSpan) {
                    nextActiveSpan.classList.add('active');
                  }

                  // 如果所有单字都已经过渡完成，则跳出循环
                  if (!document.querySelector('.blurtext span.active')) {
                    break;
                  }

                  // 等待一段时间后继续下一步动作
                  await sleep(intervalTime);
                }

                // 隐藏第一个单字，并等待 2 秒后执行下一步动作
                document.querySelector('.t').classList.add('hidden');
                await sleep(delayTime);

                // 使用防抖函数来控制函数的执行次数
                debouncedPlay();
              }

              play();

          },
           y: 200,
           scale: 1,
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.from(lineone.value, {
            y: 200,
            opacity: 0,
            scale: 0,
            delay: 1,
            duration: 0.5,
          });
          gsap.to(lineone.value, {
           scrollTrigger: {
            start: "top -10",
            end: "99999",
            toggleClass: {
              className: 'line-to', 
              targets: lineone.value
            },
           },
           scale: 1,
          });
          //
          gsap.set(titletwo.value, {
            y: 40,
            filter: "blur(16px)",
            opacity: 0,
            scale: 3,
          });

          gsap.to(titletwo.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           y: 0,
           scale: 1,
           opacity: 1,
           filter: "blur(0px)",
           duration: 0.25,
          });
          //
          gsap.set(titlethree.value, {
            y: 40,
            filter: "blur(16px)",
            opacity: 0,
            scale: 3,
          });

          gsap.to(titlethree.value, {
           scrollTrigger: {
            trigger: bg_end.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           y: 0,
           scale: 1,
           opacity: 1,
           filter: "blur(0px)",
           duration: 0.25,
          });
          // bg_index_1title

          gsap.set(bg_index_1title.value, {
            y: 40,
            filter: "blur(16px)",
            opacity: 0,
            scale: 1.5,
          });

          gsap.to(bg_index_1title.value, {
           scrollTrigger: {
            trigger: bg_index_1.value,
            start: "top +=300px",
            end: "+=600",
            scrub: true,
            markers: false,
            pin: true
           },
           y: 0,
           scale: 1,
           opacity: 1,
           filter: "blur(0px)",
           duration: 0.25,
          });
          // bg_index_2title
          gsap.set(bg_index_2title.value, {
            y: 40,
            filter: "blur(16px)",
            opacity: 0,
            scale: 1.5,
          });

          gsap.to(bg_index_2title.value, {
           scrollTrigger: {
            trigger: bg_index_2.value,
            start: "top +=300px",
            end: "+=600",
            scrub: true,
            markers: false,
           },
           y: 0,
           scale: 1,
           opacity: 1,
           filter: "blur(0px)",
           duration: 0.25,
          });
          // bg_index_3title
          gsap.set(bg_index_3title.value, {
            y: 40,
            filter: "blur(16px)",
            opacity: 0,
            scale: 1.5,
          });

          gsap.to(bg_index_3title.value, {
           scrollTrigger: {
            trigger: bg_index_3.value,
            start: "top +=300px",
            end: "+=600",
            scrub: true,
            markers: false,
           },
           y: 0,
           scale: 1,
           opacity: 1,
           filter: "blur(0px)",
           duration: 0.25,
          });
          // bg_index_4title
          gsap.set(bg_index_4title.value, {
            y: 40,
            filter: "blur(16px)",
            opacity: 0,
            scale: 1.5,
          });

          gsap.to(bg_index_4title.value, {
           scrollTrigger: {
            trigger: bg_index_4.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            markers: false,
           },
           y: 0,
           scale: 1,
           opacity: 1,
           filter: "blur(0px)",
           duration: 0.25,
          });

          // new left
          gsap.set(lefta.value, {
            opacity: 0.1,
          });

          gsap.to(lefta.value, {
           scrollTrigger: {
            trigger: txtone.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(lefto.value, {
            opacity: 0.1,
          });

          gsap.to(lefto.value, {
           scrollTrigger: {
            trigger: txtone.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftb.value, {
            opacity: 0.1,
          });

          gsap.to(leftb.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftaa.value, {
            opacity: 0.1,
          });

          gsap.to(leftaa.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftn.value, {
            opacity: 0.1,
          });

          gsap.to(leftn.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftg.value, {
            opacity: 0.1,
          });

          gsap.to(leftg.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftc.value, {
            opacity: 0.1,
          });

          gsap.to(leftc.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftr.value, {
            opacity: 0.1,
          });

          gsap.to(leftr.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(lefte.value, {
            opacity: 0.1,
          });

          gsap.to(lefte.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftaaa.value, {
            opacity: 0.1,
          });

          gsap.to(leftaaa.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftt.value, {
            opacity: 0.1,
          });

          gsap.to(leftt.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(lefti.value, {
            opacity: 0.1,
          });

          gsap.to(lefti.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftv.value, {
            opacity: 0.1,
          });

          gsap.to(leftv.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(leftii.value, {
            opacity: 0.1,
          });

          gsap.to(leftii.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(lefttt.value, {
            opacity: 0.1,
          });

          gsap.to(lefttt.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(lefty.value, {
            opacity: 0.1,
          });

          gsap.to(lefty.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          // new right
          gsap.set(rightg.value, {
            opacity: 0.1,
          });

          gsap.to(rightg.value, {
           scrollTrigger: {
            trigger: txtone.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(righta.value, {
            opacity: 0.1,
          });

          gsap.to(righta.value, {
           scrollTrigger: {
            trigger: txtone.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(righto.value, {
            opacity: 0.1,
          });

          gsap.to(righto.value, {
           scrollTrigger: {
            trigger: txtone.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightb.value, {
            opacity: 0.1,
          });

          gsap.to(rightb.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightaa.value, {
            opacity: 0.1,
          });

          gsap.to(rightaa.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightn.value, {
            opacity: 0.1,
          });

          gsap.to(rightn.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightgg.value, {
            opacity: 0.1,
          });

          gsap.to(rightgg.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=300px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightc.value, {
            opacity: 0.1,
          });

          gsap.to(rightc.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightr.value, {
            opacity: 0.1,
          });

          gsap.to(rightr.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(righte.value, {
            opacity: 0.1,
          });

          gsap.to(righte.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightaaa.value, {
            opacity: 0.1,
          });

          gsap.to(rightaaa.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightt.value, {
            opacity: 0.1,
          });

          gsap.to(rightt.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(righti.value, {
            opacity: 0.1,
          });

          gsap.to(righti.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightv.value, {
            opacity: 0.1,
          });

          gsap.to(rightv.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(rightii.value, {
            opacity: 0.1,
          });

          gsap.to(rightii.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(righttt.value, {
            opacity: 0.1,
          });

          gsap.to(righttt.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.set(righty.value, {
            opacity: 0.1,
          });

          gsap.to(righty.value, {
           scrollTrigger: {
            trigger: bg_two.value,
            start: "top +=200px",
            end: "+=300",
            scrub: true,
            toggleClass: "active",
            markers: false,
           },
           opacity: 1,
           duration: 0.6,
          });
          //
          gsap.to("body", {
            scrollTrigger: {
              trigger: bg_index_1.value,
              start: "top center",
              end: "bottom center",
              toggleClass: {targets: "body", className: "bg-color-white"},
              onEnter: () => document.body.classList.remove("bg-color-yellow"),
              onLeaveBack: () => document.body.classList.remove("bg-color-white"),
            }
          });

          gsap.to("body", {
            scrollTrigger: {
              trigger: bg_index_3.value,
              start: "bottom center",
              end: "bottom top",
              toggleClass: {targets: "body", className: "bg-color-yellow"},
              onEnter: () => document.body.classList.remove("bg-color-white"),
              onLeaveBack: () => document.body.classList.add("bg-color-white"),
            }
          });
          //
          gsap.to(txt.value, {
            scrollTrigger: {
              trigger: bg_index_1.value,
              start: "top center",
              end: "bottom center",
              onEnter: () => {
                txt.value.classList.remove("text-white");
                document.querySelectorAll('.text_body').forEach(el => el.classList.add("txt-gradient"));
                document.querySelectorAll('.text_body_bl').forEach(el => el.classList.add("txt-gradient-bl"));
                document.querySelectorAll('.text_body_br').forEach(el => el.classList.add("txt-gradient-br"));
              },
              onLeaveBack: () => {
                txt.value.classList.add("text-white");
                document.querySelectorAll('.text_body').forEach(el => el.classList.remove("txt-gradient"));
                document.querySelectorAll('.text_body_bl').forEach(el => el.classList.remove("txt-gradient-bl"));
                document.querySelectorAll('.text_body_br').forEach(el => el.classList.remove("txt-gradient-br"));
              },
            }
          });

          gsap.to(txt.value, {
            scrollTrigger: {
              trigger: bg_index_4.value,
              start: "top center",
              end: "bottom center",
              onEnter: () => {
                txt.value.classList.add("text-white");
                document.querySelectorAll('.text_body').forEach(el => el.classList.remove("txt-gradient"));
                document.querySelectorAll('.text_body_bl').forEach(el => el.classList.remove("txt-gradient-bl"));
                document.querySelectorAll('.text_body_br').forEach(el => el.classList.remove("txt-gradient-br"));
              },
              onLeaveBack: () => {
                txt.value.classList.remove("text-white");
                document.querySelectorAll('.text_body').forEach(el => el.classList.add("txt-gradient"));
                document.querySelectorAll('.text_body_bl').forEach(el => el.classList.add("txt-gradient-bl"));
                document.querySelectorAll('.text_body_br').forEach(el => el.classList.add("txt-gradient-br"));
              },
            }
          });
        },
      });
    };

    onMounted(() => {
      ScrollTrigger.refresh();
      gsapSet();
    });
    onUnmounted(() => {
      triggers.forEach((trigger) => {
        trigger.kill();
      });
      ScrollTrigger.clearMatchMedia();
    });
    return {
      // 
      bg_one,
      logo,
      logotxt,
      lineone,
      //
      txtone,
      titleone,
      //
      bg_two,
      titletwo,
      //
      bg_end,
      titlethree,
      // 
      bg_index_1title,
      bg_index_2title,
      bg_index_3title,
      bg_index_4title,
      //
      bg_index_1,
      bg_index_2,
      bg_index_3,
      bg_index_4,
      // 
      txt,
      topbgtxt,
      bgtxt,
      // 
      topl,
      // 
      lefta,
      lefto,
      leftb,
      leftaa,
      leftn,
      leftg,
      leftc,
      leftr,
      lefte,
      leftaaa,
      leftt,
      lefti,
      leftv,
      leftii,
      lefttt,
      lefty,

      // 
      rightg,
      righta,
      righto,

      rightb,
      rightaa,
      rightn,
      rightgg,

      rightc,
      rightr,
      righte,
      rightaaa,
      rightt,
      righti,
      rightv,
      rightii,
      righttt,
      righty,
      // 
      Bottomdata,
      scrollToForm,
      mbscrollToForm,
      formResult,
      isSubmitting,
      submitForm,
      form,
      isValid,
      validateField
    }
  },
};
</script>
<template>
<div 
class="relative overflow-hidden">
  <!--  -->
  <div 
  ref="txt"
  class="text-white">
  <div ref="topbgtxt">
    <div 
    class="text_body fixed top-[1rem] left-[1rem] sm:left-[2rem] flex flex-row text-[10px] sm:text-[18px] z-40 tracking-[16px] sm:tracking-[36px] md:tracking-[28px] font-GenJyuuGothicBold">
        <span>G</span>
        <span ref="topl">A</span>
        <span ref="topl">O</span>
        <span ref="topl">B</span>
        <span ref="topl">A</span>
        <span ref="topl">N</span>
        <span ref="topl">G</span>
        <span ref="topl">R</span>
        <span ref="topl">E</span>
        <span ref="topl">A</span>
        <span ref="topl">T</span>
        <span ref="topl">I</span>
        <span ref="topl">V</span>
        <span ref="topl">I</span>
        <span ref="topl">T</span>
        <span ref="topl">Y</span>
    </div>
  </div>
  <div 
  ref="bgtxt">
    <div 
    class="text_body_bl fixed top-[2.9rem] sm:top-[3.6rem] left-[1rem] sm:left-[2rem] flex flex-col text-[10px] sm:text-[18px] z-40 font-GenJyuuGothicBold justify-center items-center">
        <span ref="lefta">A</span>
        <span ref="lefto" class="mt-[0.7rem] md:mt-[14px]">O</span>

        <span ref="leftb" class="mt-[0.7rem] md:mt-[14px]">B</span>
        <span ref="leftaa" class="mt-[0.7rem] md:mt-[14px]">A</span>
        <span ref="leftn" class="mt-[0.7rem] md:mt-[14px]">N</span>
        <span ref="leftg" class="mt-[0.7rem] md:mt-[14px]">G</span>

        <!-- <span ref="leftc" class="mt-[0.7rem] md:mt-[14px]">C</span>
        <span ref="leftr" class="mt-[0.7rem] md:mt-[14px]">R</span>
        <span ref="lefte" class="mt-[0.7rem] md:mt-[14px]">E</span>
        <span ref="leftaaa" class="mt-[0.7rem] md:mt-[14px]">A</span>
        <span ref="leftt" class="mt-[0.7rem] md:mt-[14px]">T</span>
        <span ref="lefti" class="mt-[0.7rem] md:mt-[14px]">I</span>
        <span ref="leftv" class="mt-[0.7rem] md:mt-[14px]">V</span>
        <span ref="leftii" class="mt-[0.7rem] md:mt-[14px]">I</span>
        <span ref="lefttt" class="mt-[0.7rem] md:mt-[14px]">T</span>
        <span ref="lefty" class="mt-[0.7rem] md:mt-[14px]">Y</span> -->

    </div>

    <div 
    class="fixed bottom-[3.5rem] sm:bottom-[1rem] right-[0rem] flex flex-col text-[10px] sm:text-[18px] tracking-[18px] sm:tracking-[24px] z-40 font-GenJyuuGothicBold">
        <div class="flex flex-row justify-end text_body_br">
          <span ref="rightg">G</span>
          <span ref="righta">A</span>
          <span ref="righto">O</span>
        </div>
        <div class="flex flex-row justify-end mt-[10px] text_body_br">
          <span ref="rightb">B</span>
          <span ref="rightaa">A</span>
          <span ref="rightn">N</span>
          <span ref="rightgg">G</span>
        </div>
        <div class="flex flex-row justify-end mt-[10px] text_body_br">
          <span ref="rightc">C</span>
          <span ref="rightr">R</span>
          <span ref="righte">E</span>
          <span ref="rightaaa">A</span>
          <span ref="rightt">T</span>
          <span ref="righti">I</span>
          <span ref="rightv">V</span>
          <span ref="rightii">I</span>
          <span ref="righttt">T</span>
          <span ref="righty">Y</span>
        </div>
    </div>
  </div>
  </div>

  <!--  -->
  <div class="all-colors">
    <div class="color color-orange fixed left-8 bottom-8 z-10 w-[450px] h-[450px] blur-[180px]"></div>
    <div class="color color-yellow fixed right-8 bottom-8 z-10 w-[450px] h-[450px] blur-[70px]"></div>
    <div class="color color-pink fixed left-[8px] lg:left-[450px] top-2 z-10 w-[450px] h-[450px] blur-[180px]"></div>
  </div>
  <!-- 1 -->
  <section 
  ref="bg_one"
  class="w-full h-screen flex flex-col justify-center items-center">
    <img 
    ref="logo"
    alt="高邦創意 GAOBANG"
    src="/logo.png" 
    class="logo z-40"
    loading="lazy">
    <h5 
    ref="logotxt"
    class="fixed flex justify-center items-center mt-[12rem] sm:mt-60 text-[1.5rem] sm:text-2xl md:text-[1.7rem] md:leading-10 text-white font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px] z-40" 
    style="text-indent: 0em;">GAO BANG CREATIVITY</h5>
    <span 
    ref="lineone"
    class="absolute left-[50%] divideline mt-[65vh] sm:mt-[580px] lg:mt-[500px] h-[60px] z-40"></span>

    <p 
    ref="titleone"
    class="absolute text-white text-center text-[1rem] sm:text-2xl md:text-[1rem] z-40 leading-[30px] pt-[30vh] px-8 sm:px-0 tracking-[1px] font-GenJyuuGothicBold">
    <span class="flex flex-row justify-center">
    動漫IP策劃、活動企劃、行銷媒體 + <span class="t blurtext pl-[0.7rem] w-[100px] h-[10px] leading-[1.9rem]">創意</span><br>
    <div class="center hidden">
      <div class="blurtext pl-2">
        <span>創意</span>
        <span>科技</span>
        <span>創意</span>
        <span>科技</span>
        <span>創意</span>
        <span>科技</span>
        <span>創意</span>
      </div>
    </div>
    </span>
    <span class="font-GenJyuuGothicRegular">Make dreams come true, make everything happen.</span>
    </p>
  </section>

  <!-- 2 -->
  <section 
  ref="bg_two"
  class="w-full h-screen flex flex-col justify-center items-center">
    <p 
    ref="titletwo"
    class="text-white text-center z-40 leading-[30px] tracking-[1px] font-GenJyuuGothicBold">
    主題展覽、主題餐廳、主題活動、授權策劃
    <br>
    用動漫IP的魅力，打造快樂的使命</p>
  </section>

  <div ref="bg_index_1">
  <!-- 3 -->
  <section 
  class="w-full h-[1200px]">
    <div 
    ref="bg_index_1title"
    class="max-w-[370px] sm:max-w-[480px] 2xl:max-w-[640px] w-full z-[45] sticky top-20 mx-auto">
      <img 
      src="/bg_25th-8.webp" 
      alt="2024年全台規模最大的動漫盛會" 
      class="w-full pb-8 px-8 sm:px-0"
      loading="lazy">
      <h3 
      class="text-custom-blue text-center tracking-[3.8px] text-[18px] sm:text-[28px] md:text-[40px] font-GenJyuuGothicBold">
      2024年全台規模最大的動漫盛會</h3>
      <hr 
      class="h-[1px] border-0 my-4 mx-auto w-[128px]"
      style="background: linear-gradient(to right, #9A1184 0%, #E33733 35%, #F4BF20 70%);">
      <h5 
      class="text-custom-blue text-center leading-[24px] tracking-[1px] text-[16px] pb-2 font-GenJyuuGothicBold">
      ONE PIECE 動畫 25 周年璀璨之夜</h5>
      <p 
      class="text-custom-gray text-center leading-[18px] tracking-[1px] text-[12px] sm:text-[14px] font-GenJyuuGothicRegular">
      63萬人參與，37億觀光產值，次將航海王結合無人
      <br>機與燈光秀，搭配動畫組曲，打造視覺與聽覺饗宴！</p>

      <div class="hidden sm:flex justify-center pt-8">
      <button 
      type="button"
      class="rounded-2xl px-8 py-2 text-[14px] text-white font-GenJyuuGothicBold"
      style="background: linear-gradient(to right, #9A1184 0%, #E33733 35%, #F4BF20 70%);"
      @click="scrollToForm">
        合作表單
      </button>
      </div>

      <div class="flex sm:hidden justify-center pt-8">
      <button 
      type="button"
      class="rounded-2xl px-8 py-2 text-[14px] text-white font-GenJyuuGothicBold"
      style="background: linear-gradient(to right, #9A1184 0%, #E33733 35%, #F4BF20 70%);"
      @click="mbscrollToForm">
        合作表單
      </button>
      </div>

    </div>
  </section>

  <!-- 4 -->
  <section 
  ref="bg_index_2"
  class="w-full h-[1200px]">
    <div 
    ref="bg_index_2title"
    class="max-w-[370px] sm:max-w-[480px] 2xl:max-w-[640px] w-full z-[43] sticky top-20 mx-auto">
      <img 
      src="/bg_20th-8.webp" 
      alt="台灣首場規模最大的航海王展" 
      class="w-full pb-8 px-8 sm:px-0"
      loading="lazy">
      <h3 
      class="text-custom-blue text-center tracking-[3.8px] text-[18px] sm:text-[28px] md:text-[40px] font-GenJyuuGothicBold">
      台灣首場規模最大的航海王特展</h3>
      <hr 
      class="h-[1px] border-0 my-4 mx-auto w-[128px]"
      style="background: linear-gradient(to right, #9A1184 0%, #E33733 35%, #F4BF20 70%);">
      <h5 
      class="text-custom-blue text-center leading-[24px] tracking-[1px] text-[16px] pb-2 font-GenJyuuGothicBold">
      ONE PIECE 動畫 20 週年紀念特展</h5>
      <p 
      class="text-custom-gray text-center leading-[18px] tracking-[1px] text-[12px] sm:text-[14px] font-GenJyuuGothicRegular">
      百家媒體聚焦，10萬海賊迷朝聖，五感體驗、巨型公
      <br>仔與 AR 互動創展覽新高度！</p>

      <div class="hidden sm:flex justify-center pt-8">
      <button 
      type="button"
      class="rounded-2xl px-8 py-2 text-[14px] text-white font-GenJyuuGothicBold"
      style="background: linear-gradient(to right, #9A1184 0%, #E33733 35%, #F4BF20 70%);"
      @click="scrollToForm">
        合作表單
      </button>
      </div>

      <div class="flex sm:hidden justify-center pt-8">
      <button 
      type="button"
      class="rounded-2xl px-8 py-2 text-[14px] text-white font-GenJyuuGothicBold"
      style="background: linear-gradient(to right, #9A1184 0%, #E33733 35%, #F4BF20 70%);"
      @click="mbscrollToForm">
        合作表單
      </button>
      </div>

    </div>
  </section>

  <!-- 5 -->
  <section 
  ref="bg_index_3"
  class="w-full h-[1200px]">
    <div 
    ref="bg_index_3title"
    class="max-w-[370px] sm:max-w-[480px] 2xl:max-w-[640px] w-full z-[42] mx-auto">
      <img 
      src="/bg_run-8.webp" 
      alt="台灣首場沉浸式航海王運動會" 
      class="w-full pb-8 px-8 sm:px-0"
      loading="lazy">
      <h3 
      class="text-custom-blue text-center tracking-[3.8px] text-[18px] sm:text-[28px] md:text-[40px] font-GenJyuuGothicBold">
      台灣首場沉浸式航海王運動會</h3>
      <hr 
      class="h-[1px] border-0 my-4 mx-auto w-[128px]"
      style="background: linear-gradient(to right, #9A1184 0%, #E33733 35%, #F4BF20 70%);">
      <h5 
      class="text-custom-blue text-center leading-[24px] tracking-[1px] text-[16px] pb-2 font-GenJyuuGothicBold">
      ONE PIECE SPORT 航海王運動會</h5>
      <p 
      class="text-custom-gray text-center leading-[18px] tracking-[1px] text-[12px] sm:text-[14px] font-GenJyuuGothicRegular">
      串聯航海王冒險劇情與結合慢跑、 泡泡關卡及一百米
      <br>滑⽔⽔道，打造「全⺠皆能參與」的沉浸式活動!</p>

      <div class="hidden sm:flex justify-center pt-8">
      <button 
      type="button"
      class="rounded-2xl px-8 py-2 text-[14px] text-white font-GenJyuuGothicBold"
      style="background: linear-gradient(to right, #9A1184 0%, #E33733 35%, #F4BF20 70%);"
      @click="scrollToForm">
        合作表單
      </button>
      </div>

      <div class="flex sm:hidden justify-center pt-8">
      <button 
      type="button"
      class="rounded-2xl px-8 py-2 text-[14px] text-white font-GenJyuuGothicBold"
      style="background: linear-gradient(to right, #9A1184 0%, #E33733 35%, #F4BF20 70%);"
      @click="mbscrollToForm">
        合作表單
      </button>
      </div>

    </div>
  </section>
  </div>

  <!-- 6 -->
  <section 
  ref="bg_index_4"
  class="w-full h-screen flex flex-col justify-center items-center">
    <div 
    ref="bg_index_4title"
    class="max-w-[960px] w-full flex flex-col z-[41]">
      <h5 
      class="text-white text-center leading-[32px] tracking-[1px] text-[21px] font-GenJyuuGothicBold">
      合作申請</h5>
      <p 
      class="text-white text-center leading-[18px] tracking-[1px] text-[10px] sm:text-[14px] pb-12 font-GenJyuuGothicRegular">
      Make dreams come true, make everything happen.</p>
      <form 
      @submit="submitForm" 
      action="https://api.web3forms.com/submit" 
      method="POST" 
      id="form">
        <input type="hidden" name="access_key" value="9220bf48-6e83-4f37-8cf9-ad5d0ab81f8f">
      <div class="flex flex-col md:flex-row">
      <div 
      class="w-full md:w-1/2 px-8 sm:px-20 md:pl-16 md:pr-2 xl:px-2">

      <label 
      for="name"
      class="block uppercase tracking-[1px] text-white text-[14px] font-bold mb-2 w-full font-GenJyuuGothicBold">
        姓名
      </label>
      <input 
      id="name"
      v-model="form.name"
      class="appearance-none block w-full bg-white text-gray-700 text-[14px] border-2 rounded-xl py-2 px-3 mb-3 font-GenJyuuGothicBold"  
      :class="{'border-green-500': validateField('name')}"
      type="text"
      required>

      <label 
      for="company"
      class="block uppercase tracking-[1px] text-white text-[14px] font-bold mb-2 w-full font-GenJyuuGothicBold">
        公司名稱
      </label>
      <input 
      id="company"
      v-model="form.company"
      class="appearance-none block w-full bg-white text-gray-700 text-[14px] border-2 rounded-xl py-2 px-3 mb-3 font-GenJyuuGothicBold"  
      :class="{'border-green-500': validateField('company')}"
      type="text"
      required>

      <label 
      for="email"
      class="block uppercase tracking-[1px] text-white text-[14px] font-bold mb-2 w-full font-GenJyuuGothicBold">
        EMAIL
      </label>
      <input 
      id="email"
      v-model="form.email"
      class="appearance-none block w-full bg-white text-gray-700 text-[14px] border-2 rounded-xl py-2 px-3 mb-3 font-GenJyuuGothicBold"  
      :class="{'border-green-500': validateField('email')}"
      type="email"
      required>

      <label 
      for="category"
      class="block uppercase tracking-[1px] text-white text-[14px] font-bold mb-2 w-full font-GenJyuuGothicBold">
        合作類別
      </label>
      <input 
      id="category"
      v-model="form.category"
      class="appearance-none block w-full bg-white text-gray-700 text-[14px] border-2 rounded-xl py-2 px-3 mb-3 font-GenJyuuGothicBold"  
      :class="{'border-green-500': validateField('category')}"
      type="text"
      required>

      </div>
      <div 
      class="w-full md:w-1/2 h-[280px] px-8 sm:px-20 md:pr-16 md:pl-2 xl:px-2">

        <label 
        for="message"
        class="block uppercase tracking-[1px] text-white text-[14px] font-bold mb-2 w-full font-GenJyuuGothicBold">
        期望合作的內容概述
        </label>
        <textarea 
        id="message"
        v-model="form.message"
        name="message" 
        rows="6" 
        class="block w-full h-full bg-white rounded-xl text-gray-700 text-[14px] border-2 py-2 px-3 mb-3 font-GenJyuuGothicBold"
        :class="{'border-green-500': validateField('message')}"
        required></textarea>

        <div 
        class="flex justify-between items-center w-full">
          <div class="flex flex-row w-full text-white text-[14px] tracking-[1px] font-GenJyuuGothicBold">
            {{ formResult }}</div>
          <button 
          type="submit"
          :disabled="isSubmitting || !isValid"
          class="rounded-2xl px-8 py-2 text-[14px] text-white font-GenJyuuGothicBold inline-flex justify-center items-center"
          :class="{'opacity-100 cursor-not-allowed': !isValid}"
          style="background: linear-gradient(to right, #9A1184 0%, #E33733 35%, #F4BF20 70%);">
            {{ isSubmitting ? 'SUBMITTING...' : 'SUBMIT' }}
          </button>
        </div>
      </div>
      </div>
      </form>
    </div>
  </section>

  <!-- End -->
  <section 
  ref="bg_end"
  class="w-full h-screen flex justify-center items-center">
    <p 
    ref="titlethree"
    class="text-white text-center z-40 leading-[30px] tracking-[1px] pt-[400px] sm:pt-[500px]">
      <span class="font-GenJyuuGothicBold">與你一起，用創意渲染快樂</span><br>
      <span class="font-GenJyuuGothicRegular">Share＆Love Peace</span><br><br>
    </p>
  </section>
  <!--  -->
  <footer 
  class="fixed bottom-5 w-full flex flex-col justify-center items-center">
    <div 
    class="flex flex-col justify-center items-center">
      <a 
      class="text-white text-[10px] font-GenJyuuGothicRegular" 
      href="mailto:pkbaby0707@gmail.com">{{ Bottomdata.updatedInfo }}</a>
    </div>
  </footer>
</div>
</template>
