<template>
<div>
    <button class="btn mt-2 mb-2 mr-1" :class="btnClass" style="background-color: #6fa8dc;">
    <a href="https://forms.gle/efy6Mc7AwFwkMXAK7" target="_blank" v-b-popover.hover.bottom="personalUse" style="color:white;">{{ personalUseBtn }}</a>
    </button>
    <button class="btn mt-2 mb-2" :class="btnClass" style="background-color: #3c78d8;">
    <a href="https://go.opview.com.tw/SignUp?target=blank" target="_blank" v-b-popover.hover.bottom="companyCase" style="color:white;">{{ companyCaseBtn }}</a>
    </button>
</div>
</template>

<script>
export default {
  data() {
    return {
        personalUseBtn: "個人使用/提問",
        companyCaseBtn: "企業方案體驗",
        personalUse: "您可透過回饋我們使用體驗以繼續使用trend！",
        companyCase: "企業方案將提供您更多功能體驗！",
        btnClass: "btn-sm",
    };
  },
  beforeMount() {
    if (this.isMobileDevice()) {
      this.btnClass = "btn-xs";
      if (location.pathname.includes("/trend/Result")) {
        this.personalUseBtn = "個人提問";
        this.companyCaseBtn = "企業方案";
      }
      // else if (location.pathname.includes("/trend/s/")) {
      //   this.personalUseBtn = "個人使用/提問";
      //   this.companyCaseBtn = "企業方案體驗";
      // };
    }
  },
};
</script>

    /**
     * 判斷是否為手機
     *
     */
    isMobileDevice() {
      const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
      var isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e));
      return isMobileDevice;
    }
