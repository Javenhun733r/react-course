import CabinView from '@/components/CabinView';
import { getCabin } from '@/lib/data-service';
import Head from 'next/head';
export async function getServerSideProps({ params }) {
	const cabin = await getCabin(params.cabinId);
	return { props: { cabin } };
}
function Cabin({ cabin }) {
	return (
		<>
			<Head>
				{/* <title>Cabin {router.query.cabinId} / The Wild Oasis</title> */}
				<title>Cabin {cabin.cabinId} / The Wild Oasis</title>
			</Head>
			<div className='max-w-6xl mx-auto mt-8'>
				<CabinView cabin={cabin} />
			</div>
		</>
	);
}

export default Cabin;
