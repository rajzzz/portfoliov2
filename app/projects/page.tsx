import { config } from "@/portfolio.config";
import ProjectsClient from "@/components/ProjectsClient";

export default function ProjectsPage() {
  return <ProjectsClient projects={config.projects} />;
}
