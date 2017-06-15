const fn_hello = async (ctx, next) => {
  let name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};

export default {
  "GET /hello/:name": fn_hello
};
