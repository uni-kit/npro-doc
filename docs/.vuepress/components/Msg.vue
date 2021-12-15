<template></template>
<script>
export default {
  name: "Msg",
  mounted() {
    let readkey = localStorage.getItem('20210512');
    if (readkey == false || readkey == null) {
      localStorage.setItem('20210512', 'true');
      this.$notification.open({
        message: "nPro上线啦！",
        description: "感谢您对nPro以及mypUI的支持！",
        icon: <a-icon type="exclamation-circle" style="color: #1890ff" />,
        duration: 0,
        placement: "bottomRight",
        btn: h => {
          return h(
            "a-button",
            {
              props: {
                type: "primary",
                size: "small"
              },
              on: {
                click: () => window.location.href="https://ext.dcloud.net.cn/plugin?id=5169"
              }
            },
            "查看更新"
          );
        },
        key: "20210512"
      });
    }
  }
};
</script>
