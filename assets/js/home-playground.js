(function () {
  "use strict";

  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function setButton(button, iconClass, text) {
    if (!button) return;
    var icon = button.querySelector("i");
    var label = button.querySelector("span");

    if (icon) icon.className = "fas " + iconClass;
    if (label) label.textContent = text;
  }

  function setStatus(message) {
    var status = document.getElementById("bupa-status");
    if (status) status.textContent = message;
  }

  function safeStorageGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      return false;
    }
    return true;
  }

  function createSpark(x, y) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var colors = ["#26706e", "#d85d43", "#e0a72e", "#3b6ea8", "#8a5a9d"];
    var spark = document.createElement("span");
    var angle = Math.random() * Math.PI * 2;
    var distance = 28 + Math.random() * 34;

    spark.className = "home-spark";
    spark.style.left = x + "px";
    spark.style.top = y + "px";
    spark.style.background = colors[Math.floor(Math.random() * colors.length)];
    spark.style.setProperty("--spark-x", Math.cos(angle) * distance + "px");
    spark.style.setProperty("--spark-y", Math.sin(angle) * distance + "px");

    document.body.appendChild(spark);
    window.setTimeout(function () {
      spark.remove();
    }, 720);
  }

  onReady(function () {
    var video = document.getElementById("bupa-video");
    var playButton = document.getElementById("bupa-toggle");
    var soundButton = document.getElementById("bupa-sound");

    if (video) {
      video.muted = true;
      video.playsInline = true;

      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise
          .then(function () {
            setStatus("视频已静音自动播放。");
          })
          .catch(function () {
            setStatus("浏览器拦截了自动播放，可以点播放按钮开始。");
            setButton(playButton, "fa-play", "播放");
          });
      }

      video.addEventListener("play", function () {
        setButton(playButton, "fa-pause", "暂停");
      });

      video.addEventListener("pause", function () {
        setButton(playButton, "fa-play", "播放");
      });

      video.addEventListener("volumechange", function () {
        setButton(soundButton, video.muted ? "fa-volume-mute" : "fa-volume-up", video.muted ? "静音" : "有声");
      });
    }

    if (playButton && video) {
      playButton.addEventListener("click", function () {
        if (video.paused) {
          video.play();
          setStatus("视频正在播放。");
        } else {
          video.pause();
          setStatus("视频已暂停。");
        }
      });
    }

    if (soundButton && video) {
      soundButton.addEventListener("click", function () {
        video.muted = !video.muted;
        if (!video.paused) return;
        video.play();
      });
    }

    var inspirations = [
      "把一个普通物品想成一个会服务人的伙伴。",
      "观察一个今天用过三次以上的小动作。",
      "给一个页面减少一步操作，看看体验会不会轻一点。",
      "从材料、触感、等待时间里各找一个设计问题。",
      "把用户的犹豫点写下来，它常常就是改进的入口。",
      "让一个复杂流程拥有更清楚的开始和结束。"
    ];
    var inspirationOutput = document.getElementById("inspiration-output");
    var inspirationButton = document.getElementById("inspiration-button");
    var lastInspiration = -1;

    if (inspirationButton && inspirationOutput) {
      inspirationButton.addEventListener("click", function () {
        var index = Math.floor(Math.random() * inspirations.length);
        if (inspirations.length > 1 && index === lastInspiration) {
          index = (index + 1) % inspirations.length;
        }
        lastInspiration = index;
        inspirationOutput.textContent = inspirations[index];
      });
    }

    var energyFill = document.getElementById("design-energy-fill");
    var energyText = document.getElementById("design-energy-text");
    var chips = document.querySelectorAll(".home-chip");

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (item) {
          item.classList.remove("is-active");
        });
        chip.classList.add("is-active");
        if (energyFill) energyFill.style.width = chip.getAttribute("data-energy") + "%";
        if (energyText) energyText.textContent = chip.getAttribute("data-text");
      });
    });

    var notes = {
      flute: "练习气息的时候，也像在练习把节奏慢慢安排好。",
      drawing: "画画是给想象留一个出口，也给观察留一张证据。",
      paper: "论文修改像打磨一个产品原型，每一轮都更接近清楚。"
    };
    var noteOutput = document.getElementById("note-output");
    var tabs = document.querySelectorAll(".home-tabs button");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (item) {
          item.classList.remove("is-active");
        });
        tab.classList.add("is-active");
        if (noteOutput) noteOutput.textContent = notes[tab.getAttribute("data-note")];
      });
    });

    var starButton = document.getElementById("star-button");
    var starCount = document.getElementById("star-count");
    var storageKey = "xiaoyu-home-star-count";
    var count = parseInt(safeStorageGet(storageKey) || "0", 10);

    function renderCount() {
      if (starCount) starCount.textContent = "已收藏 " + count + " 次。";
    }

    renderCount();

    if (starButton) {
      starButton.addEventListener("click", function () {
        count += 1;
        safeStorageSet(storageKey, String(count));
        renderCount();
      });
    }

    document.addEventListener("click", function (event) {
      for (var i = 0; i < 5; i += 1) {
        createSpark(event.clientX, event.clientY);
      }
    });

    var revealItems = document.querySelectorAll(".home-reveal");
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      revealItems.forEach(function (item) {
        observer.observe(item);
      });
    } else {
      revealItems.forEach(function (item) {
        item.classList.add("is-visible");
      });
    }
  });
}());
