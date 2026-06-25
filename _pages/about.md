---
permalink: /
title: "Xiaoyu Zhang"
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<!--I am Xiaoyu Zhang (曾一欣), a PhD candidate (since 2026) at [ETH computational design lab](https://cdl.ethz.ch/), under the supervision of Prof. Bernd Bickel. I did my master's study at the [State Key Lab of CAD&CG](http://www.cad.zju.edu.cn), Zhejiang University, under the supervision of Prof. [Hongzhi Wu](https://hongzhiwu.com/). Prior to this, I accomplished my Bachelor's degree in Computer Science and Technology, graduating from the Chu Kochen College at Zhejiang University in 2022. From June to November 2024, I served as an visiting student researcher at [KAIST](https://www.kaist.ac.kr/en/), working with Prof. [Min H. Kim](https://vclab.kaist.ac.kr/minhkim/). -->

<section class="home-hero home-reveal" aria-label="主页视频">
  <div class="home-hero__video-shell">
    <video id="bupa-video" class="home-hero__media" autoplay muted loop playsinline preload="auto" poster="{{ "/images/profile_xiaoyu2.jpg" | relative_url }}">
      <source src="{{ "/bupa.mp4" | relative_url }}" type="video/mp4">
      你的浏览器暂时无法播放这个视频。
    </video>
    <div class="home-hero__shade"></div>
    <div class="home-hero__content">
      <p class="home-kicker">Industrial Design / Service Design / Guangzhou</p>
      <h2>你好，欢迎来到我的个人网站！</h2>
      <p>这里记录我的学习历程、项目实践、设计思考和一些日常里的小灵感。</p>
      <div class="home-hero__actions" aria-label="视频控制">
        <button class="home-icon-button" id="bupa-toggle" type="button" title="播放或暂停视频" aria-label="播放或暂停视频">
          <i class="fas fa-pause" aria-hidden="true"></i>
          <span>暂停</span>
        </button>
        <button class="home-icon-button" id="bupa-sound" type="button" title="打开或关闭声音" aria-label="打开或关闭声音">
          <i class="fas fa-volume-mute" aria-hidden="true"></i>
          <span>静音</span>
        </button>
        <a class="home-pill-link" href="{{ "/artgallery/" | relative_url }}">看我的画</a>
      </div>
    </div>
  </div>
  <p class="home-video-status" id="bupa-status" role="status">视频已静音自动播放。</p>
</section>

<section class="home-section home-reveal">
  <h2>关于我</h2>
  <p>我是广东工业大学工业设计工程专业的一名研一学生。目前正在学习 Gitee 应用开发相关课程。这是我第一次从零开始搭建属于自己的个人网站，也是一次将理论知识转化为实践成果的尝试。</p>
  <p>未来我会持续分享在工业设计、产品开发以及数字化设计领域的学习心得与作品，也欢迎大家和我交流学习经验。</p>
  <p><strong>Research Interest:</strong> 产品设计、体验设计和服务设计。</p>
  <p><strong>Contact:</strong> <a href="mailto:2890089712@qq.com">2890089712@qq.com</a> / <a href="mailto:xiaoyu-zhang77@gmail.com">xiaoyu-zhang77@gmail.com</a></p>
  <p>我会吹点笛子，会画些画；最近在修改一篇论文。更多作品可以去 <a href="{{ "/artgallery/" | relative_url }}">art gallery</a> 逛逛。</p>
</section>

<section class="home-playground home-reveal" aria-label="互动小角落">
  <article class="home-panel">
    <p class="home-panel__label">今日灵感</p>
    <h3>抽一张设计小签</h3>
    <p id="inspiration-output" class="home-inspiration">把一个普通物品想成一个会服务人的伙伴。</p>
    <button class="home-action-button" id="inspiration-button" type="button">
      <i class="fas fa-random" aria-hidden="true"></i>
      <span>换一张</span>
    </button>
  </article>

  <article class="home-panel">
    <p class="home-panel__label">设计能量</p>
    <h3>今天想从哪里开始</h3>
    <div class="home-energy" aria-hidden="true">
      <span class="home-energy__fill" id="design-energy-fill"></span>
    </div>
    <p id="design-energy-text" class="home-energy__text">产品观察：从真实使用场景里发现细节。</p>
    <div class="home-chip-row" aria-label="设计方向">
      <button class="home-chip is-active" type="button" data-energy="68" data-text="产品观察：从真实使用场景里发现细节。">产品观察</button>
      <button class="home-chip" type="button" data-energy="84" data-text="体验旅程：把用户的情绪变化画成线索。">体验旅程</button>
      <button class="home-chip" type="button" data-energy="92" data-text="服务系统：让每个接触点都更顺畅。">服务系统</button>
    </div>
  </article>

  <article class="home-panel">
    <p class="home-panel__label">生活切片</p>
    <h3>三个小频道</h3>
    <div class="home-tabs" aria-label="生活切片">
      <button class="is-active" type="button" data-note="flute">笛子</button>
      <button type="button" data-note="drawing">画画</button>
      <button type="button" data-note="paper">论文</button>
    </div>
    <p id="note-output" class="home-note">练习气息的时候，也像在练习把节奏慢慢安排好。</p>
    <button class="home-action-button home-action-button--quiet" id="star-button" type="button">
      <i class="fas fa-star" aria-hidden="true"></i>
      <span>收藏今日小星光</span>
    </button>
    <p class="home-star-count" id="star-count">已收藏 0 次。</p>
  </article>
</section>

<section class="home-section home-section--now home-reveal">
  <h2>正在进行</h2>
  <div class="home-now-list">
    <div>
      <span class="home-dot home-dot--blue"></span>
      <strong>课程实践</strong>
      <p>继续完善个人网站，把每次修改变成可见的作品积累。</p>
    </div>
    <div>
      <span class="home-dot home-dot--coral"></span>
      <strong>设计研究</strong>
      <p>整理产品设计、体验设计和服务设计相关的观察与方法。</p>
    </div>
    <div>
      <span class="home-dot home-dot--green"></span>
      <strong>作品更新</strong>
      <p>把画作、练习和项目记录放进更有温度的展示页面。</p>
    </div>
  </div>
</section>

<script src="{{ "/assets/js/home-playground.js" | relative_url }}" defer></script>


<!--
# Publications

## 2025

1. [Designing and Fabricating Color BRDFs with Differentiable Wave Optics](https://vclab.kaist.ac.kr/siggraphasia2025p1/index.html)

   TOG 2025

   **Xiaoyu Zhang**, Kiseok Choi, Hadi Amata, Kaizhang Kang, Wolfgang Heidrich, Hongzhi Wu, Min H. Kim

## 2024 

1. [Real-time Acquisition and Reconstruction of Dynamic Volumes with Neural Structured Illumination](https://svbrdf.github.io/publications/realtimedynamic/project.html)

   CVPR 2024

   **Xiaoyu Zhang\***, Zoubin Bi\*(*contribute equally), Mingrui Yin, Xiang Feng, Kun Zhou, Hongzhi Wu

2. [GS^3: Efficient Relighting with Triple Gaussian Splatting](https://gsrelight.github.io/)

   SIGGRAPH Asia, 2024
   
   Zoubin Bi\*, **Xiaoyu Zhang\***, Chong Zeng, Fan Pei,Xiang Feng , Kun Zhou and Hongzhi Wu


## 2023

1. [Use of Deep-Learning Assisted Assessment of Cardiac Parameters in Zebrafish to Discover Cyanidin Chloride as a Novel Keap1 Inhibitor Against Doxorubicin-Induced Cardiotoxicity](https://onlinelibrary.wiley.com/doi/10.1002/advs.202301136)

   Advanced Science, 2023, 2301136.

   Changtong Liu, Yingchao Wang, **Xiaoyu Zhang**, Zirong Kang, Hong Zhao, Kun Qi, Hongzhi Wu, Lu Zhao and Yi Wang

2. [Tac-Anticipator: Visual Analytics of Anticipation Behaviors in Table Tennis Matches](https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.14825)

   Computer Graphics Forum, 2023.

   Jiachen Wang, Yihong Wu, Xiaolong Zhang, **Xiaoyu Zhang**, Zheng Zhou, Hui Zhang, Xiao Xie, and Yingcai Wu
-->
