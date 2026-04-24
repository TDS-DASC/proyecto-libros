import { getCollection } from "astro:content";

export async function getBookStaticPaths(lang: 'es' | 'en') {
  const allBooks = await getCollection("books", (book) => book.data.lang === lang);
  const allExercises = await getCollection("exercises", (ex) => ex.data.lang === lang);

  return allBooks.map((book) => {
    // Extract slug: "es/book-01/index.md" -> "book-01"
    const cleanBookSlug = book.id.split('/')[1]; 
    const filteredExercises = allExercises.filter(
      (exercise) => exercise.data.bookSlug === cleanBookSlug
    ).sort((a, b) => {
      const numA = parseInt(a.id.match(/\\d+/g)?.pop() || "0");
      const numB = parseInt(b.id.match(/\\d+/g)?.pop() || "0");
      return numA - numB;
    });

    return {
      params: {
        lang: lang === 'es' ? undefined : lang,
        slug: cleanBookSlug,
      },
      props: {
        book,
        exercises: filteredExercises,
      },
    };
  });
}

export async function getExerciseStaticPaths(lang: 'es' | 'en') {
  const allExercises = await getCollection("exercises", (ex) => ex.data.lang === lang);

  return allExercises.map((exercise) => {
    const exerciseSlug = exercise.id.split("/").pop()?.replace('.mdx', '').replace('.md', '');
    return {
      params: {
        lang: lang === 'es' ? undefined : lang,
        slug: exercise.data.bookSlug,
        exercise: exerciseSlug,
      },
      props: {
        exercise,
      },
    };
  });
}
