import { AnimatePresence, motion } from 'framer-motion';
import { actionButtonWonModal } from '../../utils/constants';
import { goToNextLevel, resetCurrentLevel } from '../../utils/helper';
import Actions from './Actions';
import CompleteBoard from './CompleteBoard'
import LambStars from './LambStars'
import Tries from './Tries'
import { popupVariant } from '../../utils/variants'
import { NavButtonProps } from '../../utils/interfaces'

interface ModalWinProps {
	isVisible: boolean
}

const ModalWin = ({ isVisible }: ModalWinProps) => {

	const actions: NavButtonProps[] = [
		{
			image: 'button-board home.png',
			onClick: () => resetCurrentLevel(),
			moreClasses: {
				width: `${actionButtonWonModal}vw`,
				height: `${actionButtonWonModal}vw`
			}
		},
		{
			image: 'button-board replay.png',
			onClick: () => resetCurrentLevel(),
			moreClasses: {
				width: `${actionButtonWonModal}vw`,
				height: `${actionButtonWonModal}vw`
			}
		},
		{
			image: 'button-board next.svg',
			onClick: () => goToNextLevel(),
			moreClasses: {
				width: `${actionButtonWonModal}vw`,
				height: `${actionButtonWonModal}vw`
			}
		},
	]

	const stars = 3;

	return (
		<AnimatePresence>
			{isVisible &&
				<motion.div
					className='absolute w-full h-full top-0 left-0 z-50'
					{...popupVariant}
				>
					<div
						className='relative flex justify-evenly items-center w-full h-full'
						style={{
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundImage: "url('images/background-dark.png')"
						}}
					>
						<img src='images/rays of light.png' className='absolute w-full max-h-full opacity-30' />
						<LambStars stars={stars} />
						<div className='flex flex-col justify-center h-full w-[50vw]'>
							<CompleteBoard score={430} name='Thomas' />
							<Actions actions={actions} />
						</div>
						<Tries />
					</div>
				</motion.div>}
		</AnimatePresence>
	)
}

export default ModalWin
