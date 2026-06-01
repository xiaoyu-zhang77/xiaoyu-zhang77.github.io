---
title: "Real-time Acquisition and Reconstruction of Dynamic Volumes with Neural Structured Illumination"
collection: publications
permalink: /publication/dynamic_smoke
excerpt: '**Yixin Zeng\***, Zoubin Bi*(*contribute equally), Mingrui Yin, Xiang Feng, Kun Zhou, Hongzhi Wu'
date: 2024-06-17
venue: 'CVPR'
paperurl: 'https://svbrdf.github.io/publications/realtimedynamic/realtimedynamic.pdf'
code: 'https://github.com/zyx45889/RealtimeDynamic'
video: 'https://www.youtube.com/watch?v=XoTYTGSueh4'
project_page: 'https://svbrdf.github.io/publications/realtimedynamic/project.html'
year: '2024'
first_author: 'yes'
teaser: 'http://zyx45889.github.io/images/publications/neuralSL.jpg'
---

<b>Abstract:</b>

We propose a novel framework for real-time acquisition and reconstruction of temporally-varying 3D phenomena with high quality. The core of our framework is a deep neural network, with an encoder that directly maps to the structured illumination during acquisition, a decoder that predicts a 1D density distribution from single-pixel measurements under the optimized lighting, and an aggregation module that combines the predicted densities for each camera into a single volume. It enables the automatic and joint optimization of physical acquisition and computational reconstruction, and is flexible to adapt to different hardware configurations. The effectiveness of our frame- work is demonstrated on a lightweight setup with an off- the-shelf projector and one or multiple cameras, achieving a performance of 40 volumes per second at a spatial resolution of 1283. We compare favorably with state-of-the-art techniques in real and synthetic experiments, and evaluate the impact of various factors over our pipeline.
