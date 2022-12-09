var recoverFromPreorder = function (S) {
    let stack = []
    let depth = 0
    let val = ''
    for (let i = 0, len = S.length; i < len; i++) {
      if (S[i] === '-') {
        depth++
      } else {
        val += S[i]
        if (S[i + 1] === undefined || S[i + 1] === '-') {
          stack[depth] = stack[depth] || []
          let node = new TreeNode(val)
          stack[depth].push(node)
  
          if (depth > 0) {
            let parent = stack[depth - 1]
            parent = parent[parent.length - 1]
            if (parent.left) {
              parent.right = node
            } else {
              parent.left = node
            }
          }
          depth = 0
          val = ''
        }
      }
    }
  
    return stack[0][0]
  };