<template>
  <div class="common-footer">
    <!-- 白底部分 -->
    <div class="footer-content">
      <div class="container">
        <div class="footer-service">
          <ul>
            <li>
              <a href="javascript:;"><em class="iconfont icon-gongju"></em> 预约维修服务</a>
            </li>
            <li>
              <a href="javascript:;"><em class="iconfont icon-7tiantuihuanhuo"></em> 7天无理由退货</a>
            </li>
            <li>
              <a href="javascript:;"><em class="iconfont icon-15tianwuliyoutuihuo"></em> 15天免费换货</a>
            </li>
            <li>
              <a href="javascript:;"><em class="iconfont icon-liwuhuodong"></em> 满69包邮</a>
            </li>
            <li>
              <a href="javascript:;"><em class="iconfont icon-31dingwei"></em> 520余家售后网点</a>
            </li>
          </ul>
        </div>
        <div class="footer-links">
          <dl>
            <dt>帮助中心</dt>
            <dd><a href="javascript:;">账户管理</a></dd>
            <dd><a href="javascript:;">购物指南</a></dd>
            <dd><a href="javascript:;">订单操作</a></dd>
          </dl>
          <dl>
            <dt>服务支持</dt>
            <dd><a href="javascript:;">售后政策</a></dd>
            <dd><a href="javascript:;">自助服务</a></dd>
            <dd><a href="javascript:;">相关下载</a></dd>
          </dl>
          <dl>
            <dt>线下门店</dt>
            <dd><a href="javascript:;">小米之家</a></dd>
            <dd><a href="javascript:;">服务网点</a></dd>
            <dd><a href="javascript:;">授权体验店/专区</a></dd>
          </dl>
          <dl>
            <dt>关于小米</dt>
            <dd><a href="javascript:;">了解小米</a></dd>
            <dd><a href="javascript:;">加入小米</a></dd>
            <dd><a href="javascript:;">投资者关系</a></dd>
            <dd><a href="javascript:;">企业社会责任</a></dd>
            <dd><a href="javascript:;">廉洁举报</a></dd>
          </dl>
          <dl>
            <dt>关注我们</dt>
            <dd><a href="javascript:;">新浪微博</a></dd>
            <dd><a href="javascript:;">官方微信</a></dd>
            <dd><a href="javascript:;">联系我们</a></dd>
            <dd><a href="javascript:;">公益基金会</a></dd>
          </dl>
          <dl>
            <dt>特色服务</dt>
            <dd><a href="javascript:;">F 码通道</a></dd>
            <dd><a href="javascript:;">礼物码</a></dd>
            <dd><a href="javascript:;">防伪查询</a></dd>
          </dl>
          <div class="call-box">
            <h2>4xx-xxx-xxx8</h2>
            <p>8:00-18:00（仅收市话费）</p>
            <div class="human">
              <a href="javascript:;" class="iconfont icon-liaotian"> 人工客服</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 灰底部分 -->
    <div class="footer-bottom">
      <div class="container">
        <div class="bottom-logo">
          <a href="/" name="小米官网"></a>
        </div>
        <div class="bottom-content">
          <p>小米商城 | MIUI | 米家 | 米聊 | 多看 | 游戏 | 政企服务 | 小米天猫店 | 小米集团隐私政策 | 小米公司儿童信息保护规则 | 小米商城隐私政策 | 小米商城用户协议 | 问题反馈 | Select Location</p>
          <p>北京互联网法院法律服务工作站 | 中国消费者协会 | 北京市消费者协会</p>
          <p>© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</p>
          <p>（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京)-非经营性-2014-0090 营业执照 医疗器械质量公告</p>
          <p>增值电信业务许可证 网络食品经营备案 京食药网食备202010048 食品经营许可证</p>
          <p>违法和不良信息举报电话：171-5104-4404 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
          <div class="bottom-title">让全球每个人都能享受科技带来的美好生活</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/icons/iconfont/iconfont.css'
export default {
  name: 'common-footer',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
div {
  box-sizing: border-box;
}
.common-footer {
  height: 592px;
  .footer-content {
    height: 330px;
    .footer-service {
      border-bottom: 1px solid $colorG;
      li {
        position: relative;
        display: inline-block;
        width: 20%;
        height: 62px;
        line-height: 62px;
        text-align: center;
        a {
          font-size: $fontI;
          color: $colorO;
          em {
            font-size: $fontH;
          }
          &:hover {
            color: $colorL;
          }
        }
        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 22px;
          width: 0px;
          height: 20px;
          border-right: 1px solid $colorG;
        }
        &:last-child::after {
          display: none;
        }
      }
    }
    .footer-links {
      dl {
        float: left;
        height: 250px;
        width: 160px;
        padding: 40px 0;
        dt {
          font-size: $fontJ;
          color: $colorM;
          margin-bottom: 20px;
        }
        dd {
          margin: 7px 0;
          a {
            font-size: $fontK;
            color: #757575;
            &:hover {
              color: $colorL;
            }
          }
        }
      }
      .call-box {
        position: relative;
        float: right;
        width: 245px;
        height: 110px;
        margin-top: 40px;
        text-align: center;
        border-left: 1px solid $colorG;
        h2 {
          font-size: $fontC;
          font-weight: normal;
          color: $colorL;
        }
        p {
          font-size: $fontJ;
          line-height: 40px;
        }
        .human {
          display: inline-block;
          box-sizing: border-box;
          text-align: center;
          height: 35px;
          line-height: 35px;
          width: 140px;
          border: 1px solid $colorL;
          text-align: center;
          transition: background-color 0.3s;
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            color: $colorL;
            font-size: $fontJ;
          }
          &:hover {
            background-color: $colorL;
            border: 0;
            a {
              color: $colorJ;
            }
          }
        }
      }
    }
  }
  .footer-bottom {
    height: 262px;
    background-color: $colorN;
    .container {
      position: relative;
      padding-top: 30px;
      height: 100%;
      .bottom-logo {
        position: absolute;
        top: 30px;
        left: 0;
        height: 56px;
        width: 56px;
        a {
          display: inline-block;
          height: 100%;
          width: 100%;
          background: url('https://s02.mifile.cn/assets/static/image/logo-mi2.png') no-repeat center;
          background-size: contain;
          &:active {
            transform: scale(0.9);
          }
        }
      }
      .bottom-content {
        box-sizing: border-box;
        position: absolute;
        top: 30px;
        left: 70px;
        p {
          line-height: 18px;
          &:nth-child(n + 3) {
            color: $colorE;
          }
        }
        .bottom-title {
          position: absolute;
          bottom: -80px;
          left: 50%;
          transform: translateX(-50%);
          font-size: $fontG;
          color: $colorE;
          font-family: KaiTi_GB2312;
        }
      }
    }
  }
}
</style>
