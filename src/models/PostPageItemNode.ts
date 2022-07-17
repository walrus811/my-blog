import { MdxNode } from "./graphql/types";

export interface Node<T>
{
  value: T;
  parent: Node<T> | null;
  children: Node<T>[];
}

interface PostPageItemNode<T> extends Node<T>
{
  parent: PostPageItemNode<T> | null;
  children: PostPageItemNode<T>[];
  mdx: MdxNode | null;
  fullPath: string;
}

export function toPostPageItemNode(postPageList: string[], mdxList: MdxNode[], postString = "post")
{
  const rootNode: PostPageItemNode<string> = {
    value: "",
    parent: null,
    children: [],
    fullPath: "",
    mdx: null
  };

  const postOnlyPageList = postPageList.filter(p => p.includes(postString));

  for (const p of postOnlyPageList)
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

export default PostPageItemNode;