import { MdxNode } from "./graphql/types";

export interface Node<T>
{
  value: T;
  parent: Node<T> | null;
  children: Node<T>[];
}

interface PostPageNode<T> extends Node<T>
{
  parent: PostPageNode<T> | null;
  children: PostPageNode<T>[];
  mdx: MdxNode | null;
  fullPath: string;
}

export function toPostPageNode(postPageList: string[], mdxList: MdxNode[])
{
  const rootNode: PostPageNode<string> = {
    value: "",
    parent: null,
    children: [],
    fullPath: "",
    mdx: null
  };

  for (const p of postPageList)
  {
    const itemList = p.split("/");
    let currentRootNode = rootNode;
    let currentPath = "";
    for (const item of itemList)
    {
      if (item.length <= 0) continue;
      currentPath += `/${item}`;
      let existItem = currentRootNode.children.find((n) => n.value === item);
      if (!existItem)
      {
        const mdx = mdxList.find(mdx => mdx.fileAbsolutePath.includes(`${currentPath}/index.mdx`));
        existItem = {
          value: item,
          parent: currentRootNode,
          children: [],
          fullPath: currentPath,
          mdx: mdx ?? null
        };
        currentRootNode.children.push(existItem);
      }
      currentRootNode = existItem;
    }
  }
  return rootNode;
}

export default PostPageNode;