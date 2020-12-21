(() => {
  "use strict";
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];
      (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  var t = (function () {
    function t() {
      !(function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      })(this, t);
    }
    var n, a;
    return (
      (n = t),
      (a = [
        {
          key: "setEventListeners",
          value: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            t.forEach(function (e) {
              Array.from(e.elems).forEach(function (t) {
                return t.addEventListener(e.event, e.callback);
              });
            });
          },
        },
      ]) && e(n.prototype, a),
        t
    );
  })();
  const n = JSON.parse(
    '[{"elemId":"#tr__seo__bio","languages":{"ENG":"Alex Dzyuba - a full stack web developer (PHP & JS).","RU":"Алексей Дзюба - Full stack web разработчик (PHP & JS)"}},{"elemId":"#tr__name-surname","languages":{"ENG":"Alex Dzyuba","RU":"Алексей Дзюба"}},{"elemId":"#tr__work","languages":{"ENG":"Full stack web developer (PHP & JS)","RU":"Full stack web разработчик (PHP & JS)"}},{"elemId":"#tr__nav__projects","languages":{"ENG":"My latest projects","RU":"Мои последние проекты"}},{"elemId":"#tr__nav__about","languages":{"ENG":"About me","RU":"Обо мне"}},{"elemId":"#tr__nav__contact","languages":{"ENG":"Contact me","RU":"Связаться со мной"}},{"elemId":"#tr__switch-lang","languages":{"ENG":"Switch language","RU":"Поменять язык"}},{"elemId":"#tr__switch-lang","languages":{"ENG":"Switch language","RU":"Поменять язык"}},{"elemId":"#tr__projects__latest","languages":{"ENG":"My latest projects","RU":"Мои последние проекты"}},{"elemId":"#tr__check-code","languages":{"ENG":"Check source code","RU":"Посмотреть исходный код"}},{"elemId":"#tr__project-desc__bugtrek","languages":{"ENG":"A web app for tracking bugs and assigning tasks in IT projects.","RU":"Веб-приложение для IT-проектов, которое позволяет следить за багами и назначать задачи."}},{"elemId":"#tr__project-desc__bugtrek__written","languages":{"ENG":"Written in PHP (Symfony framework) and JavaScript (ES6).","RU":"Написано на PHP (фреймворк Symfony) и JavaScript (ES6)."}},{"elemId":"#tr__check-code-2","languages":{"ENG":"Check source code","RU":"Посмотреть исходный код"}},{"elemId":"#tr__project-desc__currency-converter","languages":{"ENG":"A widget that enables converting different currencies on your web site/app.","RU":"Виджет, позволяющий конвертировать разные валюты. Можно подключить к сайту или приложению."}},{"elemId":"#tr__project-desc__currency-converter__written","languages":{"ENG":"Written in JavaScript (ES6). Also, I\\"ve rewritten this app with help of Vue framework. You can check the source code of ","RU":"Написано на JavaScript (ES6). Также я переписал это приложение на фреймворк Vue. Переписанный код проекта "}},{"elemId":"#tr__project-desc__currency-converter__written__vue","languages":{"ENG":"the Vue version here.","RU":"можно посмотреть тут"}},{"elemId":"#tr__project-desc__site","languages":{"ENG":"My current resume website.","RU":"Мой текущий сайт-резюме."}},{"elemId":"#tr__project-desc__site__written","languages":{"ENG":"Written with help of JavaScript (ES6) using Webpack.","RU":"Написано с помощью JavaScript (ES6), используя Webpack."}},{"elemId":"#tr__about","languages":{"ENG":"About me","RU":"Обо мне"}},{"elemId":"#tr__main-skills","languages":{"ENG":"My main skills:","RU":"Мои главные навыки:"}},{"elemId":"#tr__bem","languages":{"ENG":"BEM methodology","RU":"БЭМ методология"}},{"elemId":"#tr__gulp","languages":{"ENG":"Gulp preprocessor","RU":"препроцессор Gulp"}},{"elemId":"#tr__misc","languages":{"ENG":"Miscellaneous","RU":"Разное"}},{"elemId":"#tr__misc","languages":{"ENG":"Miscellaneous","RU":"Разное"}},{"elemId":"#tr__knowledge__oop","languages":{"ENG":"Knowledge of object-oriented programming (OOP)","RU":"Понимание объектно-ориентированного программирования (ООП)"}},{"elemId":"#tr__knowledge__oop","languages":{"ENG":"Knowledge of object-oriented programming (OOP)","RU":"Понимание объектно-ориентированного программирования (ООП)"}},{"elemId":"#tr__knowledge__git","languages":{"ENG":"Knowledge of Git","RU":"Понимание системы контроля версий Git"}},{"elemId":"#tr__knowledge__git","languages":{"ENG":"Knowledge of Git","RU":"Понимание системы контроля версий Git"}},{"elemId":"#tr__knowledge__management","languages":{"ENG":"Experience in management","RU":"Опыт в менеджменте"}},{"elemId":"#tr__career__exp","languages":{"ENG":"My career experience:","RU":"Карьерный опыт:"}},{"elemId":"#tr__career__exp","languages":{"ENG":"My career experience:","RU":"Карьерный опыт:"}},{"elemId":"#tr__career__consider","languages":{"ENG":"I consider myself as a ","RU":"Я считаю себя "}},{"elemId":"#tr__career__consider","languages":{"ENG":"I consider myself as a ","RU":"Я считаю себя "}},{"elemId":"#tr__career__consider-2","languages":{"ENG":"developer. I\\"ve been doing commercial work as a developer for ","RU":"разработчиком. Я занимался коммерческой разработкой на протяжении "}},{"elemId":"#tr__career__year","languages":{"ENG":"year","RU":"года"}},{"elemId":"#tr__career__start","languages":{"ENG":"I started my career as a frontend developer, but I had to work with PHP a lot at my first job, so I learned PHP deeper.","RU":"Я начинал свою карьеру как frontend-разработчик, но мне приходилось много работать с PHP на моей первой работе, поэтому я стал изучать PHP глубже."}},{"elemId":"#tr__career__php","languages":{"ENG":"Then I worked as a PHP developer mainly, not focusing that much on JS or HTML.","RU":"Потом я работал главным образом с PHP, изредка делая что-нибудь на JS или HTML."}},{"elemId":"#tr__career__army","languages":{"ENG":"Later, I was drafted in the army for a year and a half. In the army, most of the time my duty was to do managing and organizational work.","RU":"Позже меня призвали в армию. В армии большую часть времени основой моей повседневной обязанностью была работа руководителя и организатора."}},{"elemId":"#tr__career__looking","languages":{"ENG":"Now, I\\"m looking for a job. Please, check my works at section ","RU":"Сейчас я открыт к вакансиям. Пожалуйста, посмотрите мои работы в разделе "}},{"elemId":"#tr__career__projects-link","languages":{"ENG":"My latest projects","RU":"Мои последние проекты"}},{"elemId":"#tr__contact__me","languages":{"ENG":"Contact me","RU":"Связаться со мной"}},{"elemId":"#tr__seo__phone","languages":{"ENG":"My phone number","RU":"Мой номер телефона"}}]'
  );
  function a(e, t) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];
      (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  var r,
    o,
    l,
    c = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.currentLang = e.LANGS_ENUM.ENG);
      }
      var t, r;
      return (
        (t = e),
        (r = [
          {
            key: "translate",
            value: function (e) {
              var t = e.target,
                n = t.dataset.lang;
              this.currentLang !== n &&
              ((function (e) {
                var t = "js-switch-lang__btn--active";
                document.querySelector("." + t).classList.remove(t), e.classList.add(t);
              })(t),
                (function (e) {
                  var t = e.toLowerCase();
                  "eng" === t && (t = "en"), (document.querySelector("html").lang = t);
                })(n),
                this.getTranslations().forEach(function (e) {
                  try {
                    document.querySelector(e.elemId).textContent = e.languages[n];
                  } catch (err) {}
                }),
                (this.currentLang = n));
            },
          },
          {
            key: "getTranslations",
            value: function () {
              return n;
            },
          },
        ]) && a(t.prototype, r),
          e
      );
    })();
  (l = { ENG: "ENG", RU: "RU" }), (o = "LANGS_ENUM") in (r = c) ? Object.defineProperty(r, o, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : (r[o] = l);
  var u = new t(),
    s = new c();
  u.setEventListeners(
    {
      elems: document.querySelectorAll(".js-switch-lang__btn"),
      event: "click",
      callback: function (e) {
        return s.translate(e);
      },
    },
    {
      elems: document.querySelectorAll(".js-nav__link"),
      event: "click",
      callback: function (e) {
        !(function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "linear",
            a = arguments.length > 3 ? arguments[3] : void 0,
            r = {
              linear: function (e) {
                return e;
              },
              easeInQuad: function (e) {
                return e * e;
              },
              easeOutQuad: function (e) {
                return e * (2 - e);
              },
              easeInOutQuad: function (e) {
                return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
              },
              easeInCubic: function (e) {
                return e * e * e;
              },
              easeOutCubic: function (e) {
                return --e * e * e + 1;
              },
              easeInOutCubic: function (e) {
                return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
              },
              easeInQuart: function (e) {
                return e * e * e * e;
              },
              easeOutQuart: function (e) {
                return 1 - --e * e * e * e;
              },
              easeInOutQuart: function (e) {
                return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
              },
              easeInQuint: function (e) {
                return e * e * e * e * e;
              },
              easeOutQuint: function (e) {
                return 1 + --e * e * e * e * e;
              },
              easeInOutQuint: function (e) {
                return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
              },
            },
            o = window.pageYOffset,
            l = "now" in window.performance ? performance.now() : new Date().getTime(),
            c = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
            u = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight,
            s = "number" == typeof e ? e : e.offsetTop,
            i = Math.round(c - s < u ? c - u : s);
          if ("requestAnimationFrame" in window == 0) return window.scroll(0, i), void (a && a());
          function g() {
            var e = "now" in window.performance ? performance.now() : new Date().getTime(),
              c = Math.min(1, (e - l) / t),
              u = r[n](c);
            window.scroll(0, Math.ceil(u * (i - o) + o)), window.pageYOffset !== i ? requestAnimationFrame(g) : a && a();
          }
          g();
        })(document.querySelector(e.target.getAttribute("href")).offsetTop - 70, 600, "easeOutQuad");
      },
    }
  );
})();
