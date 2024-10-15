import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

interface PortfolioItemProps {
    icon: JSX.Element;
    title: string;
    description: string;
    id: number
}

export default function PortfolioItem({ icon, title, description, id }: PortfolioItemProps) {

    return (
        <Link to={`/project/${id}`}>
            <motion.div
                className="bg-gray-800 p-6 rounded-lg cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center justify-center mb-4 text-purple-400">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </motion.div>
        </Link>

    )
}
