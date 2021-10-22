<script>
  import { Fragment, h } from "vue"
  export default {
    name: "AuthRedirect",
    created() {
      const hash = window.location.search.slice(1)
      if (window.localStorage) {
        window.localStorage.setItem("x-admin-oauth-code", hash)
        window.close()
      }
    },
    render: function () {
      return h(Fragment, null, []) // avoid warning message
    }
  }
</script>
