/**
 * JsonLd — renders a JSON-LD <script> for structured data. Works in server
 * components. Pass a schema.org object (or array) and it serializes safely.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
