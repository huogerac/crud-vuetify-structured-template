<script>
export default {
  methods: {
    extractErrorFromResponse(error) {
      /**
       * @see mixins/README.md
       * The API must have an error message standard
       * This method will extract those to something more meaningfull
       * Example:
       * BAD Request --> The title must have at least 8 length long
       */
      let errorText = error
      if (error && error.response && error.response.status == 400) {
        errorText = error.response.data.detail || error
      }
      return `Opps! ${errorText}`
    },
  },
}
</script>
