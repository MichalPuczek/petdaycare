import { checkAuth } from "@/lib/server-utils";
import ContentBlock from "@/components/content-block";
import H1 from "@/components/h1";
import SignOutBtn from "@/components/sign-out-btn";

export default async function Account() {
  const session = await checkAuth();

  return (
    <main>
      <H1 className="my-8 text-white">Your account</H1>

      <ContentBlock className="h-[500px] flex justify-center items-center">
        <p>Logged in as {session.user.email}</p>
        <SignOutBtn />
      </ContentBlock>
    </main>
  );
}
