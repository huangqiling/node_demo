const fn_hello = async (ctx, next) => {
  let name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};
const fn_b_kry = async (ctx, next) => {
  // console.log(ctx);
  console.log(ctx.request.query);
  // console.log(next);
  ctx.response.body = { name: "123", age: 30 };
};
const fn_PostKylin = async (ctx, next) => {
  // console.log(ctx);
  console.log(ctx.request.query);
  // console.log(next);
  ctx.response.body = { name: "123", age: 30 };
};
module.exports = {
  "POST /getkylin": fn_PostKylin,
  "GET /b_kry": fn_b_kry,
  "GET /hello/:name": fn_hello
};
