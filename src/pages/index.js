import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Home() {
  const generalSettingsUrl = useBaseUrl("/general-settings");
  return <Redirect to={generalSettingsUrl} />;
}
