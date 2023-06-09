<template>
  <view class="user">
    <u-navbar
      bgColor="transparent"
      leftIcon=""
      placeholder
      title="个人中心"
      titleStyle="font-weight:bold"
    >
    </u-navbar>

    <view class="user__info">
      <u-avatar :src="userInfoData.avatar" size="84"></u-avatar>
      <view class="user__info__main">
        <view class="user__info__main__name">
          <u-text :text="userInfoData.name" size="18" color="#353535" bold></u-text>
          <u-icon
            name="edit-pen"
            size="22"
            color="#8389BE"
            custom-style="margin-top: 5rpx;"
          ></u-icon>
        </view>
        <u-text :text="`ID: ${userInfoData.id}`" color="#A0A7BA" size="13"></u-text>
      </view>
    </view>

    <view class="user__settings">
      <view class="user__settings__item" @click="goToSettings(0)">
        <view class="user__settings__item__left">
          <u-icon name="reload" size="24" custom-style="margin-right: 22rpx;"></u-icon>
          <u-text text="版本更新" size="15"></u-text>
        </view>
        <u-icon name="arrow-right" color="#0F0F0F"></u-icon>
        <u-divider line-color="#EBEFFF"></u-divider>
      </view>
      <view class="user__settings__item" @click="goToSettings(1)">
        <view class="user__settings__item__left">
          <u-icon name="setting" size="24" custom-style="margin-right: 22rpx;"></u-icon>
          <u-text text="设置" size="15"></u-text>
        </view>
        <u-icon name="arrow-right" color="#0F0F0F"></u-icon>
        <u-divider line-color="#EBEFFF"></u-divider>
      </view>
      <view class="user__settings__item" @click="goToSettings(2)">
        <view class="user__settings__item__left">
          <u-icon name="email" size="24" custom-style="margin-right: 22rpx;"></u-icon>
          <u-text text="意见反馈" size="15"></u-text>
        </view>
        <u-icon name="arrow-right" color="#0F0F0F"></u-icon>
        <u-divider line-color="#EBEFFF"></u-divider>
      </view>
      <view class="user__settings__item" @click="goToSettings(3)">
        <view class="user__settings__item__left">
          <u-icon name="scan" size="24" custom-style="margin-right: 22rpx;"></u-icon>
          <u-text text="我的二维码" size="15"></u-text>
        </view>
        <u-icon name="arrow-right" color="#0F0F0F"></u-icon>
        <u-divider line-color="#EBEFFF"></u-divider>
      </view>
      <view class="user__settings__item" @click="goToSettings(4)">
        <view class="user__settings__item__left">
          <u-icon name="bag" size="24" custom-style="margin-right: 22rpx;"></u-icon>
          <u-text text="最近删除" size="15"></u-text>
        </view>
        <u-divider line-color="#EBEFFF"></u-divider>
      </view>
      <view class="user__settings__item" @click="goToSettings(5)">
        <view class="user__settings__item__left">
          <u-icon name="bag" size="24" custom-style="margin-right: 22rpx;"></u-icon>
          <u-text text="物品修改记录" size="15"></u-text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  options: { styleIsolation: 'shared' }
})
</script>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { onLoad } from '@dcloudio/uni-app'
import type { UserInfo } from '@/types/user'

const user = useUserStore()
const { fetchUserInfo } = user
const { userInfo } = storeToRefs(user)

const userInfoData = reactive<UserInfo>({
  id: userInfo.value.id,
  name: userInfo.value.name,
  avatar: userInfo.value.avatar,
  qrCode: userInfo.value.qrCode
})

watch(userInfo, (val) => {
  ;({
    id: userInfoData.id,
    name: userInfoData.name,
    avatar: userInfoData.avatar,
    qrCode: userInfoData.qrCode
  } = val)
})

onLoad(() => {
  fetchUserInfo()
})
// 点击跳转
const goToSettings = (index: number) => {
  switch (index) {
    // 版本更新
    case 0:
      uni.navigateTo({
        url: '/pages/user/update/update'
      })
      break
    // 设置
    case 1:
      uni.navigateTo({
        url: '/pages/user/settings/settings'
      })
      break
    // 意见反馈
    case 2:
      uni.navigateTo({
        url: '/pages/user/feedback/feedback'
      })
      break
    // 我的二维码
    case 3:
      uni.showToast({
        title: '该功能暂未开放',
        icon: 'error'
      })
      break
    // 最近删除
    case 4:
      uni.navigateTo({
        url: '/pages/user/deleted/deleted'
      })
      break
    // 物品修改记录
    case 5:
      uni.navigateTo({
        url: '/pages/user/history/history'
      })
      break
  }
}
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: $uni-bg-color-gradient;

  &__info {
    display: flex;
    align-items: center;
    width: 80%;
    height: 200rpx;
    margin-top: 38rpx;

    &__main {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 60%;
      margin: 20rpx 0 0 40rpx;

      &__name {
        display: flex;
        align-items: center;
        gap: 2px;
      }
    }
  }

  &__settings {
    width: 80%;
    height: 700rpx;
    border-radius: 29px;
    margin-top: 40rpx;
    padding: 30rpx 40rpx;
    background-color: #fff;
    box-shadow: $uni-box-shadow;

    &__item {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100rpx;
      margin-bottom: 22rpx;

      &__left {
        display: flex;
      }
    }
  }
}
:deep(.u-divider) {
  position: absolute;
  bottom: -44rpx;
  width: 100%;
}
</style>
