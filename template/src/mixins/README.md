## Important

The ApiResponseMixin meant to show:
- Mixins can be reused cross components
- How you declare/import mixins

However, the method `extractErrorFromResponse` implemented inside the ApiResponseMixin should be an interceptor instead. In another words, rather
keep calling this method everytime inside a try/catch, it could be an axios interceptor that handle the message.