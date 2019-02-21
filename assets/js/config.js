const navData = [
  {
    icon: '',
    title: '产品服务',
    children: [
      {
        icon: '',
        title: '语音识别',
        children: [
          {
            title: '语音听写',
            to: '/services/voicedictation'
          },
          {
            title: '语音转写',
            to: ''
          }
        ]
      },
      {
        icon: '',
        title: '语音合成',
        children: [
          {
            title: '在线语音合成',
            to: '/services/onlineTts'
          }
        ]
      },
      {
        icon: '',
        title: '人脸识别',
        children: [
          {
            title: '人脸验证',
            to: ''
          },
          {
            title: '人脸检索',
            to: ''
          },
          {
            title: '人脸比对',
            to: ''
          }
        ]
      },
      {
        icon: '',
        title: '语音拓展',
        children: [
          {
            title: '声纹识别',
            to: ''
          },
          {
            title: '情绪识别',
            to: ''
          }
        ]
      },
      {
        icon: '',
        title: '通讯层服务',
        children: [
          {
            title: '通讯层服务',
            to: '/services/communication'
          }
        ]
      }
    ]
  },
  {
    icon: '',
    title: '解决方案',
    children: [
      {
        icon: '',
        title: 'AI智能电话机器人',
        to: ''
      },
      {
        icon: '',
        title: '智能质检机器人',
        to: ''
      }
    ]
  },
  {
    icon: '',
    title: '开发资源',
    children: [
      {
        icon: '',
        title: '文档中心',
        children: [
          {
            title: '新手指南',
            to: ''
          },
          {
            title: '错误码查询',
            to: ''
          }
        ]
      },
      {
        icon: '',
        title: 'SDK下载',
        children: [
          {
            title: 'Android开发文档',
            to: ''
          },
          {
            title: 'iOS开发文档',
            to: ''
          },
          {
            title: 'WebAPI开发文档',
            to: ''
          }
        ]
      }
    ]
  },
  {
    icon: '',
    title: 'HUAPLUS',
    to: ''
  },
  {
    icon: '',
    title: '登录 / 注册',
    to: ''
  }
]

const detailsNavData = [
  {
    icon: '',
    title: '产品服务',
    children: [
      {
        icon: '',
        title: '语音识别',
        children: [
          {
            title: '语音听写',
            to: '/services/voicedictation'
          },
          {
            title: '语音转写',
            to: ''
          }
        ]
      },
      {
        icon: '',
        title: '语音合成',
        children: [
          {
            title: '在线语音合成',
            to: '/services/onlineTts'
          }
        ]
      },
      {
        icon: '',
        title: '人脸识别',
        children: [
          {
            title: '人脸验证',
            to: ''
          },
          {
            title: '人脸检索',
            to: ''
          },
          {
            title: '人脸比对',
            to: ''
          }
        ]
      },
      {
        icon: '',
        title: '语音拓展',
        children: [
          {
            title: '声纹识别',
            to: ''
          },
          {
            title: '情绪识别',
            to: ''
          }
        ]
      },
      {
        icon: '',
        title: '通讯层服务',
        children: [
          {
            title: '通讯层服务',
            to: '/services/communication'
          }
        ]
      }
    ]
  }
]

const footerData = [
  {
    title: '帮助',
    content: [
      {
        name: '新手指南',
        to: ''
      }
    ]
  },
  {
    title: '资源',
    content: [
      {
        name: '错误码查询',
        to: ''
      },
      {
        name: 'SDK下载中心',
        to: ''
      }
    ]
  },
  {
    title: '联系我们',
    content: [
      {
        name: '客服电话',
        to: ''
      },
      {
        name: '工单支持',
        to: ''
      },
      {
        name: '商务合作',
        to: ''
      }
    ]
  }
]

export default {
  navData,
  detailsNavData,
  footerData
}
