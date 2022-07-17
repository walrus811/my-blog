import { MdxNode } from "./graphql/types";

interface PostPageItem
{
  mdx: MdxNode;
  fullPath: string;
}

export function toPostPageItemList(postPageList: string[], mdxList: MdxNode[], postString = "post")
{
  const result = [] as PostPageItem[];

  const postOnlyPageList = postPageList.filter(p => p.includes(postString));

  for (const p of postOnlyPageList)
  {
    const itemList = p.split("/");
    let currentPath = "";
    for (const item of itemList)
    {
      if (item.length <= 0) continue;
      currentPath += `/${item}`;
      const mdx = mdxList.find(mdx => mdx.fileAbsolutePath.includes(`${currentPath}/index.mdx`));
      if (mdx)
        result.push({
          mdx: mdx,
          fullPath: currentPath
        });
    }
  }
  return result;
}

export default PostPageItem;