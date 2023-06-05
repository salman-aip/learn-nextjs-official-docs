const session = null;

export default function BlogPage() {
  if (!session) {
    throw new Error("Session is required");
  }

  return <div className="bg-orange-600 text-center h-screen">Blog Page</div>;
}
