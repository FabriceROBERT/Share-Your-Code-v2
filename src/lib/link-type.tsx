export type LinkType = "internal" | "external"
// LinkTyper contient soit internal ou external
export const LinkTypes: Record<string, LinkType> = {
    // LinkTypes contien 2 valeurs, Record va pemettre à LinkTypes d'obtenir 2 valeurs string en fonction de LinkType.
    
    INTERNAL: "internal",
    EXTERNAL: "external"
}