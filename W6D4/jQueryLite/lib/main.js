window.$l = (arg) => {
  let nodes = document.querySelectorAll(arg);
  let nodeList =[];
  nodes.forEach((node) => {nodeList.push(node)});
  return nodeList;
}
