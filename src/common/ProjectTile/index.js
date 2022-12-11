import React from "react";
import { ProjectDesctiption, ProjectLink, ProjectLinkAnnotation, ProjectTitle, ProjectTileWrapper, ProjectWrapper } from "./styled"

const ProjectTile = () => {

    return (
        <ProjectTileWrapper>
            <ProjectTitle>
                Movies Browser
            </ProjectTitle>
            <ProjectDesctiption>
                Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.
            </ProjectDesctiption>
            <ProjectWrapper>
                <ProjectLinkAnnotation>Demo</ProjectLinkAnnotation>
                <ProjectLink href="https://example.com">https://example.com/demo</ProjectLink>
                <ProjectLinkAnnotation>Demo</ProjectLinkAnnotation>
                <ProjectLink href="https://example.com">https://example.com/code</ProjectLink>
            </ProjectWrapper>
        </ProjectTileWrapper>
    )
};

export default ProjectTile;