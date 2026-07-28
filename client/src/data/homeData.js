import {
    QrCode,
    Search,
    Image,
    FileText,
    CircleDot,
    Factory,
    Warehouse,
    Package,
} from "lucide-react";

export const processSteps = [
    {
        id: 1,
        title: "Raw Material",
        description:
            "Iron ore, bentonite and additives are received and prepared.",
        icon: CircleDot,
    },
    {
        id: 2,
        title: "Grinding",
        description:
            "Ball mills grind the ore into fine particles.",
        icon: Factory,
    },
    {
        id: 3,
        title: "Balling",
        description:
            "Pellets are formed inside pelletizing discs.",
        icon: CircleDot,
    },
    {
        id: 4,
        title: "Indurating",
        description:
            "Green pellets are hardened in the furnace.",
        icon: Warehouse,
    },
    {
        id: 5,
        title: "Storage",
        description:
            "Finished pellets are stored before dispatch.",
        icon: Package,
    },
];

export const features = [
    {
        title: "QR Code Access",
        description:
            "Instantly open machine information by scanning the QR code installed on equipment.",
        icon: QrCode,
    },
    {
        title: "Machine Search",
        description:
            "Quickly search equipment by name, code, area or plant.",
        icon: Search,
    },
    {
        title: "Machine Gallery",
        description:
            "View multiple high-quality images for every machine.",
        icon: Image,
    },
    {
        title: "Digital Documents",
        description:
            "Access manuals, specifications and technical documents.",
        icon: FileText,
    },
];