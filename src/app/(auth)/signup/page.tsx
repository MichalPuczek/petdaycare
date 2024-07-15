import Link from "next/link";
import H1 from "@/components/h1";
import AuthForm from "@/components/auth-form";

export default function SignUpPage() {
  return (
    <main>
      <H1 className="mb-5 text-center">Sign Up</H1>

      <AuthForm type="signUp" />

      <p className="mt-6 text-sm text-zinc-500">
        Already have an account?{" "}
        <Link href="/login" className="font-medium">
          Log In
        </Link>
      </p>
    </main>
  );
}
