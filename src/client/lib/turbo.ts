import * as Turbo from "@hotwired/turbo";
// import Turbo from "turbolinks";
import gsap from "gsap";

export function unloadScripts(...except: string[]) {
  Array.from(document.querySelectorAll("script"))
    .filter((s) => !except.includes(s.id))
    .forEach((s) => {
      s.remove();
    });
}

export default () => {
  document.addEventListener("turbo:visit", function (e) {
    console.log("Event: turbo:visit", e);
    gsap.to(".body", { opacity: 0 });
  });

  document.addEventListener("turbo:load", function (e) {
    console.log("Event: turbo:load", e);
    gsap.fromTo(".body", { opacity: 0 }, { opacity: 1 });
  });

  //   document.addEventListener("pjax:error", function () {
  //     console.log("Event: pjax:error", arguments);
  //   });

  //   document.addEventListener("pjax:success", function () {
  //     console.log("Event: pjax:success", arguments);
  //   });

  //   new pjax({ selectors: [".body", "title"] });

  //   Turbolinks.start();

  Turbo.start();
};
