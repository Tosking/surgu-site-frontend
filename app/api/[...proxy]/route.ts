// @ts-ignore
import type { NextRequest } from "next/server";

const apiServer = "http://localhost:3001/";

async function provider(
  req: NextRequest,
  ctx: { params: { proxy: string[] } }
) {
  let url = `${apiServer}/${ctx.params.proxy.join("/")}`;
  console.log("@url", url);
  const search = req.nextUrl.searchParams.toString();
  if (search) {
    url += `?${search}`;
  }
  const headers = new Headers();
  req.headers.forEach((v, k) => {
    headers.append(k, v);
  });

  console.log("@req.body", req.body);

  const res = await fetch(url, {
    method: req.method,
    headers,
    ...(req.body && { body: JSON.stringify(await req.json()) }),
  });
  console.log("@", res);
  return res;
}

export {
  provider as DELETE,
  provider as GET,
  provider as POST,
  provider as PUT,
};
