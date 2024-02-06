import DesktopBackground from "../assets/mainBackgorundDesktop.jpg"

const Home = () => {
	return (
		<div className='flex justify-center '>
			<img
				className='w-screen h-screen object-cover'
				src={DesktopBackground}
				alt='background'
			/>
		</div>
	)
}
export default Home
