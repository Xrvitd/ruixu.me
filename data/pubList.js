const pubList = [
  {
    image: {
      src: '/static/images/GCNO.jpg',
      width: 650,
      height: 434,
    },
    title: {
      normal:
        'Globally Consistent Normal Orientation for Point Clouds by Regularizing the Winding-Number Field',
      highlight: 'NEW!',
      // link: 'https://xrvitd.github.io/Projects/GCNO/index.html',
      link: './posts/gcno',
    },
    authors: [
      'Rui Xu',
      'Zhiyang Dou',
      'Ningna Wang',
      'Shiqing Xin',
      'Shuangmin Chen',
      'Mingyan Jiang',
      'Xiaohu Guo',
      'Wenping Wang',
      'Changhe Tu',
    ],
    journal: {
      normal: 'ACM Transactions on Graphics.',
      highlight: 'SIGGRAPH 2023.',
    },
    highlightInfo: [
      'Selected for inclusion in the Technical Papers Video Trailer.',
      'SIGGRAPH 2023 Technical Papers Best Paper Award.',
    ],
    links: [
      {
        text: 'Project Page',
        url: 'https://xrvitd.github.io/Projects/GCNO/index.html',
      },
      {
        text: 'Arxiv',
        url: 'https://arxiv.org/abs/2304.11605',
      },
      {
        text: 'Video',
        url: 'https://youtu.be/08pOt5JqWJE',
      },
      {
        text: 'Code',
        url: 'https://github.com/Xrvitd/GCNO',
      },
    ],
  },
  {
    image: {
      src: '/static/images/Mesh-MLP.jpg',
      width: 650,
      height: 384,
    },
    title: {
      normal:
        'Mesh-MLP: An all-MLP Architecture for Mesh Classification and Semantic Segmentation',
      link: 'https://arxiv.org/abs/2306.05246',
    },
    authors: [
      'Qiujie Dong ',
      'Rui Xu',
      'Xiaoran Gong',
      'Zixiong Wang',
      'Shuangmin Chen',
      'Shiqing Xin',
      'Changhe Tu',
    ],
    journal: {
      normal: 'arXiv, 2023.',
    },
    links: [
      {
        text: 'Paper',
        url: 'https://arxiv.org/abs/2306.05246',
      },
    ],
  },
  {
    image: {
      src: '/static/images/RFEPS.jpg',
      width: 650,
      height: 434,
    },
    title: {
      normal: 'RFEPS: Reconstructing Feature-line Equipped Polygonal Surface',
      link: 'https://xrvitd.github.io/Projects/RFEPS/index.html',
    },
    authors: [
      'Rui Xu',
      'Zixiong Wang',
      'Zhiyang Dou',
      'Chen Zong',
      'Shiqing Xin',
      'Mingyan Jiang',
      'Tao Ju',
      'Changhe Tu',
    ],
    journal: {
      normal: 'ACM Transactions on Graphics.',
      highlight: 'SIGGRAPH 2022.',
    },

    links: [
      {
        text: 'Project Page',
        url: 'https://xrvitd.github.io/Projects/RFEPS/index.html',
      },
      {
        text: 'Arxiv',
        url: 'https://arxiv.org/abs/2212.03600',
      },
      {
        text: 'Video',
        url: 'https://youtu.be/iRP5z-JOCEc',
      },
      {
        text: 'Code',
        url: 'https://github.com/Xrvitd/RFEPS',
      },
    ],
  },
  {
    image: {
      src: '/static/images/SurfaceVoronoi.jpg',
      width: 650,
      height: 366,
    },
    title: {
      normal:
        'SurfaceVoronoi: Efficiently Computing Voronoi Diagrams over Mesh Surfaces with Arbitrary Distance Solvers',
      link: 'https://dl.acm.org/doi/abs/10.1145/3550454.3555453',
    },
    authors: [
      ' Shiqing Xin',
      'Pengfei Wang',
      'Rui Xu',
      'Dongming Yan',
      'Shuangmin Chen*',
      'Wenping Wang',
      'Caiming Zhang',
      'Changhe Tu',
    ],
    journal: {
      normal: 'ACM Transactions on Graphics.',
      highlight: 'SIGGRAPH Asia 2022.',
    },
    highlightInfo: ['Selected to the Back Cover of TOG.'],
    links: [
      {
        text: 'Project Page',
        url: 'https://arxiv.org/abs/2212.09029',
      },
      {
        text: 'Code',
        url: 'https://github.com/sssomeone/SurfaceVoronoi',
      },
    ],
  },
  {
    image: {
      src: '/static/images/QuickCSGModeling.jpg',
      width: 650,
      height: 406,
    },
    title: {
      normal:
        'QuickCSGModeling: Quick CSG Operations Based on Fusing Signed Distance Fields for VR Modeling',
      link: 'https://dl.acm.org/doi/abs/10.1145/3599729',
    },
    authors: [
      'Shuangmin Chen*',
      'Rui Xu',
      'Jian Xu',
      'Shiqing Xin',
      'Changhe Tu',
      'Chenglei Yang',
      'Lin Lu',
    ],
    journal: {
      normal:
        'ACM Transactions on Multimedia Computing, Communications, and Applications.',
      highlight: 'ToMM 2023.',
    },
  },
  {
    image: {
      src: '/static/images/Coverage_Axis.jpg',
      width: 650,
      height: 366,
    },
    title: {
      normal:
        'Coverage Axis: Inner Point Selection for 3D Shape Skeletonization',
      link: 'https://arxiv.org/abs/2110.00965',
    },
    authors: [
      'Zhiyang Dou',
      'Cheng Lin',
      'Rui Xu',
      'Lei Yang',
      'Shiqing Xin',
      'Taku Komura',
      'Wenping Wang',
    ],
    journal: {
      normal: 'Computer Graphics Forum.',
      highlight: 'Eurographics 2022.',
    },
    links: [
      {
        text: 'Project Page',
        url: 'https://frank-zy-dou.github.io/projects/CoverageAxis/index.html',
      },
      {
        text: 'Arxiv',
        url: 'https://arxiv.org/abs/2110.00965',
      },
      {
        text: 'Code',
        url: 'https://github.com/Frank-ZY-Dou/Coverage_Axis',
      },
    ],
  },
  {
    image: {
      src: '/static/images/EasyVRModeling.jpg',
      width: 650,
      height: 317,
    },
    title: {
      normal:
        'EasyVRModeling: Easily Create 3D Models by an Immersive VR System',
      link: 'https://dl.acm.org/doi/abs/10.1145/3522613',
    },
    authors: [
      'Zhiying Fu',
      'Rui Xu',
      'Shiqing Xin',
      'Shuangmin Chen',
      'Changhe Tu',
      'Chenglei Yang',
      'Lin Lu',
    ],
    journal: {
      normal: 'ACM SIGGRAPH Symposium on Interactive 3D Graphics and Games.',
      highlight: 'i3D 2022.',
    },
  },
  {
    image: {
      src: '/static/images/Top-Down_Shape.jpg',
      width: 650,
      height: 364,
    },
    title: {
      normal: 'Top-Down Shape Abstraction Based on Greedy Pole Selection',
      link: 'https://arxiv.org/abs/1910.08954',
    },
    authors: [
      'Zhiyang Dou',
      'Shiqing Xin',
      'Rui Xu',
      'Jian Xu',
      'Yuanfeng Zhou',
      'Shuangmin Chen',
      'Wenping Wang',
      'Xiuyang Zhao',
      'Changhe Tu',
    ],
    journal: {
      normal: 'IEEE Transactions on Visualization and Computer Graphics.',
      highlight: 'TVCG 2020.',
    },
  },
]

export default pubList
