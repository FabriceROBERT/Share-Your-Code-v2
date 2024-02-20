import Container from "@/ui/components/container/container";
import { Seo } from "@/ui/components/seo/seo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Buttons } from "@/ui/design-system/buttons/buttons";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import Typography from "@/ui/design-system/typographie/typography";
import Layout from "@/ui/layout/layout";
import { RiUser6Line } from "react-icons/ri";

export default function DesignSystem() {
  return (
    <div>
      <Seo title="Design System" description="description" />
      <Layout>
        <Container className="space-y-5">
          <Logo size="medium" />
          <Avatar
            alt="Avatar d'utilisateur"
            src="/assets/images/avatar.png"
            size="medium"
          />
          <Avatar
            alt="Avatar d'utilisateur"
            src="/assets/images/avatar.png"
            size="small"
          />
          <Avatar
            alt="Avatar d'utilisateur"
            src="/assets/images/avatar.png"
            size="large"
          />
          <div className="flex items-center gap-4 p-10">
            <Spinner size="small" />
            <Spinner size="medium" />
            <Spinner size="large" />
          </div>

          <div className="flex items-center gap-4 py-10">
            <Buttons
              isLoading
              size="small"
              variant="ico"
              icon={{ icon: RiUser6Line }}
            />

            <Buttons
              size="medium"
              iconTheme="gray"
              icon={{ icon: RiUser6Line }}
              variant="ico"
            />
            <Buttons
              size="medium"
              iconTheme="gray"
              icon={{ icon: RiUser6Line }}
              // variant="ico"
              iconPosition="left"
            >
              Accent
            </Buttons>

            <Buttons isLoading variant="accent">
              Chargement...
            </Buttons>
            <Buttons variant="disabled">Appuie pas</Buttons>
            <Typography variant="display" weight="regular" component="div">
              hello world
            </Typography>
          </div>
        </Container>
        Hello World
      </Layout>
    </div>
  );
}
