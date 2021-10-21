<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleClick" />
    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <UseDark v-slot="{ isDark, toggleDark }" storage-key="theme">
        <button @click="toggleDark()"> Is Dark: {{ isDark }} </button>
      </UseDark>
      <div class="toolbar">
        <el-icon v-if="settings.showSettings" class="toolbar-setting" @click.stop="showRightPanel">
          <setting />
        </el-icon>
      </div>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" />
          <span class="user-name">{{ name }}</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> 仪表盘 </el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/kukuyuhai/dex-admin-template/">
              <el-dropdown-item>Github</el-dropdown-item>
            </a>
            <a target="_blank" href="https://kukuyuhai.github.io/dex-admin-template/#/">
              <el-dropdown-item>Docs</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="useLogout">
              <span style="display: block">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from "@/components/Breadcrumb/index.vue"
  import Hamburger from "@/components/Hamburger/index.vue"
  import { defineComponent } from "vue"
  import { useAppStore, useUserStore } from "@/stores"
  import { useCore } from "../../core"
  import UseDark from "./Settings/UseDark"
  import { useSettingsStore } from "../../stores"

  export default defineComponent({
    components: {
      Breadcrumb,
      Hamburger,
      UseDark
    },
    setup() {
      const { sidebar, toggleSideBar } = useAppStore()
      const { avatar, name, logout } = useUserStore()
      const { router, route } = useCore()
      const settings = useSettingsStore()

      function toggleClick() {
        toggleSideBar()
      }

      async function useLogout() {
        await logout()
        router.push(`/login?redirect=${route.fullPath}`)
      }

      const showRightPanel = () => {
        settings.changeSetting({
          key: "rightPanelShow",
          value: true
        })
      }

      return {
        sidebar,
        avatar,
        name,
        settings,
        toggleClick,
        useLogout,
        showRightPanel
      }
    }
  })
</script>

<style lang="scss" scoped>
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: all 0.3s;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }

    .breadcrumb-container {
      float: left;
    }

    .right-menu {
      float: right;
      height: 100%;
      line-height: 50px;
      cursor: pointer;
      user-select: none;
      display: flex;
      align-items: center;

      &:focus {
        outline: none;
      }

      .toolbar {
        margin-right: 10px;
        &-setting {
          font-size: 20px;
        }
      }

      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;

        &.hover-effect {
          cursor: pointer;
          transition: background 0.3s;

          &:hover {
            background: rgba(0, 0, 0, 0.025);
          }
        }
      }

      :deep(.avatar-container) {
        margin-right: 30px;
        display: flex;
        height: 100%;
        align-items: center;

        .avatar-wrapper {
          position: relative;
          display: flex;
          align-items: center;

          .user-name {
            font-size: 16px;
            margin: 0 6px;
          }
          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
