const {Graph} = require("./_datastructure");


var kahnTopologicalSort = function(g){
  let indegree = [];
  let visitedCount = 0;
  let queue = [];
  let order = "";
  for(let ver of g.getVerticies()){
    indegree[ver] = 0;
  }
  for(let ver of g.getVerticies()){
    let head = g.getAdjNodes(ver);
    while(head){
      indegree[head.val]++;
      head = head.next;
    }
  }
  for(let ver in indegree){
    if(indegree[ver] === 0){
      queue.push(ver);
    }
  }
  while(queue.length>0){
    let ver = queue.shift();
    order += `${ver} `;
    visitedCount++;
    let head = g.getAdjNodes(ver);
    while(head){
      indegree[head.val]--;
      if(indegree[head.val] === 0){
        queue.push(head.val);
      }
      head = head.next;
    }
  }
  if(visitedCount !== g.vertCount){
    console.log("topology sort not possible");
    return;
  }
  console.log(`khanToplogyorder:: ${order}`);
};

var g = new Graph(6);
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);

kahnTopologicalSort(g);