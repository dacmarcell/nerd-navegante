import type { CollectionEntry } from "astro:content";

export const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export const getSortedProjects = (projects: CollectionEntry<"project">[]) => {
  return projects.filter(({ data }) => !data.draft).sort();
}

export default getSortedPosts;
