<template>
  <div class="page">
    <Icon type="ios-close-circle-outline" size="50" @click="closeWeb" class="close"/>

    <div class="box">
      <img src="https://img.zcool.cn/community/01293b5c6e22dfa801213f26c06f98.jpg@1280w_1l_0o_100sh.jpg" />
      <div class="item-text">
        <div class="line">
          <div></div>
          <p>
            ROLE
            <br/>
            {{this.role}}
          </p>
          <p>
            TIME
            <br/>
            {{this.time}}
          </p>
          <p>
            AUTHOR
            <br/>
            {{this.author}}
          </p>
          <div></div>
        </div>
        <div class="title">
          <h1>{{this.title}}</h1>
        </div>
      </div>
    </div>

    <div class="guide">
      SCROLL<br/>
      DOWN<br/>
      <Icon type="ios-download-outline" size="50"/>
    </div>

    <div class="content">
      <div class="content-top">
        <h1>网站标题</h1>
        <p>网站介绍</p>
        <Button type="text" ghost>
          Site entry
          <Icon type="ios-arrow-forward" size="25" />
        </Button>
      </div>
      <img src="~assets/image/tiangy.jpg"/>
    </div>

    <BackTop></BackTop>
  </div>
</template>
  
<script>
export default {
  data () {
    return {
      title: '111',
      img: 'https://img.zcool.cn/community/01293b5c6e22dfa801213f26c06f98.jpg@1280w_1l_0o_100sh.jpg',
      button: 'open case',
      role: 'animation',
      time: '2019',
      author: 'Rou rou',
      to: '/webSet/first'
    }
  },
  mounted () {
  },
  methods: {
    closeWeb () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style scoped lang="scss">
.page {
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 64.1145833333vw;
    padding-top: 40vw;
    background: #f0f0f0;
    transform: rotate(-31deg) translate3d(-3.5%, -63.6%, 0);
    z-index: -1;
	}
  .close {
    position: fixed;
    right: 30px;
    top: 30px;
  }
  .box {
    position: absolute;
    top: 65px;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
    background-color: rgb(0, 187, 56);
    width: 90%;
    height: 790px;
    margin: 0 5%;
    overflow: hidden;
    img {
      position: absolute;
      z-index: 1;
      width: 100%;
      transition: all 0.8s cubic-bezier(0.37, 0.045, 0.105, 0.8);
    }
    .item-text {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 100;
      color: rgb(255, 255, 255);
      display: flex;
      flex-direction: row;
      .line {
        position: absolute;
        top: 50px;
        left: 35px;
        div {
          margin-left: 10px;
          width: 1px;
          height: 240px;
          background-color: rgba(80, 80, 80, 0.65);
        }
        p {
          font-size: 15px;
          margin: 15px 0;
        }
      }
      .title {
        text-align: center;
        margin: 0 auto;
        h1 {
          font-size: 150px;
          margin-top: 250px;
        }
      }
    }
  }
  .guide {
    position: absolute;
    z-index: 1000;
    right: 48%;
    bottom: 50px;
    background-color: #fff;
    padding: 10px 15px;
    text-align: center;
  }
  .content {
    text-align: center;
    margin-top: 980px;
    .content-top {
      margin: 100px 0;
      p {
        margin: 30px 0;
      }
      button {
        font-size: 20px;
        border-radius: 100px;
        box-shadow: inset 0 0 0 2px #505050;
        color: rgb(53, 53, 53);
        transition: all 0.2s cubic-bezier(0.15, 0.005, 0.155, 1);
        overflow: hidden;
        padding: 10px 35px 15px;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 120%;
          background: #4d4d4d;
          transition: all 0.25s cubic-bezier(0.15, 0.005, 0.155, 1);
          transform: skew(-10deg) translate3d(-120%, 0, 0);
          z-index: -1;
        }
        &:hover {
          color: #ffffff;
          &:after {
            transform: skew(-10deg) translate3d(-10%, 0, 0);
          }
        }
      }
    }
  }
}
</style>