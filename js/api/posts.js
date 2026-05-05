export async function getPosts() {
    console.log("Fetching posts...");
  const res = await fetch("./js/data/posts.json");
  console.log("Response received:", res);
  const data = await res.json();

  // simulate backend logic
  return data.map(post => ({
    ...post,
    status: post.portions > 0 ? "available" : "sold-out"
  }));
}