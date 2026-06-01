---
title: "GS^3: Efficient Relighting with Triple Gaussian Splatting"
collection: publications
permalink: /publication/3dgs
excerpt: 'Zoubin Bi\*, **Yixin Zeng\***, Chong Zeng, Fan Pei,Xiang Feng , Kun Zhou and Hongzhi Wu'
date: 2024-12-02
venue: 'SIGGRAPH Asia'
paperurl: 'https://gsrelight.github.io/pdfs/GS3.pdf'
video: 'https://www.youtube.com/watch?v=PrG6tcpirmU'
supplementary_materials: 'https://gsrelight.github.io/pdfs/GS3_Supplemental.pdf'
project_page: 'https://gsrelight.github.io/'
year: '2024'
first_author: 'no'
teaser: 'http://zyx45889.github.io/images/publications/rgs.jpg'
---

<b>Abstract:</b>

We present a spatial and angular Gaussian based representation and a triple splatting process, for real-time, high-quality novel lighting-and-view synthesis from multi-view point-lit input images. To describe complex appearance, we employ a Lambertian plus a mixture of angular Gaussians as an effective reflectance function for each spatial Gaussian. To generate self-shadow, we splat all spatial Gaussians towards the light source to obtain shadow values, which are further refined by a small multi-layer perceptron. To compensate for other effects like global illumination, another network is trained to compute and add a per-spatial-Gaussian RGB tuple. The effectiveness of our representation is demonstrated on 30 samples with a wide variation in geometry (from solid to fluffy) and appearance (from translucent to anisotropic), as well as using different forms of input data, including rendered images of synthetic/reconstructed objects, photographs captured with a handheld camera and a flash, or from a professional lightstage. We achieve a training time of 40-70 minutes and a rendering speed of 90 fps on a single commodity GPU. Our results compare favorably with state-of-the-art techniques in terms of quality/performance.

