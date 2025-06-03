import { LuCctv } from "react-icons/lu";
import { IoMdVideocam } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { GiSteelDoor } from "react-icons/gi";
import { LuBlinds } from "react-icons/lu";
import { SiLightning } from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
const services = [
    {
        id: 1,
        name: "CCTV - Video Surveillance",
        description:
            "Protect your property with high-quality CCTV systems, professionally installed and monitored.",
        image: "src/assets/cctv.jpg",
        icon: <LuCctv size={24} />,
    },
    {
        id: 2,
        name: "Video Intercom",
        description:
            "See and speak to visitors at your door with secure, easy-to-use video intercom systems.",
        image: "src/assets/video-intercom.jpg",
        icon: <IoMdVideocam size={24} />,
    },
    {
        id: 3,
        name: "Access Control",
        description:
            "Control who enters your home or business with smart access solutions tailored to your needs.",
        image: "src/assets/video-intercom.jpg",
        icon: <FaKey size={24} />,
    },
    {
        id: 4,
        name: "Roller Shutters",
        description:
            "Secure and insulate your premises with custom-fitted electric roller shutters.",
        image: "src/assets/roller-shutters.jpg",
        icon: <GiSteelDoor size={24} />,
    },
    {
        id: 5,
        name: "Outdoor Blinds",
        description:
            "Enhance comfort and privacy with stylish, motorized outdoor blinds for any weather.",
        image: "src/assets/outdoor-blinds.jpg",
        icon: <LuBlinds size={24} />,
    },
    {
        id: 6,
        name: "Inspect Electrical System & Equipment",
        description:
            "Comprehensive inspection of electrical systems to ensure safety, compliance, and performance.",
        image: "src/assets/electrical-inspection.jpg",
        icon: <SiLightning size={24} />,
    },
    {
        id: 7,
        name: "Office & Home Lights",
        description:
            "Upgrade your lighting with efficient, modern designs for homes and commercial spaces.",
        image: "src/assets/office-home-lights.jpg",
        icon: <FaLightbulb size={24} />,
    },
    {
        id: 8,
        name: "Domestic and Commercial",
        description:
            "Expert electrical services for both homes and businesses—no job too big or small.",
        image: "src/assets/domestic-commercial.jpg",
        icon: (
            <div className="flex items-center space-x-1">
                <MdHome size={18} />
                <FaBuilding size={18} />
            </div>
        ), // Combined icons for this one
    },
];

export default services;
