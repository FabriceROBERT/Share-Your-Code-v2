import Container from "@/ui/components/container/container";
import Navigation from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Buttons } from "@/ui/design-system/buttons/buttons";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import Typography from "@/ui/design-system/typographie/typography";
import { RiAncientGateFill, RiUser6Line } from "react-icons/ri";

import Layout from "@/ui/layout/layout";
import LandingPageContainer from "@/ui/modules/landig-page/landing-page.container";

export default function Home() {
  return (
    <div>
      <Seo title="Share Your Codes" description="description" />
      <Layout>
        <LandingPageContainer />
      </Layout>
      {/* <Navigation />
      <Footer /> */}
    </div>
  );
}
