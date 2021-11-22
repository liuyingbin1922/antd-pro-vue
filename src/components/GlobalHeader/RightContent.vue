<template>
    <div :class="className">
        <a-notice-icon 
            class="ai-notice"
            className="action"
            :count="8"
            :loading="false"
        >
            <a-notice-icon-tab 
            :list="[
            {
            id: '000000001',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
            title: '你收到了 14 份新周报',
            datetime: '2017-08-09',
            },
            {
            id: '000000002',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
            title: '你推荐的 曲妮妮 已通过第三轮面试',
            datetime: '2017-08-08',
            read: true,
            },
            ]"
            title="通知"
            emptyText="你已查看所有通知"
            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
            />
            <a-notice-icon-tab 
            :list="[]"
            title="消息"
            emptyText="您已读完所有消息"
            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
            />
            <a-notice-icon-tab 
            :list="[
            {
            id: '000000009',
            title: '任务名称',
            description: '任务需要在 2017-01-12 20:00 前启动',
            extra: '未开始',
            status: 'todo',
            },
            {
            id: '000000010',
            title: '第三方紧急代码变更',
            description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
            extra: '马上到期',
            read: true,
            status: 'urgent',
            },
            {
            id: '000000011',
            title: '信息安全考试',
            description: '指派竹尔于 2017-01-09 前完成更新并发布',
            extra: '已耗时 8 天',
            status: 'doing',
            },
            {
            id: '000000012',
            title: 'ABCD 版本发布',
            description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
            extra: '进行中',
            status: 'processing',
            }
            ]"
            title="待办"
            emptyText="你已完成所有待办"
            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
            />
        </a-notice-icon>
        <a-tooltip :title="$t('navbar.lang')" placement="bottom">
            <a href="javascript:;" class="action" @click='changeLang'>
                <a-icon type="api" />
            </a>
        </a-tooltip>
        
        <a-dropdown >
            <span class="action account">
              <a-avatar
                size="small"
                class="avatar"
                src='https://si.geilicdn.com/img-7e380000017d483601440a20e273_500_500.jpg'
                alt="avatar"
              />
              <span class="name">yingbin</span>
            </span>

            <a-menu slot="overlay" class="menu">
                <a-menu-item key="userCenter">
                    <a-icon type="user"/>
                    {{$t('menu.account.center')}}
                </a-menu-item>
                <a-menu-item key="userinfo">
                    <a-icon type="setting"/>
                    {{$t('menu.account.settings')}}
                </a-menu-item>
                <a-menu-item key="triggerError">
                    <a-icon type="close-circle-o" />
                    {{$t('menu.account.trigger')}}
                </a-menu-item>
                
                <a-menu-divider/>
                <a-menu-item key="logout">
                    <a-icon type="logout"/>
                    退出登录
                </a-menu-item>
            </a-menu>
          </a-dropdown>
          <a-tooltip title="预览设置" placement="bottom">
            <a @click="()=>{this.collapse=!this.collapse}" href="javascript:;" class="action" :style="{marginRight: '12px'}">
                <a-icon type="ellipsis" />
            </a>
          </a-tooltip>
          <a-setting-drawer :collapse="collapse"/>
    </div>
</template>

<script>
import { Tooltip, Icon, Dropdown, Menu, Avatar, Divider } from "ant-design-vue";
import NoticeIcon from "@/components/NoticeIcon"
import SettingDrawer from "@/components/SettingDrawer"
export default {
  data: () => ({
    collapse: false
  }),
  components: {
    ATooltip: Tooltip,
    AIcon: Icon,
    ADropdown: Dropdown,
    AMenu: Menu,
    AMenuItem: Menu.Item,
    AMenuDivider: Menu.Divider,
    AAvatar: Avatar,
    ANoticeIcon: NoticeIcon,
    ANoticeIconTab: NoticeIcon.Tab,

    ADivider: Divider,
    ASettingDrawer: SettingDrawer
  },
  props:["theme","layout"],
  methods: {
    changeLang() {
      this.$i18n.locale = this.$i18n.locale === "en_US" ? "zh_CN" : "en_US";
    },
  },
  computed:{
      className(){
        let className = 'ai-header-right';
        if (this.theme === 'dark' && this.layout==='topmenu') {
            className = `ai-header-right dark`;
        }
        return className;
      }
  }
};
</script>
