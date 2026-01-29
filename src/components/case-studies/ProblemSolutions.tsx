import type { CaseStudy } from '@/types/case-study';
import { motion } from 'framer-motion';

interface ProblemSolutionsProps {
	caseStudy: CaseStudy;
}

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ProblemSolutions: React.FC<ProblemSolutionsProps> = ({ caseStudy }) => {
	return (
		<motion.div
			initial="hidden"
			animate="show"
			variants={container}
			className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
		>
			<div className="mx-auto max-w-5xl">
				{caseStudy.businessOutcomes && caseStudy.businessOutcomes.length > 0 ? (
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						{caseStudy.businessOutcomes.map((outcome, index) => (
							<motion.div
								key={outcome.title}
								variants={item}
								className="glass-card rounded-lg p-5 transition-colors hover:bg-primary/10 sm:p-6"
							>
								<div className="mb-3 flex flex-col items-center gap-3 text-primary">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-lg">
										{index + 1}
									</div>
									<h3 className="text-center font-semibold text-lg sm:text-xl">
										{outcome.title}
									</h3>
								</div>
								<p className="text-center text-base text-black text-card-foreground dark:text-card-foreground dark:text-white">
									{outcome.subtitle}
								</p>
							</motion.div>
						))}
					</div>
				) : (
					<motion.p variants={item} className="text-center text-base text-muted-foreground">
						No business outcomes available.
					</motion.p>
				)}

				<div className="mt-10 sm:mt-12"></div>
			</div>
		</motion.div>
	);
};
