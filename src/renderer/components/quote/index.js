export default {
  data () {
    return {
      tabNames: ['行情', '交易', '开户', '我的'],
      tab_ids: ['tab_quote', 'tab_trade', 'tab_open_account', 'tab_mysettings'],
      mysettings: ['修改密码', '我的地址', '意见反馈', '关于'],
      mysettings_ids: ['mysettings_psw', 'mysettings_adr', 'mysettings_suggestion'],
      head: '关于 Electron',
      content: 'Electron是由Github开发，用HTML，CSS和JavaScript来构建跨平台桌面应用程序的一个开源库。',
      content1: 'Electron通过将Chromium和Node.js合并到同一个运行时环境中，并将其打包为Mac，Windows和Linux系统下的应用来实现这一目的。',
      content2: 'Electron于2013年作为构建Github上可编程的文本编辑器Atom的框架而被开发出来。这两个项目在2014春季开源。目前它已成为开源开发者、初创企业和老牌公司常用的开发工具。 ',
      content3: ' 看看谁在使用Electron 。继续往下阅读可以了解Electron的贡献者们和已经发布的版本，或者直接阅读快速开始指引来开始用Electron来构建应用。'
    }
  },
  methods: {
    handleSelect (key) {
      switch (key) {
        case this.tab_ids[0]:
          this.$router.push.push({path: '/quote'})
          break

        case this.tab_ids[1]:
          this.$router.push({path: '/trade'})
          break

        case this.tab_ids[2]:
          this.$router.push({path: '/open-account'})
          break

        case this.tab_ids[3]:
          this.$router.push({path: '/settings'})
          break

        case this.mysettings_ids[0]:
          this.$router.push({path: '/settings/password'})
          break

        case this.mysettings_ids[1]:
          this.$router.push({path: '/settings/addr'})
          break

        case this.mysettings_ids[2]:
          this.$router.push({path: '/settings/suggestion'})
          break

        default:
          break
      }
    }
  }
}
