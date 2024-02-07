import { CiSearch } from "react-icons/ci"
const SearchChampion = ({ changeHandler, inputRef }) => {
	return (
		<div className='flex px-10 gap-2 mt-40 mb-10 justify-center  items-center md:gap-4 md:px-20'>
			<label
				className='text-xl font-bold md:text-4xl text-orange-300'
				htmlFor='search'>
				Search Champion
			</label>
			<div className='relative flex items-center z-0'>
				<input
					type='text'
					className='border  py-1 px-4 rounded-md border-black md:py-2 md:px-4'
					onChange={changeHandler}
					ref={inputRef}
				/>
				<button className='absolute right-1 text-xl'>
					<CiSearch className='' />
				</button>
			</div>
		</div>
	)
}
export default SearchChampion
