import type { CollectionEntry } from "astro:content";

export const getSortedPosts = (postagens: CollectionEntry<"blog">[]) => {
  return postagens
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

// Pegar projetos sorteados por título
//
// Retorna um array de projetos que não estão marcados
// como RASCUNHO e ordenados alfabeticamente por título
export const getSortedProjects = (projetos: CollectionEntry<"project">[]) => {
  return projetos
    .filter(({ data }) => !data.draft)
    .sort((a, b) => {
      return a.data.title.localeCompare(b.data.title);
    });
};

export default getSortedPosts;
