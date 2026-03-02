/**
 * app/admin/(protected)/blog/[id]/page.tsx
 * Blog post editor — handles both create (id="new") and edit (id=number).
 * Server component shell that fetches existing data, renders client BlogEditorForm.
 */

import { notFound } from "next/navigation";
import { adminGetPostById } from "@/lib/blog";
import BlogEditorForm from "./BlogEditorForm";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function BlogEditorPage({ params }: Props) {
  const { id } = await params;
  const isNew = id === "new";

  let initialData = null;
  if (!isNew) {
    initialData = await adminGetPostById(Number(id));
    if (!initialData) notFound();
  }

  return (
    <div>
      <h1 style={{ margin: "0 0 1.5rem", color: "var(--heading-color)", fontSize: "1.4rem" }}>
        {isNew ? "New Post" : `Edit: ${initialData?.title}`}
      </h1>
      <BlogEditorForm postId={isNew ? null : Number(id)} initialData={initialData} />
    </div>
  );
}
