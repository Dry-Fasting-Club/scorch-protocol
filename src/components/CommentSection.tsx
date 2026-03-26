import sql from "@/lib/db";
import CommentThread from "./CommentThread";
import CommentForm from "./CommentForm";

interface RawComment {
  id: number;
  author_name: string;
  body: string;
  submitted_at: Date;
  parent_id: number | null;
  is_admin_reply: boolean;
}

export interface ThreadedComment {
  id: number;
  author_name: string;
  body: string;
  submitted_at: Date;
  is_admin_reply: boolean;
  replies: ThreadedComment[];
}

interface Props {
  sectionSlug: string;
}

async function getApprovedComments(sectionSlug: string): Promise<ThreadedComment[]> {
  try {
    const rows = await sql`
      SELECT id, author_name, body, submitted_at, parent_id, is_admin_reply
      FROM comments
      WHERE section_slug = ${sectionSlug}
        AND status = 'approved'
      ORDER BY submitted_at ASC
      LIMIT 200
    `;

    const comments = rows as unknown as RawComment[];

    // Group replies under their parent
    const byId = new Map<number, ThreadedComment>();
    const topLevel: ThreadedComment[] = [];

    for (const c of comments) {
      byId.set(c.id, {
        id: c.id,
        author_name: c.author_name,
        body: c.body,
        submitted_at: c.submitted_at,
        is_admin_reply: c.is_admin_reply,
        replies: [],
      });
    }

    for (const c of comments) {
      if (c.parent_id === null) {
        topLevel.push(byId.get(c.id)!);
      } else {
        byId.get(c.parent_id)?.replies.push(byId.get(c.id)!);
      }
    }

    return topLevel;
  } catch {
    return [];
  }
}

export default async function CommentSection({ sectionSlug: _sectionSlug }: Props) {
  // Comments hidden until sufficient volume — re-enable by restoring the original return value
  return null;
}
