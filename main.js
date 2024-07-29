function main(params) {
  let proxies = params.proxies.map(x => x.name);
  let la = {
    name: "均衡负载-哈希",
    type: "load-balance",
    proxies: proxies,
    url: 'https://www.gstatic.com/generate_204',
    interval: 300,
    strategy: "round-robin"
  }

  let lb = {
    name: "均衡负载-轮询",
    type: "load-balance",
    proxies: proxies,
    url: 'https://www.gstatic.com/generate_204',
    interval: 300,
    strategy: "round-robin"
  }

  let lc = {
  name: "自动选择",
  type: "url-test",
  proxies:proxies,
  url: 'https://www.gstatic.com/generate_204',
  interval: 300,
  tolerance: 50
  }

  for (i in params["proxy-groups"]) {
    params["proxy-groups"][i].proxies.unshift(la.name)
    params["proxy-groups"][i].proxies.unshift(lb.name)
    params["proxy-groups"][i].proxies.unshift(lc.name)
  }

  params["proxy-groups"].push(la)
  params["proxy-groups"].push(lb)
  params["proxy-groups"].push(lc)
  
  return params;
}
